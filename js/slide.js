
const slides = document.querySelectorAll(".slide");
const arr_slides = [...slides];

let cur_slide = 0;
let next_slide = cur_slide == arr_slides.length-1 ? 0 : cur_slide+1;
let prev_slide = cur_slide == 0 ? arr_slides.length-1 : cur_slide-1;


console.log(prev_slide, cur_slide, next_slide );
console.log(arr_slides[next_slide]);



const button_prev = document.querySelector(".btn-previous");
const button_next = document.querySelector(".btn-next");

button_prev.addEventListener('click', move_left);
button_next.addEventListener('click', move_right);



function move_left() {
    console.log("moving left")

    // remove class(current) from current showing slide
   	arr_slides[cur_slide].classList.remove("current");

   	// add class(current) to next slide
   	arr_slides[prev_slide].classList.add("current");

   	// increment cur_slide;
   	cur_slide = prev_slide;
   	
 	next_slide = cur_slide == arr_slides.length-1 ? 0 : cur_slide+1;
	prev_slide = cur_slide == 0 ? arr_slides.length-1 : cur_slide-1;

   	console.log(cur_slide);
}

function move_right() {
    console.log("moving right");

   	// remove class(current) from current showing slide
   	arr_slides[cur_slide].classList.remove("current");

   	// add class(current) to next slide
   	arr_slides[next_slide].classList.add("current");

   	// increment cur_slide;
   	cur_slide = next_slide;
   	
 	next_slide = cur_slide == arr_slides.length-1 ? 0 : cur_slide+1;
	prev_slide = cur_slide == 0 ? arr_slides.length-1 : cur_slide-1;

   	console.log(cur_slide);

}