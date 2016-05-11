(function () {
  'use strict';

  angular
    .module('contactus')
    .run(menuConfig);

  menuConfig.$inject = ['Menus'];

  function menuConfig(Menus) {
    // Set top bar menu items
    Menus.addMenuItem('topbar', {
      title: 'Contact Us',
      state: 'contactus',
      type: 'dropdown',
      roles: ['*']
    });

  }
})();
