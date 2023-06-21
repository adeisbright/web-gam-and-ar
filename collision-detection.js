// const selector = e =>  document.querySelector(e) 

// const canvas = selector("#canva") 
// const ctx = canvas.getContext("2d") 

// canvas.width = innerWidth 
// canvas.height = innerHeight

// class Box {
//     constructor({
//       position = { x: 0, y: 0 },
//       color = 'red',
//       width = 100,
//       height = 100,
//       velocity = { x: 0, y: 0 }
//     }) {
//       this.position = position
//       this.width = width
//       this.height = height
//       this.color = color
//       this.velocity = velocity
//     }
  
//     draw() {
//         ctx.lineWidth = 3
//         ctx.strokeStyle = this.color
//         ctx.strokeRect(this.position.x, this.position.y, this.width, this.height)
//     }
  
//     update() {
//       this.position.x += this.velocity.x
//       this.position.y += this.velocity.y
//     }
// }

// // get canvas center
// const center = {
//     x: canvas.width / 2,
//     y: canvas.height / 2
//   }
  
// // instantiate box with left offset
// const box1 = new Box({
//     position: {
//       x: center.x - 150,
//       y: center.y - 50
//     },
//     color: 'red'
// })
  
// // instantiate box with right offset
// const box2 = new Box({
//     position: {
//       x: center.x + 50,
//       y: center.y - 50
//     },
//     color: 'blue'
// })
  
// // add gray background
// ctx.fillStyle = 'rgb(39,39,42)'
// ctx.fillRect(0, 0, canvas.width, canvas.height)
  
// // draw boxes
// // box1.draw()
// // box2.draw()

// let i = 1 
// const animate = () => {
//     requestAnimationFrame(animate)

//     // add gray background
//     ctx.fillStyle = 'rgb(39,39,42)'
//     ctx.fillRect(0, 0, canvas.width, canvas.height)

//     box1.draw() 
//     box2.draw()

//     box1.velocity.x = i++

//     box1.update()

   
// }
// animate() 

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

class Box {
  constructor({
    position = { x: 200, y: 200 },
    color = 'red',
    width = 100,
    height = 100,
    velocity = { x: 0, y: 0 },
  }) {
    this.position = position
    this.width = width
    this.height = height
    this.color = color
    this.velocity = velocity
  }

  draw() {
    c.lineWidth = 3
    c.strokeStyle = this.color
    c.strokeRect(this.position.x, this.position.y, this.width, this.height)
  }
}

// get canvas center
const center = {
  x: canvas.width / 2,
  y: canvas.height / 2,
}

// instantiate box with left offset
const box1 = new Box({
  position: {
    x: center.x - 150,
    y: center.y - 50,
  },
  color: 'red',
  velocity : {
    x : 1
  }
})

// instantiate box with right offset
const box2 = new Box({
  position: {
    x: center.x + 50,
    y: center.y - 50,
  },
  color: 'blue',
})

function collision({ box1, box2 }) {
    return (
      box1.position.x + box1.width >= box2.position.x && // box1 right collides with box2 left
      box2.position.x + box2.width >= box1.position.x && // box2 right collides with box1 left
      box1.position.y + box1.height >= box2.position.y && // box1 bottom collides with box2 top
      box2.position.y + box2.height >= box1.position.y // box1 top collides with box2 bottom
    )
  }



function animate() {
  
  // add gray background
  c.fillStyle = 'rgb(39,39,42)'
  c.fillRect(0, 0, canvas.width, canvas.height)

  // draw boxes
  box1.draw()
  box2.draw()
  
  
  box1.position.x += box1.velocity.x 
  // update x position before render
  if (collision({ box1, box2 })) {
    box1.color = 'green'
    box2.color = 'green'
    box1.velocity.x = -box1.velocity.x
  }
  requestAnimationFrame(animate)

}

animate()