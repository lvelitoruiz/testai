import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Dashboard from "../components/Dashboard"



const IndexPage: React.FC<PageProps> = () => {
  return (
    <Dashboard />
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
