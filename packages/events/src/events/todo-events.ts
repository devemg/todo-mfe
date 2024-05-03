import { ITodoItem, TodoEvent } from '@repo/definitions';

export const addItem = (item: ITodoItem) => {
    const event = new CustomEvent(TodoEvent.ADD, { detail: item });
    window?.dispatchEvent(event);
}

export const removeItem = (item: ITodoItem) => {
    const event = new CustomEvent(TodoEvent.REMOVE, { detail: item });
    window?.dispatchEvent(event);
}

export const updateItem = (item: ITodoItem) => {
    const event = new CustomEvent(TodoEvent.UPDATE, { detail: item });
    window?.dispatchEvent(event);
}