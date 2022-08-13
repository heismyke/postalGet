var app = angular.module('postalApp', []);

app.controller('postalCon', function($scope){
    $scope.postals =[
        {
            isoCode: "NG-AB",
            state: "Abia",
            postcode: 440001,
            LocalGov: "Isiala Ngwa South",
            facility: "GPO",
            
        },
        {
            isoCode: "NG-AD",
            state: "Adamawa",
            postcode: 640001, 
            LocalGov: "Yola North",
            facility: "GPO",
        },
        {

        },
    ]
})