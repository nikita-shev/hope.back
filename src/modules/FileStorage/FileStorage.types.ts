interface IFile {
    [key: string]: Express.Multer.File[];
}

export type Files = IFile | Express.Multer.File[] | undefined;
