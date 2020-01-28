const toogler = (tog)=>{
    tog.addEventListener('click', ()=>{
        let elem = document.querySelector('.nav-wrapper')
        if(elem.style.display === 'block'){
            elem.style.display = 'none';
            document.querySelector('.changedir').style.height = '60px';
            document.querySelector('.changedir').style.animationName = 'backward'
        }else{
            elem.style.display = 'block';
            document.querySelector('.changedir').style.height = '200px'
            document.querySelector('.changedir').style.animationName = 'forward'
        }
        elem.style.animationName= 'rollover';
        
    })
}

toogler(document.querySelector('.toggler'))

document.body.addEventListener('scrollX', function(){
    console.log('hi')
})