// script.js

document.addEventListener("DOMContentLoaded", function () {
  
  const form = document.querySelector("form");
  const emailInput = document.getElementById("email");
  const slideshowContainer = document.getElementById("slideshow-container");

  let slideIndex = 0;
  function showSlides() {
    let slides = document.getElementsByClassName("slide");

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
      slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 1500); 
  }

  showSlides();

  
  const apiKey = "a02hIbzGfCEHUszQOsxvxlezBevP45yUib7xins1";
  // const apiUrl = `https://api.nasa.gov/insight_weather/?api_key=${apiKey}&feedtype=json&ver=1.0`;

  const apodImage = document.getElementById("apodImage");

  // Fetch Astronomy Picture of the Day
  fetch(
    "https://api.nasa.gov/planetary/apod?api_key=a02hIbzGfCEHUszQOsxvxlezBevP45yUib7xins1"
  )
    .then((response) => response.json())
    .then((data) => {
      apodImage.src = data.url;
    })
    .catch((error) => console.error("Error fetching APOD:", error));
});
