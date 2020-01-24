const toogler = (tog)=>{
    tog.addEventListener('click', ()=>{
        let elem = document.querySelector('.nav-wrapper')
        if(elem.style.display === 'block'){
            elem.style.display = 'none';
        }else{
            elem.style.display = 'block';
        }
        elem.style.animationName= 'rollover';
        let animTime = 0.2;
        tog.style.animationName = 'change';
        console.log(tog.children)
        elem === 'block'? tog.style.animationDuration = animTime : tog.style.animationDuration = 0;
        
    })
}

toogler(document.querySelector('.toggler'))

const checkWindowWidth  = (e)=>{
   let browindow = window.innerWidth;
    if(browindow <= 992){
        
    }
}

setInterval(checkWindowWidth(), 1000);