angular.module('app.services')

.service('PhotoService', function($q, $http) {
  
  // this.getPhotos = function() {
  //   var d = $q.defer();
  //   $http.get('/images')
  //     .success(function(data, status, headers, config) {
  //       d.resolve(data);
  //     }).error(function(data, status, headers, config) {
  //       return d.reject(data);
  //     });
  //   return d.promise;
  // }

  this.getPhotos = function() {
    var result;
    result = $http.get('/images')
      .success(function(data, status, headers, config) {
        return data;
      }).error(function(data, status, headers, config) {
        return data;
      });
    
    return result;
  }

  this.setPhotos = function() {

  }
});