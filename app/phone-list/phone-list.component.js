'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('crimeList').
  component('crimeList', {
    templateUrl: 'crime/crime-list.template.html',
    controller: function PhoneListController($http) {
      var self = this;
      //self.orderProp = 'age';

      $http.get('data/Datas.json').then(function(response) {
        self.phones = response.data;
      });
    }
  });
