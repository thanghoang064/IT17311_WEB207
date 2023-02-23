window.TinTucController = function ($scope,$http,$location) {
    // $scope.hihi = "ABC";
    // $scope.danhsachtintuc = [
    //     {id:1, tieude:"ABC",mota:"BCD"},
    //     {id:2, tieude:"BCD",mota:"EFG"},
    // ];
    //link API khi đón nó về
    var apiURL = "http://localhost:3000/tintucs";
    $scope.getData = function() {
        $http.get(apiURL).then(function (response) {
            //sau khi đón được dữ liệu về
            $scope.danhsachtintuc = response.data;
            // console.log(response.data);
        })

    }
    $scope.getData();
    $scope.kiemtradulieu =  {
        tieude:false,
        mota:false
    };
    $scope.setText = function () {
        $scope.inputValue = {
            tieude:'',
            mota:''
        }
        $scope.editId = 0;
    }
    $scope.onSubmit = function () {
        //trường tiêu đề bỏ trống
        var flag = false;
        if (!$scope.inputValue || !$scope.inputValue.tieude) {
            $scope.kiemtradulieu.tieude = true;
            flag = true;
        }
        //trường mô tả bỏ trống
        if (!$scope.inputValue || !$scope.inputValue.mota)  {
            $scope.kiemtradulieu.mota = true;
            flag = true;
        }
        //nếu như thoát hết validate
        if (flag == false) {
                //sửa
                var editID = $scope.editId;
                //nếu như có editID tôi được sửa
                if (editID) {
                    //xử lý sửa trong này
                    // for (var i = 0;i < $scope.danhsachtintuc.length;i ++ ) {
                    //     if ($scope.danhsachtintuc[i].id == editID) {
                    //         $scope.danhsachtintuc[i].tieude = $scope.inputValue.tieude;
                    //         $scope.danhsachtintuc[i].mota = $scope.inputValue.mota;
                    //     }
                    // }
                    var updateItem = {
                        tieude:$scope.inputValue.tieude,
                        mota:$scope.inputValue.mota
                    };
                    //sửa
                    $http.put(
                        `${apiURL}/${editID}`,
                        updateItem
                    ).then(
                        function (response) {
                            if (response.status == 200) {
                                $location.path('tin-tuc');
                                $scope.getData();
                            }
                        }
                    )
                    $scope.setText();
                    return ;
                }
                //thêm mới
                // var ds =$scope.danhsachtintuc;
                // var newId = ds.length > 0 ? ds[ds.length-1].id + 1 : 1;
                var newItem = {
                    // id:newId,
                    tieude : $scope.inputValue.tieude,
                    mota : $scope.inputValue.mota,
                }
                $http.post(
                    apiURL,//đường dẫn API
                    newItem // dữ liệu thêm
                ).then(
                    function (response) {
                        // console.log(response);
                        $location.path('tin-tuc');
                        $scope.getData();
                    }
                )
                // $scope.danhsachtintuc.push(newItem);
                $scope.setText();
        }
        //yêu cầu tạo route khách hàng //tạo form khách hàng
        // như sau : id,tên khách hàng,namsinh,địa chỉ
        //validate tenkh,namsinh,diachi
        //validate không được namsinh < 0
        // tạo ra 1 bảng hiển thị thông tin khách hàng
        //xử lý thêm khách hàng
    }
    $scope.onEdit = function (editId) {
        $location.path('trang-chu/'+editId);
        $scope.editId = editId;
        var editItem = {
            tieude:"",
            mota:""
        }
        // for(var i = 0;i < $scope.danhsachtintuc.length;i++) {
        //     if ($scope.danhsachtintuc[i].id == editId) {
        //         editItem.tieude = $scope.danhsachtintuc[i].tieude;
        //         editItem.mota = $scope.danhsachtintuc[i].mota;
        //     }
        // }
        $http.get(`${apiURL}/${editId}`).then(
            function (response) {
                console.log(response);
                if (response.status == 200) {
                    $scope.inputValue = {
                        tieude: response.data.tieude,
                        mota: response.data.mota,
                    }
                }
            }
        )
        //hiển thị lên input bắn dữ liệu lên input


    }
    $scope.onDelete = function (deleteId) {
        var confirm = window.confirm("bạn có muốn xóa ko ? ");
        if (confirm) {
            $scope.danhsachtintuc = $scope.danhsachtintuc.filter(function (item) {
                return item.id !== deleteId;
            })
        }
    }
}