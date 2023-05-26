import React, { memo,useRef, useEffect } from 'react'
import Search from '@/components/svg-cpn/search'
import { HomeCenterWraper } from './style'
import SearchTabBar from '@/components/search-tab-bar'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { changeIsSearch } from '@/store/modules/main'
import useScroll from '@/hooks/useScroll'


const index = memo(() => {
  const { isSearch } = useSelector((state) => ({
    isSearch:  state.main.isSearch
  }), shallowEqual)

  const dispatch = useDispatch()

  const scrollYRef = useRef(0)
  const {scrollY} = useScroll()
 
  useEffect(() => {
    if (Math.abs(scrollY - scrollYRef.current) > 50) dispatch(changeIsSearch(false))
  },[scrollY])

  const showSearchDetail = () => {
    dispatch(changeIsSearch(true))

    scrollYRef.current = scrollY
  }

  return (
    <HomeCenterWraper >
      {
        !isSearch ?  
          (<div className="search"  onClick={showSearchDetail}>
            <div className="text">搜索房源和体验</div>
            <div className="search-btn">
              <Search />
            </div>
          </div> ) 
        : 
          (<div className="search-detail">
              <SearchTabBar />
          </div>)
      }
      
  </HomeCenterWraper>
  )
})

export default index