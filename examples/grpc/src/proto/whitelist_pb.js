/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var src_proto_common_message_pb = require('../../src/proto/common_message_pb.js');
goog.exportSymbol('proto.whitelist.GetListWhitelistRequest', null, global);
goog.exportSymbol('proto.whitelist.GetListWhitelistResponse', null, global);
goog.exportSymbol('proto.whitelist.WhitelistInfo', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.whitelist.WhitelistInfo = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.whitelist.WhitelistInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.whitelist.WhitelistInfo.displayName = 'proto.whitelist.WhitelistInfo';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
    /**
     * Creates an object representation of this proto suitable for use in Soy templates.
     * Field names that are reserved in JavaScript and will be renamed to pb_name.
     * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
     * For the list of reserved names please see:
     *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
     * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
     *     for transitional soy proto support: http://goto/soy-param-migration
     * @return {!Object}
     */
    proto.whitelist.WhitelistInfo.prototype.toObject = function (
        opt_includeInstance,
    ) {
        return proto.whitelist.WhitelistInfo.toObject(
            opt_includeInstance,
            this,
        );
    };

    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Whether to include the JSPB
     *     instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.whitelist.WhitelistInfo} msg The msg instance to transform.
     * @return {!Object}
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */
    proto.whitelist.WhitelistInfo.toObject = function (includeInstance, msg) {
        var f,
            obj = {
                address: jspb.Message.getFieldWithDefault(msg, 2, ''),
                username: jspb.Message.getFieldWithDefault(msg, 3, ''),
                email: jspb.Message.getFieldWithDefault(msg, 4, ''),
                phoneNumber: jspb.Message.getFieldWithDefault(msg, 5, ''),
            };

        if (includeInstance) {
            obj.$jspbMessageInstance = msg;
        }
        return obj;
    };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.whitelist.WhitelistInfo}
 */
proto.whitelist.WhitelistInfo.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.whitelist.WhitelistInfo();
    return proto.whitelist.WhitelistInfo.deserializeBinaryFromReader(
        msg,
        reader,
    );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.whitelist.WhitelistInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.whitelist.WhitelistInfo}
 */
proto.whitelist.WhitelistInfo.deserializeBinaryFromReader = function (
    msg,
    reader,
) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 2:
                var value = /** @type {string} */ (reader.readString());
                msg.setAddress(value);
                break;
            case 3:
                var value = /** @type {string} */ (reader.readString());
                msg.setUsername(value);
                break;
            case 4:
                var value = /** @type {string} */ (reader.readString());
                msg.setEmail(value);
                break;
            case 5:
                var value = /** @type {string} */ (reader.readString());
                msg.setPhoneNumber(value);
                break;
            default:
                reader.skipField();
                break;
        }
    }
    return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.whitelist.WhitelistInfo.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.whitelist.WhitelistInfo.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.whitelist.WhitelistInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.whitelist.WhitelistInfo.serializeBinaryToWriter = function (
    message,
    writer,
) {
    var f = undefined;
    f = message.getAddress();
    if (f.length > 0) {
        writer.writeString(2, f);
    }
    f = message.getUsername();
    if (f.length > 0) {
        writer.writeString(3, f);
    }
    f = message.getEmail();
    if (f.length > 0) {
        writer.writeString(4, f);
    }
    f = message.getPhoneNumber();
    if (f.length > 0) {
        writer.writeString(5, f);
    }
};

/**
 * optional string address = 2;
 * @return {string}
 */
proto.whitelist.WhitelistInfo.prototype.getAddress = function () {
    return /** @type {string} */ (
        jspb.Message.getFieldWithDefault(this, 2, '')
    );
};

