document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('avengerForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('Name').value;
        const email = document.getElementById('E-mail').value;
        const age = document.getElementById('Age').value;
        const about = document.getElementById('About').value;
        const photo = document.getElementById('Photo').files[0];

        if (name === '' || email === '' || age === '' || about === '') {
            alert('Please fill in all fields.');
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        if (age < 1 || age > 999) {
            alert('Please enter a valid age between 1 and 999.');
            return;
        }

        const allowedFileTypes = ['image/jpeg', 'image/png', 'image/gif'];
        if (photo && !allowedFileTypes.includes(photo.type)) {
            alert('Please upload a valid photo file (jpeg, png, gif).');
            return;
        }

        const formData = new FormData();
        formData.append('Name', name);
        formData.append('E-mail', email);
        formData.append('Age', age);
        formData.append('About', about);
        formData.append('Photo', photo);

        fetch('/submit', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            alert(data);
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred while submitting the form.');
        });
    });
});