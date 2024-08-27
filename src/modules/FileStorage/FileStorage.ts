import fs from 'node:fs';
import multer from 'multer';
import { v4 as uuidV4 } from 'uuid';
import { fileStorageSettings } from './FileStorage.settings.js';

const { baseDir } = fileStorageSettings;

class FileStorage {
    dir: string = baseDir;

    private createDir(): void {
        if (!fs.existsSync(this.dir)) {
            fs.mkdirSync(this.dir, { recursive: true });
        }
    }

    configure(type: string) {
        this.createDir();

        const storage = multer.diskStorage({
            destination: (req, file, cb): void => {
                cb(null, this.dir);
            },
            filename: (req, file, cb): void => {
                const fileName: string = uuidV4();
                const fileType: string = file.originalname.split('.').pop() as string;

                cb(null, `${fileName}.${fileType}`);
            }
        });

        return multer({ storage }).array(type);
    }
}

export default new FileStorage();
