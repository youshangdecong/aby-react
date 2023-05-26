import React, { memo, useCallback, useEffect } from 'react'
import { HomeWraper } from './style'
import { HomeBanner,HomeSectionV1,HomeSectionV2,HomeSectionV3,HomeSectionV4 } from './c-cpns'
import {fetchHomeData} from '@/store/modules/home'
import { useDispatch, useSelector,shallowEqual } from 'react-redux'
import { changeIsFiexd } from '@/store/modules/main'
import useScroll from '@/hooks/useScroll'

const index = memo(() => {
  const dispatch = useDispatch()
  const { homeHighscore,homeDiscount,homeRecommend,homeLongfor,homeGoodprice,homePlus } = useSelector((state) => {
    const home = state.home
    return {
        homeHighscore: home.homeHighscore,
        homeDiscount: home.homeDiscount,
        homeRecommend: home.homeRecommend,
        homeLongfor: home.homeLongfor,
        homeGoodprice: home.homeGoodprice,
        homePlus: home.homePlus,
    }
  }, shallowEqual)

  // 发送网络请求
  useEffect(() => {
    dispatch(changeIsFiexd(true))
    dispatch(fetchHomeData())
  },[])

  const objKeys = useCallback((obj) => {
    return Boolean(Object.keys(obj).length)
  },[])




  return (
    <HomeWraper>
      <HomeBanner />

      <div className="wrap">
        {/* 折扣 */}
        {objKeys(homeDiscount) && <HomeSectionV2 dataInfo={homeDiscount} />}
        {/* 探索佛山的精彩之地 */}
        {objKeys(homeRecommend) && <HomeSectionV2 dataInfo={homeRecommend} />}
        {/* 你可能想去 */}
        {objKeys(homeLongfor) && <HomeSectionV3 dataInfo={homeLongfor} />}
        {/* 高性价比 */}
        {objKeys(homeGoodprice) && <HomeSectionV1 dataInfo={homeGoodprice} />}
        {/* 高分好评 */}
        {objKeys(homeHighscore) && <HomeSectionV1 dataInfo={homeHighscore} />}
        {/* plus */}
        {objKeys(homePlus) && <HomeSectionV4 dataInfo={homePlus} />}
      </div>
    </HomeWraper>
  )
})

export default index