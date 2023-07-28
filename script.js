window.addEventListener('scroll', function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrollRatio = scrollTop / scrollHeight;
  
    var startColor = [20, 58, 162]; // Dark Blue: RGB(0, 0, 51)
    var endColor = [62, 141, 227]; // Light Blue: RGB(135, 206, 235)
  
    var currentR = Math.round(startColor[0] + (endColor[0] - startColor[0]) * scrollRatio);
    var currentG = Math.round(startColor[1] + (endColor[1] - startColor[1]) * scrollRatio);
    var currentB = Math.round(startColor[2] + (endColor[2] - startColor[2]) * scrollRatio);
  
    var currentColor = 'rgb(' + currentR + ',' + currentG + ',' + currentB + ')';
  
    document.body.style.backgroundColor = currentColor;
  });
  
  // Create a new Intersection Observer instance
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add the animate-scroll class when the element is in the viewport
        entry.target.classList.add('animate-scroll');
        observer.unobserve(entry.target); // Stop observing once the animation is triggered
      }
    });
  });
  
  // Get all the elements with the "skill-bar" class
  const skillBars = document.querySelectorAll('.skill-bar');
  
  // Start observing each skill bar element
  skillBars.forEach(skillBar => {
    observer.observe(skillBar);
  });
    