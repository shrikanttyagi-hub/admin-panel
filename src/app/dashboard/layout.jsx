import React from 'react'
import Sidebar from '../ui/sidebar/sidebar'

const layout = ({children}) => {
  return (
    <div className='flex gap-[15px]'>
      <div className='flex-2'>
        <Sidebar />
      </div>

      <div className='flex-8'>
        {children}
      </div>
      
    </div>
  )
}

export default layout
