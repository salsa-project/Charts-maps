const uploadBtn1 = document.getElementById('aside-upload-btn');
const uploadBtn2 = document.getElementsByClassName('upload-part-body-btn')[0];
const drawerContainer = document.getElementById('multi-drawer-container');
const drawerClose = document.getElementsByClassName('drawer-close')[0];
const drawersWindow = document.getElementById('drawers');

// Show drawer
uploadBtn1.addEventListener('click', function(){
  drawerContainer.style.display = "block";
})
uploadBtn2.addEventListener('click', function(){
  drawerContainer.style.display = "block";
})
// Close drawer
drawerClose.addEventListener('click', function(){
  drawerContainer.style.display = "none";
})
// Close drawer if user clicked outside the drawer
// drawerContainer.addEventListener('click', function(e){
//   if(!drawersWindow.contains(e.target)){
//     drawerContainer.style.display = "none";
//   }
// })

//
