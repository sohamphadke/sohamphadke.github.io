// Code to diplay beach image after clicking button
document.getElementById('showBeachBtn').addEventListener('click', function() {
  var beachImg = document.getElementById('beachImage');
  beachImg.src = 'images/beach.png';
  beachImg.style.display = 'block';
});

// Code for name input and alert
document.getElementById('nameForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var name = document.getElementById('userName').value;
  alert('Hello, ' + name + '!');
});

