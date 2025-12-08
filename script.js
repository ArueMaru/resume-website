// Target the "Hello!" element
const hello = document.getElementById('hello-text');
hello.addEventListener('click', () => {
  // Add animation class
  hello.classList.add('animate');

  // Remove it after 600ms
  setTimeout(() => {
    hello.classList.remove('animate');
  }, 600);
});







// Target the <h2> element with id="name"
const nameEl = document.getElementById('name');
nameEl.addEventListener('click', () => {
  // Add the "clicked" class to trigger CSS animation + color change
  nameEl.classList.add('clicked');

  // Remove it after 600ms so it resets
  setTimeout(() => {
    nameEl.classList.remove('clicked');
  }, 600);
});

