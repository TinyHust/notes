# install jenkins docker and connect docker host inside container
REF: [https://www.jenkins.io/doc/book/installing/docker/](https://www.jenkins.io/doc/book/installing/docker/)

## 1. create a bridge network in Docker
```
docker network create jenkins
```

## 2. run the docker:dind
```
docker run \
  --name jenkins-docker \
  --rm \
  --detach \
  --privileged \
  --network jenkins \
  --network-alias docker \
  --env DOCKER_TLS_CERTDIR=/certs \
  --volume jenkins-docker-certs:/certs/client \
  --volume jenkins-data:/var/jenkins_home \
  --publish 2376:2376 \
  docker:dind \
  --storage-driver overlay2
```

## 3. customise official Jenkins Docker image
###   a. Create Dockerfile with the following content:

```
FROM jenkins/jenkins:lts-jdk11
USER root
RUN apt-get update && apt-get install -y apt-transport-https \
       ca-certificates curl gnupg2 \
       software-properties-common
RUN curl -fsSL https://download.docker.com/linux/debian/gpg | apt-key add -
RUN apt-key fingerprint 0EBFCD88
RUN add-apt-repository \
       "deb [arch=amd64] https://download.docker.com/linux/debian \
       $(lsb_release -cs) stable"
RUN apt-get update && apt-get install -y docker-ce-cli
USER jenkins
RUN jenkins-plugin-cli --plugins "blueocean:1.24.6 docker-workflow:1.26"
```

###   b. Build a new docker image from this Dockerfile
```
docker build -t myjenkins:1.1 .
```

## 4. run jenkins server
```
docker run \
  --name jenkins-blueocean \
  --rm \
  --detach \
  --network jenkins \
  --env DOCKER_HOST=tcp://docker:2376 \
  --env DOCKER_CERT_PATH=/certs/client \
  --env DOCKER_TLS_VERIFY=1 \
  --publish 8080:8080 \
  --publish 50000:50000 \
  --volume jenkins-data:/var/jenkins_home \
  --volume jenkins-docker-certs:/certs/client:ro \
  myjenkins:1.1
```

## 5. get admin password
```
docker exec jenkins-server cat /var/jenkins_home/secrets/initialAdminPassword
```
### or:
```
docker exec -it jenkins-server /bin/bash -c "cat /var/jenkins_home/secrets/initialAdminPassword"
```

## 6. expose local jenkins via ngrok
```
ngrok http 8080
```
> result  
> http://7e6e7b0952f2.ngrok.io
## create github webhook:
```
http://7e6e7b0952f2.ngrok.io/github-webhook/
```