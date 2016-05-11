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


    // Add the dropdown create item
    Menus.addSubMenuItem('topbar', 'contactus', {
      title: 'Contact Us',
      state: 'contactus.create',
      roles: ['*']
    });
  }
})();
