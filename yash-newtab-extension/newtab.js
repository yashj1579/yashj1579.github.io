window.addEventListener('message', function(event) {
  if (event.origin !== 'https://yashj1579.github.io') return;
  if (event.data && event.data.type === 'navigate' && typeof event.data.url === 'string') {
    window.location.href = event.data.url;
  }
});
