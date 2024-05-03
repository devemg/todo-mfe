import { ITodoItem } from "@repo/definitions";
import { addListeners } from "@repo/events";
import { useEffect, useState } from "react";
import { getFromStorage, saveInStorage } from "../utils/storage";

export const useTodoList = () => {
  const [todoList, setTodoList] = useState<ITodoItem[]>(getFromStorage());

  useEffect(() => {
    const removeListeners = addListeners(
      (item) => { // ON ADD
        setTodoList((prev) => [...prev, item]);
      },
      () => { // ON READ
        setTodoList(getFromStorage());
      },
      (item) => { // ON UPDATE
        setTodoList((prevList)=> {
          return prevList.map(element=> {
            if (element.id === item.id) {
              return {...item};
            }
            return element;
          });
        });
        // 
      },
      (item) => { // ON DELETE
        setTodoList((prev) => prev.filter(element=>element.id !== item.id));
      }
    );
    return () => {
      removeListeners();
    };
  }, []);

  useEffect(() => {
    saveInStorage(todoList);
  }, [todoList]);
  
  return {
    todoList,
  };
};
