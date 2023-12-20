import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Header } from "../components/header"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Header siteTitle="Garden" />
    </main>
  )
}

export default IndexPage;

export const Head: HeadFC = () => <title>Garden</title>
