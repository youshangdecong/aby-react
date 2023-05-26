import PropTypes from 'prop-types'
import React, { memo, useEffect, useState } from 'react'
import { ImgToolWrapper }from './style'
import Cancel from '@/components/svg-cpn/cancel'
import BtnLeft from '@/components/svg-cpn/btn-left'
import BtnRight from '@/components/svg-cpn/btn-right'
import { SwitchTransition,CSSTransition } from 'react-transition-group'
import SwiperDots from '@/base-ui/swiper-dots'
import classNames from 'classnames'



const index = memo((props) => {
  const { imgList,closeShowClick } = props
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isNextImg, setIsNextImg] = useState(true)
  const [ isshowImgList, setisShowImgList] = useState(true)
  //进入图片浏览器的时候，需要关闭滚动功能
  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'auto'
    }
  },[])


  const changeImg = (isNext = true) => {
    let index = isNext ? currentIndex + 1 : currentIndex - 1
    if (index > imgList.length - 1) index = 0 ;
    if (index < 0) index = imgList.length - 1 ;
    
    setIsNextImg(isNext)
    setCurrentIndex(index)
  }

  const selectImg = (index) => {
    index > currentIndex ?  setIsNextImg(true) : setIsNextImg(false)
    setCurrentIndex(index)
  }

  const showImgList = () => {
    setisShowImgList(!isshowImgList)
  }

  return (
    <ImgToolWrapper isNextImg={isNextImg}  isshowImgList={isshowImgList}>
      <div className="top">
        <div className="cancel" onClick={() => closeShowClick()}>
          <Cancel/>
        </div>
      </div>

      <div className="slider">
        <div className="left" onClick={() => changeImg(false)}>
          <BtnLeft/>
        </div>
        <div className="content">
          {
            imgList?.length && 
            <SwitchTransition mode='in-out'>
              <CSSTransition key={currentIndex} timeout={200} classNames='fade'>
                <img src={imgList[currentIndex]} alt="" />
              </CSSTransition>
            </SwitchTransition>
          }
        </div>
        <div className="right" onClick={() => changeImg()}>
          <BtnRight/>
        </div>
      </div>
      
      <div className="bottom-img-detail">
        <div className="content">
            <div className='info'>
              <div className="left">
                {currentIndex + 1}/ {imgList.length} : 图片
              </div>
              <div className="right" onClick={() => showImgList()}>
                隐藏照片列表
              </div>
            </div>

            <div className="dot-box">
              <SwiperDots currentIndex={currentIndex} imgLength={imgList.length}>
                        {
                          imgList && imgList.map((item,index) => (
                            <div className={classNames("img-item",{'active':index === currentIndex})} 
                                key={item}
                                onClick={() => selectImg(index)}
                                  >
                              <img src={item} alt="" />
                            </div>
                          ))
                        }
              </SwiperDots>
            </div>
        </div>
      </div>
   
    </ImgToolWrapper>
  )
})

index.propTypes = {
  imgList: PropTypes.array
}

export default index