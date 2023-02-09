window.TinTucController = function ($scope) {
    // $scope.hihi = "ABC";
    $scope.danhsachtintuc = [
        {id:1, tieude:"ABC",mota:"BCD"},
        {id:2, tieude:"BCD",mota:"EFG"},
    ];
    $scope.kiemtradulieu =  {
        tieude:false,
        mota:false
    };
    $scope.setText = function () {
        $scope.inputValue = {
            tieude:'',
            mota:''
        }
    }
    $scope.onSubmit = function () {
        //trường tiêu đề bỏ trống
        if (!$scope.inputValue || !$scope.inputValue.tieude) {
            $scope.kiemtradulieu.tieude = true;
        }
        //trường mô tả bỏ trống
        if (!$scope.inputValue || !$scope.inputValue.mota)  {
            $scope.kiemtradulieu.mota = true;
        }
        //thêm mới
        var ds =$scope.danhsachtintuc;
        var newId = ds.length > 0 ? ds[ds.length-1].id + 1 : 1;
        var newItem = {
            id:newId,
            tieude : $scope.inputValue.tieude,
            mota : $scope.inputValue.mota,
        }
        $scope.danhsachtintuc.push(newItem);
        $scope.setText();
        //yêu cầu tạo route khách hàng //tạo form khách hàng
        // như sau : id,tên khách hàng,namsinh,địa chỉ
        //validate tenkh,namsinh,diachi
        //validate không được namsinh < 0
        // tạo ra 1 bảng hiển thị thông tin khách hàng
        //xử lý thêm khách hàng
    }
}