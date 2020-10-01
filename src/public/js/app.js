/* eslint-disable no-undef */
window.addEventListener('load', () => {
  $JSView.run();

  $JSView.declareView({
    home: {
      url: '/home',
      template: 'views/home.html',
      controller: 'home',
    },
  });

  $JSView.initView('home');
}, false);
