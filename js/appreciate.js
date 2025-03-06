let angle = 0;
const rotationSpeed = 0.003;
let isPaused = false;

function rotateCarousel() {
  if (!isPaused) {
    angle += rotationSpeed;
    document.querySelector('section').style.transform = `rotateY(${angle}rad)`;
  }
  requestAnimationFrame(rotateCarousel);
}

requestAnimationFrame(rotateCarousel);

document.querySelector('section').addEventListener('mouseenter', () => {
  isPaused = true;
});

document.querySelector('section').addEventListener('mouseleave', () => {
  isPaused = false;
});

$(function () {
  var songhover = $(".song");
  songhover.hover(
    function () {
      var songaudio = $(this).find("audio")[0];
      songaudio.play();
    },
    function () {
      var songaudio = $(this).find("audio")[0];
      songaudio.pause();
    }
  );
});


const loop = document.getElementsByClassName("loop")[0];
const kind_item = document.getElementsByClassName("item");
const remove_zero = () => {
  loop.classList.add("test0");
};
const remove_one = () => {
  loop.classList.add("test1");
};
const remove_two = () => {
  loop.classList.add("test2");
};
const remove_three = () => {
  loop.classList.add("test3");
};
const remove_four = () => {
  loop.classList.add("test4");
};
const remove_five = () => {
  loop.classList.add("test5");
};
const remove_six = () => {
  loop.classList.add("test6");
};
const remove_seven = () => {
  loop.classList.add("test7");
};
const remove_eight = () => {
  loop.classList.add("test8");
};
const remove_all = () => {
  loop.classList = "loop";
};
for (let i = 0; i < kind_item.length; i++) {
  kind_item[i].onmouseover = function () {
    if (i == 0) {
      loop.classList.add("test");
      setTimeout("remove_zero()", 100);
    }
    if (i == 1) {
      loop.classList.add("test");
      setTimeout("remove_one()", 100);
    }
    if (i == 2) {
      loop.classList.add("test");
      setTimeout("remove_two()", 100);
    }
    if (i == 3) {
      loop.classList.add("test");
      setTimeout("remove_three()", 100);
    }
    if (i == 4) {
      loop.classList.add("test");
      setTimeout("remove_four()", 100);
    }
    if (i == 5) {
      loop.classList.add("test");
      setTimeout("remove_five()", 100);
    }
    if (i == 6) {
      loop.classList.add("test");
      setTimeout("remove_six()", 100);
    }
    if (i == 7) {
      loop.classList.add("test");
      setTimeout("remove_seven()", 100);
    }
    if (i == 8) {
      loop.classList.add("test");
      setTimeout("remove_eight()", 100);
    }
  };
  kind_item[i].onmouseout = function () {
    loop.classList.remove("test");
    for (item of loop.classList) {
      if (item == "test8") {
        setTimeout("remove_all()", 1000);
      }
    }
  };
}

function swap() {
  const to_left = document.querySelector(".left_control");
  const to_right = document.querySelector(".right_control");
  const swap_box = document.querySelector(".swap_box");
  to_left.addEventListener("click", () => {
    swap_box.style.transform = "translateX(0)";
  });
  to_right.addEventListener("click", () => {
    swap_box.style.transform = "translateX(-100vw)";
  });
}

window.addEventListener("DOMContentLoaded", () => {
  swap()
})