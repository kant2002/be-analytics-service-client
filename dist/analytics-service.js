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
exports.AnalyticsServiceDefinition = exports.GetRatingInfoRes = exports.GetRatingInfoReq = exports.RatingReview = exports.GetRatingReviewsRes = exports.GetRatingReviewsReq = exports.IsByRequestRatingAvailableResponse = exports.IsUserInitiativeRatingAvailableResponse = exports.IsByRequestRatingAvailableRequest = exports.IsUserInitiativeRatingAvailableRequest = exports.GetRatingFormResponse = exports.GetRatingFormRequest = void 0;
/* eslint-disable */
const types_1 = require("@diia-inhouse/types");
const _m0 = __importStar(require("protobufjs/minimal"));
const timestamp_1 = require("./google/protobuf/timestamp");
const Long = require("long");
function createBaseGetRatingFormRequest() {
    return {
        userIdentifier: "",
        category: "",
        serviceCode: "",
        statusDate: undefined,
        resourceId: undefined,
        ratingFormCode: undefined,
        screenCode: undefined,
        hasRatingSubmitThreshold: undefined,
        daysAfterLastRatingSubmitThreshold: undefined,
        intervalDelay: undefined,
        intervalDuration: undefined,
    };
}
exports.GetRatingFormRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.userIdentifier !== "") {
            writer.uint32(10).string(message.userIdentifier);
        }
        if (message.category !== "") {
            writer.uint32(18).string(message.category);
        }
        if (message.serviceCode !== "") {
            writer.uint32(26).string(message.serviceCode);
        }
        if (message.statusDate !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.statusDate), writer.uint32(34).fork()).ldelim();
        }
        if (message.resourceId !== undefined) {
            writer.uint32(42).string(message.resourceId);
        }
        if (message.ratingFormCode !== undefined) {
            writer.uint32(50).string(message.ratingFormCode);
        }
        if (message.screenCode !== undefined) {
            writer.uint32(58).string(message.screenCode);
        }
        if (message.hasRatingSubmitThreshold !== undefined) {
            writer.uint32(64).bool(message.hasRatingSubmitThreshold);
        }
        if (message.daysAfterLastRatingSubmitThreshold !== undefined) {
            writer.uint32(72).int32(message.daysAfterLastRatingSubmitThreshold);
        }
        if (message.intervalDelay !== undefined) {
            writer.uint32(80).int64(message.intervalDelay);
        }
        if (message.intervalDuration !== undefined) {
            writer.uint32(88).int64(message.intervalDuration);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetRatingFormRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.userIdentifier = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.category = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.serviceCode = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.statusDate = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.resourceId = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.ratingFormCode = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.screenCode = reader.string();
                    continue;
                case 8:
                    if (tag !== 64) {
                        break;
                    }
                    message.hasRatingSubmitThreshold = reader.bool();
                    continue;
                case 9:
                    if (tag !== 72) {
                        break;
                    }
                    message.daysAfterLastRatingSubmitThreshold = reader.int32();
                    continue;
                case 10:
                    if (tag !== 80) {
                        break;
                    }
                    message.intervalDelay = longToNumber(reader.int64());
                    continue;
                case 11:
                    if (tag !== 88) {
                        break;
                    }
                    message.intervalDuration = longToNumber(reader.int64());
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
            userIdentifier: isSet(object.userIdentifier) ? globalThis.String(object.userIdentifier) : "",
            category: isSet(object.category) ? globalThis.String(object.category) : "",
            serviceCode: isSet(object.serviceCode) ? globalThis.String(object.serviceCode) : "",
            statusDate: isSet(object.statusDate) ? fromJsonTimestamp(object.statusDate) : undefined,
            resourceId: isSet(object.resourceId) ? globalThis.String(object.resourceId) : undefined,
            ratingFormCode: isSet(object.ratingFormCode) ? globalThis.String(object.ratingFormCode) : undefined,
            screenCode: isSet(object.screenCode) ? globalThis.String(object.screenCode) : undefined,
            hasRatingSubmitThreshold: isSet(object.hasRatingSubmitThreshold)
                ? globalThis.Boolean(object.hasRatingSubmitThreshold)
                : undefined,
            daysAfterLastRatingSubmitThreshold: isSet(object.daysAfterLastRatingSubmitThreshold)
                ? globalThis.Number(object.daysAfterLastRatingSubmitThreshold)
                : undefined,
            intervalDelay: isSet(object.intervalDelay) ? globalThis.Number(object.intervalDelay) : undefined,
            intervalDuration: isSet(object.intervalDuration) ? globalThis.Number(object.intervalDuration) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.userIdentifier !== "") {
            obj.userIdentifier = message.userIdentifier;
        }
        if (message.category !== "") {
            obj.category = message.category;
        }
        if (message.serviceCode !== "") {
            obj.serviceCode = message.serviceCode;
        }
        if (message.statusDate !== undefined) {
            obj.statusDate = message.statusDate.toISOString();
        }
        if (message.resourceId !== undefined) {
            obj.resourceId = message.resourceId;
        }
        if (message.ratingFormCode !== undefined) {
            obj.ratingFormCode = message.ratingFormCode;
        }
        if (message.screenCode !== undefined) {
            obj.screenCode = message.screenCode;
        }
        if (message.hasRatingSubmitThreshold !== undefined) {
            obj.hasRatingSubmitThreshold = message.hasRatingSubmitThreshold;
        }
        if (message.daysAfterLastRatingSubmitThreshold !== undefined) {
            obj.daysAfterLastRatingSubmitThreshold = Math.round(message.daysAfterLastRatingSubmitThreshold);
        }
        if (message.intervalDelay !== undefined) {
            obj.intervalDelay = Math.round(message.intervalDelay);
        }
        if (message.intervalDuration !== undefined) {
            obj.intervalDuration = Math.round(message.intervalDuration);
        }
        return obj;
    },
    create(base) {
        return exports.GetRatingFormRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetRatingFormRequest();
        message.userIdentifier = object.userIdentifier ?? "";
        message.category = object.category ?? "";
        message.serviceCode = object.serviceCode ?? "";
        message.statusDate = object.statusDate ?? undefined;
        message.resourceId = object.resourceId ?? undefined;
        message.ratingFormCode = object.ratingFormCode ?? undefined;
        message.screenCode = object.screenCode ?? undefined;
        message.hasRatingSubmitThreshold = object.hasRatingSubmitThreshold ?? undefined;
        message.daysAfterLastRatingSubmitThreshold = object.daysAfterLastRatingSubmitThreshold ?? undefined;
        message.intervalDelay = object.intervalDelay ?? undefined;
        message.intervalDuration = object.intervalDuration ?? undefined;
        return message;
    },
};
function createBaseGetRatingFormResponse() {
    return { ratingForm: undefined, ratingStartsAtUnixTime: 0 };
}
exports.GetRatingFormResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.ratingForm !== undefined) {
            types_1.RatingForm.encode(message.ratingForm, writer.uint32(10).fork()).ldelim();
        }
        if (message.ratingStartsAtUnixTime !== 0) {
            writer.uint32(16).int64(message.ratingStartsAtUnixTime);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetRatingFormResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.ratingForm = types_1.RatingForm.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.ratingStartsAtUnixTime = longToNumber(reader.int64());
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
            ratingForm: isSet(object.ratingForm) ? types_1.RatingForm.fromJSON(object.ratingForm) : undefined,
            ratingStartsAtUnixTime: isSet(object.ratingStartsAtUnixTime)
                ? globalThis.Number(object.ratingStartsAtUnixTime)
                : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.ratingForm !== undefined) {
            obj.ratingForm = types_1.RatingForm.toJSON(message.ratingForm);
        }
        if (message.ratingStartsAtUnixTime !== 0) {
            obj.ratingStartsAtUnixTime = Math.round(message.ratingStartsAtUnixTime);
        }
        return obj;
    },
    create(base) {
        return exports.GetRatingFormResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetRatingFormResponse();
        message.ratingForm = (object.ratingForm !== undefined && object.ratingForm !== null)
            ? types_1.RatingForm.fromPartial(object.ratingForm)
            : undefined;
        message.ratingStartsAtUnixTime = object.ratingStartsAtUnixTime ?? 0;
        return message;
    },
};
function createBaseIsUserInitiativeRatingAvailableRequest() {
    return {
        userIdentifier: "",
        category: "",
        serviceCode: "",
        checkTaxpayerCard: undefined,
        screenCode: undefined,
        resourceId: undefined,
        ignoreScreenCodes: [],
    };
}
exports.IsUserInitiativeRatingAvailableRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.userIdentifier !== "") {
            writer.uint32(10).string(message.userIdentifier);
        }
        if (message.category !== "") {
            writer.uint32(18).string(message.category);
        }
        if (message.serviceCode !== "") {
            writer.uint32(26).string(message.serviceCode);
        }
        if (message.checkTaxpayerCard !== undefined) {
            writer.uint32(32).bool(message.checkTaxpayerCard);
        }
        if (message.screenCode !== undefined) {
            writer.uint32(42).string(message.screenCode);
        }
        if (message.resourceId !== undefined) {
            writer.uint32(50).string(message.resourceId);
        }
        for (const v of message.ignoreScreenCodes) {
            writer.uint32(58).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIsUserInitiativeRatingAvailableRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.userIdentifier = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.category = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.serviceCode = reader.string();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.checkTaxpayerCard = reader.bool();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.screenCode = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.resourceId = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.ignoreScreenCodes.push(reader.string());
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
            userIdentifier: isSet(object.userIdentifier) ? globalThis.String(object.userIdentifier) : "",
            category: isSet(object.category) ? globalThis.String(object.category) : "",
            serviceCode: isSet(object.serviceCode) ? globalThis.String(object.serviceCode) : "",
            checkTaxpayerCard: isSet(object.checkTaxpayerCard) ? globalThis.Boolean(object.checkTaxpayerCard) : undefined,
            screenCode: isSet(object.screenCode) ? globalThis.String(object.screenCode) : undefined,
            resourceId: isSet(object.resourceId) ? globalThis.String(object.resourceId) : undefined,
            ignoreScreenCodes: globalThis.Array.isArray(object?.ignoreScreenCodes)
                ? object.ignoreScreenCodes.map((e) => globalThis.String(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.userIdentifier !== "") {
            obj.userIdentifier = message.userIdentifier;
        }
        if (message.category !== "") {
            obj.category = message.category;
        }
        if (message.serviceCode !== "") {
            obj.serviceCode = message.serviceCode;
        }
        if (message.checkTaxpayerCard !== undefined) {
            obj.checkTaxpayerCard = message.checkTaxpayerCard;
        }
        if (message.screenCode !== undefined) {
            obj.screenCode = message.screenCode;
        }
        if (message.resourceId !== undefined) {
            obj.resourceId = message.resourceId;
        }
        if (message.ignoreScreenCodes?.length) {
            obj.ignoreScreenCodes = message.ignoreScreenCodes;
        }
        return obj;
    },
    create(base) {
        return exports.IsUserInitiativeRatingAvailableRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseIsUserInitiativeRatingAvailableRequest();
        message.userIdentifier = object.userIdentifier ?? "";
        message.category = object.category ?? "";
        message.serviceCode = object.serviceCode ?? "";
        message.checkTaxpayerCard = object.checkTaxpayerCard ?? undefined;
        message.screenCode = object.screenCode ?? undefined;
        message.resourceId = object.resourceId ?? undefined;
        message.ignoreScreenCodes = object.ignoreScreenCodes?.map((e) => e) || [];
        return message;
    },
};
function createBaseIsByRequestRatingAvailableRequest() {
    return {
        userIdentifier: "",
        category: "",
        serviceCode: "",
        statusDate: undefined,
        resourceId: undefined,
        ratingFormCode: undefined,
        screenCode: undefined,
        hasRatingSubmitThreshold: undefined,
        daysAfterLastRatingSubmitThreshold: undefined,
        intervalDelay: undefined,
        intervalDuration: undefined,
    };
}
exports.IsByRequestRatingAvailableRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.userIdentifier !== "") {
            writer.uint32(10).string(message.userIdentifier);
        }
        if (message.category !== "") {
            writer.uint32(18).string(message.category);
        }
        if (message.serviceCode !== "") {
            writer.uint32(26).string(message.serviceCode);
        }
        if (message.statusDate !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.statusDate), writer.uint32(34).fork()).ldelim();
        }
        if (message.resourceId !== undefined) {
            writer.uint32(42).string(message.resourceId);
        }
        if (message.ratingFormCode !== undefined) {
            writer.uint32(50).string(message.ratingFormCode);
        }
        if (message.screenCode !== undefined) {
            writer.uint32(58).string(message.screenCode);
        }
        if (message.hasRatingSubmitThreshold !== undefined) {
            writer.uint32(64).bool(message.hasRatingSubmitThreshold);
        }
        if (message.daysAfterLastRatingSubmitThreshold !== undefined) {
            writer.uint32(72).int32(message.daysAfterLastRatingSubmitThreshold);
        }
        if (message.intervalDelay !== undefined) {
            writer.uint32(80).int32(message.intervalDelay);
        }
        if (message.intervalDuration !== undefined) {
            writer.uint32(88).int32(message.intervalDuration);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIsByRequestRatingAvailableRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.userIdentifier = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.category = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.serviceCode = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.statusDate = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.resourceId = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.ratingFormCode = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.screenCode = reader.string();
                    continue;
                case 8:
                    if (tag !== 64) {
                        break;
                    }
                    message.hasRatingSubmitThreshold = reader.bool();
                    continue;
                case 9:
                    if (tag !== 72) {
                        break;
                    }
                    message.daysAfterLastRatingSubmitThreshold = reader.int32();
                    continue;
                case 10:
                    if (tag !== 80) {
                        break;
                    }
                    message.intervalDelay = reader.int32();
                    continue;
                case 11:
                    if (tag !== 88) {
                        break;
                    }
                    message.intervalDuration = reader.int32();
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
            userIdentifier: isSet(object.userIdentifier) ? globalThis.String(object.userIdentifier) : "",
            category: isSet(object.category) ? globalThis.String(object.category) : "",
            serviceCode: isSet(object.serviceCode) ? globalThis.String(object.serviceCode) : "",
            statusDate: isSet(object.statusDate) ? fromJsonTimestamp(object.statusDate) : undefined,
            resourceId: isSet(object.resourceId) ? globalThis.String(object.resourceId) : undefined,
            ratingFormCode: isSet(object.ratingFormCode) ? globalThis.String(object.ratingFormCode) : undefined,
            screenCode: isSet(object.screenCode) ? globalThis.String(object.screenCode) : undefined,
            hasRatingSubmitThreshold: isSet(object.hasRatingSubmitThreshold)
                ? globalThis.Boolean(object.hasRatingSubmitThreshold)
                : undefined,
            daysAfterLastRatingSubmitThreshold: isSet(object.daysAfterLastRatingSubmitThreshold)
                ? globalThis.Number(object.daysAfterLastRatingSubmitThreshold)
                : undefined,
            intervalDelay: isSet(object.intervalDelay) ? globalThis.Number(object.intervalDelay) : undefined,
            intervalDuration: isSet(object.intervalDuration) ? globalThis.Number(object.intervalDuration) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.userIdentifier !== "") {
            obj.userIdentifier = message.userIdentifier;
        }
        if (message.category !== "") {
            obj.category = message.category;
        }
        if (message.serviceCode !== "") {
            obj.serviceCode = message.serviceCode;
        }
        if (message.statusDate !== undefined) {
            obj.statusDate = message.statusDate.toISOString();
        }
        if (message.resourceId !== undefined) {
            obj.resourceId = message.resourceId;
        }
        if (message.ratingFormCode !== undefined) {
            obj.ratingFormCode = message.ratingFormCode;
        }
        if (message.screenCode !== undefined) {
            obj.screenCode = message.screenCode;
        }
        if (message.hasRatingSubmitThreshold !== undefined) {
            obj.hasRatingSubmitThreshold = message.hasRatingSubmitThreshold;
        }
        if (message.daysAfterLastRatingSubmitThreshold !== undefined) {
            obj.daysAfterLastRatingSubmitThreshold = Math.round(message.daysAfterLastRatingSubmitThreshold);
        }
        if (message.intervalDelay !== undefined) {
            obj.intervalDelay = Math.round(message.intervalDelay);
        }
        if (message.intervalDuration !== undefined) {
            obj.intervalDuration = Math.round(message.intervalDuration);
        }
        return obj;
    },
    create(base) {
        return exports.IsByRequestRatingAvailableRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseIsByRequestRatingAvailableRequest();
        message.userIdentifier = object.userIdentifier ?? "";
        message.category = object.category ?? "";
        message.serviceCode = object.serviceCode ?? "";
        message.statusDate = object.statusDate ?? undefined;
        message.resourceId = object.resourceId ?? undefined;
        message.ratingFormCode = object.ratingFormCode ?? undefined;
        message.screenCode = object.screenCode ?? undefined;
        message.hasRatingSubmitThreshold = object.hasRatingSubmitThreshold ?? undefined;
        message.daysAfterLastRatingSubmitThreshold = object.daysAfterLastRatingSubmitThreshold ?? undefined;
        message.intervalDelay = object.intervalDelay ?? undefined;
        message.intervalDuration = object.intervalDuration ?? undefined;
        return message;
    },
};
function createBaseIsUserInitiativeRatingAvailableResponse() {
    return { isAvailable: false, processCode: undefined };
}
exports.IsUserInitiativeRatingAvailableResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.isAvailable === true) {
            writer.uint32(8).bool(message.isAvailable);
        }
        if (message.processCode !== undefined) {
            writer.uint32(16).int32(message.processCode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIsUserInitiativeRatingAvailableResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.isAvailable = reader.bool();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.processCode = reader.int32();
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
            isAvailable: isSet(object.isAvailable) ? globalThis.Boolean(object.isAvailable) : false,
            processCode: isSet(object.processCode) ? globalThis.Number(object.processCode) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.isAvailable === true) {
            obj.isAvailable = message.isAvailable;
        }
        if (message.processCode !== undefined) {
            obj.processCode = Math.round(message.processCode);
        }
        return obj;
    },
    create(base) {
        return exports.IsUserInitiativeRatingAvailableResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseIsUserInitiativeRatingAvailableResponse();
        message.isAvailable = object.isAvailable ?? false;
        message.processCode = object.processCode ?? undefined;
        return message;
    },
};
function createBaseIsByRequestRatingAvailableResponse() {
    return { isAvailable: false, ratingStartsAtUnixTime: 0 };
}
exports.IsByRequestRatingAvailableResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.isAvailable === true) {
            writer.uint32(8).bool(message.isAvailable);
        }
        if (message.ratingStartsAtUnixTime !== 0) {
            writer.uint32(16).int64(message.ratingStartsAtUnixTime);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIsByRequestRatingAvailableResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.isAvailable = reader.bool();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.ratingStartsAtUnixTime = longToNumber(reader.int64());
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
            isAvailable: isSet(object.isAvailable) ? globalThis.Boolean(object.isAvailable) : false,
            ratingStartsAtUnixTime: isSet(object.ratingStartsAtUnixTime)
                ? globalThis.Number(object.ratingStartsAtUnixTime)
                : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.isAvailable === true) {
            obj.isAvailable = message.isAvailable;
        }
        if (message.ratingStartsAtUnixTime !== 0) {
            obj.ratingStartsAtUnixTime = Math.round(message.ratingStartsAtUnixTime);
        }
        return obj;
    },
    create(base) {
        return exports.IsByRequestRatingAvailableResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseIsByRequestRatingAvailableResponse();
        message.isAvailable = object.isAvailable ?? false;
        message.ratingStartsAtUnixTime = object.ratingStartsAtUnixTime ?? 0;
        return message;
    },
};
function createBaseGetRatingReviewsReq() {
    return { resourceIds: [], serviceCode: "" };
}
exports.GetRatingReviewsReq = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.resourceIds) {
            writer.uint32(10).string(v);
        }
        if (message.serviceCode !== "") {
            writer.uint32(18).string(message.serviceCode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetRatingReviewsReq();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.resourceIds.push(reader.string());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.serviceCode = reader.string();
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
            resourceIds: globalThis.Array.isArray(object?.resourceIds)
                ? object.resourceIds.map((e) => globalThis.String(e))
                : [],
            serviceCode: isSet(object.serviceCode) ? globalThis.String(object.serviceCode) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.resourceIds?.length) {
            obj.resourceIds = message.resourceIds;
        }
        if (message.serviceCode !== "") {
            obj.serviceCode = message.serviceCode;
        }
        return obj;
    },
    create(base) {
        return exports.GetRatingReviewsReq.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetRatingReviewsReq();
        message.resourceIds = object.resourceIds?.map((e) => e) || [];
        message.serviceCode = object.serviceCode ?? "";
        return message;
    },
};
function createBaseGetRatingReviewsRes() {
    return { reviews: [] };
}
exports.GetRatingReviewsRes = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.reviews) {
            exports.RatingReview.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetRatingReviewsRes();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.reviews.push(exports.RatingReview.decode(reader, reader.uint32()));
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
            reviews: globalThis.Array.isArray(object?.reviews)
                ? object.reviews.map((e) => exports.RatingReview.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.reviews?.length) {
            obj.reviews = message.reviews.map((e) => exports.RatingReview.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.GetRatingReviewsRes.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetRatingReviewsRes();
        message.reviews = object.reviews?.map((e) => exports.RatingReview.fromPartial(e)) || [];
        return message;
    },
};
function createBaseRatingReview() {
    return { id: "", resourceId: "", userIdentifier: "", comment: undefined, rating: 0, chips: [], date: undefined };
}
exports.RatingReview = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.resourceId !== "") {
            writer.uint32(18).string(message.resourceId);
        }
        if (message.userIdentifier !== "") {
            writer.uint32(26).string(message.userIdentifier);
        }
        if (message.comment !== undefined) {
            writer.uint32(34).string(message.comment);
        }
        if (message.rating !== 0) {
            writer.uint32(40).int32(message.rating);
        }
        for (const v of message.chips) {
            writer.uint32(50).string(v);
        }
        if (message.date !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.date), writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRatingReview();
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
                    message.resourceId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.userIdentifier = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.comment = reader.string();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.rating = reader.int32();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.chips.push(reader.string());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.date = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            resourceId: isSet(object.resourceId) ? globalThis.String(object.resourceId) : "",
            userIdentifier: isSet(object.userIdentifier) ? globalThis.String(object.userIdentifier) : "",
            comment: isSet(object.comment) ? globalThis.String(object.comment) : undefined,
            rating: isSet(object.rating) ? globalThis.Number(object.rating) : 0,
            chips: globalThis.Array.isArray(object?.chips) ? object.chips.map((e) => globalThis.String(e)) : [],
            date: isSet(object.date) ? fromJsonTimestamp(object.date) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.resourceId !== "") {
            obj.resourceId = message.resourceId;
        }
        if (message.userIdentifier !== "") {
            obj.userIdentifier = message.userIdentifier;
        }
        if (message.comment !== undefined) {
            obj.comment = message.comment;
        }
        if (message.rating !== 0) {
            obj.rating = Math.round(message.rating);
        }
        if (message.chips?.length) {
            obj.chips = message.chips;
        }
        if (message.date !== undefined) {
            obj.date = message.date.toISOString();
        }
        return obj;
    },
    create(base) {
        return exports.RatingReview.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRatingReview();
        message.id = object.id ?? "";
        message.resourceId = object.resourceId ?? "";
        message.userIdentifier = object.userIdentifier ?? "";
        message.comment = object.comment ?? undefined;
        message.rating = object.rating ?? 0;
        message.chips = object.chips?.map((e) => e) || [];
        message.date = object.date ?? undefined;
        return message;
    },
};
function createBaseGetRatingInfoReq() {
    return { resourceId: "", serviceCode: "" };
}
exports.GetRatingInfoReq = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.resourceId !== "") {
            writer.uint32(10).string(message.resourceId);
        }
        if (message.serviceCode !== "") {
            writer.uint32(18).string(message.serviceCode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetRatingInfoReq();
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
                    message.serviceCode = reader.string();
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
            serviceCode: isSet(object.serviceCode) ? globalThis.String(object.serviceCode) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.resourceId !== "") {
            obj.resourceId = message.resourceId;
        }
        if (message.serviceCode !== "") {
            obj.serviceCode = message.serviceCode;
        }
        return obj;
    },
    create(base) {
        return exports.GetRatingInfoReq.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetRatingInfoReq();
        message.resourceId = object.resourceId ?? "";
        message.serviceCode = object.serviceCode ?? "";
        return message;
    },
};
function createBaseGetRatingInfoRes() {
    return { votesCount: 0, avgRating: 0 };
}
exports.GetRatingInfoRes = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.votesCount !== 0) {
            writer.uint32(8).int64(message.votesCount);
        }
        if (message.avgRating !== 0) {
            writer.uint32(16).int32(message.avgRating);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetRatingInfoRes();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.votesCount = longToNumber(reader.int64());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.avgRating = reader.int32();
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
            votesCount: isSet(object.votesCount) ? globalThis.Number(object.votesCount) : 0,
            avgRating: isSet(object.avgRating) ? globalThis.Number(object.avgRating) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.votesCount !== 0) {
            obj.votesCount = Math.round(message.votesCount);
        }
        if (message.avgRating !== 0) {
            obj.avgRating = Math.round(message.avgRating);
        }
        return obj;
    },
    create(base) {
        return exports.GetRatingInfoRes.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetRatingInfoRes();
        message.votesCount = object.votesCount ?? 0;
        message.avgRating = object.avgRating ?? 0;
        return message;
    },
};
exports.AnalyticsServiceDefinition = {
    name: "AnalyticsService",
    fullName: "ua.gov.diia.analytics.AnalyticsService",
    methods: {
        getRatingForm: {
            name: "getRatingForm",
            requestType: exports.GetRatingFormRequest,
            requestStream: false,
            responseType: exports.GetRatingFormResponse,
            responseStream: false,
            options: {},
        },
        isUserInitiativeRatingAvailable: {
            name: "isUserInitiativeRatingAvailable",
            requestType: exports.IsUserInitiativeRatingAvailableRequest,
            requestStream: false,
            responseType: exports.IsUserInitiativeRatingAvailableResponse,
            responseStream: false,
            options: {},
        },
        isByRequestRatingAvailable: {
            name: "isByRequestRatingAvailable",
            requestType: exports.IsByRequestRatingAvailableRequest,
            requestStream: false,
            responseType: exports.IsByRequestRatingAvailableResponse,
            responseStream: false,
            options: {},
        },
        getRatingReviews: {
            name: "getRatingReviews",
            requestType: exports.GetRatingReviewsReq,
            requestStream: false,
            responseType: exports.GetRatingReviewsRes,
            responseStream: false,
            options: {},
        },
        getRatingInfo: {
            name: "getRatingInfo",
            requestType: exports.GetRatingInfoReq,
            requestStream: false,
            responseType: exports.GetRatingInfoRes,
            responseStream: false,
            options: {},
        },
    },
};
function toTimestamp(date) {
    const seconds = Math.trunc(date.getTime() / 1000);
    const nanos = (date.getTime() % 1000) * 1000000;
    return { seconds, nanos };
}
function fromTimestamp(t) {
    let millis = (t.seconds || 0) * 1000;
    millis += (t.nanos || 0) / 1000000;
    return new globalThis.Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof globalThis.Date) {
        return o;
    }
    else if (typeof o === "string") {
        return new globalThis.Date(o);
    }
    else {
        return fromTimestamp(timestamp_1.Timestamp.fromJSON(o));
    }
}
function longToNumber(long) {
    if (long.gt(globalThis.Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=analytics-service.js.map