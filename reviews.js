const reviewsArray = ['All base UI elements are made using Nested Symbols and shared styles that are logically connected. Gorgeous, high-quality video sharing on desktop, mobile, tablet. All base UI elements are made using Nested Symbols',
'Kids ages 8 to 12 can expand their digital creativity through hands-on projects at Apple Campers choose one of three tracks, then spend 90 minutes a day for three days. Gorgeous, high quality video sharing on desktop, mobile, tablet.',
'Gorgeous, high-quality video sharing on desktop, mobile, tablet. All base UI elements are made using Nested Symbols',
'All base UI elements are made using Nested Symbols and shared styles that are logically connected. Gorgeous, high-quality video sharing on desktop, mobile, tablet. All base UI elements are made using Nested Symbols',
'Kids ages 8 to 12 can expand their digital creativity through hands-on projects at Apple Campers choose one of three tracks, then spend 90 minutes a day for three days. Gorgeous, high quality video sharing on desktop, mobile, tablet.',
'Gorgeous, high-quality video sharing on desktop, mobile, tablet. All base UI elements are made using Nested Symbols'];


const prevButton = document.getElementById('prevSlide');
const nextButton = document.getElementById('nextSlide');
const slider = document.querySelector('.testimonial-slides');
let currentSlide = 0;

nextButton.addEventListener('click', () => {
 const firstReview = reviewsArray.shift();
 reviewsArray.push(firstReview);

 for (let i = 0; i < reviewsArray.length; i++) {
   $(`.review-${i + 1}`).text(reviewsArray[i]);

 }
});

prevButton.addEventListener('click', () => {
 const lastReview = reviewsArray.pop();
 reviewsArray.unshift(lastReview);

 for (let i = 0; i < reviewsArray.length; i++) {
   $(`.review-${i + 1}`).text(reviewsArray[i]);

 }
});

function automaticSlide() {
 const firstReview = reviewsArray.shift();
 reviewsArray.push(firstReview);

 for (let i = 0; i < reviewsArray.length; i++) {
   $(`.review-${i + 1}`).text(reviewsArray[i]);

 }
}
setInterval(automaticSlide, 3000);