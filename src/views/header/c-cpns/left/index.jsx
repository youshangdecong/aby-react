import React, { memo } from 'react'
import LogoSvg from '@/components/svg-cpn/logo'
import {HomeLeftWraper} from './style.js'
import { useNavigate } from 'react-router-dom'


const index = memo(() => {
  const nav = useNavigate()
  const gotoIndex = () => {
    nav('/home')
  }

  return (
    <HomeLeftWraper onClick={gotoIndex}>
       <LogoSvg />
    </HomeLeftWraper>
  )
})

export default index