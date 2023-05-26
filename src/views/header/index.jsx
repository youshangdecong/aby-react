import React, { memo, useEffect } from 'react'
import { HeaderWraper } from './style.js'
import {HeaderLeft, HeaderCenter, HeaderRight} from './c-cpns'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { changeIsSearch } from '@/store/modules/main.js'


const index = memo(() => {

  const { isSearch,isFixed } = useSelector((state) => ({
    isSearch:  state.main.isSearch,
    isFixed: state.main.isFixed
  }), shallowEqual)
  const dispatch = useDispatch()



  return (
    <HeaderWraper isFixed={isFixed}>
      <div className="top-header" >
        <div className="top-1">
          <HeaderLeft />
          <HeaderCenter />
          <HeaderRight />
        </div>

        <div className='top-2' style={{height: isSearch? '100px':'0'}}></div>
      </div>
      {
        isSearch && <div className="cover" onClick={() => dispatch(changeIsSearch(false))}></div>
      } 
    </HeaderWraper>
  )
})

export default index