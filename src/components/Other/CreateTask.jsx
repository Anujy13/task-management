import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

    const [userData, setUserData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [assignTo, setAssignTo] = useState('')
    const [category, setCategory] = useState('')

    const [newTask, setNewTask] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
    
        const task = {
            taskTitle,
            taskDescription,
            taskDate,
            category,
            active: false,
            newTask: true,
            failed: false,
            completed: false,
        };
    
        const updatedData = userData.map(user => {
            if (assignTo === user.firstName) {
                const updatedUser = { ...user };
                updatedUser.tasks = [...(updatedUser.tasks || []), task];
                updatedUser.taskCount = {
                    ...updatedUser.taskCount,
                    newTask: (updatedUser.taskCount?.newTask || 0) + 1,
                };
                return updatedUser;
            }
            return user;
        });
    

        setUserData(updatedData)
        console.log(updatedData)

        setTaskTitle('')
        setTaskDescription('')
        setTaskDate('')
        setAssignTo('')
        setCategory('')
    }

    return (
        <div style={{ backgroundColor: '#2c2f2f' }} className='p-4 rounded-lg mt-4'>
            <form onSubmit={(e) => {
                submitHandler(e)
            }} className='flex flex-wrap w-full items-start justify-between'>
                <div className="w-1/2">
                    <div className='p-3'>
                        <h3 className="mb-1 text-xl font-bold">Task Title</h3>
                        <input
                            value={taskTitle}
                            onChange={(e) => {
                                setTaskTitle(e.target.value)
                            }}
                            type="text"
                            placeholder="Give task"
                            className="w-full p-2 border rounded bg-transparent"
                        />
                    </div>

                    <div className='p-3'>
                        <h3 className="mb-1 text-xl font-bold">Date</h3>
                        <input
                        value={taskDate}
                        onChange={(e) => {
                            setTaskDate(e.target.value)
                        }}
                            type="date"
                            className="w-full p-2 border rounded bg-transparent"
                        />
                    </div>

                    <div className='p-3'>
                        <h3 className="mb-1 text-xl font-bold">Assigned To</h3>
                        <input
                        value={assignTo}
                        onChange={(e) => {
                            setAssignTo(e.target.value)
                        }}
                            type="text"
                            placeholder="Employee Name"
                            className="w-full p-2 border rounded bg-transparent"
                        />
                    </div>

                    <div className='p-3'>
                        <h3 className="mb-1 text-xl font-bold">Category</h3>
                        <input
                        value={category}
                        onChange={(e) => {
                            setCategory(e.target.value)
                        }}
                            type="text"
                            placeholder="desig, dev, etc."
                            className="w-full p-2 border rounded bg-transparent"
                        />
                    </div>
                </div>



                <div className='w-1/2 flex flex-col p-3'>
                    <h3 className='text-xl font-bold'>Description</h3>
                    <textarea 
                    value={taskDescription}
                    onChange={(e) => {
                        setTaskDescription(e.target.value)
                    }}
                    name='' cols={10} rows={10} className='mt-2 border border-gray-300 resize-none focus:outline-none p-2  bg-transparent'></textarea>
                    <button className="bg-green-500 text-white px-4 py-2 rounded mt-12">Create Task</button>
                </div>

            </form>
        </div>
    )
}

export default CreateTask