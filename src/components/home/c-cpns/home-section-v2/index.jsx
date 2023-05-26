import  AreaHeader  from '@/base-ui/area-header'
import React, { memo, useCallback,useState,useRef } from 'react'
import { HomeSectionV2Wraper } from './style'
import PropTypes from 'prop-types';
import RoomList from '@/components/room-list'
import NavList from '@/components/nav-list'
import ScrollView from '@/base-ui/scroll-view'
import More from '@/components/more'


const index = memo((props) => {
  const { dataInfo } = props
  const navList =  Object.keys(dataInfo.dest_list)
  const [currentItem, setCurrentItem] = useState(navList[0])
  const changeItem = useCallback((item) => {
    setCurrentItem(item)
  },[])

  const navElRef = useRef()
  
  return (
    <HomeSectionV2Wraper>
      <AreaHeader title={dataInfo.title} subtitle={dataInfo.subtitle} />
      <ScrollView>
        <NavList ref={navElRef} listData={navList} changeItem={changeItem} currentItem={currentItem} />
      </ScrollView>

      <RoomList itemWidth="33.33%" listDate={dataInfo.dest_list[currentItem]} />
      <More title={currentItem} />

    </HomeSectionV2Wraper>
  )
})
index.propTypes  = {
  dataInfo: PropTypes.object
}

export default index
