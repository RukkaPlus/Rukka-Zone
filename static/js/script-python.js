$(() => {
  $('.str-tab').on('click', () => selectTab('str'));
  $('.list-tab').on('click', () => selectTab('list'));
  $('.set-tab').on('click', () => selectTab('set'));
  $('.dict-tab').on('click', () => selectTab('dict'));

  selectTab('str');
});

function selectTab(tabName) {
  $('.tabmanager-special > div > button').removeClass("w3-border");;
  $(`.${tabName}-tab`).addClass("w3-border");
  $('.tabmanager-special > section').hide();
  $(`.${tabName}-tabpanel`).show();
}