const colors = ['green','red','rgba(133,122,200)','#f2e2e2']
const btn = document.getElementById('color-btn')
const displayColor = document.querySelector('.color')

btn.addEventListener("click",function(){
    const randomNumber = getRandomNumber()
    document.body.style.backgroundColor= colors[randomNumber]
    displayColor.textContent = colors[randomNumber]
})

function getRandomNumber(){
    //return Math.floor(Math.random() * colors.length);

  return Math.floor(Math.random() * colors.length)
}