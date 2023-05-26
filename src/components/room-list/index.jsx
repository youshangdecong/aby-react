import PropTypes from 'prop-types'
import React, { memo,forwardRef,useRef } from 'react'
import { RoomListWraper } from './style'

import  RoomItem  from './cpns/room-item';


const index = memo(forwardRef((props,ref) => {
  let { listDate,itemWidth,noWrap, sliceLength } =  props

  listDate = sliceLength ? listDate.slice(0, sliceLength): listDate

  return (
    <RoomListWraper  noWrap={noWrap} ref={ref}>
    {
      listDate.map((item,index) => (
        <RoomItem key={index} itemData={item} itemWidth={itemWidth}  />
      ))
    }
  </RoomListWraper>
  )
}))

index.propTypes = {
  listDate: PropTypes.array,
  itemWidth: PropTypes.string
}

export default index