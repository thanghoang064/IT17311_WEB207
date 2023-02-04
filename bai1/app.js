function myDemo($scope) {
	$scope.welcome = "Sơn đầu vàng";
}
function myInfo($scope) {
	$scope.ten = "Sơn đầu vàng";
	$scope.tuoi = 18;
	$scope.email = "sondauvang@gmail.com";
	$scope.sdt = "9876789878";
}
// function sonDauVang($scope) {
// 	$scope.huhu = "chúc  mừng năm mới";
// }
//sử dụng angular js 
//định nghĩa angularjs 
var app = angular.module("myapp",[]);
//viết thường
app.controller("demoController",myDemo);
app.controller("infoController",myInfo);
//kiểu viết tắt
app.controller("sonDauVangController",function($scope){
	//xử lý controller trong này
	$scope.huhu = "chúc  mừng năm mới";
	//1 đối tượng sơn đầu vàng 
	$scope.info = {
	"ten":"Sơn đầu vàng",
	"tuoi":18,
	"email":"sondauvang@gmail.com",
	"sdt":"078292992"
	};
	//1 mảng đối tượng 
	$scope.infos = [{
		"ten":"Sơn đầu vàng",
		"tuoi":18
	},{
		"ten":"Nguyện đầu đen",
		"tuoi":20
	},{
		"ten":"Sơn đầu đen",
		"tuoi":19
	}];
	// tạo ra 1 function 
	//tạo ra 1  biến count = 0 
	$scope.count = 0;
	$scope.myFunc = function() {
		$scope.count++;
	}
	$scope.sayHello = function() {
		$scope.hihi = $scope.test;
	}
});
// tạo 1 controller mới hiển thị ra dòng bất kì 
// định nghĩa 1 controller myInfo hiển thị thông tin bản thân mình 
//dưới dạng bảng 
//họ tên Nguyễn văn a
//tuổi 19 tủi
//email nguyenvana@gmail.com