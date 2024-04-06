import chefImg from './images/chef.png'

function createHome() {
    const content = document.querySelector('#content');
    content.classList.add('home');
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');
    const img = document.createElement('img');

    img.src = chefImg;
    img.classList.add('chef-img');

    content.appendChild(div1);
    content.appendChild(div2);
    content.appendChild(img);
    content.appendChild(div3);


    div1.textContent = 'Welcome to Food and Beverage, where every meal tells a story.'
    div2.textContent = 'Explore our culinary delights, crafted with love and passion, to embark on a journey of flavors.'
    div3.textContent = 'Order online or visit us!';
}

export {createHome}