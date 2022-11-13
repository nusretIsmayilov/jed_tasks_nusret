const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')


let colors = ['red', 'green', 'bleu', 'lime', 'orange']



btn1.addEventListener("click", (e) => {
    let randomIndex = parseInt(Math.random()*6)
    btn2.style.backgroundColor = colors[randomIndex]
})