import { RatingForm } from "@diia-inhouse/types";
import type { CallContext, CallOptions } from "nice-grpc-common";
import * as _m0 from "protobufjs/minimal";
export interface GetRatingFormRequest {
    userIdentifier: string;
    category: string;
    serviceCode: string;
    statusDate: Date | undefined;
    resourceId?: string | undefined;
    ratingFormCode?: string | undefined;
    screenCode?: string | undefined;
    hasRatingSubmitThreshold?: boolean | undefined;
    daysAfterLastRatingSubmitThreshold?: number | undefined;
    intervalDelay?: number | undefined;
    intervalDuration?: number | undefined;
}
export interface GetRatingFormResponse {
    ratingForm?: RatingForm | undefined;
    ratingStartsAtUnixTime: number;
}
export interface IsUserInitiativeRatingAvailableRequest {
    userIdentifier: string;
    category: string;
    serviceCode: string;
    checkTaxpayerCard?: boolean | undefined;
    screenCode?: string | undefined;
    resourceId?: string | undefined;
    ignoreScreenCodes: string[];
}
export interface IsByRequestRatingAvailableRequest {
    userIdentifier: string;
    category: string;
    serviceCode: string;
    statusDate: Date | undefined;
    resourceId?: string | undefined;
    ratingFormCode?: string | undefined;
    screenCode?: string | undefined;
    hasRatingSubmitThreshold?: boolean | undefined;
    daysAfterLastRatingSubmitThreshold?: number | undefined;
    intervalDelay?: number | undefined;
    intervalDuration?: number | undefined;
}
export interface IsUserInitiativeRatingAvailableResponse {
    isAvailable: boolean;
    processCode?: number | undefined;
}
export interface IsByRequestRatingAvailableResponse {
    isAvailable: boolean;
    ratingStartsAtUnixTime: number;
}
export interface GetRatingReviewsReq {
    resourceIds: string[];
    serviceCode: string;
}
export interface GetRatingReviewsRes {
    reviews: RatingReview[];
}
export interface RatingReview {
    id: string;
    resourceId: string;
    userIdentifier: string;
    comment?: string | undefined;
    rating: number;
    chips: string[];
    date: Date | undefined;
}
export interface GetRatingInfoReq {
    resourceId: string;
    serviceCode: string;
}
export interface GetRatingInfoRes {
    votesCount: number;
    avgRating: number;
}
export declare const GetRatingFormRequest: {
    encode(message: GetRatingFormRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetRatingFormRequest;
    fromJSON(object: any): GetRatingFormRequest;
    toJSON(message: GetRatingFormRequest): unknown;
    create(base?: DeepPartial<GetRatingFormRequest>): GetRatingFormRequest;
    fromPartial(object: DeepPartial<GetRatingFormRequest>): GetRatingFormRequest;
};
export declare const GetRatingFormResponse: {
    encode(message: GetRatingFormResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetRatingFormResponse;
    fromJSON(object: any): GetRatingFormResponse;
    toJSON(message: GetRatingFormResponse): unknown;
    create(base?: DeepPartial<GetRatingFormResponse>): GetRatingFormResponse;
    fromPartial(object: DeepPartial<GetRatingFormResponse>): GetRatingFormResponse;
};
export declare const IsUserInitiativeRatingAvailableRequest: {
    encode(message: IsUserInitiativeRatingAvailableRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IsUserInitiativeRatingAvailableRequest;
    fromJSON(object: any): IsUserInitiativeRatingAvailableRequest;
    toJSON(message: IsUserInitiativeRatingAvailableRequest): unknown;
    create(base?: DeepPartial<IsUserInitiativeRatingAvailableRequest>): IsUserInitiativeRatingAvailableRequest;
    fromPartial(object: DeepPartial<IsUserInitiativeRatingAvailableRequest>): IsUserInitiativeRatingAvailableRequest;
};
export declare const IsByRequestRatingAvailableRequest: {
    encode(message: IsByRequestRatingAvailableRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IsByRequestRatingAvailableRequest;
    fromJSON(object: any): IsByRequestRatingAvailableRequest;
    toJSON(message: IsByRequestRatingAvailableRequest): unknown;
    create(base?: DeepPartial<IsByRequestRatingAvailableRequest>): IsByRequestRatingAvailableRequest;
    fromPartial(object: DeepPartial<IsByRequestRatingAvailableRequest>): IsByRequestRatingAvailableRequest;
};
export declare const IsUserInitiativeRatingAvailableResponse: {
    encode(message: IsUserInitiativeRatingAvailableResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IsUserInitiativeRatingAvailableResponse;
    fromJSON(object: any): IsUserInitiativeRatingAvailableResponse;
    toJSON(message: IsUserInitiativeRatingAvailableResponse): unknown;
    create(base?: DeepPartial<IsUserInitiativeRatingAvailableResponse>): IsUserInitiativeRatingAvailableResponse;
    fromPartial(object: DeepPartial<IsUserInitiativeRatingAvailableResponse>): IsUserInitiativeRatingAvailableResponse;
};
export declare const IsByRequestRatingAvailableResponse: {
    encode(message: IsByRequestRatingAvailableResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IsByRequestRatingAvailableResponse;
    fromJSON(object: any): IsByRequestRatingAvailableResponse;
    toJSON(message: IsByRequestRatingAvailableResponse): unknown;
    create(base?: DeepPartial<IsByRequestRatingAvailableResponse>): IsByRequestRatingAvailableResponse;
    fromPartial(object: DeepPartial<IsByRequestRatingAvailableResponse>): IsByRequestRatingAvailableResponse;
};
export declare const GetRatingReviewsReq: {
    encode(message: GetRatingReviewsReq, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetRatingReviewsReq;
    fromJSON(object: any): GetRatingReviewsReq;
    toJSON(message: GetRatingReviewsReq): unknown;
    create(base?: DeepPartial<GetRatingReviewsReq>): GetRatingReviewsReq;
    fromPartial(object: DeepPartial<GetRatingReviewsReq>): GetRatingReviewsReq;
};
export declare const GetRatingReviewsRes: {
    encode(message: GetRatingReviewsRes, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetRatingReviewsRes;
    fromJSON(object: any): GetRatingReviewsRes;
    toJSON(message: GetRatingReviewsRes): unknown;
    create(base?: DeepPartial<GetRatingReviewsRes>): GetRatingReviewsRes;
    fromPartial(object: DeepPartial<GetRatingReviewsRes>): GetRatingReviewsRes;
};
export declare const RatingReview: {
    encode(message: RatingReview, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RatingReview;
    fromJSON(object: any): RatingReview;
    toJSON(message: RatingReview): unknown;
    create(base?: DeepPartial<RatingReview>): RatingReview;
    fromPartial(object: DeepPartial<RatingReview>): RatingReview;
};
export declare const GetRatingInfoReq: {
    encode(message: GetRatingInfoReq, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetRatingInfoReq;
    fromJSON(object: any): GetRatingInfoReq;
    toJSON(message: GetRatingInfoReq): unknown;
    create(base?: DeepPartial<GetRatingInfoReq>): GetRatingInfoReq;
    fromPartial(object: DeepPartial<GetRatingInfoReq>): GetRatingInfoReq;
};
export declare const GetRatingInfoRes: {
    encode(message: GetRatingInfoRes, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetRatingInfoRes;
    fromJSON(object: any): GetRatingInfoRes;
    toJSON(message: GetRatingInfoRes): unknown;
    create(base?: DeepPartial<GetRatingInfoRes>): GetRatingInfoRes;
    fromPartial(object: DeepPartial<GetRatingInfoRes>): GetRatingInfoRes;
};
export type AnalyticsServiceDefinition = typeof AnalyticsServiceDefinition;
export declare const AnalyticsServiceDefinition: {
    readonly name: "AnalyticsService";
    readonly fullName: "ua.gov.diia.analytics.AnalyticsService";
    readonly methods: {
        readonly getRatingForm: {
            readonly name: "getRatingForm";
            readonly requestType: {
                encode(message: GetRatingFormRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetRatingFormRequest;
                fromJSON(object: any): GetRatingFormRequest;
                toJSON(message: GetRatingFormRequest): unknown;
                create(base?: DeepPartial<GetRatingFormRequest>): GetRatingFormRequest;
                fromPartial(object: DeepPartial<GetRatingFormRequest>): GetRatingFormRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetRatingFormResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetRatingFormResponse;
                fromJSON(object: any): GetRatingFormResponse;
                toJSON(message: GetRatingFormResponse): unknown;
                create(base?: DeepPartial<GetRatingFormResponse>): GetRatingFormResponse;
                fromPartial(object: DeepPartial<GetRatingFormResponse>): GetRatingFormResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly isUserInitiativeRatingAvailable: {
            readonly name: "isUserInitiativeRatingAvailable";
            readonly requestType: {
                encode(message: IsUserInitiativeRatingAvailableRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): IsUserInitiativeRatingAvailableRequest;
                fromJSON(object: any): IsUserInitiativeRatingAvailableRequest;
                toJSON(message: IsUserInitiativeRatingAvailableRequest): unknown;
                create(base?: DeepPartial<IsUserInitiativeRatingAvailableRequest>): IsUserInitiativeRatingAvailableRequest;
                fromPartial(object: DeepPartial<IsUserInitiativeRatingAvailableRequest>): IsUserInitiativeRatingAvailableRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: IsUserInitiativeRatingAvailableResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): IsUserInitiativeRatingAvailableResponse;
                fromJSON(object: any): IsUserInitiativeRatingAvailableResponse;
                toJSON(message: IsUserInitiativeRatingAvailableResponse): unknown;
                create(base?: DeepPartial<IsUserInitiativeRatingAvailableResponse>): IsUserInitiativeRatingAvailableResponse;
                fromPartial(object: DeepPartial<IsUserInitiativeRatingAvailableResponse>): IsUserInitiativeRatingAvailableResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly isByRequestRatingAvailable: {
            readonly name: "isByRequestRatingAvailable";
            readonly requestType: {
                encode(message: IsByRequestRatingAvailableRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): IsByRequestRatingAvailableRequest;
                fromJSON(object: any): IsByRequestRatingAvailableRequest;
                toJSON(message: IsByRequestRatingAvailableRequest): unknown;
                create(base?: DeepPartial<IsByRequestRatingAvailableRequest>): IsByRequestRatingAvailableRequest;
                fromPartial(object: DeepPartial<IsByRequestRatingAvailableRequest>): IsByRequestRatingAvailableRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: IsByRequestRatingAvailableResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): IsByRequestRatingAvailableResponse;
                fromJSON(object: any): IsByRequestRatingAvailableResponse;
                toJSON(message: IsByRequestRatingAvailableResponse): unknown;
                create(base?: DeepPartial<IsByRequestRatingAvailableResponse>): IsByRequestRatingAvailableResponse;
                fromPartial(object: DeepPartial<IsByRequestRatingAvailableResponse>): IsByRequestRatingAvailableResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly getRatingReviews: {
            readonly name: "getRatingReviews";
            readonly requestType: {
                encode(message: GetRatingReviewsReq, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetRatingReviewsReq;
                fromJSON(object: any): GetRatingReviewsReq;
                toJSON(message: GetRatingReviewsReq): unknown;
                create(base?: DeepPartial<GetRatingReviewsReq>): GetRatingReviewsReq;
                fromPartial(object: DeepPartial<GetRatingReviewsReq>): GetRatingReviewsReq;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetRatingReviewsRes, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetRatingReviewsRes;
                fromJSON(object: any): GetRatingReviewsRes;
                toJSON(message: GetRatingReviewsRes): unknown;
                create(base?: DeepPartial<GetRatingReviewsRes>): GetRatingReviewsRes;
                fromPartial(object: DeepPartial<GetRatingReviewsRes>): GetRatingReviewsRes;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly getRatingInfo: {
            readonly name: "getRatingInfo";
            readonly requestType: {
                encode(message: GetRatingInfoReq, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetRatingInfoReq;
                fromJSON(object: any): GetRatingInfoReq;
                toJSON(message: GetRatingInfoReq): unknown;
                create(base?: DeepPartial<GetRatingInfoReq>): GetRatingInfoReq;
                fromPartial(object: DeepPartial<GetRatingInfoReq>): GetRatingInfoReq;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetRatingInfoRes, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetRatingInfoRes;
                fromJSON(object: any): GetRatingInfoRes;
                toJSON(message: GetRatingInfoRes): unknown;
                create(base?: DeepPartial<GetRatingInfoRes>): GetRatingInfoRes;
                fromPartial(object: DeepPartial<GetRatingInfoRes>): GetRatingInfoRes;
            };
            readonly responseStream: false;
            readonly options: {};
        };
    };
};
export interface AnalyticsServiceImplementation<CallContextExt = {}> {
    getRatingForm(request: GetRatingFormRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetRatingFormResponse>>;
    isUserInitiativeRatingAvailable(request: IsUserInitiativeRatingAvailableRequest, context: CallContext & CallContextExt): Promise<DeepPartial<IsUserInitiativeRatingAvailableResponse>>;
    isByRequestRatingAvailable(request: IsByRequestRatingAvailableRequest, context: CallContext & CallContextExt): Promise<DeepPartial<IsByRequestRatingAvailableResponse>>;
    getRatingReviews(request: GetRatingReviewsReq, context: CallContext & CallContextExt): Promise<DeepPartial<GetRatingReviewsRes>>;
    getRatingInfo(request: GetRatingInfoReq, context: CallContext & CallContextExt): Promise<DeepPartial<GetRatingInfoRes>>;
}
export interface AnalyticsServiceClient<CallOptionsExt = {}> {
    getRatingForm(request: DeepPartial<GetRatingFormRequest>, options?: CallOptions & CallOptionsExt): Promise<GetRatingFormResponse>;
    isUserInitiativeRatingAvailable(request: DeepPartial<IsUserInitiativeRatingAvailableRequest>, options?: CallOptions & CallOptionsExt): Promise<IsUserInitiativeRatingAvailableResponse>;
    isByRequestRatingAvailable(request: DeepPartial<IsByRequestRatingAvailableRequest>, options?: CallOptions & CallOptionsExt): Promise<IsByRequestRatingAvailableResponse>;
    getRatingReviews(request: DeepPartial<GetRatingReviewsReq>, options?: CallOptions & CallOptionsExt): Promise<GetRatingReviewsRes>;
    getRatingInfo(request: DeepPartial<GetRatingInfoReq>, options?: CallOptions & CallOptionsExt): Promise<GetRatingInfoRes>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
//# sourceMappingURL=analytics-service.d.ts.map