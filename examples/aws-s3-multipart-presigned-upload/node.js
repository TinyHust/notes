import AWS from 'aws-sdk'
import cuid from 'cuid'
import Axios from 'axios'

async function initiateMultipartUpload() {
  const s3 = new AWS.S3({
  accessKeyId: /* Bucket owner access key id */,
  secretAccessKey: /* Bucket owner secret */,
  sessionToken: `session-${cuid()}`
  })

  const params = {
    Bucket: BUCKET_NAME,
    Key: OBJECT_NAME
  }

  const res = await s3.createMultipartUpload(params).promise()

  return res.UploadId
}

async function generatePresignedUrlsParts(s3: AWS.S3, uploadId: string, parts: number) {
  const baseParams = {
    Bucket: BUCKET_NAME,
    Key: OBJECT_NAME,
    UploadId: uploadId
  }

  const promises = []

  for (let index = 0; index < parts; index++) {
    promises.push(
      s3.getSignedUrlPromise('uploadPart', {
      ...baseParams,
      PartNumber: index + 1
    }))
  }

  const res = await Promise.all(promises)

  return res.reduce((map, part, index) => {
    map[index] = part
    return map
  }, {} as Record<number, string>)
}

interface Part {
  ETag: string
  PartNumber: number
}

const FILE_CHUNK_SIZE = 10_000_000

async function uploadParts(file: Buffer, urls: Record<number, string>) {
  const axios = Axios.create()
  delete axios.defaults.headers.put['Content-Type']

  const keys = Object.keys(urls)
  const promises = []

  for (const indexStr of keys) {
    const index = parseInt(indexStr)
    const start = index * FILE_CHUNK_SIZE
    const end = (index + 1) * FILE_CHUNK_SIZE
    const blob = index < keys.length
      ? file.slice(start, end)
      : file.slice(start)

    promises.push(axios.put(urls[index], blob))
  }

  const resParts = await Promise.all(promises)

  return resParts.map((part, index) => ({
    ETag: (part as any).headers.etag,
    PartNumber: index + 1
  }))
}

interface Part {
  ETag: string
  PartNumber: number
}

async function completeMultiUpload(uploadId: string, parts: Part[]) {
  const s3 = new AWS.S3({
    accessKeyId: /* Bucket owner access key id */,
    secretAccessKey: /* Bucket owner secret */,
    sessionToken: `session-${cuid()}`
  })

  const params = {
    Bucket: BUCKET_NAME,
    Key: OBJECT_NAME,
    UploadId: uploadId,
    MultipartUpload: { Parts: parts }
  }

  await s3.completeMultipartUpload(params).promise()
}
