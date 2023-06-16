const selector = e => document.querySelector(e) 

const canvas = selector("#myCanvas") 
const ctx = canvas.getContext("2d") 

let x = canvas.width / 2 
let y = canvas.height - 30

let dx = 2
let dy = -2
const ballRadius = 10 

const draw = () => {
    ctx.clearRect(0 , 0 , canvas.width , canvas.height) 
    ctx.beginPath() 

    ctx.arc(x , y , ballRadius , 0 , Math.PI*2)
    ctx.fillStyle = "#f00"
    ctx.fill() 
    ctx.closePath()

    x += dx 
    y +=  dy 
    if (x + dx > canvas.width || x + dx < 0) {
        dx = -dx;
    }
      
    if (y + dy > canvas.height || y + dy < 0) {
        dy = -dy;
    }
      
      
      
}
setInterval(draw , 10)