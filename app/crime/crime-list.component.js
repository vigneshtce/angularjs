'use strict';
      angular.module('crimeList').component('crimeList', {
      templateUrl: 'crime/crime-list.template.html',
      controller: function CrimeListController($http,$scope) {
      var self = this;
      self.currentPage=0;
      self.pageSize = 4;
      $http.get('data/Datas.json').then(function(response) {
      self.crimes = response.data;
      self.pageCount =  Math.ceil(self.crimes.length/self.pageSize);
      $scope.yearlist=[];
      $scope.abovelist=[];
      $scope.underlist=[];
      for(var i=0;i<self.crimes.length;i++)
      {
        $scope.yearlist[i]=self.crimes[i].year;
        $scope.abovelist[i]=self.crimes[i].Above500;
        $scope.underlist[i]=self.crimes[i].Below500;
      }
      });
      $scope.searchfil=function(val,info)
      {
        $scope.lab=info;
        if($scope.lab=="year")
        {
                  $scope.yr=val;
              $scope.da=self.crimes;
               $scope.data=[];
             for(var i=0;i<self.crimes.length;i++)
             {
               if($scope.yr<=  $scope.yearlist[i]){
                 $scope.data.push($scope.da[i]);
                  alert($scope.data);
               }
             }
             self.crimes = $scope.data;
       }
       if($scope.lab=="above")
       {
         $scope.ab=val;
       //alert(val);
       $scope.d=self.crimes;
       $scope.data=[];
       for(var i=0;i<self.crimes.length;i++)
       {
       if($scope.ab<  $scope.abovelist[i]){
        $scope.data.push($scope.d[i]);
       }
       }
       self.crimes = $scope.data;
      //  alert($scope.names);
       }
       if($scope.lab=="below")
       {
         $scope.be=val;
       //alert(val);
       $scope.d=self.crimes;
       $scope.data=[];
       for(var i=0;i<$scope.crimes.length;i++)
       {
       if($scope.be<  $scope.underlist[i]){
        $scope.data.push($scope.d[i]);
       }
       }
       self.crimes = $scope.data;
      //  alert($scope.names);
       }
      };
      $scope.delete = function(d)  {
        self.crimes.splice(d,1);
      };
      $scope.reset = function(){
         self.pageCount =  Math.ceil(self.crimes.length/self.pageSize);
      }
      $scope.sort=function(keyname){
        $scope.$ctrl.orderProp= keyname;
        $scope.reverse= !$scope.reverse;
}



$scope.asc = function(x)
     {
       self.cases.sort(function(a,b)
       {
        return (b[x]-a[x]);
      });
    };
    $scope.des= function(x)
    {
      self.cases.sort(function(a,b)
      {
        return (a[x]-b[x]);
      });
    };
}
  });
