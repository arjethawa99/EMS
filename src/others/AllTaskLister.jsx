import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

const AllTaskLister = () => {
    const AuthDataLister = useContext(AuthContext)
    // console.log(AuthDataLister.employeeData);

    return (
        <div id='taskLister' className='bg-[#1c1c1c] p-5 rounded mt-5'>
            <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
                <h3 className='text-lg font-medium w-1/5'>UserName</h3>
                <h3 className='text-lg font-medium w-1/5'>New Task</h3>
                <h3 className='text-lg font-medium w-1/5'>Active Task</h3>
                <h3 className='text-lg font-medium w-1/5'>Complete Task</h3>
                <h3 className='text-lg font-medium w-1/5'>Failed Task</h3>
            </div>
            <div className='bg-[#1c1c1c]'>
                {
                    AuthDataLister.employeeData.map((element,index) => {
                        return <div className='mb-2 py-2 px-4 flex justify-between rounded overflow-auto border-2 border-emerald-500' key={index}>
                            <h3 className='text-lg font-medium w-1/5'>{element.firstname}</h3>
                            <h3 className='text-blue-700 text-lg font-medium w-1/5'>{element.new_count}</h3>
                            <h3 className='text-yellow-500 text-lg font-medium w-1/5'>{element.active_count}</h3>
                            <h3 className='text-green-500 text-lg font-medium w-1/5'>{element.complete_count}</h3>
                            <h3 className='text-red-600 text-lg font-medium w-1/5'>{element.failed_count}</h3>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default AllTaskLister