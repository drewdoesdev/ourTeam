app.controller('MainController', ['$scope', function($scope) {
	$scope.cards = [
	{
		idPic: "img/rod.jpg",
		name: "Rod Taylor",
		title: "Founding Partner",
		bio: "Rod Taylor established Taylor & Company in 1984 to offer clients international management consulting and executive recruiting services.",
		phone1: 8776784090,
		phone2: 7703351147,
		email: "rod.taylor@taylorcompany.net",
		fullBio: ""
	},
	{
		idPic: "img/melissa.jpg",
		name: "Melissa Price",
		title: "Partner",
		bio: "Melissa Price joined Taylor & Company in 2005. She manages Taylor’s recruiting operations, client relationships, and business development in the U.S.",
		phone1: 8776784090,
		phone2: 3346180367,
		email: "melissa.price@taylorcompany.net",
		fullBio: ""
	}
	],

	$scope.fullBio = {
		fullBioId: "",
		bio: ""
	}
}]);