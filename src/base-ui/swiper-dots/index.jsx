import classNames from 'classnames'
import React, { memo, useRef } from 'react'
import { SwiperDotsWrapper } from './style'


const index = memo((props) => {
  const {currentIndex = 0, children,imgLength } = props
  const listRef = useRef()
  // 为了保留上一次的translate
  const transRef = useRef()
  // const translateX = listRef.current
  // 默认值为0
  transRef.current =  transRef.current ?? 0

  const currentItemOffset = listRef.current?.children[currentIndex].offsetLeft
  const currentItemWidth = listRef.current?.children[currentIndex].offsetWidth
  const listWidth = listRef.current?.offsetWidth
  const listScrollWidth = listRef.current?.scrollWidth
  //求出当前的index应该滚动的区域, 保证元素必在最中间
  const currentScrollx = listWidth * 0.5 - currentItemWidth * 0.5 - currentItemOffset


  if (currentItemOffset > listWidth * 0.5 &&  Math.abs(currentScrollx) < listScrollWidth - listWidth ) {
    transRef.current = currentScrollx
  }

    //如果跳到第一个，也需要移动到0
 if (currentIndex === 0  ||  currentItemOffset <= listWidth * 0.5) {
     transRef.current = 0 
  }

  if (currentIndex === imgLength -1 ||   Math.abs(currentScrollx) >= listScrollWidth - listWidth) {
    transRef.current =  listWidth - listScrollWidth
  }


  return (
    <SwiperDotsWrapper >
      <div className="list" ref={listRef} style={{'transform': `translate(${transRef.current}px)`}}>
        {
          children
        }
      </div>
    </SwiperDotsWrapper>
  )
})

index.propTypes = {}

export default index