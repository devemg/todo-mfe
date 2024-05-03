import { ITodoItem } from '@repo/definitions';
/**
 * Filter by status
 *
 * @param filter Active | Completed | All
 * @param element 
 * @returns 
 */
export const filterByStatus = (filter: string, element: ITodoItem): boolean => {
    if (filter === 'Active') return !element.status;
    if (filter === 'Completed') return element.status;
    return true;
}