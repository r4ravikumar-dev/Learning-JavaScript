// start interval using button
document.querySelector('#start').addEventListener('click', function(){
    const sayDate = function(){
        document.querySelector('h3').innerHTML = "Edgegard.in "
    }
    setInterval(sayDate,1000)
})


// stop interval using button
document.querySelector('#stop').addEventListener('click', function(){
    clearInterval(changeText)
    console.log('Stopped')
})

