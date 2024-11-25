// 1. Write code to allow visitors of the page to customize it to their liking. There is a
// form on the page that accepts a name (to be used in a greeting when the user visits
// the page) and a color picker to allow the user to choose their preferred background
// color/foreground color combination. Write the necessary code to capture these values
// when the form is submitted (prevent the default action on the form submission button to
// achieve this) and store these values in localStorage (so that it persists on the user’s
// computer and their preferences are saved indefinitely). Next, write a function to apply
// the preferences if they have been set and call it each time the page loads. You may
// also want to call this function again when the user saves their preferences to
// immediately apply them. Make sure you also notify the user somehow that the preferences
// were saved.

// wrapped code inside a DOMcontentloaded to make sure it runs after it has fully loaded;
document.addEventListener('DOMContentLoaded', function(){
// function that applies the preference
function applyPreferences() {

    // retrieves preference from local storage
    const name = localStorage.getItem('name');
    const backgroundColor = localStorage.getItem('backgroundColor');
    const foregroundColor = localStorage.getItem('foregroundColor');

    // applying preferences if they exist
    if (name) {
        document.getElementById('greeting').textContent = `Hello, ${name}!`
    }

    if (backgroundColor) {
        document.body.style.backgroundColor = backgroundColor;
    }

    if (foregroundColor) {
        document.body.style.color = foregroundColor;
    }
}

// form submission event listener
document.getElementById('preferences-form').addEventListener('submit', function (event){

    // prevents default submit action
    event.preventDefault();

    // gets the value from the form
    const name = document.getElementById('name').value;
    const backgroundColor = document.getElementById('background-color').value;
    const foregroundColor = document.getElementById('foreground-color').value;

    // local storage for values
    localStorage.setItem('name', name);
    localStorage.setItem('backgroundColor', backgroundColor);
    localStorage.setItem('foregroundColor', foregroundColor);

    // notification that the preference is saved
    alert('Saved!');

    // applies new preferences immediately
    applyPreferences();
});
    // applies preference on page land
    applyPreferences();
});
