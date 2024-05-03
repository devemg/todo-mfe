export const saveInStorage = (elements: any) => {
    localStorage.setItem('todolist', JSON.stringify(elements));
}

export const getFromStorage = () => {
    return JSON.parse(localStorage.getItem('todolist')?? '[]');
}