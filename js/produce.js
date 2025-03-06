

function toggleHeaderSticky() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.top = '0';
        header.style.opacity = '1';
        header.style.pointerEvents = 'auto';
    } else if (window.scrollY <= 50) {
        header.style.opacity = '0';
        header.style.pointerEvents = 'none';
    }
}
// 初始化上移动10vh
function initHeader() {
    window.scroll({
        top: 1000,
        left: 0,
        behavior: 'smooth'
    });
}

// 初始化点击事件
function initClick() {
    const move_box = document.querySelectorAll('.move_box');
    const title_cubes = document.querySelectorAll('.title_cube');

    title_cubes.forEach((item, index) => {
        item.addEventListener('click', () => {
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
            if (move_box[index].style.zIndex == '3') {
                window.scroll({
                    top: 1000,
                    left: 0,
                    behavior: 'smooth'
                });

                move_box[index].style.opacity = "0"
                move_box[index].style.zIndex = '-1';
            } else {
                move_box.forEach((item, jndex) => {
                    if (jndex != index) {
                        item.style.opacity = "0"
                        item.style.zIndex = '-1';
                    }
                })
                move_box[index].style.opacity = "1"
                move_box[index].style.zIndex = '3';
            }
        })
    })
}

function changeWarp() {
    const left_title = document.querySelector('.left_title');
    const right_title = document.querySelector('.right_title');
    const left_wrap = document.querySelector('.left_wrap');
    const right_wrap = document.querySelector('.right_wrap');

    left_title.style.opacity = '1';
    right_title.style.opacity = "0.5";
    left_wrap.style.pointerEvents = "auto"

    left_title.addEventListener('click', () => {
        left_title.style.opacity = '1';
        right_title.style.opacity = "0.5";
        left_wrap.style.opacity = "1"
        left_wrap.style.pointerEvents = "auto"
        right_wrap.style.opacity = "0"
        right_wrap.style.pointerEvents = "none"
    })
    right_title.addEventListener('click', () => {
        left_title.style.opacity = "0.5";
        right_title.style.opacity = '1';
        left_wrap.style.pointerEvents = "none"
        right_wrap.style.pointerEvents = "auto"
        left_wrap.style.opacity = "0"
        right_wrap.style.opacity = "1"
    })
}

function changeWarpTwo() {
    const left_title = document.querySelector('.title_one');
    const right_title = document.querySelector('.title_two');
    const left_wrap = document.querySelector('.left_wrap_box');
    const right_wrap = document.querySelector('.right_wrap_box');

    left_title.style.opacity = '1';
    right_title.style.opacity = "0.5";
    left_wrap.style.pointerEvents = "auto"

    left_title.addEventListener('click', () => {
        left_title.style.opacity = '1';
        right_title.style.opacity = "0.5";
        left_wrap.style.opacity = "1"
        left_wrap.style.pointerEvents = "auto"
        right_wrap.style.opacity = "0"
        right_wrap.style.pointerEvents = "none"
    })
    right_title.addEventListener('click', () => {
        left_title.style.opacity = "0.5";
        right_title.style.opacity = '1';
        left_wrap.style.pointerEvents = "none"
        right_wrap.style.pointerEvents = "auto"
        left_wrap.style.opacity = "0"
        right_wrap.style.opacity = "1"
    })
}

window.addEventListener("DOMContentLoaded", () => {
    // initHeader()
    initClick()
    changeWarp()
    changeWarpTwo()
})

window.addEventListener('scroll', toggleHeaderSticky);