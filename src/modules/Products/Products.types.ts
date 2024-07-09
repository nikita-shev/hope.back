// Request
export interface IQuery {
    limit: number;
    page: number;

    [key: string]: string | number | boolean;
}
