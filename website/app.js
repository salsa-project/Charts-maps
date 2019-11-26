const uploadBtn1 = document.getElementById('aside-upload-btn');
const uploadBtn2 = document.getElementsByClassName('upload-part-body-btn')[0];
const drawerContainer = document.getElementById('multi-drawer-container');
const drawerClose = document.getElementsByClassName('drawer-close')[0];
const drawerBack = document.getElementsByClassName('drawer-back')[0];
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

const videoNameInput = document.getElementsByClassName('video-details-list-input')[0];
const validateVideoDetails = document.getElementsByClassName('validate-video-details')[0];
const videoDetailsContainer = document.getElementsByClassName('video-details')[0];
const uploadVideoContainer = document.getElementsByClassName('upload-video')[0];
const drawerNextBtn = document.getElementsByClassName('drawer-next-btn')[0];
const videoType1 = document.getElementsByClassName('video-details-list-one')[0];
const videoType2 = document.getElementsByClassName('video-details-list-two')[0];
const videoNameDisplay = document.getElementsByClassName('video-name-display')[0];
const chooseSubtitiesContainer = document.getElementsByClassName('video-details-subtities-container')[0];
const chooseSubtitiesItems = document.getElementsByClassName('video-details-subtities');
const fileWraper = document.getElementsByClassName('file-wrapper')[0];
const fileInput = document.getElementById('video-file');

let videoName = "";
let videoTypeOne = "";
let videoTypeTwo = "";

//حفظ معلومات الفيديو التي أدخلها المستخدم
//إظهار إسم الفيديو
//إخفاء صندوق إدخال معلومات الفيديو
//إظهار صندوق إختيار الملف من الحاسوب
//إظهار زر العودة
validateVideoDetails.addEventListener('click', function(){
  videoName = videoNameInput.value;
  videoTypeOne = videoType1.value;
  videoTypeTwo = videoType2.value;
  videoNameDisplay.innerText = videoName;
  videoDetailsContainer.style.display = 'none';
  uploadVideoContainer.style.display = 'flex';
  drawerBack.style.display = 'block';
})

//إظهار إسم الملف الذي إختاره المستخدم من حاسوبه
//إظهار صندوق خيارات ترجمة الفيديو
function getFileData(myFile){
   var file = myFile.files[0];
   var filename = file.name || "";
   document.getElementById('choosedFileName').innerText = filename;
   chooseSubtitiesContainer.style.display = "flex";
}

//عند الضغط على زر العودة يحدث ما يلي :
// حذف إسم الفيديو و تفريغ المدخلات
//إخفاء صندوق إختيار الملف من الحاسوب
// إخفاء صندوق خيارات الترجمة
//إعادة ضبطها إلى الحالة الأولى (اللاخيار)
// إعادة إظهار صندوق ملأ بيانات الفيديو
drawerBack.addEventListener('click', function(){
  videoNameDisplay.innerText = "";
  videoNameInput.value = "";
  videoName = "";
  videoTypeOne = "";
  videoTypeTwo = "";
  uploadVideoContainer.style.display = 'none';
  fileInput.value = fileInput.defaultValue;
  document.getElementById('choosedFileName').innerText = fileInput.value;
  chooseSubtitiesContainer.style.display = "none";
  videoDetailsContainer.style.display = 'flex';
  inActiveSubstities();
})

//
for(var i = 0; i < chooseSubtitiesItems.length; ++i){
  chooseSubtitiesItems[i].addEventListener('click', function(){
    inActiveSubstities();
    this.classList.add('video-details-subtities-active');
  })
}
function inActiveSubstities(){
  for(var j = 0; j < chooseSubtitiesItems.length; ++j){
    chooseSubtitiesItems[j].classList.remove('video-details-subtities-active');
  }
}
