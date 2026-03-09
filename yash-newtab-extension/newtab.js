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

// Redirect so the terminal page loads as the top document (search + links work without iframe/postMessage)
window.location.replace('https://yashj1579.github.io/google/');
