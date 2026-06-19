/* Abstrae — small site behaviours: mobile nav + contact form */
(function () {
  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
  }

  // Contact form → mailto
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var get = function (id) {
        var el = document.getElementById(id);
        return el ? el.value.trim() : '';
      };
      var name = get('cf-name');
      var email = get('cf-email');
      var company = get('cf-company');
      var intent = get('cf-intent');
      var message = get('cf-message');

      var subject = intent + (name ? ' — ' + name : '') + (company ? ' (' + company + ')' : '');
      var bodyLines = [
        'Name: ' + name,
        'Work email: ' + email,
        'Company: ' + company,
        'Intent: ' + intent,
        '',
        'The decision they\'d like to make autonomous:',
        message
      ];
      var href = 'mailto:contact@abstrae.com'
        + '?subject=' + encodeURIComponent(subject)
        + '&body=' + encodeURIComponent(bodyLines.join('\n'));
      window.location.href = href;

      // Show success state
      var formView = document.getElementById('form-view');
      var successView = document.getElementById('form-success');
      if (formView && successView) {
        formView.classList.add('is-hidden');
        successView.classList.remove('is-hidden');
      }
    });
  }
})();
