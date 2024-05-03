import { ITodoItem } from '@repo/definitions';

export const todoMock: ITodoItem[] = [
    {
        id: 1,
        title: 'Buy Milk',
        description: 'Go to store and buy 2 milk units',
        timestamp: Date.now(),
        status: true,
    },
    {
        id: 2,
        title: 'Buy Fruits',
        description: 'Go to store and buy some fruits except grapes',
        timestamp: Date.now(),
        status: true,
    },
    {
        id: 3,
        title: 'Buy Vegetables',
        description: 'Go to store and buy fresh vegetables.',
        timestamp: Date.now(),
        status: true,
    },
    {
        id: 4,
        title: 'Pay bills',
        description: 'Check pending bills to pay',
        timestamp: Date.now(),
        status: false,
    },
    {
        id: 5,
        title: 'Visit Mom',
        description: 'Visit mom this weekend. Buy some food.',
        timestamp: Date.now(),
        status: false,
    }
]