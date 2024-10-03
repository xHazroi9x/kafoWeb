const leftArr = document.getElementById("leftArr");
const rightArr = document.getElementById("rightArr");
const bg1 = document.getElementById("ap1");
const bg2 =document.getElementById("ap2");
let index = 0;

function slideRight(){
    if (index == 0){

        setTimeout(function () {
            box.addEventListener('transitionend', function(e) {
                box.classList.add('hidden');
          }, 20);
        index++;
        
    }
    else if (index == 1) {
        bg3.style.display = "block"
        bg2.style.display = "none"
        index++;
        
    } else {
        
    }
    
}
function slideLeft(){
    if (index == 1) {
        index--;
        bg1.style.display = "block"
        bg2.style.display = "none"
        
    }
}

leftArr.addEventListener("click", slideLeft);
rightArr.addEventListener("click", slideRight);