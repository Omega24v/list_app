// Take DOM Elements 
const listCollection = document.querySelector('.list');
const insertInput = document.querySelector('.insertInput');
const clearBtn = document.querySelector('.clear_item');
const deleteBtn = document.querySelector('.delete_item');

// Function Add Item To List 
const addItemList = () => {   
    insertInput.addEventListener('keypress', event => {
        if (event.key === 'Enter') {
            let inputValue  = insertInput.value,
                newOption   = new Option(inputValue, inputValue);   

            listCollection.append(newOption);
            insertInput.value = '';

            checkIsHasOption()
            clearList()
        }
    })
}
addItemList()

// Take Selected Option from Select
const selectedOptions = () => {
    let selectedItem = listCollection.selectedOptions;
    
    listCollection.addEventListener('change', () => {
        for (let i = 0; i < selectedItem.length; i++) {
            let selected = selectedItem[i];
            deleteItem(selected)
        }
    });
}
selectedOptions()

// Check is select has option
const checkIsHasOption = () => {

    // Disabled Buttons
    clearBtn.disabled = true;
    deleteBtn.disabled = true;

    if (listCollection.options.length >= 1) {
        clearBtn.disabled = false;
    }
}
checkIsHasOption()

// Clear List Function 
const clearList = () => {
    // Check is Clear Button Ebable
    clearBtn.addEventListener('click', () => {
        listCollection.options.length = 0;
        checkIsHasOption()
    })
}
clearList()

// Delete Option from Select
const deleteItem = (selectedItems) => {
    deleteBtn.disabled = false;

    deleteBtn.addEventListener('click', () => {
        selectedItems.remove();
        checkIsHasOption()
    })
}
