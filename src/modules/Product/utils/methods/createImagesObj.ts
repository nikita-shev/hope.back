import path from 'node:path';
import { IImages } from '../../../../types/Product.js';
import { Files } from '../../../FileStorage/FileStorage.types.js';
import { fileStorageSettings } from '../../../FileStorage/FileStorage.settings.js';

const HOST: string = process.env.HOST || `http://localhost:${process.env.PORT}`;
const { baseDir } = fileStorageSettings;
const defaultImgPath: string = `${HOST}/${baseDir}/default/defaultImage.webp`;

export const createImagesObj = (files: Files): IImages => {
    if (!files || !Array.isArray(files)) return { preview: defaultImgPath };

    const images: string[] = files.map(
        (el) => `${HOST}/${path.posix.join(...el.path.split(path.sep))}`
    );

    return {
        preview: images[0] || defaultImgPath,
        links: images.length > 1 ? images : []
    };
};
