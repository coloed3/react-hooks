import React from "react"
import "./layout.css"
import Header from "./Header"
import { GlobalStyle } from "../styles/GlobalStyle"

function Layout({ children }) {
  return (
    <>
      <Header />
      <GlobalStyle />
      <main>{children}</main>
    </>
  )
}

export default Layout
