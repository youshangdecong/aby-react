import React, { memo,useEffect, useState } from 'react'

import Internat from '@/components/svg-cpn/internat'
import List from '@/components/svg-cpn/list'
import UserImg from '@/components/svg-cpn/userImg'
import {HomeRightWraper} from './style'

const index = memo(() => {
  const [isshowList, setIsShowList] = useState(false)

  useEffect(() => {
    const handleWindowClick = () => {
      setIsShowList(false)
    }
    window.addEventListener('click',handleWindowClick,true)
    return () => {
      window.removeEventListener('click',handleWindowClick)
    }
  },[])

  return (
    <HomeRightWraper>
    <div className="login">
      <div className="login-g item">登录</div>
      <div className="regiser item">注册</div>
      <div className="international item">
        <Internat />
      </div>
    </div>
    <div className="profile" onClick={() => {
      console.log(")))");
      setIsShowList(!isshowList)
    }}>
      <div className="item">
         <List />
      </div>
      <div className="item">
         <UserImg />
      </div>

    {
      isshowList && ( 
      <div className="list" >
        <div className="item">注册</div>
        <div className='item'>登录</div>
        <div className="line"></div>
        <div className="item">出租房源</div>
        <div className="item">开展体检</div>
        <div className="item">帮助</div>
      </div>)
    }
    </div>

 
  </HomeRightWraper>
  )
})

export default index