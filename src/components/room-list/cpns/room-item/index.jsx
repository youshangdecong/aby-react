import PropTypes from 'prop-types'
import React, { memo,useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'antd';
import Rating from '@mui/material/Rating';
import classNames from 'classnames';


import AllrowLeft from '@/components/svg-cpn/allrow-left';
import AllrowRright from '@/components/svg-cpn/allrow-right';
import { RoomItemWrapper } from './style'
import SwiperDots from '@/base-ui/swiper-dots'
import { useState } from 'react';


const index = memo((props) => {
  const { itemData,itemWidth } = props
  const swiperRef = useRef()
  const changeSwiper = (e,flag = true) => {
    e.stopPropagation()

    const swiperEl = swiperRef.current
    flag?  swiperEl.next(): swiperEl.prev()
   
  }

  const [currentIndex, setCurrentIndex] = useState(0)
  const getCurrentIndex = (from, to) => {
    setCurrentIndex(to)
  }

  const router = useNavigate()
  const goDetailPage = (id) => {
    // useNavigate()
    router(`/detail/${id}`)
  }

  // 用轮播点组件的插槽


  return (
    <RoomItemWrapper itemWidth={itemWidth}>      
       {
        !itemData.picture_urls?.length ?    
        <div className="cover-img"><img className='img' src={itemData.picture_url} alt="" /></div>  
        : 
        <div className="swiper" onClick={() => goDetailPage(itemData.id)}>
          <Carousel ref={swiperRef} dots={false} beforeChange={getCurrentIndex}>
            {
              itemData.picture_urls.map(itemData => (
                <div className='cover-img' key={itemData}>
                  <img  src={itemData} alt="" />
                </div>
              ))
            }
          </Carousel>
          <div className="left-arrow" onClick={e => changeSwiper(e,false)}>
            <AllrowLeft width="30" height="30" />
          </div>
          <div className="right-arrow" onClick={e => changeSwiper(e,true)}>
            <AllrowRright  width="30" height="30" />
          </div>
          
          <div className="swiper-dots">
              <SwiperDots imgLength={itemData.picture_urls.length} currentIndex={currentIndex} >
                {
                  itemData.picture_urls.map((item,index) => 
                    <i key={item} className={classNames('dot-item',{'active': index === currentIndex})}></i>
                  )
                }
              </SwiperDots>
          </div>
       
        </div>
       }

      <div className="label">
        {itemData.verify_info.messages.join('·')}
      </div>
      <div className="title">{itemData.name}</div>
      <div className="price">{itemData.price_format} /晚</div>
      <div className='rating'>
       <Rating name="read-only"  
               style={{fontSize: '12px',color:'rgb(0, 132, 137)'}}  
               value={itemData.star_rating || 5} 
               precision={0.1} 
               readOnly />
        <span className='bottom-i'>{itemData.reviews_count}</span>
        {
          itemData.bottom_info &&
          <span className='bottom-i' style={{color: itemData.bottom_info.content_color}}>{itemData.bottom_info.content}</span>
        }
      </div>
    </RoomItemWrapper>
  )
})

index.propTypes = {
  itemData: PropTypes.object,
  itemWidth: PropTypes.string
}

export default index