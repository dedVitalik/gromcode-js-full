export const getItemsList = () => {
    const elementsList = document.querySelectorAll('.technology');
    console.dir(elementsList);
    return elementsList;
}

export const getItemsArray = () => {
    const elementsList = document.querySelectorAll('.tool');
    const elementsArray = Array.from(elementsList);
    console.dir(elementsArray);
    return elementsArray;
}