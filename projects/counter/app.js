// initial counter value 0 set
let counter = 0;

//select value and buttons
const counter_value = document.querySelector('#counter_value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const styles = e.currentTarget.classList;
        console.log(styles.contains('decrease'))
        if (styles.contains('decrease')) {
            counter--;
        }else if (styles.contains('increase')) {
            counter++;
        }else{
            counter = 0;
        }


        if (counter > 0) {
            counter_value.style.color = 'green';
        }else if (counter < 0) {
            counter_value.style.color = 'red'; 
        }else{
            counter_value.style.color="darkblue";
        }
        counter_value.textContent = counter;
    });
})