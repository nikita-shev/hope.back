import { Response } from 'express';
import { RequestQuery } from '../../types/Request.js';
import { IResponse } from '../../types/Response.js';
import { FilterType } from './Filter.types.js';
import { createErrorObj, createResponseObj } from '../../utils/methods';
import Filter from './Filter.js';

class FilterController {
    async getFilterValues(
        req: RequestQuery<{ type: FilterType }>,
        res: Response<IResponse>
    ): Promise<void> {
        try {
            const result: string[] = await Filter.findFilterValues(req.query.type);

            res.status(200).json(createResponseObj(result));
        } catch (err) {
            res.status(200).json(createErrorObj());
        }
    }
}

export default new FilterController();
