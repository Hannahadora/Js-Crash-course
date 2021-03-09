// // Single element
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('h1'))

// // Multiple element
// console.log(document.querySelectorAll('.items'));
// console.log(document.getElementsByTagName('h1'))

// const items = document.querySelectorAll('.item');

// items.forEach((item) => console.log(item));


// const ul = document.querySelector('.items');

// ul.remove();
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerText = 'Brad';
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>'

// const btn = document.querySelector('.btn');
// btn.style.background = 'red'

// const btn = document.querySelector('.btn');

// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     document.querySelector('#my-form').style.background = 'red';
//     document.querySelector('body').classList.add('bg-dark');
    
// });

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit)

function onSubmit (e) {
    e.preventDefault();

    if (nameInput.value === '' || emailInput === '') {
        // alert('please fill in strings')
        msg.classList.add('error');
        msg.innerHTML = 'Please eneter all fields'

        setTimeout(() => msg.remove(), 3000);
    } else {
        // console.log('successful')
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value}
         : ${emailInput.value}`));

         userList.appendChild(li);

         //clear fields
         nameInput.value = '';
         emailInput.value = '';

    }
}