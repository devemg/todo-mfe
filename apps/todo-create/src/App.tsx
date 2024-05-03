import './App.css';
import { useForm, SubmitHandler } from 'react-hook-form';
import { addItem } from '@repo/events';
type TodoForm = {
  title: string;
  description: string;
};

export const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TodoForm>();
  
  const onSubmit: SubmitHandler<TodoForm> = (data) => {
    addItem({...data, timestamp: Date.now(), id: Date.now() * Math.random(), status: false })
  }

  return (
    <div className="todo-create">
      <h1>Create a new Task</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="todo-create-input"
          type="text"
          placeholder="Title"
          role='textbox'
          {...register('title', { required: true })}
        />
        {errors.title && <p className="todo-create-error">Title is required</p>}
        <textarea
          className="todo-create-input"
          placeholder="Description..."
          role='textbox'
          rows={3}
          {...register('description')}
        ></textarea>
        <button className="todo-create-submit" type="submit" role='button'>
          Save
        </button>
      </form>
    </div>
  );
}

export default App;
