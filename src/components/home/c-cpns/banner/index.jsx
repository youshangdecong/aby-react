import React, { memo } from 'react'
import { HomeBannerWraper } from './style'

const index = memo(() => {
  return (
    <HomeBannerWraper>
      <div className="bg-img"></div>
    </HomeBannerWraper>
  )
})

export default index