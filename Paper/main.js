function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}


function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}

let btn = document.getElementById('btn')

btn.addEventListener('mousedown', (event) => {
  event.target.style.padding = '.3% .8%'
})

btn.addEventListener('mouseup', (event) => {
  event.target.style.padding = ''
})
