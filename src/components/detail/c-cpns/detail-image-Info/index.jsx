import PropTypes from 'prop-types'
import React, { memo,useState } from 'react'
import { useSelector,shallowEqual } from 'react-redux'


import {DetailImageInfoWrapper} from './style'
import ImgTool from '@/base-ui/img-tool'


const index = memo((props) => {

  const { id } = props
  const [showImgTool, setShowImgTool] = useState(false)
  const { entireInfo } =  useSelector((state) => ({
    entireInfo: state.entire.entireInfo
  }), shallowEqual)
  
  const detailInfo = entireInfo.list.find((item) => item.id === id)
  const imgList = detailInfo.picture_urls

  const closeShowClick = () => {
    setShowImgTool(false)
  }

  return (
    <DetailImageInfoWrapper>
      <div className="image-d" onClick={() => setShowImgTool(true)}>
        <div className="left">
          <img src={imgList[0]} alt="" />
          <div className="cover"></div>
        </div>
        <div className="right">
          {
            imgList.slice(1,5).map(item => (
              <div key={item} className="img-item">
                <img src={item} alt="" />
                <div className="cover"></div>
              </div>
            ))
          }
        </div>
      </div>
      

      {
        showImgTool && 
        <div className="img-detail">
          <ImgTool imgList={imgList} closeShowClick={closeShowClick}></ImgTool>
        </div>
      }
  </DetailImageInfoWrapper>
  )
})

index.propTypes = {}

export default index