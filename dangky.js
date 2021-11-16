function a()
	{
		var phone = document.forms[0]['phone'].value;
		var password = document.forms[0]['pass'].value;
		var conirmpass= document.forms[0]['cfpass'].value;
        if(isNaN(phone) || phone.length != 10)
        {
            alert("Số điện thoại không đúng định dạng!");
            return;
        }
		if (password !=conirmpass )
        {
            alert("Mật khẩu không trùng khớp với mật khẩu vừa nhâp!");
            return;
        }
		alert("Đăng ký thành công!");
	}