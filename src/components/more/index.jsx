import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { MoreWrapper } from './style'
import AllrowRright from '@/components/svg-cpn/allrow-right'
import { useNavigate } from 'react-router-dom'


const index = memo((props) => {

  const { title } = props
  const navigate = useNavigate()

  function goEntirePage() {
    navigate('/entire')
  }
  return (
    <MoreWrapper>
       <div className='more' onClick={goEntirePage}>
        {
          title ? <h3 className='active'>显示更多{title}房源</h3> : <h3>显示全部</h3>
        }
        <AllrowRright width='10' height='10' /> 
      </div>
    </MoreWrapper>
  )
})

index.propTypes = {
  title: PropTypes.string
}

export default index