//AJAX FUNCTION START
function ajax({method: method, route: route, type: type, data: data, success: success, forbidden: forbidden, notFound: notFound}){
  var xhr = new XMLHttpRequest();
  xhr.open(method, route, true);
  xhr.onload = function(){
    (this.status == 200) ? (success(this)) : (this.status == 403)? (forbidden(this)) : (notFound(this));
  }
  //النسبة المئوية عند رفع الفيديو أو ملف الترجمة
  xhr.upload.addEventListener("progress", function(e) {
			var pc = parseInt(0 + (e.loaded / e.total * 100));//النسبة المئوية عند الرف
			textPercentage.innerText = pc;//إظهار النسبة المئوية
      myVideosTextPercentage.innerText = pc+"%";//إظهار النسبة المئوية
      myVideosPercentageContainer.style.display = "block";//إظهار حاوي النسبة المؤوية
      if(pc < 101){
        progressCircle.style.strokeDashoffset = 480 - (330*pc/100);
        progressCircleMini.style.strokeDashoffset = 300 - (45*pc/100);
        progressCircleMini.style.stroke =  "rgba(0, 150, 252, 0.8)";
        progressDot.style.transform = "rotate(" + (270*(pc/100)) +"deg) translateX(5px) translateY(5px)";
        progressCircleMiniDot.style.transform = "rotate(" + (280*(pc/100)) +"deg) translateX(5px) translateY(5px)";
      }
		}, false);
  xhr.send(data)
};
//AJAX FUNCTION END

// ------------------------------ //
let nextCount = 0;
//عمليات حفظ البيانات و التحقق من المداخل قبل رفع الملفات
drawerNextBtn.addEventListener('click', function(){
  if(nextCount == 0){
    videoName = videoNameInput.value;
    if(videoName.length < 3){//التحقق من أن المستخدم أدخل إسم الفيديو
      return alert('Enter Video Name To Continue!');
    }
    uploadVideoPercentageContainer.style.display = "none";
    videoDetailsContainer.style.display = 'none';
    videoNameDisplay.innerText = videoName;
    uploadVideoContainer.style.display = 'flex';
    uploadVideoWrapperContainer.style.display = 'flex';
    drawerBack.style.display = 'block';
    drawerTitle.textContent = "Upload Video Of";
    nextCount++;
  }else if(nextCount == 1){
    //التحقق من أن المستخدم إختار فيديو من حاسوبه
    if(document.getElementById('choosedVideoName').innerText.length < 3){
      return alert('Choose Video File Please!');
    }
    uploadVideoWrapperContainer.style.display = "none";
    drawerTitle.textContent = "Upload Subtitles Of";
    chooseSubtitiesContainer.style.display = "flex";
    uploadSubtitleWrapperContainer.style.display = "flex";

    nextCount++;
  }else if(nextCount == 2){
    //التحقق من أن المستخدم إختار نوع الترجمة
    if(subtitleType == null || subtitleType == "External File" && document.getElementById('choosedSubtitleName').innerText.length < 3){
      return alert('Choose Subtitle Option First!');
    }
    chooseSubtitiesContainer.style.display = "none";
    uploadSubtitleWrapperContainer.style.display = "none";
    drawerTitle.textContent = "Uploading Video Of";
    uploadVideoPercentageContainer.style.display = "block";
    drawerCancel.style.display = "block";
    nextCount++;
    subtitleType = null;

    const file = document.getElementById('video-file').files[0];//ملف الفيديو
    videoTypeOne = videoType1.innerText;//Movie الحقل الأول
    videoTypeTwo = videoType2.innerText;//Serie الحقل الثاني
    //الفورم تحتوي على  ملف الفيديو و إسمه و نوعيه
    var formData = new FormData();
    formData.append('video', file);
    formData.append('video-name', videoName);
    formData.append('videoType1', videoTypeOne);
    formData.append('videoType2', videoTypeTwo);
    let route1 = "/upload/video";//هنا ضع رابط إستقبال الريكويست للسيرفر بالنسبة للفيديو
    postItem(formData, route1);
  }
})

//هذه الأجاكس بإمكانك التعديل عليها
function postItem(formData, route){
  ajax({
    method: 'post',//post request
    route: route,
    type: "multipart/form-data",//type of files
    data: formData,//هذه الفورم يتم إرسالها إلى السيرفر

    success: function(xhr){//عند نجاح عملية رفع الفيديو
      console.log(xhr.responseText);
      //عند نجاح عملية رفع الفيديو , قم بإرسال هذه الجملة
      //من السيرفر إلى الأجاكس
      // "video-done"
      if(xhr.responseText == "video-done"){
        //هنا عند نجاح عملية رفع الفيديو
        //نقوم برفع ملف الترجمة إن وجد
        if(document.getElementById('choosedSubtitleName').innerText.length > 3){//التحقق من وجود ملف الترجمة
          let subtitleFile = null;//متغير سنضع فيه ملف الترجمة لاحقا
          if(document.getElementById('subtitle-file').files[0] != undefined){
            subtitleFile = document.getElementById('subtitle-file').files[0];//ملف الترجمة
            formForSubtitle(subtitleFile);
          }else if(subtitleInputBtn.files[0] != undefined){
            subtitleFile = subtitleInputBtn.files[0];//ملف الترجمة
            formForSubtitle(subtitleFile);
          }
        }else{
          //إظهار أكواد الفيديو
        drawerTitle.textContent = "Successfully Uploaded";
        uploadVideoPercentageContainer.style.display = "none";
        videoCodeBlocks.style.display = "flex";
        drawerCancel.style.display = "none";
        }
      }
      if(xhr.responseText == "subtitle-done"){
        //عند نجاح عملية رفع ملف الترجمة
      // هنا ضع ما تريد مثلا
      //redirect :
       //   window.location.replace('/'); //redirect to home page
       drawerTitle.textContent = "Successfully Uploaded";
       uploadVideoPercentageContainer.style.display = "none";
       videoCodeBlocks.style.display = "flex";
       drawerCancel.style.display = "none";
     }
    },
    forbidden: function(){//403 ERROR
      alert('Forbidden')
      console.log('FORBIDDEN');
    },
    notFound: function(){//404 ERROR
      alert('Not Found')
      console.log('Not Found');
    }
  });
};

function formForSubtitle(subtitleFile){
  var formData = new FormData();//صنع فورم لإرسال ملف الترجمة إلى السيرفر
  let substitleName = document.getElementById('choosedSubtitleName').innerText;//إسم ملف الترجمة
  formData.append('subtitle', subtitleFile);
  formData.append('video-name', videoName);
  formData.append('subtitle-name', substitleName);
  let route2 = "/upload/subtitle";
  postItem(formData, route2);
  drawerTitle.textContent = "Uploading Sub. Of";
}
