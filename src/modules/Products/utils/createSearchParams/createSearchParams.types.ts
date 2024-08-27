export interface ITemplate {
    [key: string]: string;
}

export interface IParams {
    [key: string]: string | number | boolean | Array<string | number | boolean>;
}

export interface ISearchParams {
    [key: string]: string | { [key: string]: string };
}
