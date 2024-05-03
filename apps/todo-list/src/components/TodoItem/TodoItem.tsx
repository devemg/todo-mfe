import { ITodoItem } from '@repo/definitions';
import { useState } from "react";
import './TodoItem.css';
import { updateItem } from '@repo/events';

type TodoItemProps = {
  item: ITodoItem;
}

export const TodoItem: React.FC<TodoItemProps> = ({ item }) => {
  const [isChecked, setIsChecked] = useState(item.status);

  const handleChange = () => {
    setIsChecked(!item.status);
    updateItem({...item, status: !item.status});
  }

  return (
    <li className={['todo-item', item.status ? 'completed' : ''].join(' ')}>
      <div className="todo-item-header">
        <div>
        <p className="todo-item-title">{item.title}</p>
        <p className="todo-item-time">Created at { new Date(item.timestamp).toDateString() }</p>
        </div>
        <div>
          <input className="todo-item-checkbox" checked={isChecked} onChange={handleChange} type="checkbox" name="state" id="item-state" />
        </div>
      </div>
      <hr />
      <p className="todo-item-description">{item.description}</p>
    </li>
  )
}
