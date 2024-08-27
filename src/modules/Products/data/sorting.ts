import { SortDirection } from 'mongodb';

interface ISort {
    [key: string]: {
        [key: string]: SortDirection;
    };
}

export const sortType: ISort = {
    1: { 'price.current': 1, 'price.new': 1, name: -1 },
    2: { 'price.current': -1, 'price.new': -1, name: -1 },
    5: { rating: -1, name: -1 },
    6: { name: 1 }
};
