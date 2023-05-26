import React, { memo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { DetailWrapper } from './style'
import DetailImageInfo from './c-cpns/detail-image-Info'
import { useDispatch } from 'react-redux'
import { changeIsFiexd } from '@/store/modules/main'
import { useEffect } from 'react'

const index = memo(() => {
  const { id } = useParams()
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(changeIsFiexd(false))
  }, [dispatch])

  return (
    <DetailWrapper>
      <DetailImageInfo id={id} />
    </DetailWrapper>
  )
})

export default index