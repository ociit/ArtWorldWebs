  
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

document.addEventListener("DOMContentLoaded", function() {
  var navigationLinks = document.querySelectorAll('.navigation a');

  // Fungsi untuk menghapus kelas active dari semua tautan
  function removeActiveClass() {
    navigationLinks.forEach(function(link) {
      link.classList.remove('active');
    });
  }

  // Fungsi untuk menambahkan kelas active pada tautan yang diklik
  function setActiveClass(clickedLink) {
    removeActiveClass(); // Hapus dulu kelas active dari semua tautan
    clickedLink.classList.add('active'); // Tambahkan kelas active pada tautan yang diklik
  }

  // Fungsi untuk menentukan apakah pengguna berada di bagian tertentu
  function isInSection(elementId) {
    var element = document.getElementById(elementId);
    var bounding = element.getBoundingClientRect();
    return (
      bounding.top >= 0 &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }

  // Tambahkan event listener untuk setiap tautan navigasi
  navigationLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Mencegah perilaku default dari tautan
      var targetId = link.getAttribute('href').substring(1); // Ambil id target dari atribut href
      var targetElement = document.getElementById(targetId); // Dapatkan elemen target berdasarkan id

      // Periksa apakah elemen target ada sebelum memanggil setActiveClass
      if (targetElement) {
        setActiveClass(link);
        
        // Scroll ke elemen target dengan efek smooth
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Tambahkan event listener untuk memantau perubahan posisi dan mengubah warna font
  // window.addEventListener('scroll', function() {
  //   if (isInSection('About')) {
  //     navigationLinks.forEach(function(link) {
  //       link.style.color = 'blue';
  //     });
  //   }
  // });
});