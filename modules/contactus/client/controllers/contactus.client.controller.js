(function () {
  'use strict';

  // Contactus controller
  angular
    .module('contactus')
    .controller('ContactusController', ContactusController);

  ContactusController.$inject = ['$scope', '$state', '$http', '$mdToast', 'Authentication', 'contactuResolve'];

  function ContactusController($scope, $state, $http, $mdToast, Authentication, contactu) {
    var vm = this;

    vm.authentication = Authentication;
    vm.contactu = contactu;
    vm.error = null;
    vm.form = {};
    vm.remove = remove;
    //vm.save = save;

    // Remove existing Contactu
    function remove() {
      if (confirm('Are you sure you want to delete?')) {
        vm.contactu.$remove($state.go('contactus.list'));
      }
    }

    //vm.contactus = ContactusService.query();

    $scope.toastPosition = {
      bottom: false,
      top: true,
      left: false,
      right: true
    };
    $scope.getToastPosition = function () {
      return Object.keys($scope.toastPosition)
        .filter(function (pos) {
          return $scope.toastPosition[pos];
        })
        .join(' ');
    };

    $mdToast.show(
      $mdToast.simple()
        .content('Thanks for your message ' + 'Douglas jjj' + ' You Rock!')
        .position($scope.getToastPosition())
        .hideDelay(5000)
    );


    vm.sendMail = function () {

      var data = ({
        contactName: $scope.conatact_name,
        contactEmail: $scope.contactEmail,
        contactMsg: $scope.contactMsg
      });

      // Simple POST request example (passing data) :
      $http.post('/api/contactus', data).
        success(function (data, status, headers, config) {
          // this callback will be called asynchronously
          // when the response is available

          $mdToast.show(
            $mdToast.simple()
              .content('Thanks for your message ' + data.contactName + ' You Rock!')
              .position($scope.getToastPosition())
              .hideDelay(5000)
          );

        }).
        error(function (data, status, headers, config) {

          $mdToast.show(
            $mdToast.simple()
              .content('ERROR ' + data.contactName + ' You Rock!')
              .position($scope.getToastPosition())
              .hideDelay(5000)
          );

          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });

    };


    /*
     // Save Contactu
     function save(isValid) {
     if (!isValid) {
     $scope.$broadcast('show-errors-check-validity', 'vm.form.contactuForm');
     return false;
     }

     // TODO: move create/update logic to service
     if (vm.contactu._id) {
     vm.contactu.$update(successCallback, errorCallback);
     } else {
     vm.contactu.$save(successCallback, errorCallback);
     }

     function successCallback(res) {
     $state.go('contactus.view', {
     contactuId: res._id
     });
     }

     function errorCallback(res) {
     vm.error = res.data.message;
     }
     }
     */
  }
})();
