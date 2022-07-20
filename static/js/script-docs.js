$(() => {
  $('.aside-btn').on('click', toggleAside)
  $('.msdos-tab').on('click', msdosTab);
  $('.unix-tab').on('click', unixTab);

  msdosTab();
});

function msdosTab() {
  $('.msdos-tab').addClass("w3-border");
  $('.msdos-tabpanel').show();

  $('.unix-tab').removeClass("w3-border");
  $('.unix-tabpanel').hide();
}
function unixTab() {
  $('.unix-tab').addClass("w3-border");
  $('.unix-tabpanel').show();

  $('.msdos-tab').removeClass("w3-border");
  $('.msdos-tabpanel').hide();
}
function toggleAside() {
  $('#aside').toggle();
}