const buttons = document.querySelectorAll(`.button`)
const body = document.querySelector(`body`)

buttons.forEach((btn)=>{
    console.log(btn)
    btn.addEventListener(`click`,((e)=>{
        console.log(e)
        console.log(e.target)
        if (e.target.id === `grey`) {
            body.style.backgroundColor = '#40128B'
            // body.innerHTML = 'YOU ARE CLICK ON FIRST BOX AND COLOR WAS BLUE'
        }
        if (e.target.id === `white`) {
            body.style.backgroundColor = `#0079FF`
        }
        if (e.target.id === `blue`) {
            body.style.backgroundColor = `#9336B4`
        }
        if (e.target.id === `yellow`) {
            body.style.backgroundColor = `#00DFA2`
        }
        if (e.target.id === 'red') {
            body.style.background = `#FF0060`
        }
    }))
})

