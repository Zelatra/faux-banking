const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const send_modal = document.getElementById('send_modal');
const close = document.getElementById('close');
const open_send = document.getElementById('open_send');

open.addEventListener('click', () => {
  modal_container.classList.add('show');
});

close.addEventListener('click', () => {
  modal_container.classList.remove('show');
});

open_send.addEventListener('click', () => {
  send_modal.classList.add('show');
});

close_send.addEventListener('click', () => {
  send_modal.classList.remove('show');
});



