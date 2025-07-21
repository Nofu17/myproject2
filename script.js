document.getElementById('bookingForm')
  .addEventListener('submit', function(e) {
    e.preventDefault();
    const qs = ['name','email','date','time']
      .map(id => `${id}=${encodeURIComponent(document.getElementById(id).value)}`)
      .join('&');
    location.href = 'confirm.html?' + qs;
  });
