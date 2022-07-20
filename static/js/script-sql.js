$(() => {
  $('.sqlite-tab').on('click', () => selectTab('sqlite'));
  $('.postgres-tab').on('click', () => selectTab('postgres'));
  $('.mariadb-tab').on('click', () => selectTab('mariadb'));

  selectTab('sqlite');
});

function selectTab(tabName) {
  $('.tabmanager-special > div > button').removeClass("w3-border");;
  $(`.${tabName}-tab`).addClass("w3-border");
  $('.tabmanager-special > section').hide();
  $(`.${tabName}-tabpanel`).show();
  $('#aside > div:nth-child(3) > ul > ul').hide();
  $(`.${tabName}-index`).show();
}