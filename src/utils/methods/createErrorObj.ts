import { IResponse, ResponseStatuses } from '../../types/Response.js';

export const createErrorObj = (error: string = 'Invalid data entry.'): IResponse => ({
    status: ResponseStatuses.FAILED,
    data: {},
    errors: [error]
});
