import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { memo, useEffect, useState } from 'react'
import {NavFilterWrapper} from './style'

const index = memo((props) => {
  const { keyList } = props
  const [selectKeyArr,setSelectKeyArr] = useState([])

  const selectKeys = (item) => {
    const newArr = [...selectKeyArr]
    if (newArr.includes(item)) {
      const index = newArr.findIndex(jtem => jtem === item)
      newArr.splice(index,1)
    } else {
      newArr.push(item)
    }
    setSelectKeyArr(newArr)
  }

  return (
    <NavFilterWrapper>
      <div className="key-list">
        {
          keyList.map((item,index) => (
            <div className={classNames("key-item",{active: selectKeyArr.includes(item)})} 
                 key={index} 
                 onClick={e => selectKeys(item)} >
              <span>{item.name}</span>
            </div>
          ))
        }
      </div>
    </NavFilterWrapper>
  )
})

index.propTypes = {
  keyList: PropTypes.array
}

export default index