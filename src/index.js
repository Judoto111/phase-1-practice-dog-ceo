console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    const breedList = document.getElementById('dog-breeds');
    const breedDropdown = document.getElementById('breed-dropdown');

    
    fetch(imgUrl)
        .then(response => response.json())
        .then(data => {
            const imageContainer = document.getElementById('dog-image-container');
            data.message.forEach(imageUrl => {
                const img = document.createElement('img');
                img.src = imageUrl;
                imageContainer.appendChild(img);
            });
        });

    
    fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
            for (const breed in data.message) {
                const li = document.createElement('li');
                li.innerText = breed;
                breedList.appendChild(li);
            }
        });

    
    breedList.addEventListener('click', (event) => {
        if (event.target.tagName === 'LI') {
            event.target.style.color = 'blue';
        }
    });

    
    breedDropdown.addEventListener('change', (event) => {
        const selectedLetter = event.target.value;
        const breeds = breedList.getElementsByTagName('li');

        Array.from(breeds).forEach(li => {
            if (li.innerText.startsWith(selectedLetter)) {
                li.style.display = 'list-item';
            } else {
                li.style.display = 'none';
            }
        });
    });
});



