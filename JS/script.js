window.addEventListener('DOMContentLoaded', (e) => {

    const imgArray = ["img/slide1.png", "img/slide2.png", "img/slide3.png", "img/slide4.png"],
          slider = document.querySelector('.slider'),
          prev = slider.querySelector('.prev'),
          next = slider.querySelector('.next'),
          slides = slider.querySelectorAll('.slide__img'),
          slideLeft = slider.querySelector('.img-left'),
          slideRight = slider.querySelector('.img-right'),
          slideCenter = slider.querySelector('.img-center');


    function slideChange(){

        if(i < 0 ){
            i = imgArray.length - 1;
        }
            slideCenter.src = imgArray[i];

            if(i == 0){
                slideLeft.src = imgArray[imgArray.length - 1];
            } else {
                slideLeft.src = imgArray[i - 1];
            }
    
            if(i == imgArray.length - 1){
                slideRight.src = imgArray[0];
            } else {
                slideRight.src = imgArray[i + 1];
            }
    
            if (i == imgArray.length - 1){
                i = 0;
            } else {
                i++;
            }
        
        
    }

    function slideHide(){
        slides.forEach(slide =>{
            slide.style.opacity = "0";
        });
    }

    function slideShow(){
        slides.forEach(slide =>{
            slide.style.opacity = "1";
          });
    }

    function sliderMotion(){
        slideHide();

        setTimeout(() => {
            slideChange();

            setTimeout(() => {
                slideShow();
                // -------------------------------------------------------------------------
                motion = setTimeout(sliderMotion, 4000);
                // -----------------------------------------------------------------------
            }, 400);
            
        }, 400);
    }      

    let i = 1;  

    slideChange();
    
    let motion = setTimeout(sliderMotion, 4000);

    prev.addEventListener('click', (e) => {
        e.preventDefault();
        clearTimeout(motion);
        if(i == 0){
            i = imgArray.length - 2;
            sliderMotion();
            
        } else{
            i = i - 2;
            sliderMotion();
        }
    });

    next.addEventListener('click', (e) => {
        e.preventDefault();
            clearTimeout(motion);
            sliderMotion();
    });
});
