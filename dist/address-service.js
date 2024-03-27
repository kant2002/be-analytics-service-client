"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressServiceDefinition = exports.PublicServiceAddressItem = exports.GetPublicServiceAddressResponseAddressEntry = exports.GetPublicServiceAddressResponse = exports.GetPublicServiceAddressRequest = exports.DrrpRequestOptions = exports.GetActualAtuIdResponse = exports.GetActualAtuIdRequest = exports.GetPostOfficeResponse = exports.GetPostOfficeRequest = void 0;
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseGetPostOfficeRequest() {
    return { addressId: "", postOfficeId: "", publicServiceCode: undefined };
}
exports.GetPostOfficeRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.addressId !== "") {
            writer.uint32(10).string(message.addressId);
        }
        if (message.postOfficeId !== "") {
            writer.uint32(18).string(message.postOfficeId);
        }
        if (message.publicServiceCode !== undefined) {
            writer.uint32(26).string(message.publicServiceCode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetPostOfficeRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.addressId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.postOfficeId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.publicServiceCode = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            addressId: isSet(object.addressId) ? globalThis.String(object.addressId) : "",
            postOfficeId: isSet(object.postOfficeId) ? globalThis.String(object.postOfficeId) : "",
            publicServiceCode: isSet(object.publicServiceCode) ? globalThis.String(object.publicServiceCode) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.addressId !== "") {
            obj.addressId = message.addressId;
        }
        if (message.postOfficeId !== "") {
            obj.postOfficeId = message.postOfficeId;
        }
        if (message.publicServiceCode !== undefined) {
            obj.publicServiceCode = message.publicServiceCode;
        }
        return obj;
    },
    create(base) {
        return exports.GetPostOfficeRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetPostOfficeRequest();
        message.addressId = object.addressId ?? "";
        message.postOfficeId = object.postOfficeId ?? "";
        message.publicServiceCode = object.publicServiceCode ?? undefined;
        return message;
    },
};
function createBaseGetPostOfficeResponse() {
    return { id: "", name: "", postcode: "" };
}
exports.GetPostOfficeResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.postcode !== "") {
            writer.uint32(26).string(message.postcode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetPostOfficeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.postcode = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            id: isSet(object.id) ? globalThis.String(object.id) : "",
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            postcode: isSet(object.postcode) ? globalThis.String(object.postcode) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.postcode !== "") {
            obj.postcode = message.postcode;
        }
        return obj;
    },
    create(base) {
        return exports.GetPostOfficeResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetPostOfficeResponse();
        message.id = object.id ?? "";
        message.name = object.name ?? "";
        message.postcode = object.postcode ?? "";
        return message;
    },
};
function createBaseGetActualAtuIdRequest() {
    return { atuId: 0, ops: undefined };
}
exports.GetActualAtuIdRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.atuId !== 0) {
            writer.uint32(8).int32(message.atuId);
        }
        if (message.ops !== undefined) {
            exports.DrrpRequestOptions.encode(message.ops, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetActualAtuIdRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.atuId = reader.int32();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.ops = exports.DrrpRequestOptions.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            atuId: isSet(object.atuId) ? globalThis.Number(object.atuId) : 0,
            ops: isSet(object.ops) ? exports.DrrpRequestOptions.fromJSON(object.ops) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.atuId !== 0) {
            obj.atuId = Math.round(message.atuId);
        }
        if (message.ops !== undefined) {
            obj.ops = exports.DrrpRequestOptions.toJSON(message.ops);
        }
        return obj;
    },
    create(base) {
        return exports.GetActualAtuIdRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetActualAtuIdRequest();
        message.atuId = object.atuId ?? 0;
        message.ops = (object.ops !== undefined && object.ops !== null)
            ? exports.DrrpRequestOptions.fromPartial(object.ops)
            : undefined;
        return message;
    },
};
function createBaseGetActualAtuIdResponse() {
    return { atuId: 0 };
}
exports.GetActualAtuIdResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.atuId !== 0) {
            writer.uint32(8).int32(message.atuId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetActualAtuIdResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.atuId = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { atuId: isSet(object.atuId) ? globalThis.Number(object.atuId) : 0 };
    },
    toJSON(message) {
        const obj = {};
        if (message.atuId !== 0) {
            obj.atuId = Math.round(message.atuId);
        }
        return obj;
    },
    create(base) {
        return exports.GetActualAtuIdResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetActualAtuIdResponse();
        message.atuId = object.atuId ?? 0;
        return message;
    },
};
function createBaseDrrpRequestOptions() {
    return { timeout: undefined, unavailableProcessCode: undefined };
}
exports.DrrpRequestOptions = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.timeout !== undefined) {
            writer.uint32(8).int32(message.timeout);
        }
        if (message.unavailableProcessCode !== undefined) {
            writer.uint32(16).int32(message.unavailableProcessCode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDrrpRequestOptions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.timeout = reader.int32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.unavailableProcessCode = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            timeout: isSet(object.timeout) ? globalThis.Number(object.timeout) : undefined,
            unavailableProcessCode: isSet(object.unavailableProcessCode)
                ? globalThis.Number(object.unavailableProcessCode)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.timeout !== undefined) {
            obj.timeout = Math.round(message.timeout);
        }
        if (message.unavailableProcessCode !== undefined) {
            obj.unavailableProcessCode = Math.round(message.unavailableProcessCode);
        }
        return obj;
    },
    create(base) {
        return exports.DrrpRequestOptions.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDrrpRequestOptions();
        message.timeout = object.timeout ?? undefined;
        message.unavailableProcessCode = object.unavailableProcessCode ?? undefined;
        return message;
    },
};
function createBaseGetPublicServiceAddressRequest() {
    return { resourceId: "", userIdentifier: undefined };
}
exports.GetPublicServiceAddressRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.resourceId !== "") {
            writer.uint32(10).string(message.resourceId);
        }
        if (message.userIdentifier !== undefined) {
            writer.uint32(18).string(message.userIdentifier);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetPublicServiceAddressRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.resourceId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.userIdentifier = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            resourceId: isSet(object.resourceId) ? globalThis.String(object.resourceId) : "",
            userIdentifier: isSet(object.userIdentifier) ? globalThis.String(object.userIdentifier) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.resourceId !== "") {
            obj.resourceId = message.resourceId;
        }
        if (message.userIdentifier !== undefined) {
            obj.userIdentifier = message.userIdentifier;
        }
        return obj;
    },
    create(base) {
        return exports.GetPublicServiceAddressRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetPublicServiceAddressRequest();
        message.resourceId = object.resourceId ?? "";
        message.userIdentifier = object.userIdentifier ?? undefined;
        return message;
    },
};
function createBaseGetPublicServiceAddressResponse() {
    return { fullName: undefined, address: {}, communityCode: undefined };
}
exports.GetPublicServiceAddressResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.fullName !== undefined) {
            writer.uint32(10).string(message.fullName);
        }
        Object.entries(message.address).forEach(([key, value]) => {
            exports.GetPublicServiceAddressResponseAddressEntry.encode({ key: key, value }, writer.uint32(18).fork()).ldelim();
        });
        if (message.communityCode !== undefined) {
            writer.uint32(26).string(message.communityCode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetPublicServiceAddressResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.fullName = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    const entry2 = exports.GetPublicServiceAddressResponseAddressEntry.decode(reader, reader.uint32());
                    if (entry2.value !== undefined) {
                        message.address[entry2.key] = entry2.value;
                    }
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.communityCode = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            fullName: isSet(object.fullName) ? globalThis.String(object.fullName) : undefined,
            address: isObject(object.address)
                ? Object.entries(object.address).reduce((acc, [key, value]) => {
                    acc[key] = exports.PublicServiceAddressItem.fromJSON(value);
                    return acc;
                }, {})
                : {},
            communityCode: isSet(object.communityCode) ? globalThis.String(object.communityCode) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.fullName !== undefined) {
            obj.fullName = message.fullName;
        }
        if (message.address) {
            const entries = Object.entries(message.address);
            if (entries.length > 0) {
                obj.address = {};
                entries.forEach(([k, v]) => {
                    obj.address[k] = exports.PublicServiceAddressItem.toJSON(v);
                });
            }
        }
        if (message.communityCode !== undefined) {
            obj.communityCode = message.communityCode;
        }
        return obj;
    },
    create(base) {
        return exports.GetPublicServiceAddressResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetPublicServiceAddressResponse();
        message.fullName = object.fullName ?? undefined;
        message.address = Object.entries(object.address ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = exports.PublicServiceAddressItem.fromPartial(value);
            }
            return acc;
        }, {});
        message.communityCode = object.communityCode ?? undefined;
        return message;
    },
};
function createBaseGetPublicServiceAddressResponseAddressEntry() {
    return { key: "", value: undefined };
}
exports.GetPublicServiceAddressResponseAddressEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            exports.PublicServiceAddressItem.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetPublicServiceAddressResponseAddressEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.key = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.value = exports.PublicServiceAddressItem.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            key: isSet(object.key) ? globalThis.String(object.key) : "",
            value: isSet(object.value) ? exports.PublicServiceAddressItem.fromJSON(object.value) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.key !== "") {
            obj.key = message.key;
        }
        if (message.value !== undefined) {
            obj.value = exports.PublicServiceAddressItem.toJSON(message.value);
        }
        return obj;
    },
    create(base) {
        return exports.GetPublicServiceAddressResponseAddressEntry.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetPublicServiceAddressResponseAddressEntry();
        message.key = object.key ?? "";
        message.value = (object.value !== undefined && object.value !== null)
            ? exports.PublicServiceAddressItem.fromPartial(object.value)
            : undefined;
        return message;
    },
};
function createBasePublicServiceAddressItem() {
    return {
        id: undefined,
        value: "",
        rawValue: undefined,
        koatuu: undefined,
        codifierCode: undefined,
        category: undefined,
        categoryUkr: undefined,
        categoryUkrShort: undefined,
        atuId: undefined,
        sevdeirId: undefined,
    };
}
exports.PublicServiceAddressItem = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== undefined) {
            writer.uint32(10).string(message.id);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        if (message.rawValue !== undefined) {
            writer.uint32(26).string(message.rawValue);
        }
        if (message.koatuu !== undefined) {
            writer.uint32(34).string(message.koatuu);
        }
        if (message.codifierCode !== undefined) {
            writer.uint32(42).string(message.codifierCode);
        }
        if (message.category !== undefined) {
            writer.uint32(50).string(message.category);
        }
        if (message.categoryUkr !== undefined) {
            writer.uint32(58).string(message.categoryUkr);
        }
        if (message.categoryUkrShort !== undefined) {
            writer.uint32(66).string(message.categoryUkrShort);
        }
        if (message.atuId !== undefined) {
            writer.uint32(72).int32(message.atuId);
        }
        if (message.sevdeirId !== undefined) {
            writer.uint32(82).string(message.sevdeirId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePublicServiceAddressItem();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.value = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.rawValue = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.koatuu = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.codifierCode = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.category = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.categoryUkr = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.categoryUkrShort = reader.string();
                    continue;
                case 9:
                    if (tag !== 72) {
                        break;
                    }
                    message.atuId = reader.int32();
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.sevdeirId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            id: isSet(object.id) ? globalThis.String(object.id) : undefined,
            value: isSet(object.value) ? globalThis.String(object.value) : "",
            rawValue: isSet(object.rawValue) ? globalThis.String(object.rawValue) : undefined,
            koatuu: isSet(object.koatuu) ? globalThis.String(object.koatuu) : undefined,
            codifierCode: isSet(object.codifierCode) ? globalThis.String(object.codifierCode) : undefined,
            category: isSet(object.category) ? globalThis.String(object.category) : undefined,
            categoryUkr: isSet(object.categoryUkr) ? globalThis.String(object.categoryUkr) : undefined,
            categoryUkrShort: isSet(object.categoryUkrShort) ? globalThis.String(object.categoryUkrShort) : undefined,
            atuId: isSet(object.atuId) ? globalThis.Number(object.atuId) : undefined,
            sevdeirId: isSet(object.sevdeirId) ? globalThis.String(object.sevdeirId) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== undefined) {
            obj.id = message.id;
        }
        if (message.value !== "") {
            obj.value = message.value;
        }
        if (message.rawValue !== undefined) {
            obj.rawValue = message.rawValue;
        }
        if (message.koatuu !== undefined) {
            obj.koatuu = message.koatuu;
        }
        if (message.codifierCode !== undefined) {
            obj.codifierCode = message.codifierCode;
        }
        if (message.category !== undefined) {
            obj.category = message.category;
        }
        if (message.categoryUkr !== undefined) {
            obj.categoryUkr = message.categoryUkr;
        }
        if (message.categoryUkrShort !== undefined) {
            obj.categoryUkrShort = message.categoryUkrShort;
        }
        if (message.atuId !== undefined) {
            obj.atuId = Math.round(message.atuId);
        }
        if (message.sevdeirId !== undefined) {
            obj.sevdeirId = message.sevdeirId;
        }
        return obj;
    },
    create(base) {
        return exports.PublicServiceAddressItem.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePublicServiceAddressItem();
        message.id = object.id ?? undefined;
        message.value = object.value ?? "";
        message.rawValue = object.rawValue ?? undefined;
        message.koatuu = object.koatuu ?? undefined;
        message.codifierCode = object.codifierCode ?? undefined;
        message.category = object.category ?? undefined;
        message.categoryUkr = object.categoryUkr ?? undefined;
        message.categoryUkrShort = object.categoryUkrShort ?? undefined;
        message.atuId = object.atuId ?? undefined;
        message.sevdeirId = object.sevdeirId ?? undefined;
        return message;
    },
};
exports.AddressServiceDefinition = {
    name: "AddressService",
    fullName: "ua.gov.diia.addressservice.AddressService",
    methods: {
        getActualAtuId: {
            name: "getActualAtuId",
            requestType: exports.GetActualAtuIdRequest,
            requestStream: false,
            responseType: exports.GetActualAtuIdResponse,
            responseStream: false,
            options: {},
        },
        getPostOffice: {
            name: "getPostOffice",
            requestType: exports.GetPostOfficeRequest,
            requestStream: false,
            responseType: exports.GetPostOfficeResponse,
            responseStream: false,
            options: {},
        },
        getPublicServiceAddress: {
            name: "getPublicServiceAddress",
            requestType: exports.GetPublicServiceAddressRequest,
            requestStream: false,
            responseType: exports.GetPublicServiceAddressResponse,
            responseStream: false,
            options: {},
        },
    },
};
function isObject(value) {
    return typeof value === "object" && value !== null;
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=address-service.js.map