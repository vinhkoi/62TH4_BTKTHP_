
// Back-to-top
window.onscroll = function() {scrollFunction()};
let btn_back_to_top = document.getElementById("myBtn")
function scrollFunction() {
 
if ( document.documentElement.scrollTop > 1) {
  btn_back_to_top.style.display = "block";
  btn_back_to_top.style.transition = " all 2s"
} else {
  btn_back_to_top.style.display = "none";
}
}
 
btn_back_to_top.addEventListener("click", function(){
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
});


function checkName() {
  let Name = document.getElementById("txtName");
  let NameRegex =
    /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/;
  if (NameRegex.test(Name.value)) {
    return true;
  } else {
    return false;
  }
}

function checkEmail() {
  let email = document.getElementById("txtEmail");
  let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (emailRegex.test(email.value)) {
    return true;
  } else {
    return false;
  }
}

function checkPhoneNumber() {
  let phone = document.getElementById("txtPhone");
  let phoneRegex = /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/;
  if (phoneRegex.test(phone.value)) {
    return true;
  } else {
    return false;
  }
}

function checkMessage() {
  let mess = document.getElementById("txtMess");
  let messRegex = /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/;
  if (messRegex.test(mess.value)) {
    return true;
  } else {
    return false;
  }
}
function checksubject() {
  var subject = document.getElementById("txtsubject");
  let subjectRegex = /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/;
  if (subjectRegex.test(subject.value)) {
    return true;
  }
  return false;
}



let register = document.getElementById("btnSend");

register.addEventListener("click", function (e) {
  e.preventDefault();

  let statusOfName = document.getElementById("statusOfName");
  let statusOfEmail = document.getElementById("statusOfEmail");
  let statusOfPhone = document.getElementById("statusOfPhone");
  let statusOfMess = document.getElementById("statusOfMess");
  let statusOfNoti = document.getElementById("statusOfNoti");
  let statusOfsubject = document.getElementById("statusOfsubject");


  if (checkName() == false) {
    statusOfName.textContent = "Invalid name !";
    statusOfName.style.color = "red";
    statusOfName.style.fontWeight = "700";
    statusOfName.style.fontSize = "13px";
    statusOfName.style.marginLeft = "10px";
  } else {
    statusOfName.textContent = " ";
    statusOfName.style.color = "green";
  }

  if (checkEmail() == false) {
    statusOfEmail.textContent = "Invalid email !";
    statusOfEmail.style.color = "red";
    statusOfEmail.style.fontWeight = "700";
    statusOfEmail.style.fontSize = "13px";
    statusOfEmail.style.marginLeft = "10px";
  } else {
    statusOfEmail.textContent = " ";
    statusOfEmail.style.color = "green";
  }

  if (checkPhoneNumber() == false) {
    statusOfPhone.textContent = "Invalid phone number !";
    statusOfPhone.style.color = "red";
    statusOfPhone.style.fontWeight = "700";
    statusOfPhone.style.fontSize = "13px";
    statusOfPhone.style.marginLeft = "10px";
  } else {
    statusOfPhone.textContent = " ";
    statusOfPhone.style.color = "green";
  }

  if (checkMessage() == false) {
    statusOfMess.textContent = "Please enter a message before sending !";
    statusOfMess.style.color = "red";
    statusOfMess.style.fontWeight = "700";
    statusOfMess.style.fontSize = "13px";
    statusOfMess.style.marginLeft = "10px";
  } else {
    statusOfMess.textContent = " ";
    statusOfMess.style.color = "green";
  }
  
  if (checkName() && checkEmail() && checkPhoneNumber() && checkMessage()) {
    statusOfNoti.textContent = " Send Complete !";
    statusOfNoti.style.color = "green";
    statusOfNoti.style.fontWeight = "700";
    statusOfNoti.style.fontSize = "16px";
    statusOfNoti.style.marginLeft = "10px";
  } else {
    statusOfNoti.textContent = "Please complete the form !";
    statusOfNoti.style.color = "red";
    statusOfNoti.style.fontWeight = "700";
    statusOfNoti.style.fontSize = "16px";
    statusOfNoti.style.marginLeft = "10px";
  }
  
  if (checksubject()) {
    statusOfsubject.textContent = " ";
    statusOfsubject.style.color = "green";
  }
  else {
    statusOfsubject.textContent = "Please enter a text before sending !";
    statusOfsubject.style.color = "red";
    statusOfsubject.style.fontWeight = "700";
    statusOfsubject.style.fontSize = "13px";
    statusOfsubject.style.marginLeft = "10px";
  }

  if (checkName() && checkEmail() && checkPhoneNumber() && checkMessage() && checksubject()) {
    statusOfNoti.textContent = " Send Complete !";
    statusOfNoti.style.color = "green";
    statusOfNoti.style.fontWeight = "700";
    statusOfNoti.style.fontSize = "16px";
    statusOfNoti.style.marginLeft = "10px";
  } else {
    statusOfNoti.textContent = "Please complete the form !";
    statusOfNoti.style.color = "red";
    statusOfNoti.style.fontWeight = "700";
    statusOfNoti.style.fontSize = "16px";
    statusOfNoti.style.marginLeft = "10px";
  }
  
});
