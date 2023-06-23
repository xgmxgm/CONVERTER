import { Button } from "@/shared/ui/Button";
import { Modal } from "@/shared/ui/Modal";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {setModal} from "@/store/modalSlice"
import { RootState } from "@/store";

export const MobileHeader: FC = () => {
    const modal = useSelector((state: RootState) => state.modal.modal);
    const dispatch = useDispatch();

    const { t, i18n } = useTranslation();

    const openAndClose = () => dispatch(setModal())

    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
    }

    return (
        <div className="flex justify-center items-center h-[50px]">
            <div className="w-[75%] flex items-center justify-between">
                <h2 className="text-4xl">Converter</h2>
                <Button onClick={openAndClose}>{t("Header.language")}</Button>
                { modal ? <Modal>
                    <Button onClick={() => changeLanguage('ru')}>RU</Button>
                    <Button onClick={() => changeLanguage('en')}>EN</Button>
                </Modal> : <></> }
            </div>
        </div>
    )
}