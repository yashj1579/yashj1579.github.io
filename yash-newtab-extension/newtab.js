window.addEventListener('message', function(event) {
  if (event.origin !== 'https://yashj1579.github.io') return;
  if (event.data && event.data.type === 'navigate' && typeof event.data.url === 'string') {
    var url = event.data.url;
    try {
      window.location.assign(url);
    } catch (e) {
      window.location.href = url;
    }
  }
});

window.location.replace('https://yashj1579.github.io/google/');