import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'



const Dashbord = () => {
  return (
    <>
      <Sidebar />
      <div className="container d-flex justify-content-end">
        <div className="col-8">Dashboard</div>
      </div>
    </>
  )
}

export default Dashbord
