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

const input = document.getElementById("phone");

input.addEventListener("input", (e) => {
    let value = e.target.value.replace(/\D/g, ""); // remove non-digits
    if (value.startsWith("7")) value = value.substring(1); // avoid double +7

    let formatted = "+7 ";
    if (value.length > 0) formatted += "(" + value.substring(0, 3);
    if (value.length >= 4) formatted += ") " + value.substring(3, 6);
    if (value.length >= 7) formatted += "-" + value.substring(6, 8);
    if (value.length >= 9) formatted += "-" + value.substring(8, 10);

    e.target.value = formatted;
});