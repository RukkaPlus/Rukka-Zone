$(() => {
  var backInterval = setInterval(backgroundAnim, 5000);
  if (sessionStorage.getItem('webInfoDisplayed') === 'true')
    displayWebInfo();
})

function backgroundAnim() {
  /* Define a background animation. This will set a 'background-position'
   * number lower than '60px'
   */
  let randNumberX = Math.floor(Math.random() * (200 - (-200)) + (-200));
  let randNumberY = Math.floor(Math.random() * (200 - (-200)) + (-200));
  $('#main').css({
    'background-position-x': `${randNumberX}px`,
    'background-position-y': `${randNumberY}px`
  });
}
function displayWebInfo() {
  let webButton = $('#web-button'), 
      webInfo   = $('#web-info');

  if (webInfo.css('display') === 'none') {
    webInfo.css('display', 'grid');
    webButton.text('Ocultar');
    sessionStorage.setItem('webInfoDisplayed', 'true');
  } else {
    webInfo.hide();
    webButton.text('Mostrar');
    sessionStorage.setItem('webInfoDisplayed', 'false');
  }
}