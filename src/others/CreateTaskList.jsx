import { useContext, useState } from "react"
import React from 'react'
import { AuthContext } from "../context/AuthProvider"

const CreateTaskList = () => {

    const data= useContext(AuthContext)
    // console.log(data.employeeData);

    const [taskTitle, settaskTitle] = useState('')
    const [dateVal, setdateVal] = useState('')
    const [assginTo, setassginTo] = useState('')
    const [categoryVal, setcategoryVal] = useState('')
    const [discriptionVal, setdiscriptionVal] = useState('')
    const [newTask, setnewTask] = useState({});



    const submitHandlerTasker = (e) => {
        e.preventDefault();
        console.log("Form Submitted!!!");

        // console.log(taskTitle, dateVal, assginTo, categoryVal, discriptionVal);

        setnewTask({ "task_title":taskTitle, "task_date":dateVal, assginTo,"category": categoryVal, "task_description":discriptionVal, "activeTask": true, "newTask": true, "complete": false, "failed": false })
        // console.log(newTask);

        data.employeeData.forEach((elem) => {
            if (elem.firstname === assginTo) {
                elem.new_count+=1;
                elem.tasks.push({ "task_title":taskTitle, "task_date":dateVal, assginTo,"category": categoryVal, "task_description":discriptionVal, "activeTask": true, "newTask": true, "complete": false, "failed": false })//(newTask)
            }
        });
        data.setuserData({"employeeData":data.employeeData,"AdminData":data.AdminData,"setuserData":data.setuserData})//({ data["employeeData"],data["AdminData"],setuserData})//data)
        console.log(data.employeeData);

        settaskTitle('');
        setdateVal('');
        setassginTo('');
        setcategoryVal('');
        setdiscriptionVal('');
    }

    return (
        <div className='p-5 bg-[#1c1c1c] mt-5 rounded'>
            <form onSubmit={(e) => { submitHandlerTasker(e) }} className='flex flex-wrap items-start justify-between'>
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                        <input
                            value={taskTitle}
                            onChange={(e) => { settaskTitle(e.target.value) }}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
                            type="text"
                            placeholder='Enter Your Task ' />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5 '>Date</h3>
                        <input
                            value={dateVal}
                            onChange={(e) => setdateVal(e.target.value)}
                            type="Date"
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 placeholder-amber-50 placeholder-opacity-75' />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Assign To</h3>
                        <input
                            value={assginTo}
                            onChange={(e) => setassginTo(e.target.value)}
                            type="text"
                            placeholder='Enter Employee Name'
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                        <input
                            value={categoryVal}
                            onChange={(e) => setcategoryVal(e.target.value)}
                            type="text"
                            placeholder='DEV, DESIGN, ETC..'
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' />
                    </div>
                </div>
                <div className='w-2/5 flex-col items-start'>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                    <textarea
                        value={discriptionVal}
                        onChange={(e) => setdiscriptionVal(e.target.value)}
                        name="Description"
                        id="Description"
                        cols="30"
                        rows="10"
                        className='w-full h-44 py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400'></textarea>
                    <button className='bg-emerald-600 px-5 py-2 rounded text-sm mt-4 w-full'>Create Task</button>
                </div>
            </form>
        </div>
    )
}

export default CreateTaskList