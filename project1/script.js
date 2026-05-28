const itemInput = document.getElementById('item-input');
const addBtn = document.getElementById('add-btn');
const listContainer = document.getElementById('list-container');

function addItem() {
    const inputValue = itemInput.value.trim();

    if (inputValue === "") {
        return; // Stays silent or you can add an alert if preferred
    }

    // 1. Create the wrapper row div
    const itemRow = document.createElement('div');
    itemRow.classList.add('list-item');

    // 2. Create the bullet dot element (•)
    const dotSpan = document.createElement('span');
    dotSpan.textContent = '•';
    dotSpan.classList.add('bullet-dot');

    // 3. Create the text content element
    const textSpan = document.createElement('span');
    textSpan.textContent = inputValue;

    // 4. Create the item's individual delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');

    // 5. Add deletion click logic to this button instance
    deleteBtn.addEventListener('click', function() {
        itemRow.remove();
    });

    // 6. Build the row order: Dot -> Text -> Delete Button
    itemRow.appendChild(dotSpan);
    itemRow.appendChild(textSpan);
    itemRow.appendChild(deleteBtn);

    // 7. Push the finished element into the UI display
    listContainer.appendChild(itemRow);

    // 8. Reset the text field input
    itemInput.value = "";
    itemInput.focus();
}

// Click triggers
addBtn.addEventListener('click', addItem);

// Keyboard Enter key triggers
itemInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addItem();
    }
});