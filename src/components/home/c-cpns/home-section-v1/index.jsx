import  AreaHeader  from '@/base-ui/area-header'
import React, { memo } from 'react'
import { HomeSectionV1Wraper } from './style'
import PropTypes from 'prop-types';
import RoomList from '@/components/room-list'
import More from '@/components/more'

const index = memo((props) => {
  const { dataInfo } = props

  return (
    <HomeSectionV1Wraper>
      <AreaHeader title={dataInfo.title} subtitle={dataInfo.subtitle} />
      <RoomList itemWidth="25%" listDate={dataInfo.list} sliceLength={8} />
      <More/>
    </HomeSectionV1Wraper>
  )
})
index.propTypes  = {
  dataInfo: PropTypes.object
}

export default index