/** @param {string} value */
proto.whitelist.WhitelistInfo.prototype.setAddress = function (value) {
    jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional string username = 3;
 * @return {string}
 */
proto.whitelist.WhitelistInfo.prototype.getUsername = function () {
    return /** @type {string} */ (
        jspb.Message.getFieldWithDefault(this, 3, '')
    );
};

/** @param {string} value */
proto.whitelist.WhitelistInfo.prototype.setUsername = function (value) {
    jspb.Message.setProto3StringField(this, 3, value);
};

/**
 * optional string email = 4;
 * @return {string}
 */
proto.whitelist.WhitelistInfo.prototype.getEmail = function () {
    return /** @type {string} */ (
        jspb.Message.getFieldWithDefault(this, 4, '')
    );
};

/** @param {string} value */
proto.whitelist.WhitelistInfo.prototype.setEmail = function (value) {
    jspb.Message.setProto3StringField(this, 4, value);
};

/**
 * optional string phone_number = 5;
 * @return {string}
 */
proto.whitelist.WhitelistInfo.prototype.getPhoneNumber = function () {
    return /** @type {string} */ (
        jspb.Message.getFieldWithDefault(this, 5, '')
    );
};

/** @param {string} value */
proto.whitelist.WhitelistInfo.prototype.setPhoneNumber = function (value) {
    jspb.Message.setProto3StringField(this, 5, value);
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.whitelist.GetListWhitelistResponse = function (opt_data) {
    jspb.Message.initialize(
        this,
        opt_data,
        0,
        -1,
        proto.whitelist.GetListWhitelistResponse.repeatedFields_,
        null,
    );
};
goog.inherits(proto.whitelist.GetListWhitelistResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.whitelist.GetListWhitelistResponse.displayName =
        'proto.whitelist.GetListWhitelistResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.whitelist.GetListWhitelistResponse.repeatedFields_ = [1];

if (jspb.Message.GENERATE_TO_OBJECT) {
    /**
     * Creates an object representation of this proto suitable for use in Soy templates.
     * Field names that are reserved in JavaScript and will be renamed to pb_name.
     * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
     * For the list of reserved names please see:
     *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
     * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
     *     for transitional soy proto support: http://goto/soy-param-migration
     * @return {!Object}
     */
    proto.whitelist.GetListWhitelistResponse.prototype.toObject = function (
        opt_includeInstance,
    ) {
        return proto.whitelist.GetListWhitelistResponse.toObject(
            opt_includeInstance,
            this,
        );
    };

    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Whether to include the JSPB
     *     instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.whitelist.GetListWhitelistResponse} msg The msg instance to transform.
     * @return {!Object}
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */
    proto.whitelist.GetListWhitelistResponse.toObject = function (
        includeInstance,
        msg,
    ) {
        var f,
            obj = {
                whitelistsinfoList: jspb.Message.toObjectList(
                    msg.getWhitelistsinfoList(),
                    proto.whitelist.WhitelistInfo.toObject,
                    includeInstance,
                ),
                pagination:
                    (f = msg.getPagination()) &&
                    src_proto_common_message_pb.PageResponse.toObject(
                        includeInstance,
                        f,
                    ),
            };

        if (includeInstance) {
            obj.$jspbMessageInstance = msg;
        }
        return obj;
    };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.whitelist.GetListWhitelistResponse}
 */
proto.whitelist.GetListWhitelistResponse.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.whitelist.GetListWhitelistResponse();
    return proto.whitelist.GetListWhitelistResponse.deserializeBinaryFromReader(
        msg,
        reader,
    );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.whitelist.GetListWhitelistResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.whitelist.GetListWhitelistResponse}
 */
proto.whitelist.GetListWhitelistResponse.deserializeBinaryFromReader =
    function (msg, reader) {
        while (reader.nextField()) {
            if (reader.isEndGroup()) {
                break;
            }
            var field = reader.getFieldNumber();
            switch (field) {
                case 1:
                    var value = new proto.whitelist.WhitelistInfo();
                    reader.readMessage(
                        value,
                        proto.whitelist.WhitelistInfo
                            .deserializeBinaryFromReader,
                    );
                    msg.addWhitelistsinfo(value);
                    break;
                case 2:
                    var value = new src_proto_common_message_pb.PageResponse();
                    reader.readMessage(
                        value,
                        src_proto_common_message_pb.PageResponse
                            .deserializeBinaryFromReader,
                    );
                    msg.setPagination(value);
                    break;
                default:
                    reader.skipField();
                    break;
            }
        }
        return msg;
    };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.whitelist.GetListWhitelistResponse.prototype.serializeBinary =
    function () {
        var writer = new jspb.BinaryWriter();
        proto.whitelist.GetListWhitelistResponse.serializeBinaryToWriter(
            this,
            writer,
        );
        return writer.getResultBuffer();
    };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.whitelist.GetListWhitelistResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.whitelist.GetListWhitelistResponse.serializeBinaryToWriter = function (
    message,
    writer,
) {
    var f = undefined;
    f = message.getWhitelistsinfoList();
    if (f.length > 0) {
        writer.writeRepeatedMessage(
            1,
            f,
            proto.whitelist.WhitelistInfo.serializeBinaryToWriter,
        );
    }
    f = message.getPagination();
    if (f != null) {
        writer.writeMessage(
            2,
            f,
            src_proto_common_message_pb.PageResponse.serializeBinaryToWriter,
        );
    }
};

/**
 * repeated WhitelistInfo whitelistsInfo = 1;
 * @return {!Array<!proto.whitelist.WhitelistInfo>}
 */
proto.whitelist.GetListWhitelistResponse.prototype.getWhitelistsinfoList =
    function () {
        return /** @type{!Array<!proto.whitelist.WhitelistInfo>} */ (
            jspb.Message.getRepeatedWrapperField(
                this,
                proto.whitelist.WhitelistInfo,
                1,
            )
        );
    };

/** @param {!Array<!proto.whitelist.WhitelistInfo>} value */
proto.whitelist.GetListWhitelistResponse.prototype.setWhitelistsinfoList =
    function (value) {
        jspb.Message.setRepeatedWrapperField(this, 1, value);
    };

/**
 * @param {!proto.whitelist.WhitelistInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.whitelist.WhitelistInfo}
 */
proto.whitelist.GetListWhitelistResponse.prototype.addWhitelistsinfo =
    function (opt_value, opt_index) {
        return jspb.Message.addToRepeatedWrapperField(
            this,
            1,
            opt_value,
            proto.whitelist.WhitelistInfo,
            opt_index,
        );
    };

proto.whitelist.GetListWhitelistResponse.prototype.clearWhitelistsinfoList =
    function () {
        this.setWhitelistsinfoList([]);
    };

/**
 * optional common.PageResponse pagination = 2;
 * @return {?proto.common.PageResponse}
 */
proto.whitelist.GetListWhitelistResponse.prototype.getPagination = function () {
    return /** @type{?proto.common.PageResponse} */ (
        jspb.Message.getWrapperField(
            this,
            src_proto_common_message_pb.PageResponse,
            2,
        )
    );
};

/** @param {?proto.common.PageResponse|undefined} value */
proto.whitelist.GetListWhitelistResponse.prototype.setPagination = function (
    value,
) {
    jspb.Message.setWrapperField(this, 2, value);
};

proto.whitelist.GetListWhitelistResponse.prototype.clearPagination =
    function () {
        this.setPagination(undefined);
    };

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.whitelist.GetListWhitelistResponse.prototype.hasPagination = function () {
    return jspb.Message.getField(this, 2) != null;
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.whitelist.GetListWhitelistRequest = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.whitelist.GetListWhitelistRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.whitelist.GetListWhitelistRequest.displayName =
        'proto.whitelist.GetListWhitelistRequest';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
    /**
     * Creates an object representation of this proto suitable for use in Soy templates.
     * Field names that are reserved in JavaScript and will be renamed to pb_name.
     * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
     * For the list of reserved names please see:
     *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
     * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
     *     for transitional soy proto support: http://goto/soy-param-migration
     * @return {!Object}
     */
    proto.whitelist.GetListWhitelistRequest.prototype.toObject = function (
        opt_includeInstance,
    ) {
        return proto.whitelist.GetListWhitelistRequest.toObject(
            opt_includeInstance,
            this,
        );
    };

    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Whether to include the JSPB
     *     instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.whitelist.GetListWhitelistRequest} msg The msg instance to transform.
     * @return {!Object}
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */
    proto.whitelist.GetListWhitelistRequest.toObject = function (
        includeInstance,
        msg,
    ) {
        var f,
            obj = {
                networkId: jspb.Message.getFieldWithDefault(msg, 1, 0),
                pagination:
                    (f = msg.getPagination()) &&
                    src_proto_common_message_pb.PageRequest.toObject(
                        includeInstance,
                        f,
                    ),
            };

        if (includeInstance) {
            obj.$jspbMessageInstance = msg;
        }
        return obj;
    };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.whitelist.GetListWhitelistRequest}
 */
