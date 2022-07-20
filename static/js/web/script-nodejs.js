$(() => {
  $('.npm-tab').on('click', npmTab);
  $('.pnpm-tab').on('click', pnpmTab);

  npmTab();
});

function npmTab() {
  $('.npm-tab').addClass("w3-border");
  $('.npm-tabpanel').show();

  $('.pnpm-tab').removeClass("w3-border");
  $('.pnpm-tabpanel').hide();
}
function pnpmTab() {
  $('.pnpm-tab').addClass("w3-border");
  $('.pnpm-tabpanel').show();

  $('.npm-tab').removeClass("w3-border");
  $('.npm-tabpanel').hide();
}
/*
<script src="{{ url_for('static', filename='js/web/script-nodejs.js') }}"></script>

<div class="w3-container tabmanager">
  <div class="w3-bar">
    <button class="w3-bar-item w3-button npm-tab">NPM</button>
    <button class="w3-bar-item w3-button pnpm-tab">PNPM</button>
  </div>
  <section class="w3-border w3-panel npm-tabpanel">
    <pre><code class="language-sh">npm init</code></pre>
  </section>
  <section class="w3-border w3-panel pnpm-tabpanel">
    <pre><code class="language-sh">pnpm init</code></pre>
  </section>
</div>
*/