imageArray = [];
currentSliderIndex = 0;
SliderIteration = 1

/* !!! getAllImage() hat ein wenig Verzögerung bzw. ist zu langsam beim Erstellen vom Array !!!*/
function init(){
  getAllImage();
  setTimeout(WriteHtmlFromArray,1000);
  setTimeout(startSlider, 1000);
}


function getAllImage(){
  let testUrl = ""
  for (let i = 1; i <= 14; i++) {
    testUrl = `./img/urlaubsbilder/urlaub_${i}.jpg`;
    tryFetchPictures(testUrl)
  }
}


function tryFetchPictures(path){
   fetch(path)
   .then((response) => {
    let length = response.headers.get("content-length");
    if (length.length > 3) {
      imageArray.push(path);
    }else{
      console.log("No picture found!");
    }
   })
     .catch()
}


function openLightBox(currentIndex){
  let lightbox = document.getElementById('content_lightbox');
  let i = currentIndex
  lightbox.innerHTML = `
      <div id="lightbox" class="blackbox">
      <div class="blackbox_wrapper">
      <div id="button_left"><img onclick="previousPicture(${i + 1})" src='./img/arrow-left-circle-fill.svg'></div>
        
        <div class="button_exit"><img onclick="closeWindows()" src='./img/x-circle.svg'></div>
        <div class="lightbox">
          <div class="lightbox_picture"><img id="currentImage" src='./img/urlaubsbilder/urlaub_${i +1}.jpg'></div>
        </div>
        <div class="button_right"><img onclick="nextPicture(${i + 1})" src='./img/arrow-right-circle-fill.svg'></div>
        </div>
      </div>
  `
}


function WriteHtmlFromArray(){
  let pictureContent = document.getElementById("pic_container");
  for (let i = 0; i < imageArray.length;i++)
  pictureContent.innerHTML += `<div onclick="openLightBox(${i})" class="pic_wrapper"><img src='./img/urlaubsbilder/urlaub_${i+1}.jpg'></div>`;
}


function closeWindows(){
  try{
    lightBox = document.getElementById("lightbox");
    lightBox.remove();
  }catch{}
}


function previousPicture(currentIndex){
  let maxlength = imageArray.length;
  let newIndex = currentIndex -2;
    if (currentIndex > 1){
      closeWindows();
      openLightBox(newIndex)
    }else{
      closeWindows();
      openLightBox(maxlength-1)
    }
}


function nextPicture(currentIndex) {
  let maxlength = imageArray.length;
  let newIndex = currentIndex;
  if (currentIndex < maxlength) {
    closeWindows();
    openLightBox(newIndex)
  } else {
    closeWindows();
    openLightBox(0)
  }
}


function startSlider(){
  let currentPicture = document.getElementById("sliderPictureOnTop");
  currentPicture.src = './img/urlaubsbilder/urlaub_1.jpg';
  let nextPicture = document.getElementById("sliderPicture");
  nextPicture.src = './img/urlaubsbilder/urlaub_2.jpg';
  currentSliderIndex = 2
  setTimeout(getClassOpacity,1000)
}


function getClassOpacity(){
  let upperPicture = document.getElementById("sliderPictureOnTop");
  upperPicture.classList.toggle("zeroOpacity");
  setTimeout(getClassOpacity, 5000)
  changeImage()
}


function changeImage(){
  if (currentSliderIndex == imageArray.length){
    currentSliderIndex = 1;
  }
  if (SliderIteration < 2){
    let upperPicture = document.getElementById("sliderPictureOnTop");
    upperPicture.src = `./img/urlaubsbilder/urlaub_${currentSliderIndex +1}.jpg`;
    currentSliderIndex++;
    SliderIteration++;
  }else{
    SliderIteration = 1;
    let PictureBelow = document.getElementById("sliderPicture");
    PictureBelow.src = `./img/urlaubsbilder/urlaub_${currentSliderIndex + 1}.jpg`;
    currentSliderIndex++;
  }
}
