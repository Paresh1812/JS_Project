
let display = ()=>{
    let date = new Date()
    let hrs = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()
    let session = document.getElementById(`session`)

    if (hrs >=12) {
        session.innerHTML = `PM`
    }else{
        session.innerHTML = `AM`
    }

    if (hrs > 12) {
        hrs = date.getHours() - 12
    }
    document.getElementById(`hours`).innerHTML = hrs
    document.getElementById(`min`).innerHTML = min
    document.getElementById(`seconds`).innerHTML = sec


}
setInterval(display, 10)
