import type { CallContext, CallOptions } from "nice-grpc-common";
import * as _m0 from "protobufjs/minimal";
export interface GetPostOfficeRequest {
    addressId: string;
    postOfficeId: string;
    publicServiceCode?: string | undefined;
}
export interface GetPostOfficeResponse {
    id: string;
    name: string;
    postcode: string;
}
export interface GetActualAtuIdRequest {
    atuId: number;
    ops?: DrrpRequestOptions | undefined;
}
export interface GetActualAtuIdResponse {
    atuId: number;
}
export interface DrrpRequestOptions {
    timeout?: number | undefined;
    unavailableProcessCode?: number | undefined;
}
export interface GetPublicServiceAddressRequest {
    resourceId: string;
    userIdentifier?: string | undefined;
}
export interface GetPublicServiceAddressResponse {
    fullName?: string | undefined;
    address: {
        [key: string]: PublicServiceAddressItem;
    };
    communityCode?: string | undefined;
}
export interface GetPublicServiceAddressResponseAddressEntry {
    key: string;
    value: PublicServiceAddressItem | undefined;
}
export interface PublicServiceAddressItem {
    id?: string | undefined;
    value: string;
    rawValue?: string | undefined;
    koatuu?: string | undefined;
    codifierCode?: string | undefined;
    category?: string | undefined;
    categoryUkr?: string | undefined;
    categoryUkrShort?: string | undefined;
    atuId?: number | undefined;
    sevdeirId?: string | undefined;
}
export declare const GetPostOfficeRequest: {
    encode(message: GetPostOfficeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetPostOfficeRequest;
    fromJSON(object: any): GetPostOfficeRequest;
    toJSON(message: GetPostOfficeRequest): unknown;
    create(base?: DeepPartial<GetPostOfficeRequest>): GetPostOfficeRequest;
    fromPartial(object: DeepPartial<GetPostOfficeRequest>): GetPostOfficeRequest;
};
export declare const GetPostOfficeResponse: {
    encode(message: GetPostOfficeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetPostOfficeResponse;
    fromJSON(object: any): GetPostOfficeResponse;
    toJSON(message: GetPostOfficeResponse): unknown;
    create(base?: DeepPartial<GetPostOfficeResponse>): GetPostOfficeResponse;
    fromPartial(object: DeepPartial<GetPostOfficeResponse>): GetPostOfficeResponse;
};
export declare const GetActualAtuIdRequest: {
    encode(message: GetActualAtuIdRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetActualAtuIdRequest;
    fromJSON(object: any): GetActualAtuIdRequest;
    toJSON(message: GetActualAtuIdRequest): unknown;
    create(base?: DeepPartial<GetActualAtuIdRequest>): GetActualAtuIdRequest;
    fromPartial(object: DeepPartial<GetActualAtuIdRequest>): GetActualAtuIdRequest;
};
export declare const GetActualAtuIdResponse: {
    encode(message: GetActualAtuIdResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetActualAtuIdResponse;
    fromJSON(object: any): GetActualAtuIdResponse;
    toJSON(message: GetActualAtuIdResponse): unknown;
    create(base?: DeepPartial<GetActualAtuIdResponse>): GetActualAtuIdResponse;
    fromPartial(object: DeepPartial<GetActualAtuIdResponse>): GetActualAtuIdResponse;
};
export declare const DrrpRequestOptions: {
    encode(message: DrrpRequestOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DrrpRequestOptions;
    fromJSON(object: any): DrrpRequestOptions;
    toJSON(message: DrrpRequestOptions): unknown;
    create(base?: DeepPartial<DrrpRequestOptions>): DrrpRequestOptions;
    fromPartial(object: DeepPartial<DrrpRequestOptions>): DrrpRequestOptions;
};
export declare const GetPublicServiceAddressRequest: {
    encode(message: GetPublicServiceAddressRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetPublicServiceAddressRequest;
    fromJSON(object: any): GetPublicServiceAddressRequest;
    toJSON(message: GetPublicServiceAddressRequest): unknown;
    create(base?: DeepPartial<GetPublicServiceAddressRequest>): GetPublicServiceAddressRequest;
    fromPartial(object: DeepPartial<GetPublicServiceAddressRequest>): GetPublicServiceAddressRequest;
};
export declare const GetPublicServiceAddressResponse: {
    encode(message: GetPublicServiceAddressResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetPublicServiceAddressResponse;
    fromJSON(object: any): GetPublicServiceAddressResponse;
    toJSON(message: GetPublicServiceAddressResponse): unknown;
    create(base?: DeepPartial<GetPublicServiceAddressResponse>): GetPublicServiceAddressResponse;
    fromPartial(object: DeepPartial<GetPublicServiceAddressResponse>): GetPublicServiceAddressResponse;
};
export declare const GetPublicServiceAddressResponseAddressEntry: {
    encode(message: GetPublicServiceAddressResponseAddressEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetPublicServiceAddressResponseAddressEntry;
    fromJSON(object: any): GetPublicServiceAddressResponseAddressEntry;
    toJSON(message: GetPublicServiceAddressResponseAddressEntry): unknown;
    create(base?: DeepPartial<GetPublicServiceAddressResponseAddressEntry>): GetPublicServiceAddressResponseAddressEntry;
    fromPartial(object: DeepPartial<GetPublicServiceAddressResponseAddressEntry>): GetPublicServiceAddressResponseAddressEntry;
};
export declare const PublicServiceAddressItem: {
    encode(message: PublicServiceAddressItem, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PublicServiceAddressItem;
    fromJSON(object: any): PublicServiceAddressItem;
    toJSON(message: PublicServiceAddressItem): unknown;
    create(base?: DeepPartial<PublicServiceAddressItem>): PublicServiceAddressItem;
    fromPartial(object: DeepPartial<PublicServiceAddressItem>): PublicServiceAddressItem;
};
export type AddressServiceDefinition = typeof AddressServiceDefinition;
export declare const AddressServiceDefinition: {
    readonly name: "AddressService";
    readonly fullName: "ua.gov.diia.addressservice.AddressService";
    readonly methods: {
        readonly getActualAtuId: {
            readonly name: "getActualAtuId";
            readonly requestType: {
                encode(message: GetActualAtuIdRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetActualAtuIdRequest;
                fromJSON(object: any): GetActualAtuIdRequest;
                toJSON(message: GetActualAtuIdRequest): unknown;
                create(base?: DeepPartial<GetActualAtuIdRequest>): GetActualAtuIdRequest;
                fromPartial(object: DeepPartial<GetActualAtuIdRequest>): GetActualAtuIdRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetActualAtuIdResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetActualAtuIdResponse;
                fromJSON(object: any): GetActualAtuIdResponse;
                toJSON(message: GetActualAtuIdResponse): unknown;
                create(base?: DeepPartial<GetActualAtuIdResponse>): GetActualAtuIdResponse;
                fromPartial(object: DeepPartial<GetActualAtuIdResponse>): GetActualAtuIdResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly getPostOffice: {
            readonly name: "getPostOffice";
            readonly requestType: {
                encode(message: GetPostOfficeRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetPostOfficeRequest;
                fromJSON(object: any): GetPostOfficeRequest;
                toJSON(message: GetPostOfficeRequest): unknown;
                create(base?: DeepPartial<GetPostOfficeRequest>): GetPostOfficeRequest;
                fromPartial(object: DeepPartial<GetPostOfficeRequest>): GetPostOfficeRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetPostOfficeResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetPostOfficeResponse;
                fromJSON(object: any): GetPostOfficeResponse;
                toJSON(message: GetPostOfficeResponse): unknown;
                create(base?: DeepPartial<GetPostOfficeResponse>): GetPostOfficeResponse;
                fromPartial(object: DeepPartial<GetPostOfficeResponse>): GetPostOfficeResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly getPublicServiceAddress: {
            readonly name: "getPublicServiceAddress";
            readonly requestType: {
                encode(message: GetPublicServiceAddressRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetPublicServiceAddressRequest;
                fromJSON(object: any): GetPublicServiceAddressRequest;
                toJSON(message: GetPublicServiceAddressRequest): unknown;
                create(base?: DeepPartial<GetPublicServiceAddressRequest>): GetPublicServiceAddressRequest;
                fromPartial(object: DeepPartial<GetPublicServiceAddressRequest>): GetPublicServiceAddressRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetPublicServiceAddressResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetPublicServiceAddressResponse;
                fromJSON(object: any): GetPublicServiceAddressResponse;
                toJSON(message: GetPublicServiceAddressResponse): unknown;
                create(base?: DeepPartial<GetPublicServiceAddressResponse>): GetPublicServiceAddressResponse;
                fromPartial(object: DeepPartial<GetPublicServiceAddressResponse>): GetPublicServiceAddressResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
    };
};
export interface AddressServiceImplementation<CallContextExt = {}> {
    getActualAtuId(request: GetActualAtuIdRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetActualAtuIdResponse>>;
    getPostOffice(request: GetPostOfficeRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetPostOfficeResponse>>;
    getPublicServiceAddress(request: GetPublicServiceAddressRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetPublicServiceAddressResponse>>;
}
export interface AddressServiceClient<CallOptionsExt = {}> {
    getActualAtuId(request: DeepPartial<GetActualAtuIdRequest>, options?: CallOptions & CallOptionsExt): Promise<GetActualAtuIdResponse>;
    getPostOffice(request: DeepPartial<GetPostOfficeRequest>, options?: CallOptions & CallOptionsExt): Promise<GetPostOfficeResponse>;
    getPublicServiceAddress(request: DeepPartial<GetPublicServiceAddressRequest>, options?: CallOptions & CallOptionsExt): Promise<GetPublicServiceAddressResponse>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
//# sourceMappingURL=address-service.d.ts.map