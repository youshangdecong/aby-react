import PropTypes from 'prop-types'
import React, { memo,forwardRef } from 'react'
import { NavListWraper } from './style'
import classNames from 'classnames';

const index = memo(forwardRef((props,ref) => {
  const { listData, currentItem, changeItem} = props
    return (
      <NavListWraper>
         <div className="content" ref={ref}>
         { listData.map(item =>( 
            <div onClick={() => changeItem(item)} key={item} className={classNames("nav-item",{active: currentItem === item})}>{item}</div>
          ))}
         </div>
      </NavListWraper>
    )
  }))

index.propTypes = {
  listData: PropTypes.array
}

export default index