proto.whitelist.GetListWhitelistRequest.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.whitelist.GetListWhitelistRequest();
    return proto.whitelist.GetListWhitelistRequest.deserializeBinaryFromReader(
        msg,
        reader,
    );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.whitelist.GetListWhitelistRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.whitelist.GetListWhitelistRequest}
 */
proto.whitelist.GetListWhitelistRequest.deserializeBinaryFromReader = function (
    msg,
    reader,
) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = /** @type {number} */ (reader.readUint64());
                msg.setNetworkId(value);
                break;
            case 2:
                var value = new src_proto_common_message_pb.PageRequest();
                reader.readMessage(
                    value,
                    src_proto_common_message_pb.PageRequest
                        .deserializeBinaryFromReader,
                );
                msg.setPagination(value);
                break;
            default:
                reader.skipField();
                break;
        }
    }
    return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.whitelist.GetListWhitelistRequest.prototype.serializeBinary =
    function () {
        var writer = new jspb.BinaryWriter();
        proto.whitelist.GetListWhitelistRequest.serializeBinaryToWriter(
            this,
            writer,
        );
        return writer.getResultBuffer();
    };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.whitelist.GetListWhitelistRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.whitelist.GetListWhitelistRequest.serializeBinaryToWriter = function (
    message,
    writer,
) {
    var f = undefined;
    f = message.getNetworkId();
    if (f !== 0) {
        writer.writeUint64(1, f);
    }
    f = message.getPagination();
    if (f != null) {
        writer.writeMessage(
            2,
            f,
            src_proto_common_message_pb.PageRequest.serializeBinaryToWriter,
        );
    }
};

