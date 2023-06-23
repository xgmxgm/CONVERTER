import { Header } from "@/widgets/Header"
import { FC, type PropsWithChildren } from "react"

export const Layout: FC<PropsWithChildren> = ({children}) => {
    return (
        <>
        <Header />
        {children}
        </>
    )
}