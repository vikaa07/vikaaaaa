let imgb = document.querySelectorAll("img");
let count = 0;
let count2 = imgb.length;

function Imgchange(){
    imgb[count].classList.toggle("imggg")

    ++count
    
    if (count==imgb.length){
    count=0
    }

    imgb[count].classList.toggle("imggg")

}
    
    function imggg(){
      if (count == 0) {
        imgb[count].classList.toggle("imggg")
      }
      imgb[count2-1].classList.toggle("imggg")
    
      --count2
      // if(count == -1) {
      //    count = --count2
      //    imgb[count2].classList.toggle("imggg")
      //  }



 }
