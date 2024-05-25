const container = document.querySelector('#container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'




for (let i = 1; i < 100; i++) {
    const newDiv = document.createElement('div');
    const newImg = document.createElement('img');
    const newSpan = document.createElement('span');
    newDiv.classList.add('pokemon')
    newImg.src = `${baseURL}${i}.png`
    newSpan.textContent = `#${i}`;
    newDiv.appendChild(newImg);
    newDiv.appendChild(newSpan);
    container.appendChild(newDiv);
}