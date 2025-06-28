const playground = document.getElementById('playground');

const magicButton = document.createElement('button');
magicButton.textContent = 'Click here';
playground.append(magicButton);

magicButton.addEventListener('click', () => {
    alert('Olá!')
});

magicButton.addEventListener('mouseover' , (event) => {
    event.target.style.backgroundColor = 'purple';
});

magicButton.addEventListener('mouseout', (event) => {
    event.target.style.backgroundColor = '';
});