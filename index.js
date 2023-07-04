const balloon = document.getElementById('air-balloon')
const cloudOne = document.getElementById('cloud-one')
const cloudTwo = document.getElementById('cloud-two')
const cloudThree = document.getElementById('cloud-three')
const cloudFour = document.getElementById('cloud-four')
const cloudFive = document.getElementById('cloud-five')

// const javascript = document.getElementById('javascript')
// const react = document.getElementById('react')
// const graphql = document.getElementById('graphql')

// const balloonYFromBottom = 10
// balloon.style.bottom = 10 + '%'

function move() {
    // console.log("i have scrolled")
    const incrementer = window.scrollY
    // console.log(incrementer)
    // empieza en 10, con 0 animacion rara, ya esta en el css en 10

    // the 10 refers the height from the borrom of the sky, can style in css and js
    // the 10 is consistent
    balloon.style.bottom = 10 + incrementer * 0.1 + '%'
    
    cloudOne.style.bottom = 40 + incrementer * 0.12 + '%'
    cloudOne.style.left = 75 + incrementer * 0.1 + '%'

    cloudTwo.style.bottom = 80 + incrementer * 0.14 + '%'
    cloudTwo.style.left = 70 + incrementer * 0.15 + '%'

    cloudThree.style.bottom = 60 + incrementer * 0.1 + '%'
    cloudThree.style.left = 0 + incrementer * -0.12 + '%'

    cloudFour.style.bottom = 70 + incrementer * 0.16 + '%'
    cloudFour.style.left = 20 + incrementer * -0.15 + '%'

    cloudFive.style.bottom = 60 + incrementer * 0.2 + '%'
    cloudFive.style.left = 60 + incrementer * 0.16 + '%'

    // javascript.style.left = 55 + incrementer * -2.2 + '%'
    // react.style.left = 43 + incrementer * -1.5 + '%'
    // graphql.style.left = 31 + incrementer * -1 + '%'
}

window.addEventListener('scroll', move)