import restImg from './restaurant-location.png'


function createAbout() {
    const content = document.querySelector('#content');
    content.classList.add('about');

    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');
    const img = document.createElement('img');

    div1.textContent = '📞 123 456 789';
    div2.textContent = '🍽️ Hollywood Boulevard 42, Los Angeles, USA';
    img.src = restImg;

    div3.appendChild(img);

    content.appendChild(div1);
    content.appendChild(div2);
    content.appendChild(div3);

}

export {createAbout}