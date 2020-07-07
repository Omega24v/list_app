// Take DOM Elements 
const listCollection = document.querySelector('.list');
const insertInput = document.querySelector('.insertInput');

// Create DOM Elements
const optionElement = document.createElement('option');

// Add Item To List Function 
const addItemList = () => {
    // console.log(`Input Result: ${inputValue}`);
    
    insertInput.addEventListener('keypress', event => {
        if (event.key === 'Enter') {
            let inputValue;
            inputValue = insertInput.value;
            let newOption = new Option(inputValue, inputValue);     
            listCollection.append(newOption);
            insertInput.value = ''
        }
    })
}


// // Input Listener Function
// const inputListener = insertInput => {
//     let inputValue;
//     insertInput.oninput = () => {
//         inputValue = insertInput.value;
//         addItemList(inputValue)
//     };
// }

addItemList()


