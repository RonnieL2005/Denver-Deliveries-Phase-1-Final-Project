
// Get the search input and search icon elements
const searchInput = document.getElementById('searchInput');
const searchIcon = document.getElementById('searchIcon');

// Add an event listener to the search icon for when it is clicked
searchIcon.addEventListener('click', function () {
    // Get the value from the search input
    const searchTerm = searchInput.value;

    // You can now use the searchTerm for further processing,
    // for example, you might want to perform a search operation.
    // For now, let's just log the search term to the console.
    console.log('Search Term:', searchTerm);
});

 

const searchicon2 = document.querySelector('#searchicon2');

const srchicon2 = document.querySelector('#srchicon2');

const search2 = document.querySelector('#searchinput2');

searchicon2.addEventListener('click',function(){
    search2.style.display = 'flex';
    searchicon2.style.display = 'none';
})



const bar = document.querySelector('.fa-bars');
const cross = document.querySelector('#hdcross');
const headerbar = document.querySelector('.headerbar');

bar.addEventListener('click',function(){
    setTimeout(()=>{
        cross.style.display = 'block';
    },200);
    headerbar.style.right = '0%';
})

cross.addEventListener('click',function(){
    cross.style.display = 'none';
    headerbar.style.right = '-100%';
})

