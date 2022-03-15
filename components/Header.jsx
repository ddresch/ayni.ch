import React, {useState} from 'react'
import { Logo } from './Logo'
import { Sidebar } from './Sidebar'

export const Header = ({}) => {
  const [sideBar, setSideBar] = useState(false)
  const toggleSidebar = () => setSideBar((sideBar) => !sideBar)

  return (
    <header>
        <Logo />
        <Sidebar {...{ sideBar, toggleSidebar }} />
    </header>
  )
}

Header.propTypes = {
}

Header.defaultProps = {
}
