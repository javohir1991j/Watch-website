
const products = {
    rolex: {
        name: 'Rolex',
        price: 1400,
        amount: 0,
        img: 'images/soya3.webp',
        get totalSumm() {
            return this.price * this.amount
        }
    },
    lannier: {
        name: 'Lannier',
        price: 122,
        amount: 0,
        img: 'images/Silver-Goldheren_360x.webp',
        get totalSumm() {
            return this.price * this.amount
        }
    },
    tiamo: {
        name: 'Tiamo',
        price: 100,
        amount: 0,
        img: 'images/belgiya.webp',
        get totalSumm() {
            return this.price * this.amount
        }
    },
    cartier: {
        name: 'Cartier',
        price: 120,
        amount: 0,
        img: 'images/images/soya.webp',
        get totalSumm() {
            return this.price * this.amount
        }
    },
    piguet: {
        name: 'Piguet',
        price: 140,
        amount: 0,
        img: 'images/images/soya2.webp',
        get totalSumm() {
            return this.price * this.amount
        }
    },
    space: {
        name: 'Space',
        price: 135,
        amount: 0,
        img: 'images/ukrain.webp',
        get totalSumm() {
            return this.price * this.amount
        }
    },
    carrera: {
        name: 'Carrera',
        price: 100,
        amount: 0,
        img: 'images/tila.webp',
        get totalSumm() {
            return this.price * this.amount
        }
    },
    lecoultre: {
        name: 'LeCoultre',
        price: 110,
        amount: 0,
        img: 'images/tila2.webp',
        get totalSumm() {
            return this.price * this.amount
        }
    },
    vuitton: {
        name: 'Vuitton',
        price: 150,
        amount: 0,
        img: 'images/Sapphire_360x.webp',
        get totalSumm() {
            return this.price * this.amount
        }
    },
    goldheren: {
        name: 'Goldheren',
        price: 2000,
        amount: 0,
        img: 'images/tila3.webp',
        get totalSumm() {
            return this.price * this.amount
        }
    },
    adipisicing: {
        name: 'Adipisicing',
        price: 1900,
        amount: 0,
        img: 'images/tila4.webp',
        get totalSumm() {
            return this.price * this.amount
        }
    },
    latest: {
        name: 'Latest',
        price: 1800,
        amount: 0,
        img: 'images/Aurum_360x.webp',
        get totalSumm() {
            return this.price * this.amount
        }
    },
}
const productBtn = document.querySelectorAll('.menu__btn'),
    basketBtn = document.querySelector('.nav__btn'),
    basketModal = document.querySelector('.nav__basket'),
    closeBasketModal = document.querySelector('.nav__basket-btn'),
    basketChecklist = document.querySelector('.nav__basket-checklist'),
    totalPriceBasket = document.querySelector('.nav__basket-totalPrice'),
    basketBtnCount = document.querySelector('.btn__icon'),
    btnCrad = document.querySelector('.nav__basket-bottom');
    navbarMenu = document.querySelector('.navbar')

productBtn.forEach(btn => {
    btn.addEventListener('click', function () {
        plusOrMinus(this)
    })
})
function plusOrMinus(btn) {
    let parent = btn.closest('.box'),
    parentId = parent.getAttribute('id')
    products[parentId].amount++
    basket()
}

function basket(){
    const productsArray = [];
    let totalCount = 0
    for (const key in products) {
      const po = products[key],
      productsCard = document.querySelector(`#${key}`),
      parentIndecator = productsCard.querySelector('.menu__count');
      if (po.amount > 0) {
        productsArray.push(po)
        totalCount += po.amount
        basketBtnCount.classList.add('active')
        parentIndecator.classList.add('active')
        parentIndecator.innerHTML = po.amount
      } else{
        parentIndecator.classList.remove('active')
        parentIndecator.innerHTML = 0
      }
      if(totalCount == 0){
        basketBtnCount.classList.remove('active')
      }
      basketBtnCount.innerHTML = totalCount
    }
    basketChecklist.innerHTML = ''
    for (let i = 0; i < productsArray.length; i++) {
        const el = productsArray[i];
        basketChecklist.innerHTML += cardItemWatch(el)
        
    }
    totalPriceBasket.innerHTML = totalPriceProduct()
}
window.addEventListener('click', function(e){
    if (e.target == basketBtn) {
        basketModal.classList.add('active')
    }else if(e.target == closeBasketModal){
basketModal.classList.remove('active')
    }
})

function cardItemWatch(productData){
    const {name, totalSumm:price, amount, img} = productData
    return`
    <div class="product">
    <div class="product__info">
        <img src="${img}" alt="" class="product__img">
    </div>
     <div class="row">
    <p class="product__name">${name}</p>
    <p class="product__price">${price}</p>
    </div>
 <div class="product__option" id="${name.toLowerCase()}__card">
    <button class="product__symbol minus" data-symbol="-">-</button>
    <output class="product__count">${amount}</output>
    <button class="product__symbol plus" data-symbol="+">+</button>
 </div>
 </div>`
}

function totalPriceProduct(){
    let total = 0
    for (const key in products) {
      total += products[key].totalSumm
    }
    return total
}
window.addEventListener('click', function(e){
    const btn = e.target
    if (btn.classList.contains('product__symbol')) {
        const attribute = btn.getAttribute('data-symbol'),
        parent = btn.closest('.product__option')
        if (parent) {
            const idParent = parent.getAttribute('id').split('_')[0]
            attribute == '+' ? products[idParent].amount++ : products[idParent].amount--
            basket()
        }
    }
})

const header = document.querySelector('header')

window.addEventListener('scroll', () => {
    header.classList.toggle('active', window.scrollY > 0)
})


const search = document.querySelector('.search__box')

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    navbar.classList.remove('active');
}

const navbar = document.querySelector('.navbar')

document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active');
    search.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    search.classList.remove('active'); 
}































function scrollUp(){
const scrollUp = document.getElementById('scroll-up')
if (this.scrollY >= 400) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')   
}

window.addEventListener('scroll', scrollUp)


document.querySelector('#menu-icon').onclick = () => {
    navbarMenu.classList.toggle('active')
}

const swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween:25,
    loop: true,
    fade:'true',
    centerSlide:'true',
    gragCursor:'true',
    pagination :{
        el: ".swiper-pagination",
        clickkable:true,
        dynamicBullets:'true'
    },
    navigation: {
        nextEl: ".swiper-button-next",
         prevEl:".swiper-button-prev",
    },
    breakpoints:{
        0:{
   slidesPerView:1,
        },
        500:{
            slidesPerView:2,
        },
        950:{
            slidesPerView:3,
        }
    }
});






























const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrenTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrenIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun' 

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add': 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () =>{
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-them', getCurrenTheme())
    localStorage.setItem('selected-icon', getCurrenIcon())
})