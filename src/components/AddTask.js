import React from 'react';
import { FiPlus } from 'react-icons/fi'


const AddTask = ({ createTodo, title, setTitle, date, setDate, description, setDescription, addFile }) => {
    return (
        <form className='add' onSubmit={createTodo}>

            <input className='add__input' type='text' placeholder='Новая задача' value={title} onChange={e => setTitle(e.target.value)} />
            <textarea className='add__input' type='text' placeholder='Описание' value={description} onChange={e => setDescription(e.target.value)} />
            <input className='add__input add__date' accept='image/gif, image/jpeg, image/png' type='date' placeholder='Дата завершения' value={date} onChange={e => setDate(e.target.value)} />
            <input type='file' onChange={addFile} />
            <button className='add__btn'>
                <span className='add__icon'>
                    <FiPlus className='add__plus' size={26} />
                </span>
                Создать
            </button>
        </form>
    );
};

export default AddTask;