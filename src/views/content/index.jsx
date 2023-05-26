import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import routes  from '@/router'

const content = memo(() => {
  return (
    <div>
      {
        useRoutes(routes)
      }
    </div>
  )
})

export default content