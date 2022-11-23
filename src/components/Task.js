import React from 'react';
import { BsTrash } from 'react-icons/bs'
import { FiPaperclip } from 'react-icons/fi'
import { IoMdClose } from 'react-icons/io'
import dayjs from 'dayjs'
const Task = ({ todo, toggleComplete, deleteTodo }) => {

    const now = dayjs().format("YYYY-MM-DD")
   
    return (
        <div className='task'>
            <button className='task__delete delete' onClick={() => deleteTodo(todo.id)}>
                <BsTrash size={16} />
            </button>

            <div className='task__column'>

                {todo.date < now ? <span className='task__elasped'><IoMdClose size={24} /></span> : <button onClick={() => toggleComplete(todo)} className={!todo.completed ? 'task__check' : 'task__check task__full'}>
                </button>}
            </div>
            <div className='task__column task__main'>
                <div className='task__row'>
                    <span className={!todo.completed ? 'task__title' : 'task__title task__end'}>{todo.title}</span>
                </div>
                <div className='task__row'>
                    <div className='task__column'>
                        <p className='task__context'>{todo.description}</p>
                        <div className='task__data'>{todo.date}</div>
                    </div>

                    <div className='task__files'>
                        {todo.file && <img alt={todo.title} src={todo.file} />}
                    </div>

                </div>

            </div>


        </div>
    );
};

export default Task;