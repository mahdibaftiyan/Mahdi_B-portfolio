const header = document.querySelector('#main-header')

// header
window.addEventListener('scroll', (e) => {
    if (window.scrollY >= 150) {
        header.setAttribute("class", "header-scroll  header-fixed")
    }
    else {
        header.removeAttribute('class')
    }
})

const html = document.querySelector('html')

// dark mode
document.querySelector('#dark').addEventListener('click', (e) => {
    html.setAttribute("class", "dark")
    document.querySelector('.switch-them').classList.remove('display-b')
})
document.querySelector('#light').addEventListener('click', (e) => {
    html.removeAttribute('class')
    document.querySelector('.switch-them').classList.remove('display-b')

})


document.querySelector('.them-icon').addEventListener('click', (e) => {
    document.querySelector('.switch-them').classList.toggle('display-b')
    console.log('hi')
})



// animation scroll

AOS.init();
