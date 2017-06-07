var app = angular.module("assessment", ["ui.router"])
// CONFIG
// ============================================================
.config(function($stateProvider, $urlRouterProvider) {

  // INITILIZE STATES
  // ========================ROUTES====================================
  $stateProvider

    // HOME STATE
    .state('home', {
      url: '/',
      templateUrl: './views/home.html',
      controller: 'shopCtrl'
    })


	 // ABOUT STATE
	 .state('about', {
	   url: '/about',
	   templateUrl: './views/about.html',
	   controller: 'aboutCtrl'
	 })


     // BLOG STATE
	 .state('blog', {
	   url: '/blog',
	   templateUrl: './views/blog.html',
	   controller: 'blogCtrl'
	 })

    // HOME STATE
.state('home', {
      url: '/',
      templateUrl: './views/home.html',
      controller: 'homeCtrl'
    })


     // SHOP STATE
.state('shop', {
	   url: '/shop',
	   templateUrl: './views/shop.html',
	   controller: 'shopCtrl'
	 })

		.state('details', {
				url: '/details/:id',
				templateUrl: './views/product-details.html',
				controller: 'shopCtrl'
		});


  // ASSIGN OTHERWISE
  // ============================================================
  $urlRouterProvider.otherwise('/');
});
