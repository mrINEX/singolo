// form
const header = document.querySelector('.select-bar');
header.addEventListener('click', ({target}) => {
    if (target.tagName === 'A') {
        header.querySelectorAll('a')
            .forEach( element => element.classList.remove('active'));
        target.classList.add('active');
    }
});

const submit = document.querySelector('.submit-send');
submit.addEventListener('click', (event) => {
    const reqName = document.querySelector('.reqName');
    const reqEmail = document.querySelector('.reqEmail');
    const subjectForm = document.querySelector('.subject-form');
    const detailForm = document.querySelector('.detail-form');

    if(reqName.value && reqEmail.value) {

        event.preventDefault();
        const message = document.querySelector('.message');

        let header = document.createElement('span');
        header.textContent = 'Письмо отправлено ';
        let name = document.createElement('span');
        name.textContent = subjectForm.value ? `Тема: ${subjectForm.value}` : 'Без темы ';
        let email = document.createElement('span');
        email.textContent = detailForm.value ? `Описание: ${detailForm.value}` : 'Без описания ';
        message.prepend(email);
        message.prepend(name);
        message.prepend(header);
        document.querySelector('.message-block').classList.remove('hidden');

        document.querySelector('.form').reset();
    }
}, false)

const agree = document.querySelector('.agree');
agree.addEventListener('click', () => {
    document.querySelector('.message-block').classList.add('hidden');
    const message = document.querySelector('.message');
    message.querySelectorAll('span').forEach(e => e.remove());
})

// slider
const left = document.querySelector('.left');
const right = document.querySelector('.right');
left.addEventListener('click', sliding);
right.addEventListener('click', sliding);
function sliding() {
    const first = document.querySelector('.main-slide');
    const second = document.querySelector('.main-two-slide');
    if (first.classList.contains('hidden')) {
        second.classList.add('hidden');
        first.classList.remove('hidden');
    } else {
        second.classList.remove('hidden');
        first.classList.add('hidden');
    }
}

//swich-screen
const verticalPhone = document.querySelector('.vertical-phone');
const horizontalPhone = document.querySelector('.horizontal-phone');
verticalPhone.addEventListener('click', imageNone);
horizontalPhone.addEventListener('click', ({target}) => {
    if (target.children[1].classList.contains('offScreen')) {
        target.children[1].classList.remove('offScreen');
    } else {
        target.children[1].classList.add('offScreen');
    }
});

function imageNone(event) {
    if (event.target.children[2].classList.contains('offScreen')) {
        event.target.children[2].classList.remove('offScreen');
    } else {
        event.target.children[2].classList.add('offScreen');
    }
}

// switch image border
const images = document.querySelector('.images-container');
images.addEventListener('click', ({target}) => {
    if (target.classList.contains('image-square')) {
        images.querySelectorAll('div')
            .forEach( element => element.classList.remove('image-square-active'));
        target.classList.add('image-square-active');
    }
});

// switch tab
const tabs = document.querySelector('.row-list');
tabs.addEventListener('click', ({target}) => {
    if (target.classList.contains('button-tab')) {
        tabs.querySelectorAll('button')
            .forEach( element => element.classList.remove('active-tab'));
        target.classList.add('active-tab');
        let element = images.querySelector('div');
        element.remove();
        images.append(element);
    }
});

