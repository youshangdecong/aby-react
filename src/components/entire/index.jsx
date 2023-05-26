import React, { memo, useEffect } from 'react'
import {EntireWrapper} from './style'
import filterData from '@/assets/data/filterKey.json'
import { shallowEqual, useDispatch,useSelector } from 'react-redux'
import { asyncChangeEntireInfo, changePage } from '@/store/modules/entire/createAction'
import { NavFilter,EntireContent,EntirePagination } from './cpns'
import { isEmptyObj } from '@/utils/isEmptyObj'
import { changeIsFiexd } from '@/store/modules/main'
import cache from '@/utils/cache'


const index = memo((props) => {

  const dispatch = useDispatch()
  const {entireInfo,isShowCover,page,size} = useSelector((state) =>  ({
      entireInfo: state.entire.entireInfo,
      isShowCover: state.entire.isShowCover,
      page: state.entire.page,
      size: state.entire.size
    }),shallowEqual)

  useEffect(() => {

    dispatch((changeIsFiexd(true)))
    dispatch(changePage(cache.get('page') ?? page))
    dispatch(asyncChangeEntireInfo())

    return () => {
      cache.remove('page')
      dispatch(changePage(1))
    }
  },[dispatch,page])

  return (
    <EntireWrapper>
      { !!filterData.length && <NavFilter keyList={filterData} />}

      {isEmptyObj(entireInfo) && <EntireContent isShowCover={isShowCover} entireInfo={entireInfo} />}
      {
        <EntirePagination page={page} size={size} total={entireInfo.totalCount} />
      }
    </EntireWrapper>
  )
})



export default index