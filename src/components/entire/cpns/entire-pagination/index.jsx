import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { Pagination } from 'antd';
import { EntirePaginationWrapper } from './style'
import { useDispatch } from 'react-redux';
import { asyncChangeEntireInfo,changePage } from '@/store/modules/entire/createAction';
import cache from '@/utils/cache'

const index = memo((props) => {
  const { total,page, size} = props
  const dispatch = useDispatch()

  const ChangeFn = (page) => {
    dispatch(changePage(page))
    dispatch(asyncChangeEntireInfo())
    cache.set('page', page)
    window.scrollTo(0,0)
  }

  return (
      <EntirePaginationWrapper >
        <div className='pagination'>
        <Pagination 
                    onChange={ChangeFn}
                    showSizeChanger={false}
                    current={page}
                    pageSize={size}
                    total={total}
        />
           <div className="desc">
          第{(page - 1) * size + 1} - {page *  size}个房源，共超过{total}个
        </div>
        </div>
     

      </EntirePaginationWrapper>
  )
})

index.propTypes = {}

export default index