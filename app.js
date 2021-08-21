
let seconds = 1,
    minutes = 0,
    hours = 0;

const start = document.getElementById('start');
const pause = document.getElementById('pause');
const stop = document.getElementById('stop');
const number = document.getElementById('number')
const loopList = document.getElementById('loop-list')

let UITime;



let x = 1;

start.addEventListener('click', function(e){

        
    
    

    // console.log(parseInt(UIMiliSecond.innerHTML) + 3)

    let timer = setInterval(timerStart => {
        UITime = number.innerHTML = `${hours}:${minutes}:${seconds}`;
        seconds += 1
        
        if(seconds == 60){
            minutes += 1
            seconds = 0
        }
        if(minutes == 60){
            hours += 1
            minutes = 0
        }

        if(hours == 60){
            UITime = number.innerHTML = `TIME LIMIT`
            clearInterval(timer)
        }
        }, 1000);

    start.className += 'disabled'

    
   
    e.preventDefault()

});



pause.addEventListener('click', function(e){
    const li = document.createElement('li');
    li.className = 'list-group-item'
    li.textContent = UITime;

    loopList.appendChild(li);

    e.preventDefault()
});

stop.addEventListener('mousedown', function(e){
    window.location.reload();

    e.preventDefault()
});
