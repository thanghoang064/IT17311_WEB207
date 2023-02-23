window.TrangChuController = function ($scope,$routeParams) {
	var id = $routeParams.name; // nhận theo tên param bên phía kia
	console.log(id);
	//làm cái gì đó bleu bleu
	$scope.title = "Đây là trang chủ";
}