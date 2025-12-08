const hello = document.getElementById('hello-text');
hello.addEventListener('click', () => {
  hello.classList.add('animate');
  setTimeout(() => {
    hello.classList.remove('animate');
  }, 600);
});
