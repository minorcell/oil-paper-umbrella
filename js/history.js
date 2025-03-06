
const span_two = document.getElementById("two");
const content = document.getElementById("content");
const span_one = document.getElementById("one");
const content_two = document.getElementById("content_two");
const back_top = document.getElementById("up");
const back_down = document.getElementById("down");
const history_post = document.querySelector(".history_post");
const up = document.getElementById("up");
const down = document.getElementById("down");
const nav = document.getElementById("nav");
const title = document.getElementById("title");
const next = document.querySelector('.this_right_control')
const previous = document.querySelector('.this_left_control')
const carouselItem = document.querySelector('.carousel-item')
const thifHeader = document.querySelector('.this_header')
const div = document.querySelectorAll('.content div')
const p = document.querySelectorAll('.content p')
const vv = document.querySelectorAll(".vv")
const ww = document.querySelector(".ww")

data = [` <img draggable="false" src="../img/history/1.jpg" class="d-block w-100" alt="...">
  <div class="carousel-caption d-none d-md-block" style="color: black; bottom: 40%;">
    <h5 style="font-weight: 600;">《游青龙寺赠崔大补阙》韩愈</h5>
    <p>
      光华闪壁见神鬼，赫赫炎官张火伞。
    </p>
    <p>然云烧树火实骈，金乌下啄赪虬卵。</p>
  </div>`,
  ` <img draggable="false" src="../img/history/1.jpg" class="d-block w-100" alt="..." />
  <div class="carousel-caption d-none d-md-block" style="color: black; bottom: 40%; ">
    <h5 style="font-weight: 600;">《生春二十首》元稹</h5>
    <p>何处生春早，春生云色中。</p>
    <p>笼葱闲著水，晻淡欲随风。</p>
  </div>`,
  ` <img draggable="false" src="../img/history/1.jpg" class="d-block w-100" alt="..." />
  <div class="carousel-caption d-none d-md-block" style="color: black; bottom: 40%;">
    <h5 style="font-weight: 600;">《忆袭美洞庭观步奉和次韵》陆龟蒙</h5>
    <p>闻君游静境，雅具更摐摐。</p>
    <p>竹伞遮云径，藤鞋踏藓矼。</p>
  </div>`
]

console.log(vv);
console.log(ww);

carouselItem.innerHTML = data[0]
let i = 0
next.onclick = () => {
  i++
  if (i >= 3) {
    i = 0
  }
  carouselItem.innerHTML = data[i]
  console.log(i);
}

previous.onclick = () => {
  i--
  if(i <= -1)
    i = 2
  carouselItem.innerHTML = data[i]
  console.log(i);
  
}

window.addEventListener('scroll', function(){
  
  const n = document.documentElement.scrollTop
  if(n > 10)
    thifHeader.style.top = 0
  else
  thifHeader.style.top = '-85px'
})

window.addEventListener('scroll', function(){
  
  const j = document.documentElement.scrollTop
  if(j > 580){
    vv[0].style.opacity = 0
    vv[1].style.opacity = 0
    ww.style.opacity = 1
  }
  else if(j < 500){
    vv[0].style.opacity = 1
    vv[1].style.opacity = 1
    ww.style.opacity = 0
  }
    
})

for(let i = 0; i < 4; i++){
  div[i].addEventListener('mouseenter', function(){
    p[i].style.opacity = 0.39
    div[i].classList.add('hv')
  })
  div[i].addEventListener('mouseleave', function(){
    p[i].style.opacity = 0
    div[i].classList.remove('hv')
  })

}
up.addEventListener('click', function(){
  thifHeader.style.opacity = '0'
})
down.addEventListener('click', function(){
  thifHeader.style.opacity = '1'
})
window.onscroll = function () {
  history_post.classList.remove("history_post_animation");
};

span_two.onclick = () => {
  content.classList.add("no");
  content.classList.remove("yes");
  content_two.classList.remove("no");
  content_two.classList.add("yes");
  content_two.classList.add("content");
};
span_one.onclick = () => {
  content_two.classList.remove("yes");
  content_two.classList.add("no");
  content.classList.remove("no");
  content.classList.add("yes");
  content_two.classList.add("content");
};
const up_90 = function () {
  history_post.setAttribute("style", "margin-top:90px !important");
};
const back_90 = function () {
  history_post.setAttribute("style", "margin-top:90vh ");
};
const ani = function () {
  history_post.classList.add("history_post_animation");
};
back_top.onclick = () => {
  history_post.style.animationPlayState = "paused";
  history_post.style.animationName = "no";
  history_post.classList.remove("history_post_animation");
  setTimeout("up_90()", 1);
  down.classList.remove("yes");
  up.classList.add("no");
  down.classList.remove("no");
  down.classList.add("yes");
  nav.setAttribute("style", "left:0px");
  title.setAttribute("style", "font-size:0px");
};
back_down.onclick = () => {
  up.classList.remove("no");
  up.classList.add("yes");
  down.classList.remove("yes");
  down.classList.add("no");
  back_90();
  setTimeout("ani()", 1000);
  nav.setAttribute("style", "right:70%");
  title.setAttribute("style", "font-size:70px");
};
