import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { IndicatorWrapper } from './style'

const index = memo((props) => {
  return (
    <IndicatorWrapper>index</IndicatorWrapper>
  )
})

index.propTypes = {}

export default index