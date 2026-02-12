const list = document.querySelector('#list');

function AddItem() {
    const list = document.querySelector("#list");
    const newItem = document.createElement("li");
    
    // Making it slightly dynamic by counting existing items
    const itemCount = list.children.length + 1;
    newItem.textContent = `Item ${itemCount}`;
    
    list.appendChild(newItem);
}

function RemovItem() {
    const list = document.querySelector("#list");
    // Use lastElementChild to avoid accidentally selecting empty text/whitespace
    if (list.lastElementChild) {
        list.removeChild(list.lastElementChild);
    }
}