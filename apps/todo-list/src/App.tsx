import { useState } from 'react';
import './App.css'
import { Filters } from './components/Filters/Filters';
import { TodoItem } from './components/TodoItem/TodoItem'
import { filterByStatus } from './utils/filter';
import { useTodoList } from './hooks/useTodoList';

export const App = () => {
  const [filter, setFilter] = useState('All');
  const { todoList } = useTodoList();  

  const handleFilterChange = (filter: string) => {
    setFilter(filter);
  }

  return (
    <>
    <Filters selectedFilter={filter} onFilterChange={handleFilterChange} />
      <ul className='todo-list'>
        {
          todoList.filter(el=>filterByStatus(filter, el)).map((item)=><TodoItem key={item.id} item={item} />)
        }
      </ul>
    </>
  )
}

export default App
