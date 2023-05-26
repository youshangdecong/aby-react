import PropTypes from 'prop-types'
import React, { memo } from 'react'
import {EntireContentWrapper} from './style'
import RoomList from '@/components/room-list'

const index = memo((props) => {
  const { entireInfo,isShowCover } = props
  return (
    <EntireContentWrapper>
      <h3>{entireInfo.totalCount}多处住所</h3>

      <RoomList listDate={entireInfo.list} itemWidth="20%" />

      {
        isShowCover && <div className="cover"></div>
      }
    </EntireContentWrapper>
  )
})

index.propTypes = {
  entireInfo: PropTypes.object
}

export default index