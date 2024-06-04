import { IImages } from '../../Product.types.js';
import { Files } from '../../../FileStorage/FileStorage.types.js';

const HOST: string = process.env.HOST || `http:\\localhost:${process.env.PORT}`;

export const createImagesObj = (files: Files): IImages => {
    if (!files || !Array.isArray(files)) return { preview: '' };

    const images: string[] = files.map((el) => `${HOST}\\${el.path}`);

    return {
        preview: images[0] || 'image',
        links: images.length > 1 ? images : []
    };
};
