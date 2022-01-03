const navbar = document.querySelector(".sidebar");
const toggle = document.querySelector(".toggle");
const remove = document.querySelector(".remove-btn");

toggle.onclick = function(){
    navbar.classList.toggle("active");
}
remove.onclick = function(){
    navbar.classList.remove("active");
}

window.addEventListener('scroll', function(){
    const navbar_menu = document.querySelector(".navbar");
    navbar_menu.classList.toggle("sticky", this.scrollY > 0);
});

// Modal Box

let btn_block = document.querySelector('.btn'),
    close_btn = document.querySelector('.close-btn'),
    modal_box = document.querySelector('.modal');

    btn_block.addEventListener('click', function(){
          modal_box.classList.toggle('active');
    });
    close_btn.addEventListener('click', function(){
        modal_box.classList.remove('active');
  });
