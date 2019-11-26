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
//بدأ رفع الفيديو
drawerNextBtn.addEventListener('click', function(){
  uploadVideoWrapperContainer.style.display = "none";
  chooseSubtitiesContainer.style.display = "none";
  uploadVideoPercentageContainer.style.display = "block";
  //ملف الفيديو
  const file = document.getElementById('video-file').files[0];

  //الفورم تحتوي على  ملف الفيديو و إسمه و نوعيه
  var formData = new FormData();
  formData.append('file', file);
  formData.append('video-name', videoName);
  formData.append('videoType1', videoTypeOne);
  formData.append('videoType2', videoTypeTwo);
  postItem(formData);
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
