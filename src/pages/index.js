import React, { useState } from 'react';
import List from '../components/list';

function Todo(){
    const [task, setTask] = useState('');
    const [list, setList] = useState([]);

    const handlerChangeInput = (event) => setTask(event.target.value);

    const handlerAddItemToList = (event) => {
        event.preventDefault();
        if(task != ''){
            setList([...list, task]);
        }
        setTask('');
    }

    return (
        <div className='todo-wrapper'>
            <h1>Todo List</h1>
            <form>
                <input
                    type='text'
                    placeholder='Incluir nova tarefa'
                    value={task}
                    onChange= {handlerChangeInput}
                />
                <button
                    type='submit'
                    onClick={handlerAddItemToList}
                >Inserir</button>
            </form>
            <List list={list} />
        </div>
    );
}

export default Todo;

