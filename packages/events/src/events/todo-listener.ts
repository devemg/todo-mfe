import { ITodoItem, TodoEvent } from "@repo/definitions"

export const addListeners = (
    addCallback: (item: ITodoItem)=>void,
    readCallback: ()=>void,
    updateCallback: (item: ITodoItem)=>void,
    removeCallback: (item: ITodoItem)=>void,
) => {

    const add = (event: any)=> addCallback(event.detail as ITodoItem);
    const read = ()=> readCallback();
    const update = (event: any)=> updateCallback(event.detail as ITodoItem);
    const remove = (event: any)=> removeCallback(event.detail as ITodoItem);
    
    window.addEventListener(TodoEvent.ADD, add);
    window.addEventListener(TodoEvent.READ, read);
    window.addEventListener(TodoEvent.UPDATE, update);
    window.addEventListener(TodoEvent.REMOVE, remove);

    return ()=> {
        window.removeEventListener(TodoEvent.ADD, add);
        window.removeEventListener(TodoEvent.READ, read);
        window.removeEventListener(TodoEvent.UPDATE, update);
        window.removeEventListener(TodoEvent.REMOVE, remove);
    }
}