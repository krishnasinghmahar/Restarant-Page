import dish1 from './dishesImages/dish1.jpeg';
import dish2 from './dishesImages/dish2.jpeg';
import dish3 from './dishesImages/dish3.jpeg';
import dish4 from './dishesImages/dish4.jpeg';
import dish5 from './dishesImages/dish5.jpeg';
import dish6 from './dishesImages/dish6.jpeg';

function createMenu() {

    const content = document.querySelector('#content');
    content.classList.add('menu');

   
    const p1 = document.createElement('div');
    const p2 = document.createElement('div');
    const p3 = document.createElement('div');
    const p4 = document.createElement('div');
    const p5 = document.createElement('div');
    const p6 = document.createElement('div');

    p1.textContent = 'dish 1';
    p2.textContent = 'dish 2';
    p3.textContent = 'dish 3';
    p4.textContent = 'dish 4';
    p5.textContent = 'dish 5';
    p6.textContent = 'dish 6';


    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');
    const div4 = document.createElement('div');
    const div5 = document.createElement('div');
    const div6 = document.createElement('div');

    const img1 = document.createElement('img');
    const img2 = document.createElement('img');
    const img3 = document.createElement('img');
    const img4 = document.createElement('img');
    const img5 = document.createElement('img');
    const img6 = document.createElement('img');

    img1.src = dish1;
    img2.src = dish2;
    img3.src = dish3;
    img4.src = dish4;
    img5.src = dish5;
    img6.src = dish6;

    div1.appendChild(img1);
    div2.appendChild(img2);
    div3.appendChild(img3);
    div4.appendChild(img4);
    div5.appendChild(img5);
    div6.appendChild(img6);

    div1.appendChild(p1);
    div2.appendChild(p2);
    div3.appendChild(p3);
    div4.appendChild(p4);
    div5.appendChild(p5);
    div6.appendChild(p6);

    content.appendChild(div1);
    content.appendChild(div2);
    content.appendChild(div3);
    content.appendChild(div4);
    content.appendChild(div5);
    content.appendChild(div6);

}

export {createMenu}