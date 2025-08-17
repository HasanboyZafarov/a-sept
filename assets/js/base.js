let bars = document.querySelector('.header__content__right__bars')
let list = document.querySelector('.header__content__list')
let header = document.querySelector('.header');
let blur_window = document.querySelector('.blur');

bars.addEventListener('click', () => {
    if (bars.classList.contains('active')) {
        bars.classList.remove('active');
        blur_window.classList.remove('active')
    } else {
        bars.classList.add('active');
        blur_window.classList.add('active')

    }
    list.classList.toggle('active');
})

window.addEventListener('click', (el) => {
    if (!bars.contains(el.target) && !list.contains(el.target)) {
        list.classList.remove('active')
        bars.classList.remove('active')
        blur_window.classList.remove('active')

    }
})

window.addEventListener('scroll', () => {
    if (window.scrollY) {
        list.classList.remove('active')
        bars.classList.remove('active')
        blur_window.classList.remove('active')

    } if (window.scrollY > 50) {
        header.classList.add('active')
    } else {
        header.classList.remove('active')
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 991) {
        bars.classList.remove('active')
        list.classList.remove('active')
        blur_window.classList.remove('active')
    }
})