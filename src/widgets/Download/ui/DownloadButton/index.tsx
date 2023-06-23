import { Button } from "@/shared/ui/Button";
import { useTranslation } from "react-i18next";

interface IImages {
    name: string,
    url: string,
}

interface IProps {
    images: IImages[]
}

export const DownloadButton = (props: IProps) => {
    const {images} = props

    const { t } = useTranslation();

    const removeWordInString = (string: string) => {
        const parts = string.split('.');
        const fileName = parts[0];
        return fileName;
    }

    const handleDownload = () => {
        images.forEach(image => {
        const link = document.createElement('a');
        link.href = image.url;
        link.download = removeWordInString(image.name);
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.click();
        });
    };

    return (
        <Button onClick={handleDownload}>
            {t("Main.HomePage.Download")}
        </Button>
    );
};