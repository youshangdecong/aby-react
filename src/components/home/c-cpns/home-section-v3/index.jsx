
import PropTypes from 'prop-types'
import React, { memo, useRef } from 'react'
import { HomeSectionV3Wrappre } from './style'
import AreaHeader from '@/base-ui/area-header'
import ScrollView from '@/base-ui/scroll-view'

const index = memo((props) => {

  const { dataInfo } = props
  const cityRef = useRef()
  return (
    <HomeSectionV3Wrappre>
      <AreaHeader title={dataInfo.title} subtitle={dataInfo.subtitle} />

      <ScrollView >
      <div className="city_list" ref={cityRef}>
        {
          dataInfo.list.map(item => (
            <div className="city_item" key={item.city}>
              <div className="content">
                <img src={item.picture_url} alt="" />          
                <div className="info">
                  <div className="city">{item.city}</div>
                  <div className="price">均价 {item.price}</div>
                </div>
                <div className="cover"></div>
              </div>
            </div>
          ))
        }
      </div>
      </ScrollView>

    </HomeSectionV3Wrappre>
  )
})

index.propTypes  = {
  dataInfo: PropTypes.object
}

export default index