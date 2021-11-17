 // Khi người dùng cuộn chuột thì gọi hàm scrollFunction
 window.onscroll = function() {scrollFunction()};
    // Khai báo hàm scrollFunction
    function scrollFunction() {
        // Hiện button
        document.getElementById("nutbacktotop").style.display = "block";
    }
    // Gán sự kiện click cho button
    document.getElementById('nutbacktotop').addEventListener("click", function(){
        //Nếu button được click thì nhảy về đầu trang
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });