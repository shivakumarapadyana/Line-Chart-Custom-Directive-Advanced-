/**
 * Created by shiva on 05/17/2017.
 */
var v5pcmApp = angular.module('v5pcmApp');
v5pcmApp.directive('chart', ['$rootScope','$timeout','$compile', function ($rootScope,$timeout,$compile) {

    /*$scope.close=function(){
     console.log(" triggerd close");
     }*/

    console.log("custom directive of chart js initiated");
    var controller = ['$scope','$rootScope', function ($scope1,$rootScope1) {


        $scope1.$parent.showdiv=0;
        $rootScope.sc="true";
        //  $scope1.showChart=true;
        $scope1.closea=function(id){
            console.log(" triggerd close id " + id);
            $timeout(function() {

                console.log("df = " +$scope1.showChart );
                $scope1.showChart = false;

                $compile();
                console.log("df = " +$scope1.showChart );
            });

            console.log("df 1");
        };

        var showAllChart={};
        $scope1.showHiddenChartDiv=false;
        $scope1.hiddenCharts=[];
        $scope1.compareChartList=[];

        if(typeof $scope1.$parent.fl=='undefined'){
            $scope1.$parent.fl=0;
            $scope1.$parent.fl++;
            $scope1.tempFl=$scope1.$parent.fl;

        }else{
            $scope1.$parent.fl++;
            console.log($scope1.$parent.fl+ " is new val");
            $scope1.tempFl=$scope1.$parent.fl;
        }




        $scope1.getClass=function(){
            // console.log(" called " + $scope1.$parent.fl);

            return $scope1.tempFl;
        };



        if( typeof $scope1.$parent.unitListWithShowAttribute=='undefined') {


            $scope1.$parent.unitListWithShowAttribute = [];
        }

        $scope1.$parent.tempList=[];
        $scope1.tl= $scope1.$parent.tempList;


        $scope1.$parent.unitListWithShowAttribute.push({"unitID":$scope1.id, "display":"true"});
        //    console.log(" unis " + JSON.stringify($scope1.$parent.unitListWithShowAttribute));

        $scope1.isFirstChart=function(){

        };


        $scope1.showOrHideChart=function(unitID,option){
            /*// console.log(" Show Chart for unit =  " + unitID  );
             console.log( "option = "+ option +" unit id =" + unitID);
             console.log(" unis " + JSON.stringify($scope1.$parent.unitListWithShowAttribute));
             */ $scope1.tl= $scope1.$parent.tempList;
            for(var unitIdx in $scope1.$parent.unitListWithShowAttribute)
            {
                unitObj=$scope1.$parent.unitListWithShowAttribute[unitIdx];
                if(unitObj.unitID==unitID)
                {
                    if(option=='show') {
                        console.log(unitObj.display + " show");
                        unitObj.display=true;
                        if($scope1.$parent.tempList.indexOf(unitObj.unitID>1)) {
                            $scope1.$parent.tempList.splice($scope1.$parent.tempList.indexOf(unitObj.unitID),1);
                        }

                        return unitObj.display;
                    }else if(option=='hide'){

                        console.log(unitObj.display + " hide" + unitID + " uni ob " + unitObj.unitID    );
                        unitObj.display=false;
                        console.log(JSON.stringify($scope1.$parent.tempList));
                        if($scope1.$parent.tempList.indexOf(unitObj.unitID==-1)) {
                            console.log(" pusing " + unitID);
                            console.log(JSON.stringify($scope1.$parent.tempList));
                            $scope1.$parent.tempList.push(unitObj.unitID);
                        }
                        return unitObj.display;
                    }
                    else{
                        console.log("def:" +unitObj.display    );
                        return unitObj.display;
                    }
                }
            }
            return true;
        }


        $scope1.$parent.hiddenChartList=[];
        $rootScope1.hiddenChartList=[];

        $scope1.hideChart=function(unitID){
            console.log(" Show Chart for unit =  " + unitID  );
            for(var unitIdx in $scope1.$parent.unitListWithShowAttribute)
            {
                unitObj=$scope1.$parent.unitListWithShowAttribute[unitIdx];
                if(unitObj.unitID==unitID)
                {
                    console.log(unitObj.display);
                    unitObj.display=false;
                    return unitObj.display;
                }
            }
            return true;


        }
        $scope1.showChart=function(unitID){

            console.log(" Show Chart for unit =  " + unitID  );
            for(var unitIdx in $scope1.$parent.unitListWithShowAttribute)
            {
                unitObj=$scope1.$parent.unitListWithShowAttribute[unitIdx];
                if(unitObj.unitID==unitID)
                {
                    console.log(unitObj.display);
                    unitObj.display=true;
                    return unitObj.display;
                }
            }
            return true;


        }


    }];

    $rootScope.show="true"
    function link (scope) {

        scope.showChart="false";
        //Timeout function is introduced have a delay so that the view is rendered first in order to have the chart ready before supplying config options to the chart object.
        $timeout(function(){





                console.log(" dir "+scope.config);
                var config= {
                    type: 'line',
                    data: {
                        labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
                        datasets: [{
                            data: [1,1.2,1.5,1.2,1.35,1.6,1.4,1.1,1.3,1.2],

                            fill: false,
                            fillColor: "transparent",
                            strokeColor: "#043363",
                            pointBorderColor:"rgba(220,220,220,1)",
                            pointBackgroundColor:"rgba(220,220,220,1)",
                            borderColor:"#043363",
                            borderWidth:4,
                            scaleGridLineColor: 'red',
                            scaleFontColor: 'black'
                        }/* {
                         data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 11111],

                         fill: false,
                         fillColor: "transparent",
                         strokeColor: "#043363",
                         pointBorderColor:"rgba(220,220,220,1)",
                         pointBackgroundColor:"rgba(220,220,220,1)",
                         borderColor:"#043363",
                         borderWidth:4
                         }, {
                         data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
                         fill: false,
                         fillColor: "transparent",
                         strokeColor: "#043363",
                         pointBorderColor:"rgba(220,220,220,1)",
                         pointBackgroundColor:"rgba(220,220,220,1)",
                         borderColor:"#043363",
                         borderWidth:4
                         }, {
                         fill: false,
                         fillColor: "transparent",
                         strokeColor: "#043363",
                         pointBorderColor:"rgba(220,220,220,1)",
                         pointBackgroundColor:"rgba(220,220,220,1)",
                         borderColor:"#043363",
                         borderWidth:4
                         }, {
                         fill: false,
                         fillColor: "transparent",
                         strokeColor: "#043363",
                         pointBorderColor:"rgba(220,220,220,1)",
                         pointBackgroundColor:"rgba(220,220,220,1)",
                         borderColor:"#043363",
                         borderWidth:4
                         }*/
                        ]
                    },
                    options: {
                        legend: {
                            display: false
                        },
                        title: {
                            display: true,
                            text: 'World population per region (in millions)',
                            responsive: true

                        },
                        animation: {
                            duration: 2000,
                            easing: "easeOutBounce"
                        },
                        scales: {
                            yAxes: [{
                                ticks: {
                                    max: 100,
                                    min: 0,
                                    stepSize: 10
                                },
                                gridLines: {
                                    display: true ,
                                    color: "black",
                                    lineWidth:0.5
                                }
                            }]
                            ,
                            xAxes: [{
                                ticks: {
                                    max: 100,
                                    min: 0,
                                    stepSize: 10
                                },
                                gridLines: {
                                    display: true ,
                                    color: "black",
                                    lineWidth:0.5
                                }
                            }]
                        }

                    }

                };


                var ctx=document.getElementById(scope.id);
                console.log(ctx);
                var ct=new Chart(ctx,config );
                console.log(ct);

            }
        );

    }
    return {
        restrict: 'E',
        scope:{
            config : '@',
            id:"=",
            width:"=",
            height:"="
        },
        templateUrl:'/pcmapp/views/directives/lineChartTemplate.html',
        link : link,
        controller: controller
    }

}]);
