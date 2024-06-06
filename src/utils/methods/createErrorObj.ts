import { IResponse, ResponseStatuses } from '../../modules/Product/Product.types.js';

export const createErrorObj = (error: string = 'Invalid data entry.'): IResponse => ({
    status: ResponseStatuses.FAILED,
    data: {},
    errors: [error]
});
