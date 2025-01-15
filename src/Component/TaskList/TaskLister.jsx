import React from 'react'
import AcceptList from './AcceptList'
import Complete from './Complete'
import Failed from './Failed'
import NewList from './NewList'

const TaskLister = ({ data }) => {
    return (
        <div id='taskLister' className='h-[55%] overflow-x-auto w-full flex items-center justify-start gap-5 flex-nowrap py-5 px-10 mt-10'>
            {/* <AcceptList />
            <Complete />
            <Failed />
            <NewList /> */}
            {data.tasks.map((element, idValue) => {
                if (element.activeTask) {
                    return <AcceptList key={idValue} data={element} />
                }
                if (element.newTask) {
                    return <NewList key={idValue} data={element} />
                }
                if (element.complete) {
                    return <Complete key={idValue} data={element} />
                }
                if (element.failed) {
                    return <Failed key={idValue} data={element} />
                }
            })}
        </div>
    )
}

export default TaskLister