/**
 * Forms marked `data-demo-form` have no backend yet: on submit they show their
 * `[data-form-status]` confirmation instead of sending anything.
 */
document.querySelectorAll<HTMLFormElement>('form[data-demo-form]').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const status = form.querySelector<HTMLElement>('[data-form-status]');
    if (status) status.hidden = false;
  });
});
