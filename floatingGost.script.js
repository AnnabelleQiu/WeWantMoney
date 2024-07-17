document.addEventListener('mousemove', function(event) {
    const dog = document.getElementById('dog');
    dog.style.transform = `translate(${event.clientX - 25}px, ${event.clientY - 25}px)`;
  });
  