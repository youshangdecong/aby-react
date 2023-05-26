import PropTypes from 'prop-types'
import React, { memo,useRef } from 'react'
import { HomeSectionV4 } from './style'

import AreaHeader from '@/base-ui/area-header'
import RoomList from '@/components/room-list'
import ScrollView from '@/base-ui/scroll-view'
import More from '@/components/more'

const index = memo((props) => {
  const {dataInfo } = props
  const listRef = useRef()
  return (
    <HomeSectionV4>
      <AreaHeader title={dataInfo.title} subtitle={dataInfo.subtitle} />

      <ScrollView>
        <RoomList listDate={dataInfo.list} noWrap={true}  ref={listRef} />
      </ScrollView>
      <More title={dataInfo.type} />
    </HomeSectionV4>
  )
})

index.propTypes = {
  dataInfo: PropTypes.object
}

export default index