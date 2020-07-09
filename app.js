// Take DOM Elements 
const listCollection = document.querySelector('.list');
const insertInput = document.querySelector('.insertInput');
const clearItem = document.querySelector('.clear_item');
const deleteBtn = document.querySelector('.delete_item');

// Function Add Item To List 
const addItemList = () => {   
    insertInput.addEventListener('keypress', event => {
        if (event.key === 'Enter') {
            let inputValue = insertInput.value,
                newOption = new Option(inputValue, inputValue);   

            listCollection.append(newOption);
            insertInput.value = '';

            clearList()
        }
    })
}
addItemList()

// Clear List Function 
const clearList = () => {
    // Check is Clear Button Ebable
    (listCollection.options.length >= 1) ? clearItem.disabled = false : clearItem.disabled = true;

    clearItem.addEventListener('click', event => {
        listCollection.options.length = 0;
    })
}
clearList()

// Take Selected Option from Select
const selectedOptions = () => {
    let selectedItem = listCollection.selectedOptions;
    
    listCollection.addEventListener('change', event => {
        for (let i = 0; i < selectedItem.length; i++) {
            let selected = selectedItem[i];
            deleteItem(selected)
        }
    });
}
selectedOptions()

// Delete Option from Select
const deleteItem = (selectedItems) => {
    deleteBtn.addEventListener('click', event => {
        selectedItems.remove();
    })
}
