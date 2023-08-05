// generate random value

const randomColor = ()=>{
    const hex = `0123456789ABCDEF`
    let color = `#`
    for (let i=0; i<6; i++){
        color  += hex[Math.floor(Math.random() * 16)]
    }
    console.log(color)
    return color
    // let color = Array.from({length:6}).map(()=> {
    //     color += hex[Math.floor(Math.random() * 16)]
    // })

    // return `#` + color.join(``)
}

let intervalId;
const startChangingColor = ()=>{
    let changeBG = ()=>{
        document.body.style.backgroundColor = randomColor()
    }
    
    if (intervalId == null) {
        intervalId = setInterval(changeBG,1000);
        
    }
}

const stopChangingColor= ()=>{
    clearInterval(intervalId)
    intervalId = null;
}

document.getElementById(`start`).addEventListener(`click`,startChangingColor)
document.getElementById(`stop`).addEventListener(`click`,stopChangingColor)

