document.addEventListener('DOMContentLoaded', function() {
    let button = document.getElementById('Button');

let textField = document.getElementById('nameInput');

    if (button) {
        button.addEventListener('click', function() {				 textField.style.display = 'none'
            this.style.display = 'none'; // 'this' refers to the clicked button
        });
    }
});

