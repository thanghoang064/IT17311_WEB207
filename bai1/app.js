function myDemo($scope) {
	$scope.welcome = "Sơn đầu vàng";
}
function myInfo($scope) {
	$scope.ten = "Sơn đầu vàng";
	$scope.tuoi = 18;
	$scope.email = "sondauvang@gmail.com";
	$scope.sdt = "9876789878";
}
//sử dụng angular js 
//định nghĩa angularjs 
var app = angular.module("myapp",[]);
app.controller("demoController",myDemo);
app.controller("infoController",myInfo);
// định nghĩa 1 controller myInfo hiển thị thông tin bản thân mình 
//dưới dạng bảng 
//họ tên Nguyễn văn a
//tuổi 19 tủi
//email nguyenvana@gmail.com