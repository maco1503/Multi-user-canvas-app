const socket = io.connect();
let color="#FFFFFF";
document.getElementById("submitColor").addEventListener('click',() =>{
  color= document.getElementById('color').value;
});


function setup() {
    createCanvas(windowWidth *.9, .8*windowHeight).parent('sketch');
    background(0);
    socket.on("mouse", (data) => {
        fill(data.socketColor);
        noStroke();
        ellipse(data.x, data.y, 20, 20);
    })
    socket.on('reset', () => {
        background(0);
    })
}
function mouseDragged() {
    fill(color);
    noStroke();
    ellipse(mouseX,mouseY,20,20);
    sendmouse(mouseX,mouseY);
  }
function draw() {
    
}

function sendmouse(xpos, ypos) {
    
    let data = {
      x: xpos,
      y: ypos,
      socketColor: color
    };
    
    socket.emit('mouse',data);
}

  const x = document.getElementById("resetBtn")
  
    x.addEventListener('click', () => {
      socket.emit('reset');
  })
  