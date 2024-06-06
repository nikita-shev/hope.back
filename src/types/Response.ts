export enum ResponseStatuses {
    OK = 0,
    FAILED = 1
}

export interface IResponse<T = {}> {
    status: ResponseStatuses.OK | ResponseStatuses.FAILED;
    data: T;
    errors: string[];
}
