//get the only form in the html to prevent default submit actions
let form = document.querySelector('#addForm');
//get the unordered list element
let itemList = document.querySelector('#items');

//adding items to the list

//add event listener to form
form.addEventListener('submit', addItem);

//event listener - the function runs when the submit event is triggered
function addItem(e) {
    //prevent the default submit action on the form
    e.preventDefault();
    //get the value typed into the input text field
    let newItem = document.querySelector('#item').value;

    //create a list element to store the new input in
    let newLi = document.createElement('li');

    //add bootstrap styling class to the li element
    newLi.className = 'list-group-item';

    //add new value from the input field to the text node of the li
    //element
    newLi.appendChild(document.createTextNode(newItem));

    //create a button element
    let deleteBtn = document.createElement('button');

    //add classes to the newly created button element
    deleteBtn.className = "btn btn-danger btn-sm float-end delete";

    //add text node to button element
    deleteBtn.appendChild(document.createTextNode('X'));

    //nest button element within the li element
    newLi.appendChild(deleteBtn);

    //add the li element to the unordered list element in the html
    itemList.appendChild(newLi);

}

//removing items from the list
itemList.addEventListener('click', removeItem);

function removeItem(event) {
    //Target element of the event must contain a class of div, before
    //removal
    if (event.target.classList.contains('delete')) {
        //confirm message box
        if (confirm('Are you sure?')) {
            //get the parent element of the 'x' button
            let deletingLi = event.target.parentElement;
            itemList.removeChild(deletingLi); //remove the element
        }
    }
}

//Filter items from the list

//get the element of the input field with the id of filter
let filter = document.querySelector('#filter');

//add event listener to input field of filter
filter.addEventListener('keyup', filterItems);

function filterItems(event) {
    //get the text typed into the field each time the event is fired
    //convert the text to lower-case.
    let inputText = event.target.value.toLowerCase();

    //get all the list items
    let items = document.getElementsByTagName('li');

    //convert list of li elements from an HTML Collection to an Array
    let itemsArr = Array.from(items);

    //for each of the item in the array...
    itemsArr.forEach((item)=>{
        //get the text of each li element object in the array in lower
        //case
        let itemText = item.textContent.toLowerCase();
        if (itemText.indexOf(inputText) !== -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })
}
