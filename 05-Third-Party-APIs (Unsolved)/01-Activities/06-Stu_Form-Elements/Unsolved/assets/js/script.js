const shoppingFormEl = $('#shopping-form');
const shoppingListEl = $('#shopping-list');

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`

function handleFormSubmit(event) {
    event.preventDefault();

    const item = $('#shopping-input').val();

    if (!item) {
        alert('No item added');
        return;
    }

    shoppingListEl.append(`<li>${item}</li>`)

    $('input[type="text"]').val('');
}

// TODO: Add an event listener to the `shoppingFormEl` to handle submission

shoppingFormEl.on('submit', handleFormSubmit);