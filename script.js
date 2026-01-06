// Petit script pour le menu mobile et l'année du footer
document.addEventListener('DOMContentLoaded', function(){
  var toggle = document.getElementById('nav-toggle');
  var nav = document.getElementById('site-nav');
  if(toggle && nav){
    toggle.addEventListener('click', function(){
      var expanded = nav.style.display === 'block';
      nav.style.display = expanded ? '' : 'block';
      toggle.setAttribute('aria-expanded', !expanded);
    });
  }
  var yearSpan = document.getElementById('year');
  if(yearSpan) yearSpan.textContent = new Date().getFullYear();
});
