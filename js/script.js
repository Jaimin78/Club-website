// Menu Bar Toggle
const menuToggle = (x) => {
  let navbar = document.querySelector('.navbar');
  x.classList.toggle("change");
  navbar.classList.toggle("open");
}

//Scroll Animation
AOS.init({
  duration: 1200,
})

//Mouse Point

const bob = document.getElementById('mouse');

let mouseX = 0;
let mouseY = 0;

let ballX = 0;
let ballY = 0;

let speed = 0.2;

function animate() {
  let distX = mouseX - ballX;
  let distY = mouseY - ballY;

  ballX = ballX + (distX * speed);
  ballY = ballY + (distY * speed);

  bob.style.left = ballX + 'px';
  bob.style.top = ballY + 'px';

  requestAnimationFrame(animate)

};

animate();

document.addEventListener('mousemove', function (e) {
  mouseX = e.pageX;
  mouseY = e.pageY;
});

document.addEventListener('click', function (e) {
  e.preventDefault;
  bob.classList.remove('active');
  //some rando comment

  void bob.offsetWidth;

  bob.classList.add('active');

}, false);
