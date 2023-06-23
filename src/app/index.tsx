import { router } from "@/shared/libs/react-router-dom"
import { FC } from "react"
import { RouterProvider } from "react-router-dom"
import { Layout } from "./layouts"


export const App: FC = () => {
  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  )
}