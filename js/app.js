// Dropdown toggle
document.querySelectorAll('.has-dropdown > button').forEach(btn=>{
  btn.addEventListener('click', (e)=>{
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    const dd = btn.nextElementSibling;
    if(dd) dd.style.display = expanded ? 'none' : 'block';
  });
});

// Mobile toggle
const mobileToggle = document.querySelector('.mobile-toggle');
const mainNav = document.querySelector('.main-nav');
mobileToggle && mobileToggle.addEventListener('click', ()=>{
  const expanded = mobileToggle.getAttribute('aria-expanded') === 'true';
  mobileToggle.setAttribute('aria-expanded', String(!expanded));
  if(mainNav) mainNav.style.display = expanded ? 'none' : 'block';
});