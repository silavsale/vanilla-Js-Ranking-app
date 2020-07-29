// var element = document.getElementsByClassName('plus')[0];

// element.style.color = 'red';
let element = '';
function myFunction(star) {
    console.log(star)

    
    for(let i = 0; i < star; i++){
        console.log('i', i)
        element = document.getElementsByClassName('plus')[i];
        element.classList.add("minus");
    }
    for(let i = star; i < 5; i++){
        console.log('i', i)
        element = document.getElementsByClassName('plus')[i];
        element.classList.remove("minus");
    }
    document.getElementById('text').innerHTML = `Thanks for ${star} review!`
  }