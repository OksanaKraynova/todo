import React from 'react';

const Title = ({ todos }) => {
    return (
        <div className='title'>
            <h2 className='title__main'>Список задач  </h2>
            {todos.length ? 
            <p className='title__counter'>Задач в вашем списке: {todos.length}</p> :
            <p className='title__counter'> Ваш список пуст</p>  }

        </div>
    );
};

export default Title;