/**
 * optional uint64 network_id = 1;
 * @return {number}
 */
proto.whitelist.GetListWhitelistRequest.prototype.getNetworkId = function () {
    return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/** @param {number} value */
proto.whitelist.GetListWhitelistRequest.prototype.setNetworkId = function (
    value,
) {
    jspb.Message.setProto3IntField(this, 1, value);
};

/**
 * optional common.PageRequest pagination = 2;
 * @return {?proto.common.PageRequest}
 */
proto.whitelist.GetListWhitelistRequest.prototype.getPagination = function () {
    return /** @type{?proto.common.PageRequest} */ (
        jspb.Message.getWrapperField(
            this,
            src_proto_common_message_pb.PageRequest,
            2,
        )
    );
};

/** @param {?proto.common.PageRequest|undefined} value */
proto.whitelist.GetListWhitelistRequest.prototype.setPagination = function (
    value,
) {
    jspb.Message.setWrapperField(this, 2, value);
};

proto.whitelist.GetListWhitelistRequest.prototype.clearPagination =
    function () {
        this.setPagination(undefined);
    };

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.whitelist.GetListWhitelistRequest.prototype.hasPagination = function () {
    return jspb.Message.getField(this, 2) != null;
};

goog.object.extend(exports, proto.whitelist);
