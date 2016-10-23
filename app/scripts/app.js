'use strict';
/**
 * @ngdoc overview
 * @name sbAdminApp
 * @description
 * # sbAdminApp
 *
 * Main module of the application.
 */
 angular
 .module('sbAdminApp', [
  'oc.lazyLoad',
  'ui.router',
  'ui.bootstrap',
  'angular-loading-bar',
  ])
 .config(['$stateProvider','$urlRouterProvider','$ocLazyLoadProvider',function ($stateProvider,$urlRouterProvider,$ocLazyLoadProvider) {

  $ocLazyLoadProvider.config({
    debug:false,
    events:true,
  });

  $urlRouterProvider.otherwise('/login');

  $stateProvider
  .state('dashboard', {
    url:'/dashboard',
    templateUrl: 'views/dashboard/main.html',
    resolve: {
      loadMyDirectives:function($ocLazyLoad){
        return $ocLazyLoad.load(
        {
          name:'sbAdminApp',
          files:[
          'scripts/directives/header/header.js',
          'scripts/directives/header/header-notification/header-notification.js',
          'scripts/directives/sidebar/sidebar.js',
          'scripts/directives/sidebar/sidebar-search/sidebar-search.js'
          ]
        }),
        $ocLazyLoad.load(
        {
         name:'toggle-switch',
         files:["bower_components/angular-toggle-switch/angular-toggle-switch.min.js",
         "bower_components/angular-toggle-switch/angular-toggle-switch.css"
         ]
       }),
        $ocLazyLoad.load(
        {
          name:'ngAnimate',
          files:['bower_components/angular-animate/angular-animate.js']
        })
        $ocLazyLoad.load(
        {
          name:'ngCookies',
          files:['bower_components/angular-cookies/angular-cookies.js']
        })
        $ocLazyLoad.load(
        {
          name:'ngResource',
          files:['bower_components/angular-resource/angular-resource.js']
        })
        $ocLazyLoad.load(
        {
          name:'ngSanitize',
          files:['bower_components/angular-sanitize/angular-sanitize.js']
        })
        $ocLazyLoad.load(
        {
          name:'ngTouch',
          files:['bower_components/angular-touch/angular-touch.js']
        })
      }
    }
  })
  .state('dashboard.home',{
    url:'/home',
    controller: 'MainCtrl',
    templateUrl:'views/dashboard/home.html',
    resolve: {
      loadMyFiles:function($ocLazyLoad) {
        return $ocLazyLoad.load({
          name:'sbAdminApp',
          files:[
          'scripts/controllers/main.js',
          'scripts/directives/timeline/timeline.js',
          'scripts/directives/notifications/notifications.js',
          'scripts/directives/chat/chat.js',
          'scripts/directives/dashboard/stats/stats.js',
          // 'scripts/directives/figure1/figureone.js'

          ]
        })
      }
    }
  })
  .state('dashboard.form',{
    templateUrl:'views/form.html',
    url:'/form'
  })
  .state('dashboard.profile',{
    templateUrl:'views/profile.html',
    url:'/profile',
    controller:'ProfileCtrl',
    resolve: {
      loadMyFiles:function($ocLazyLoad) {
        return $ocLazyLoad.load({
          name:'sbAdminApp',
          files:[
          'scripts/controllers/profile.js'

          ]
        })
      }
    }
  })
  .state('dashboard.blank',{
    templateUrl:'views/pages/blank.html',
    url:'/blank'
  })
  .state('dashboard.reports',{
    templateUrl:'views/reports.html',
    url:'/reports',
    controller:'ReportsCtrl',
    resolve: {
      loadMyFiles:function($ocLazyLoad) {
        return $ocLazyLoad.load({
          name:'sbAdminApp',
          files:[
          'scripts/controllers/reports.js'

          ]
        })
      }
    }
  })
  .state('dashboard.survey',{
    templateUrl:'views/survey.html',
    url:'/suvery'
  })
  .state('dashboard.terms',{
    templateUrl:'views/terms.html',
    url:'/terms'
  })
  .state('dashboard.about',{
    templateUrl:'views/about.html',
    url:'/about'
  })
  .state('login',{
    templateUrl:'views/pages/login.html',
    url:'/login'
  })
  .state('dashboard.chart',{
    templateUrl:'views/chart.html',
    url:'/chart',
    controller:'ChartCtrl',
    resolve: {
      loadMyFile:function($ocLazyLoad) {
        return $ocLazyLoad.load({
          name:'chart.js',
          files:[
          'bower_components/angular-chart.js/dist/angular-chart.min.js',
          'bower_components/angular-chart.js/dist/angular-chart.css'
          ]
        }),
        $ocLazyLoad.load({
          name:'sbAdminApp',
          files:['scripts/controllers/chartContoller.js']
        })
      }
    }
  })
  .state('dashboard.table',{
    templateUrl:'views/table.html',
    url:'/table'
  })
  .state('dashboard.section1',{
    templateUrl:'views/survey/section1.html',
    url:'/section1'
  })
  .state('dashboard.section2',{
    templateUrl:'views/survey/section2.html',
    url:'/section2'
  })
  .state('dashboard.section3',{
    templateUrl:'views/survey/section3.html',
    url:'/section3'
  })
  .state('dashboard.section4',{
    templateUrl:'views/survey/section4.html',
    url:'/section4'
  })
  .state('dashboard.section5',{
    templateUrl:'views/survey/section5.html',
    url:'/section5'
  })
  .state('dashboard.section6',{
    templateUrl:'views/survey/section6.html',
    url:'/section6'
  })
  .state('dashboard.section7',{
    templateUrl:'views/survey/section7.html',
    url:'/section7'
  })
  // .state('dashboard.calculations',{
  //   templateUrl:'views/reports/calculations.html',
  //   url:'/calculations'
  // })
  // .state('dashboard.figures',{
  //   templateUrl:'views/reports/figures.html',
  //   url:'/figures'
  // })


  .state('dashboard.panels-wells',{
    templateUrl:'views/ui-elements/panels-wells.html',
    url:'/panels-wells'
  })
  .state('dashboard.buttons',{
    templateUrl:'views/ui-elements/buttons.html',
    url:'/buttons'
  })

  .state('dashboard.notifications',{
    templateUrl:'views/ui-elements/notifications.html',
    url:'/notifications'
  })
  .state('dashboard.typography',{
   templateUrl:'views/ui-elements/typography.html',
   url:'/typography'
 })
  .state('dashboard.icons',{
   templateUrl:'views/ui-elements/icons.html',
   url:'/icons'
 })
  .state('dashboard.grid',{
   templateUrl:'views/ui-elements/grid.html',
   url:'/grid'
 })
}]);


