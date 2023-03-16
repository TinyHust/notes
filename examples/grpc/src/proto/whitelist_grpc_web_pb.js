/**
 * @fileoverview gRPC-Web generated client stub for whitelist
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!

/* eslint-disable */
// @ts-nocheck

const grpc = {};
grpc.web = require('grpc-web');

var src_proto_common_message_pb = require('../../src/proto/common_message_pb.js');
const proto = {};
proto.whitelist = require('./whitelist_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.whitelist.WhitelistServiceClient = function (
    hostname,
    credentials,
    options,
) {
    if (!options) options = {};
    options.format = 'binary';

    /**
     * @private @const {!grpc.web.GrpcWebClientBase} The client
     */
    this.client_ = new grpc.web.GrpcWebClientBase(options);

    /**
     * @private @const {string} The hostname
     */
    this.hostname_ = hostname;
};

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.whitelist.WhitelistServicePromiseClient = function (
    hostname,
    credentials,
    options,
) {
    if (!options) options = {};
    options.format = 'binary';

    /**
     * @private @const {!grpc.web.GrpcWebClientBase} The client
     */
    this.client_ = new grpc.web.GrpcWebClientBase(options);

    /**
     * @private @const {string} The hostname
     */
    this.hostname_ = hostname;
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.whitelist.GetListWhitelistRequest,
 *   !proto.whitelist.GetListWhitelistResponse>}
 */
const methodDescriptor_WhitelistService_GetListWhitelist =
    new grpc.web.MethodDescriptor(
        '/whitelist.WhitelistService/GetListWhitelist',
        grpc.web.MethodType.UNARY,
        proto.whitelist.GetListWhitelistRequest,
        proto.whitelist.GetListWhitelistResponse,
        /**
         * @param {!proto.whitelist.GetListWhitelistRequest} request
         * @return {!Uint8Array}
         */
        function (request) {
            return request.serializeBinary();
        },
        proto.whitelist.GetListWhitelistResponse.deserializeBinary,
    );

/**
 * @param {!proto.whitelist.GetListWhitelistRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.whitelist.GetListWhitelistResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.whitelist.GetListWhitelistResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.whitelist.WhitelistServiceClient.prototype.getListWhitelist = function (
    request,
    metadata,
    callback,
) {
    return this.client_.rpcCall(
        this.hostname_ + '/whitelist.WhitelistService/GetListWhitelist',
        request,
        metadata || {},
        methodDescriptor_WhitelistService_GetListWhitelist,
        callback,
    );
};

/**
 * @param {!proto.whitelist.GetListWhitelistRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.whitelist.GetListWhitelistResponse>}
 *     Promise that resolves to the response
 */
proto.whitelist.WhitelistServicePromiseClient.prototype.getListWhitelist =
    function (request, metadata) {
        return this.client_.unaryCall(
            this.hostname_ + '/whitelist.WhitelistService/GetListWhitelist',
            request,
            metadata || {},
            methodDescriptor_WhitelistService_GetListWhitelist,
        );
    };

module.exports = proto.whitelist;
