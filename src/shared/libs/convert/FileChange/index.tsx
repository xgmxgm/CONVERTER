import Resizer from 'react-image-file-resizer';

export const FileChange = (
    inputVal: string,
    setEmpty: (value: boolean) => void,
    addNewImg: (name: string, url:string) => void,
    ) => {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
        if (inputVal === '') {
        setEmpty(true);
        } else {
        const files = event.target.files;
        if (files && files.length > 0) {
            const fileList = Array.from(files);
            for (let i = 0; i < fileList.length; i++) {
            let file = fileList[i];
            if (file) {
                Resizer.imageFileResizer(
                file,
                100000,
                100000,
                inputVal,
                100,
                0,
                (uri) => {
                    if (file) {
                    addNewImg(file.name, uri as string);
                    }
                },
                'base64'
                );
            }
            }
        }
        }
    };
};