import React, { memo } from 'react'
import PropTypes from 'prop-types'
import {AreaHeaderWraper} from './style'

const index = memo((props) => {
  const { title, subtitle } = props
  return (
    <AreaHeaderWraper>
      <h3 className='title'>{title}</h3>
      {
        subtitle && <div className='sub_title'>{subtitle}</div>
      }
    </AreaHeaderWraper>
  )
})
index.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default index

