import { addItem, removeItem, updateItem } from '../events/todo-events';
import { describe, expect, jest, test } from '@jest/globals';

const dummyItem = {
  id: 1,
  timestamp: Date.now(),
  title: 'dummy',
  description: 'summy',
  status: false,
};
// TODO:  mock window var
describe('Todo Event Emmitters', () => {

  test('should emit add event', () => {
    const dispatchEventSpy = jest.spyOn(window, 'dispatchEvent');
    addItem(dummyItem);
    expect(dispatchEventSpy).toHaveBeenCalled();
  });

  test('should emit remove event', () => {
    const dispatchEventSpy = jest.spyOn(window, 'dispatchEvent');
    removeItem(dummyItem);
    expect(dispatchEventSpy).toHaveBeenCalled();
  });

  test('should emit update event', () => {
    const dispatchEventSpy = jest.spyOn(window, 'dispatchEvent');
    updateItem(dummyItem);
    expect(dispatchEventSpy).toHaveBeenCalled();
  });
})