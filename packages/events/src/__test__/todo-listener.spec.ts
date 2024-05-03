import { TodoEvent } from '@repo/definitions';
import { addItem, removeItem, updateItem } from '../events/todo-events';
import { addListeners } from '../events/todo-listener';
import { describe, expect, jest, test, beforeAll, afterAll } from '@jest/globals';

const dummyItem = {
    id: 1,
    timestamp: Date.now(),
    title: 'dummy',
    description: 'summy',
    status: false,
};

// TODO: mock window var
describe('Todo listeners', () => {
    const add = jest.fn();
    const remove = jest.fn();
    const update = jest.fn();
    const read = jest.fn();

    let cleanup: ()=>void;

    beforeAll(() => {
        cleanup = addListeners(add, read, update, remove);
    });

    test('should trigger add callback', () => {
        addItem(dummyItem);
        expect(add).toHaveBeenCalled();
    });

    test('should trigger remove callback', () => {
        removeItem(dummyItem);
        expect(remove).toHaveBeenCalled();
    });

    test('should trigger update callback', () => {
        updateItem(dummyItem);
        expect(update).toHaveBeenCalled();
    });

    test('should trigger read callback', () => {
        window.dispatchEvent(new CustomEvent(TodoEvent.READ, {}));
        expect(read).toHaveBeenCalled();
    });
})