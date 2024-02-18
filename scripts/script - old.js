imageArray = []

function getAllImage(){
  try{
    let newImage = new Image();
    let testUrl = ""
    pictureWrapper = document.getElementById("picture_wrapper");
    pictureWrapper.innerHTML = "";

    for (let i = 1; i <= 20; i++){
      testUrl = `./img/urlaubsbilder/urlaub_${i}.jpg`;
      newImage = new Image()
      pictureWrapper.innerHTML += `<div class="pic_container"><img src='${testUrl}'></div>`;
      /*console.log(testUrl)*/
      newImage.src = testUrl;
      console.log(newImage.width)
      /*console.log(newImage)*/
        if (newImage.width == 0) {
          console.log("loop has to stop!")
          break;
        }else{
          imageArray.push(testUrl);
          newImage.src = "";
        }
      }console.log(imageArray);
    }catch{}
    }
