// make modal Bootstrap popup show without click
if (document.querySelector("#popup_show")) {
  let myModal = new bootstrap.Modal(document.getElementById("popup_show"));
  myModal.show();
}

// initialize bootstrap tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))