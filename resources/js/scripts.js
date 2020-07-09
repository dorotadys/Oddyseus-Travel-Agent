/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function dropDown() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

// Carousel
var carousel = document.querySelector('.carousel');
var container = carousel.querySelector('.carousel-container');
var prevBtn = carousel.querySelector('.carousel-prev');
var nextBtn = carousel.querySelector('.carousel-next');
var pagination = carousel.querySelector('.carousel-pagination');
var bullets = [].slice.call(carousel.querySelectorAll('.carousel-bullet'));
var totalItems = container.querySelectorAll('.carousel-item').length;
var percent = (100 / totalItems);
var currentIndex = 0;

function next() {
    slideTo(currentIndex + 1);
}

function prev() {
    slideTo(currentIndex - 1);
}

function slideTo(index) {
    index = index < 0 ? totalItems - 1 : index >= totalItems ? 0 : index;
    container.style.WebkitTransform = container.style.transform = 'translate(-' + (index * percent) + '%, 0)';
    bullets[currentIndex].classList.remove('active-bullet');
    bullets[index].classList.add('active-bullet');
    currentIndex = index;
}

bullets[currentIndex].classList.add('active-bullet');
prevBtn.addEventListener('click', prev, false);
nextBtn.addEventListener('click', next, false);

pagination.addEventListener('click', function(e) {
    var index = bullets.indexOf(e.target);
    if (index !== -1 && index !== currentIndex) {
        slideTo(index);
    }
}, false);

//-------------------------------------------------------------------------------
// NEWS 
//-------------------------------------------------------------------------

function displayTextOne() {
  var e = document.getElementById("news-details-item1");
  if (e.style.display === "none") {
    e.style.display = "block";
  } else {
    e.style.display = "none";
  }
}

function displayTextTwo() {
  var e = document.getElementById("news-details-item2");
  if (e.style.display === "none") {
    e.style.display = "block";
  } else {
    e.style.display = "none";
  }
}

function displayTextThree() {
  var e = document.getElementById("news-details-item3");
  if (e.style.display === "none") {
    e.style.display = "block";
  } else {
    e.style.display = "none";
  }
}