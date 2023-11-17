import React from 'react'
import Logo from './Logo'
import AppNav from './AppNav'
import Styles from "./Sidebar.module.css"
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className={Styles.sidebar}>
        <Logo />
        <AppNav />
        <Outlet />
        <Footer />
    </div>
  )
}
