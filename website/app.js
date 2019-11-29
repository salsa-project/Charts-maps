const uploadBtn1 = document.getElementById('aside-upload-btn');
const uploadBtn2 = document.getElementsByClassName('upload-part-body-btn')[0];
const drawerContainer = document.getElementById('multi-drawer-container');
const drawerClose = document.getElementsByClassName('drawer-close')[0];
const drawerBack = document.getElementsByClassName('drawer-back')[0];
const drawerCancel = document.getElementsByClassName('drawer-cancel-upload')[0];
const drawersWindow = document.getElementById('drawers');
const videoNameInput = document.getElementsByClassName('video-details-list-input')[0];
const validateVideoDetails = document.getElementsByClassName('validate-video-details')[0];
const videoDetailsContainer = document.getElementsByClassName('video-details')[0];
const uploadVideoContainer = document.getElementsByClassName('upload-video')[0];
const drawerNextBtn = document.getElementsByClassName('drawer-next')[0];
const videoType1 = document.getElementsByClassName('video-details-list-one')[0];
const videoType2 = document.getElementsByClassName('video-details-list-two')[0];
const videoNameDisplay = document.getElementsByClassName('video-name-display')[0];
const chooseSubtitiesContainer = document.getElementsByClassName('video-details-subtities-container')[0];
const chooseSubtitiesItems = document.getElementsByClassName('video-details-subtities');
const videoInput = document.getElementById('video-file');
const subtitleInput = document.getElementById('subtitle-file');
const subtitleInputBtn = document.getElementById('video-details-subtities-external');
const uploadVideoWrapperContainer = document.getElementsByClassName('upload-video-wrapper-container')[0];
const uploadSubtitleWrapperContainer = document.getElementsByClassName('upload-subtitle-wrapper-container')[0];
const uploadVideoPercentageContainer = document.getElementById('upload-video-percentage');
const textPercentage = document.getElementById('text-percentage');
const progressCircle = document.querySelector('#upload-progress circle:nth-child(2)');
const progressDot = document.querySelector('#upload-progress circle:nth-child(3)');
const drawerTitle = document.getElementsByClassName('drawer-title')[0];
const videoCodeBlocks = document.getElementById('video-code-blocks');
const progressCircleMini = document.querySelector('.l-aside-my-videos #upload-progress circle:nth-child(2)');
const progressCircleMiniDot = document.querySelector('.l-aside-my-videos #upload-progress circle:nth-child(3)');
const myVideosTextPercentage = document.querySelector('.l-aside-my-videos #text-percentage');
const myVideosPercentageContainer = document.querySelector('.my-videos-percentage');
let subtitleType = null;

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
//Close drawer if user clicked outside the drawer
drawerContainer.addEventListener('click', function(e){
  if(!drawersWindow.contains(e.target)){
    drawerContainer.style.display = "none";
  }
})


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
  if(videoName.length < 1){//التحقق من أن المستخدم أدخل إسم الفيديو
    return alert('Enter Video Name To Continue!');
  }
  videoTypeOne = videoType1.innerText;//Movie الحقل الأول
  videoTypeTwo = videoType2.innerText;//Serie الحقل الثاني
  videoNameDisplay.innerText = videoName;
  uploadVideoPercentageContainer.style.display = "none";
  videoDetailsContainer.style.display = 'none';
  uploadVideoContainer.style.display = 'flex';
  uploadVideoWrapperContainer.style.display = 'flex';
  drawerBack.style.display = 'block';
  drawerTitle.textContent = "Upload Video Of";
  nextCount = 1;
})

//إظهار إسم الملف الذي إختاره المستخدم من حاسوبه
//إظهار صندوق خيارات ترجمة الفيديو
function getFileData(myFile, n){
   var file = myFile.files[0];
   var filename = file.name || "";
   inActiveSubstities();
   if(n == 1){
     document.getElementById('choosedVideoName').innerText = filename;
   }else if(n == 2){
     chooseSubtitiesItems[0].classList.add('video-details-subtities-active');
     document.getElementById('choosedSubtitleName').innerText = filename;
     subtitleType = "External File";
     subtitleInputBtn.value = subtitleInputBtn.defaultValue;
   }else if(n == 3){
     chooseSubtitiesItems[0].classList.add('video-details-subtities-active');
     document.getElementById('choosedSubtitleName').innerText = filename;
     subtitleInput.value = subtitleInput.defaultValue;
   }
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
  drawerTitle.textContent = "Upload Video";
  uploadVideoContainer.style.display = 'none';
  videoCodeBlocks.style.display = "none";
  videoInput.value = videoInput.defaultValue;
  subtitleInput.value = subtitleInput.defaultValue;
  subtitleInputBtn.value = subtitleInputBtn.defaultValue;
  document.getElementById('choosedVideoName').innerText = "";
  document.getElementById('choosedSubtitleName').innerText = "";
  chooseSubtitiesContainer.style.display = "none";
  uploadSubtitleWrapperContainer.style.display = "none";
  drawerBack.style.display = "none";
  drawerCancel.style.display = "none";
  myVideosPercentageContainer.style.display = "none";
  videoDetailsContainer.style.display = 'flex';
  inActiveSubstities();
  subtitleType = null;
  nextCount = 0;
})

//إختيار نوع الترجمة
for(var i = 0; i < chooseSubtitiesItems.length; ++i){
  chooseSubtitiesItems[i].addEventListener('click', function(){
  subtitleType = this.innerText;
  subtitleInput.value = subtitleInput.defaultValue;
  subtitleInputBtn.value = subtitleInputBtn.defaultValue;
  document.getElementById('choosedSubtitleName').innerText = "";
  inActiveSubstities();
  this.classList.add('video-details-subtities-active');
  })
}
//دالة لإعادة ضبط خيارات الترجمة
function inActiveSubstities(){
  for(var j = 0; j < chooseSubtitiesItems.length; ++j){
    chooseSubtitiesItems[j].classList.remove('video-details-subtities-active');
  }
}
//START-> DRAG AND DROP FILE UPLOAD
uploadVideoWrapperContainer.ondragover = uploadVideoWrapperContainer.ondragenter = function(e) {
  e.preventDefault();
};
uploadSubtitleWrapperContainer.ondragover = uploadSubtitleWrapperContainer.ondragenter = function(e) {
  e.preventDefault();
};
uploadVideoWrapperContainer.ondrop = function(e) {
  e.preventDefault();
  console.log(e.dataTransfer.files);
  if(e.dataTransfer.files[0].type.indexOf('video/') == -1){//لتحقق من أن الملف عبارة عن فيديو
    return alert('Only Video Files Accepted!')
  }
  videoInput.files = e.dataTransfer.files;
  document.getElementById('choosedVideoName').innerText = e.dataTransfer.files[0].name;//إظهار إسم ملف الفيديو
};
uploadSubtitleWrapperContainer.ondrop = function(e) {
  e.preventDefault();
  subtitleInput.files = e.dataTransfer.files;
  document.getElementById('choosedSubtitleName').innerText = e.dataTransfer.files[0].name;//إظهار إسم ملف الترجمة
  chooseSubtitiesItems[0].classList.add('video-details-subtities-active');
  subtitleType = "External File";
};
// END-> DRAG AND DROP
