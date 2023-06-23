import { FC } from "react"
import { DesktopHeader } from "../DesktopHeader"
import { MobileHeader } from "../MobileHeader"

export const Header: FC = () => {
    const widthScreen = window.innerWidth;

    return (
        <>
        { widthScreen >= 701 ? <DesktopHeader /> : <MobileHeader /> }
        </>
    )
}