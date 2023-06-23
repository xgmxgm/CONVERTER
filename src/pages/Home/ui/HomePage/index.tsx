import { Upload } from "@/widgets/Upload";
import { FC } from "react"
import { useTranslation } from "react-i18next";

export const HomePage: FC = () => {
    const { t } = useTranslation();

    return (
        <div className="flex justify-center">
            <div className="flex flex-col items-center w-[90%]">
                <h2 className="md:text-5xl sm:text-3xl text-2xl  mb-2">{t("Main.HomePage.title")}</h2>
                <h3 className="md:text-2xl sm:text-xl text-xl">{t("Main.HomePage.miniTitle")}</h3>
                <Upload />
            </div>
        </div>
    )
}