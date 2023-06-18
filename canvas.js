const selector = e => document.querySelector(e) 

const canvas = selector("#myCanvas") 
const ctx = canvas.getContext("2d") 

const fullScreenToggler = selector("#screen-toggler") 
fullScreenToggler.addEventListener("click" , e =>{
    e.preventDefault() ;
    if(canvas.requestFullscreen){
        canvas.requestFullscreen()
    }
})

const toggleFullScreen = () => {
    if(document.fullscreenElement){
        return document.exitFullscreen()
    }
    return document.documentElement.requestFullscreen()
}

document.addEventListener("keydown" , e => {
    if(e.keyCode === 13){
        toggleFullScreen()
    }
} , false)

let x = canvas.width / 2 
let y = canvas.height - 30

let dx = 15
let dy = -15
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
//setInterval(draw , 10)

//Triangle 
ctx.beginPath() 
ctx.moveTo(100 , 50)
ctx.lineTo(200,50)
ctx.lineTo(150,100)
ctx.fillStyle="#f00"
//ctx.strokeStyle = "green"
//ctx.lineWidth = 3 ; 
//ctx.lineCap = "round"
ctx.stroke()
ctx.fill() 

ctx.closePath() 

//Draw a Kite 
ctx.beginPath() 
ctx.moveTo(210 , 50)
ctx.lineTo(250,10)
ctx.lineTo(290,50)
ctx.lineTo(250,90)

ctx.fillStyle="blue"
ctx.fill() 
ctx.closePath() 

//Draw a Rectangle  
ctx.beginPath() 
ctx.moveTo(300 , 50)
ctx.lineTo(350,50)
ctx.lineTo(350,100)
ctx.lineTo(300,100)

ctx.fillStyle="yellow"
ctx.fill() 
ctx.closePath() 

//Draw a Circle  
ctx.beginPath() 

ctx.arc(410,70 , 30 , 0 , Math.PI*2 , true)
ctx.fillStyle="orange"
ctx.fill() 
ctx.closePath() 

ctx.beginPath()
ctx.arc(410 , 70 , 20 ,0 ,  Math.PI*2 , true )

ctx.fillStyle="gold"
ctx.fill() 
ctx.closePath() 

//Drawing a Smiley Face 

ctx.beginPath() 

ctx.arc(500 , 70 , 50 , 0 , Math.PI*2 ) 
ctx.stroke() 

ctx.beginPath()
ctx.arc(475 , 70 , 10 , 0 , Math.PI*2 ) 
ctx.fillStyle = "#000"
ctx.stroke()
ctx.fill()


ctx.beginPath()
ctx.arc(525 , 70 , 10 , 0 , Math.PI*2 ) 
ctx.fillStyle = "#000"
ctx.stroke()
ctx.fill()

ctx.beginPath()
ctx.moveTo(490 , 70 )
ctx.lineTo(490 , 100)

ctx.moveTo(510 , 70 )
ctx.lineTo(510 , 100)

ctx.stroke()


//Drawing Smiley According to Mozilla 

ctx.beginPath();
ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
ctx.moveTo(110, 75);
ctx.arc(75, 75, 35, 0, Math.PI, false); // Mouth (clockwise)
ctx.moveTo(65, 65);
ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Left eye
ctx.moveTo(95, 65);
ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Right eye
ctx.stroke();

/**
 * To draw a circle, 
 * your start angle should be zero, and the end angle should be 360 degress, 
 * and you should draw the circle counterclockwise 
 * 
 * so ctx.arc(x , y , radius , 0 , Math.PI*2) 
 * 
 * You can draw a semi circle by stating that your end angle is 180 degress 
 */

//Drawing Quadratic Curves 
/**
 * The first value is the x coordinate for the control point 
 * The second value is the Y cordinate for the control point 
 * The third value is the x coordinate for the end point 
 * The fourth value is the y coordinate for the end point 
 */
ctx.beginPath();
ctx.moveTo(600 , 25)
ctx.quadraticCurveTo(615, 10, 640, 62.5);
ctx.stroke();

//Drawing a bezier curve  . This one has two inflectionary points 
/**
 * For a Bezier Curve. 
 * The moveTo(x,7) designates the starting point of the curve 
 * The first two values designate the coordinates of the first controlling point 
 * The second designates the coordinates of the second  controling points 
 * Then the last two values designate the coordinate of the end point
 */
ctx.beginPath() 
ctx.moveTo(10,200) 
ctx.bezierCurveTo(35 , 250 , 85 , 260 , 135 , 200)
ctx.stroke() 

ctx.font = "2rem sans-serif"
ctx.fillText("Game Board" , 10 , 400) 

ctx.strokeText("Game Board" , 10 , 440) 

ctx.textAlign ="right"