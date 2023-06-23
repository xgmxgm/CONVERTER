import { useDispatch } from "react-redux";
import { setModal } from "@/store/modalSlice";

interface IProps {
    children: React.ReactNode,
}

export const Modal = (props: IProps) => {
    const dispatch = useDispatch();

    const open = () => dispatch(setModal())

    const { children } = props

    return (
        <div
            className="fixed flex justify-center items-center top-0 left-0 h-screen w-screen bg-[#000000cc]"
            onClick={open}
        >
            <div
                className=""
            >
                { children }
            </div>
        </div>
    )
}