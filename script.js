const breedSelect = document.getElementById('breed-select');
const breedForm = document.getElementById('breed-form');
const dogContainer = document.getElementById('dog-container');

// Fetch the list of dog breeds and populate the dropdown
async function fetchBreeds() {
    const url = 'https://dog.ceo/api/breeds/list/all';
    try {
        const response = await fetch(url);
        const data = await response.json();
        const breeds = data.message;
        for (const breed in breeds) {
            const option = document.createElement('option');
            option.value = breed;
            option.textContent = breed.charAt(0).toUpperCase() + breed.slice(1);
            breedSelect.appendChild(option);
        }
    } catch (error) {
        console.error('Error fetching the breeds:', error);
        alert('Failed to fetch breeds. Please check the console for more details.');
    }
}

// Fetch and display a random image of the selected breed
async function fetchBreedImage(breed) {
    const url = `https://dog.ceo/api/breed/${breed}/images/random`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        displayDogImage(data.message);
    } catch (error) {
        console.error('Error fetching the breed image:', error);
        alert('Failed to fetch breed image. Please check the console for more details.');
    }
}

// Display the fetched dog image
function displayDogImage(imageUrl) {
    dogContainer.innerHTML = ''; // Clear any previous image
    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = 'Random Dog';
    dogContainer.appendChild(img);
}

// Handle the form submission
breedForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const selectedBreed = breedSelect.value;
    if (selectedBreed) {
        fetchBreedImage(selectedBreed);
    } else {
        alert('Please select a breed.');
    }
});

// Initialize the dropdown with breeds
fetchBreeds();
