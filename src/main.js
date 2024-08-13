const open = getElementById('open');
const modal_container = getElementById('modal_container');
const close = getElementById('Close');

open.addEventListener('click', () => {
  modal_container.classList.add('show');
});

close.addEventListener('click', () => {
  modal_container.classList.remove('show');
});
