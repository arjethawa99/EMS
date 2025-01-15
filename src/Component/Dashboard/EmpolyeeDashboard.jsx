import React from 'react'
import Header from '../../others/Header'
import TaskPanel from '../../others/TaskPanel'
import TaskLister from '../TaskList/TaskLister'

const EmpolyeeDashboard = (props) => {
  // console.log(data);
  
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
        <Header changeUSer={props.changeUSer} data={props.data}/>
        <TaskPanel data={props.data}/>
        <TaskLister data={props.data}/>
    </div>
  )
}

export default EmpolyeeDashboard