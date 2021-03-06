export enum ResponseCode {
    HTTP_UNAUTHORISED = 401,
    HTTP_SUCCESS = 200,
    SUCCESS_GENERIC = 2000,
    ERROR_GENERIC = 1000,
    ERROR_DB = 1001,
    ERROR_IO = 1002,
}

export class Response<T = any> {

    private _responseCode: ResponseCode;
    private _errorMesg: string;
    private _body: T;


    get responseCode(): ResponseCode {
        return this._responseCode;
    }

    set responseCode(value: ResponseCode) {
        this._responseCode = value;
    }

    get errorMesg(): string {
        return this._errorMesg;
    }

    set errorMesg(value: string) {
        this._errorMesg = value;
    }

    get body(): T {
        return this._body;
    }

    set body(value: T) {
        this._body = value;
    }
}
