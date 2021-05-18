console.log('%c HI', 'color: firebrick')

// const imgContainer = document.querySelector('#dog-image-container')

document.addEventListener('DOMContentLoaded', () => {
    fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(response => response.json())
        .then(json => {
            const imgContainer = document.querySelector('#dog-image-container')
            console.log(json.message);
            json.message.forEach(image => {
                const img = document.createElement('img');
                // img.scr = image;
                imgContainer.appendChild(img);
            })
        })
})
