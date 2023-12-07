function getCat() {
  return fetch('https://cataas.com/cat')
    .then(response => {
      if (!response.ok) {
        throw new Error('Meowork not found :(');
      }
      return response.blob();
    });
}

function updateCatImage() {
  const imageContainer = document.getElementById('image-container');
  getCat()
    .then(data => {
      const imageUrl = URL.createObjectURL(data);
      imageContainer.innerHTML = `<img src="${imageUrl}" alt="Cat">`;
    })
    .catch(error => {
      console.error('Error fetching cat image:', error);
    });
}

window.addEventListener('load', updateCatImage);


document.getElementById('find-button').addEventListener('click', updateCatImage);