window.onscroll = function () {
    myFunction()
};

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
};

const thanksPopUp = document.querySelector('.popup');

function getFreeCourses() {
    thanksPopUp.classList.add('show');
    setTimeout(() => {
        thanksPopUp.classList.remove('show');
    }, 2000)
};

const payBtn = [...document.querySelectorAll('.item__buy')];
const payForm = [...document.querySelectorAll('.payment__popup')];
const closeForm = [...document.querySelectorAll('.exit__btn')];

payBtn.forEach((item, index) => {
    item.addEventListener('click', () => {
        payForm[index].classList.add('active');
    })
});

closeForm.forEach((item, index) => {
    item.addEventListener('click', () => {
        payForm[index].classList.remove('active');
    })
});