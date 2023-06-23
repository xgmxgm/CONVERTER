import { RootState } from "@/store"
import { FC, useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { useSelector, useDispatch } from "react-redux"
import { add_new_img } from "@/store/filesSlice"
import { DownloadButton } from "@/widgets/Download"
import { FileChange } from "@/shared/libs/convert"

export const Upload: FC = () => {
    const images = useSelector((state: RootState) => state.files.images)
    
    const dispatch = useDispatch()

    const [inputVal, setInputVal] = useState<string>('')
    const [empty, setEmpty] = useState<boolean>(false);

    const { t } = useTranslation();

    const addNewImg = (name: string, url: string) => {
        dispatch(add_new_img({name, url}))
    }

    const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectValue = event.target.value;
        setInputVal(selectValue)
    }

    useEffect(() => {
        setEmpty(false);
    }, [inputVal])

    const handleFileChange = FileChange(inputVal, setEmpty, addNewImg);

    return (
        <>
            {
                empty ? <div className="text-2xl mt-[10px] bg-[#5a54d6] py-[10] px-[20px] rounded">{t("Main.HomePage.Type")}</div> : <></>
            }
            <div className="border-[2px] w-[75%] h-[400px] flex justify-evenly items-center mt-[20px] rounded-md max-sm:flex-col">
                <div className="flex flex-col justify-center items-center">
                    <label className="my-4">
                        <h2 className="cursor-pointer text-3xl border-[2px] py-1 px-3 rounded hover:text-black hover:bg-white transition-all">{t("Main.HomePage.UpLoad")}</h2>
                        <input className="hidden" type="file" multiple onChange={handleFileChange} />
                    </label>
                    <select onChange={selectChange} className="rounded bg-transparent border-[2px]">
                        <option className="hidden"></option>
                        <option className="text-black md:text-xl">WEBP</option>
                        <option className="text-black md:text-xl">PNG</option>
                        <option className="text-black md:text-xl">JPEG</option>
                    </select>
                </div>
                {
                    images.length === 0
                        ?
                        <> </>
                        :
                        <div className="flex justify-center items-center">
                            <DownloadButton images={images} />
                        </div>
                }
            </div>
        </>
    )
}