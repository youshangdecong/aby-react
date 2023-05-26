import React, { memo } from 'react'
import { FooterWraper } from './style'
import FooterContentInfo from './c-cpns/footer-contentinfo'
import FooterBusiness from './c-cpns/footer-business'

const footer = memo(() => {
  return (
    <FooterWraper>
      <div className="wrap">
        <FooterContentInfo />
        <FooterBusiness />

      </div>
    </FooterWraper>
  )
})

export default footer