//AJAX FUNCTION START
function ajax({method: method, route: route, type: type, data: data, success: success, forbidden: forbidden, notFound: notFound}){
  var xhr = new XMLHttpRequest();
  xhr.open(method, route, true);
  xhr.onload = function(){
    (this.status == 200) ? (success(this)) : (this.status == 403)? (forbidden(this)) : (notFound(this));
  }
  //النسبة المئوية عند رفع الفيديو
  xhr.upload.addEventListener("progress", function(e) {
			var pc = parseInt(0 + (e.loaded / e.total * 100));
			textPercentage.innerText = pc;
      if(pc < 101){
        progressCircle.style.strokeDashoffset = 480 - (330*pc/100);
      }
      if(pc < 101){
        progressDot.style.transform = "rotate(" + (270*(pc/100)) +"deg) translateX(5px) translateY(5px)";
      }
		}, false);
  xhr.send(data)
};
//AJAX FUNCTION END

// ------------------------------ //
let nextCount = 0;
//بدأ رفع الفيديو // التالي
drawerNextBtn.addEventListener('click', function(){

  if(nextCount == 0){
    videoName = videoNameInput.value;
    if(videoName.length < 3){//التحقق من أن المستخدم أدخل إسم الفيديو
      return alert('Enter Video Name To Continue!');
    }
    videoTypeOne = videoType1.value;
    videoTypeTwo = videoType2.value;
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
    uploadVideoWrapperContainer.style.display = "none";
    chooseSubtitiesContainer.style.display = "none";
    uploadSubtitleWrapperContainer.style.display = "none";
    drawerTitle.textContent = "Uploading Video Of";
    uploadVideoPercentageContainer.style.display = "block";
    nextCount++;
  }

  //ملف الفيديو
  const file = document.getElementById('video-file').files[0];

  //الفورم تحتوي على  ملف الفيديو و إسمه و نوعيه
  var formData = new FormData();
  formData.append('video', file);
  formData.append('video-name', videoName);
  formData.append('videoType1', videoTypeOne);
  formData.append('videoType2', videoTypeTwo);
  // postItem(formData);

})

//هذه الأجاكس بإمكانك التعديل عليها
function postItem(formData){
  ajax({
    method: 'post',//هذه لا تلمسها
    route: '/upload/video',//هنا ضع رابط إستقبال الريكويست للسيرفر
    type: "multipart/form-data",//هذه لا تلمسها
    data: formData,//هذه الفورم يتم إرسالها إلى السيرفر
    success: function(xhr){//عند مجاح رفع الملف
      alert('Success')
      console.log(xhr.responseText);
      // هنا ضع ما تريد مثلا
      //redirect :
       window.location.replace('/home.html')
    },
    forbidden: function(){//403
      alert('Forbidden')
      console.log('FORBIDDEN');
    },
    notFound: function(){//404
      alert('Not Found')
      console.log('Not Found');
    }
  });
};
