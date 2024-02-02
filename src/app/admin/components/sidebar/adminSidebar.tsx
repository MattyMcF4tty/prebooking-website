import { faChartLine, faReceipt } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import React from 'react'
import SidebarButton from './adminSidebarButton'
import AdminSidebarDropdown from './adminSidebarDropdown'

const AdminSidebar = () => {
  return (
    <div className='absolute flex-col h-screen bg-white w-48 shadow-lg mt-12'>
      {/* Buttons */}
      <div className='absolute w-full top-10'>
        {/* Prebooking */}
        <div className='w-full px-2' id='prebooking'>
          <AdminSidebarDropdown text='Prebooking' pages={['List', 'Config']}/>
        </div>

        {/* Vehicles */}
        <div className='w-full px-2' id='vehicles'>
          <AdminSidebarDropdown text='Vehicles' pages={['List', 'Config',]}/>
        </div>

        {/* Social */}
        <div className='w-full px-2' id='social'>
          <AdminSidebarDropdown text='Social' pages={['Townsquare', 'Email',]}/>
        </div>
      </div>

    </div>
  )
}

export default AdminSidebar