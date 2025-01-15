import React from 'react'
import Header from '../../others/Header'
import CreateTaskList from '../../others/CreateTaskList'
import AllTaskLister from '../../others/AllTaskLister'

const AdminDashboard = (props) => {
  const AdminData = props.data[0]
  return (
    <div className='h-screen w-full p-7'>
      <Header changeUSer={props.changeUSer} data={AdminData} />
      <CreateTaskList />
      <AllTaskLister />
    </div>
  )
}

export default AdminDashboard