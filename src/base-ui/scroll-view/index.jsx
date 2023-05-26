import React, { memo,useState,useRef } from 'react'
import {ScrollViewWraper} from './style'

import AllrowLeft from '@/components/svg-cpn/allrow-left'
import AllrowRright from '@/components/svg-cpn/allrow-right'

const index = memo((props) => {
  const {children}  = props
  const [isShowLeft, setIsShowLeft] = useState(false)
  const [isShowRight, setIsShowRight] = useState(true)

  const currentIndex = useRef()
  currentIndex.current = currentIndex.current || 0

  const nextSetOf = (flag = true) => {
    currentIndex.current = flag ? currentIndex.current + 1 : currentIndex.current - 1 
    const index =  currentIndex.current
    const navEl = children.ref.current

    const tanslateX = navEl.children[index].offsetLeft
    navEl.style.transform = `translateX(${-tanslateX}px)`


    const currentWidth = navEl.scrollWidth - tanslateX 
    // 原来的宽度 - 被滚动的宽度 = 剩下的宽度

    //剩下的宽度和 元素的overflow的宽度进行比较，如果大于就显示右箭头，如果小于就隐藏左箭头
    if (currentWidth >  navEl.offsetWidth) {
      setIsShowRight(true)
    } else {
      setIsShowRight(false)
    }

    //只有index为0时才会被 左上一次被隐藏
    setIsShowLeft(true)
    if (index === 0) {
      setIsShowLeft(false)
    }
  }

  return (
    <ScrollViewWraper>
      {
        isShowLeft && 
        <div className='al-left' onClick={() => nextSetOf(false)}><AllrowLeft /></div>
      }
      {
        isShowRight && 
        <div className='al-right' onClick={() => nextSetOf(true)}><AllrowRright /></div>
      }

      <div className="scroll-content">
        {children}
      </div>
    </ScrollViewWraper>
  )
})

export default index