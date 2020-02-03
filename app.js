//first create a function that check the viewport witdth to specify width;

//Bug to fix later

function viewport(){
    var viewWidth = window.innerWidth;    
    return setInterval(function(){
       
    }, viewWidth)
}

viewport();


function changeDisplay(){
    var toggleHolder =  document.querySelector('.toggle-container div')
    var firstToggle = document.querySelector('.toggler');
    var secondToggle = document.querySelector('.anim')
     var nav = document.querySelector('.nav-wrapper').style.display = 'block';
    firstToggle.addEventListener('click', function(){
        document.querySelector('.nav-wrapper').style.display = 'block'
        document.querySelector('.changedir').style.animationName = 'forward'
        toggleHolder.classList.remove('toggler')
        toggleHolder.classList.add('anim')
})
    secondToggle.addEventListener('click', function(){
           document.querySelector('.nav-wrapper').style.display = 'none';
            secondToggle.classList.remove('anim')
            secondToggle.classList.add('toggler')
    })
}


changeDisplay()