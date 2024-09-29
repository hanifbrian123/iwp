document.addEventListener("DOMContentLoaded", function() {
  const loadingAnimation = document.getElementById("loading-animation");
  const slowConnectionThreshold = 3; 

  function showLoading() {
      loadingAnimation.style.display = "flex";
  }

  function hideLoading() {
      loadingAnimation.style.display = "none";
  }

  window.addEventListener("load", function() {
      const loadTime = (window.performance.timing.loadEventEnd - window.performance.timing.navigationStart) / 1000;
      
      if (loadTime > slowConnectionThreshold) {
          showLoading();
      } else {
          hideLoading();
      }
  });

  if ('connection' in navigator) {
      const connectionType = navigator.connection.effectiveType;
      if (connectionType === '2g' || connectionType === 'slow-2g' || connectionType === '3g') {
          showLoading();
      }
  }
});

const cateringElement = document.querySelector('.catering');
cateringElement.addEventListener('click', () => {
  window.location.href = './catering/index.html';
});
const restoElement = document.querySelector('.restaurant');
restoElement.addEventListener('click', () => {
  window.location.href = './restaurant/index.html';
});
const eventElement = document.querySelector('.event');
eventElement.addEventListener('click', () => {
  window.location.href = './fast_delivery/fast.html';
});
