const track = document.querySelector('.track');
        const cardconts = document.querySelectorAll('.cardcont');
        const cardcontWidth = cardconts[0].offsetWidth + 20; 
        let currentIndex = 0;
        let isTransitioning = false;

        const moveToNextCardcont = () => {
            if (isTransitioning) return;
            isTransitioning = true;

            if (currentIndex < cardconts.length - 5) {
                currentIndex++;
            } else {
                currentIndex = 0;
            }
            const translateValue = -(cardcontWidth * currentIndex);
            track.style.transform = `translateX(${translateValue}px)`;

            track.addEventListener('transitionend', () => {
                isTransitioning = false;
                if (currentIndex === cardconts.length - 5) {
                    track.style.transition = 'none';
                    track.style.transform = `translateX(0px)`;
                    currentIndex = 0;
                    setTimeout(() => {
                        track.style.transition = 'transform 0.5s ease';
                    });
                }
            }, { once: true });
        };
        // Scroll Trigger
        document.addEventListener("DOMContentLoaded", function() {
            const observerOptions = {
              threshold: 0.3 
            };
          
            const observer = new IntersectionObserver(function(entries, observer) {
              entries.forEach(entry => {
                if (entry.isIntersecting) {
                  entry.target.classList.add("show");
                  observer.unobserve(entry.target);
                }
              });
            }, observerOptions);
          
            const animatedSection = document.querySelector(".animated-section");
            observer.observe(animatedSection);
          });          
        setInterval(moveToNextCardcont, 1800);

          document.addEventListener('DOMContentLoaded', function () {
            const animatedSections = document.querySelectorAll('.animated-section, .feature-section');
          
            const observer = new IntersectionObserver(entries => {
              entries.forEach(entry => {
                if (entry.isIntersecting) {
                  entry.target.classList.add('scrolled-in');
                } else {
                  entry.target.classList.remove('scrolled-in');
                }
              });
            }, {
              threshold: 0.1
            });
          
            animatedSections.forEach(section => {
              observer.observe(section);
            });
          });
          
          // Scroll
          document.addEventListener("DOMContentLoaded", function() {
            function handleScrollAnimation() {
                const icons = document.querySelectorAll('.icon1');
                icons.forEach((icon) => {
                    const iconPosition = icon.getBoundingClientRect().top;
                    const screenPosition = window.innerHeight / 1;
        
                    if (iconPosition < screenPosition) {
                        icon.classList.add('show');
                    } else {
                        icon.classList.remove('show');
                    }
                });
            }
        
            window.addEventListener('scroll', handleScrollAnimation);
            handleScrollAnimation(); // Trigger animation on page load
          });
        
        const cateringElement = document.querySelector('.contactButton');
        cateringElement.addEventListener('click', () => {
          window.location.href = 'contact.html';
        });
    
        // header
        