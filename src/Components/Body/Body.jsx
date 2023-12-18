import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Contents from '../Maincontent/Plans'

function Body() {
  return (
    <div className='body'>
        <Sidebar/>
        <Contents/>
    </div>
  )
}

export default Body