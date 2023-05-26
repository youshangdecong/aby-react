import PropTypes from 'prop-types'
import React, { memo,useState } from 'react'
import { SearchTabBarWraper } from './style'
import searchInfo  from '@/assets/data/searchInfo.json'
import classNames from 'classnames'

const index = memo((props) => {

  const [currentIndex, setCurrentIndex] = useState(0)

  const changeIndex = (index) => {
    setCurrentIndex(index)
  }

  return (
    <SearchTabBarWraper>  
      <div className="tab-hd">
          {
            searchInfo.map((item,index) =>  
            <div onClick={() => changeIndex(index)} 
                 key={item.title}
                 className={classNames({'active': currentIndex === index})}>    
                {item.title}          
            </div> 
            )
          }
         
      </div>

      <div className="tab-bd">
          {
            searchInfo[currentIndex].searchInfos.map(item => (
              <div className="tab-bd-item" key={item.title}>
                <div className="title">{item.title}</div>
                <div className="subtitle">{item.desc}</div>
              </div>
            ))
          }
      </div>
    </SearchTabBarWraper>
  )
})

index.propTypes = {}

export default index