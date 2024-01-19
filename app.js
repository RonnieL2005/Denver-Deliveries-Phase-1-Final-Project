document.addEventListener('DOMContentLoaded', function () {
    // Fetch data from db.json
    fetch('db.json')
        .then(response => response.json())
        .then(data => {
            // Do something with the data
            console.log(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});

// Search bar 1
const searchicon1 = document.querySelector('#searchicon1');
const search1 = document.querySelector('#searchinput1');

searchicon1.addEventListener('click', function () {
    search1.style.display = 'flex';
    searchicon1.style.display = 'none';
});

// Search bar 2
const searchicon2 = document.querySelector('#searchicon2');
const search2 = document.querySelector('#searchinput2');

searchicon2.addEventListener('click', function () {
    search2.style.display = 'flex';
    searchicon2.style.display = 'none';
});

// Burger menu
const barIcon = document.querySelector('#bar-icon');
const cross = document.querySelector('#hdcross');
const headerbar = document.querySelector('.headerbar');

barIcon.addEventListener('click', function () {
    setTimeout(() => {
        cross.style.display = 'block';
    }, 200);
    headerbar.style.right = '0%';
});

cross.addEventListener('click', function () {
    cross.style.display = 'none';
    headerbar.style.right = '-100%';
});


