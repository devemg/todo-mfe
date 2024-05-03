import Create from 'create/App';
import List from 'list/App';
import './App.css';

function App() {
  // const [todoList, setTodoList] = useState<any[]>(getFromStorage());
  
  // const handleAddItem = (data: any) => {
  //   const newList = [...todoList, {...data, timestamp: Date.now(), id: Date.now() * Math.random() }];
  //   setTodoList(newList);
  //   saveInStorage(newList);
  // }

  // const handleUpdateItem = (data: any) => {
  //   const newList = todoList.map(element=> {
  //     if (element.id === data.id) {
  //       return {...data};
  //     }
  //     return element;
  //   });
  //   setTodoList(newList);
  //   saveInStorage(newList);
  // }

  return (
    <div className="app">
        <div className="app-create">
          <Create/>
        </div>
        <div className="app-list">
          <List/>
        </div>
    </div>
  );
}

export default App;