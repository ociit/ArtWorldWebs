  
//paralax effcet  
  let layer_1 = document.querySelector(".layer-1");
  let layer_2 = document.querySelector(".layer-2");
  let layer_3 = document.querySelector(".layer-3");
  let layer_4 = document.querySelector(".layer-4");

  window.onscroll = function (){
    let Y = window.scrollY;
    
    layer_1.style.transform = "translateY("+ Y/1.5 +"px)";
    layer_2.style.transform = "translateY("+ Y/1.5 +"px)";
    layer_3.style.transform = "translateY("+ Y/2 +"px)";
    layer_4.style.transform = "translateY("+ Y/3 +"px)";
  }

const container = document.querySelector(".video-preview"),
  video = container.querySelector("video"),
  background = container.querySelector("img"),
  modal = document.querySelector(".video-modal"),
  closeBtn = modal.querySelector(".close-btn");

container.onmouseover = () => {
  video.classList.add("is-animated");
  video.play();
  setTimeout(() => {
    background.classList.remove("is-animated");
  }, 500);
}

container.onmouseout = () => {
  background.classList.add("is-animated");
  setTimeout(() => {
    video.classList.remove("is-animated");
    video.pause();
  }, 500);
}

let iframeCreated = false;
let videoIframe;

container.onclick = () => {
  modal.classList.replace('none', 'show');

  setTimeout(() => {
    const youtubeContainer = modal.querySelector(".video");
    modal.classList.replace("inactive", "active");

    if(!iframeCreated){
      videoIframe = document.createElement("iframe");
      videoIframe.src = 'https://www.youtube.com/embed/QZQyV9BB50E'
      videoIframe.title = 'YouTube video player'
      videoIframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-meida; gyroscope; picture-in-picture; web-share';
      videoIframe.allowFullscreen = true;
      videoIframe.frameBorder = '0';
      youtubeContainer.appendChild(videoIframe);

      iframeCreated = true;
    }

    else {
      videoIframe.src = 'https://www.youtube.com/embed/QZQyV9BB50E'
    }
  }, 100);
}

closeBtn.onclick = () => {
  modal.classList.replace('active', 'inactive');

  if(videoIframe) {
    videoIframe.src = 'https://www.youtube.com/embed/QZQyV9BB50E'
  }

  setTimeout(() => {
    modal.classList.replace('show', 'none')
  }, 500);
}