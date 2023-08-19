const tog = document.getElementById(`toggelDark`)
const body = document.querySelector(`body`)

tog.addEventListener(`click`, function(){
    this.classList.toggle(`bi-moon`)
    if (this.classList.toggle(`bi-brightness-high-fill`)) {
        body.style.color = `black`
        body.style.background = `#fff`
        body.style.transition = `2s`
    }else{
        body.style.color = `#fff`
        body.style.background = `black`
        body.style.transition = `2s`
    }
})