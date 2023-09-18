import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Dashboard from "../components/Dashboard"
import { Provider } from 'react-redux';
import store from "../store/store";




const IndexPage: React.FC<PageProps> = () => {
  return (
    <Provider store={store}>
      <Dashboard />
    </Provider>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
