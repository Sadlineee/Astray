import React from 'react'
import { FaTelegram } from 'react-icons/fa6'
import { AppTitle, HeaderBox, TelegramLink } from './Header.styled'

const Header: React.FC = () => {
  return(
    <HeaderBox>
      <AppTitle to='/astray'>astray</AppTitle>
      <TelegramLink to='https://t.me/Sadlineee' target="_blank"><FaTelegram /></TelegramLink>
    </HeaderBox>
  )
}

export default Header