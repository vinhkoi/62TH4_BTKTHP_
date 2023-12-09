
function checkUserID() {
  let userID = document.getElementById("txtUserID");
  let userIDRegex = /^[a-zA-z0-9]{5,12}$/;
  if (userIDRegex.test(userID.value)) {
    return true;
  } else {
    return false;
  }
}

function checkPW() {
  let pw = document.getElementById("txtPW");
  let pwRegex = /^[a-zA-z0-9]{7,12}$/;
  if (pwRegex.test(pw.value)) {
    return true;
  } else {
    return false;
  }
}

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

function checkAdd() {
  let add = document.getElementById("txtAdd");
  let addRegex =
    /^[a-z0-9A-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/;
  if (addRegex.test(add.value)) {
    return true;
  } else {
    return false;
  }
}

function checkCountry() {
  let country = document.getElementById("country");
  if (country.value != "0") {
    return true;
  } else {
    return false;
  }
}

function checkZipcode() {
  let zip = document.getElementById("txtZip");
  let zipRegex = /^[0-9]{5,7}$/;
  if (zipRegex.test(zip.value)) {
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

function checkGender() {
  var genders = document.getElementsByName("gender");
  if (genders[0].checked == true) {
    return true;
  } else if (genders[1].checked == true) {
    return true;
  } else {
    return false;
  }
}

function checkLanguage() {
  let language = document.getElementById("language");
  if (language.checked) {
    return true;
  } else {
    return false;
  }
}

let register = document.getElementById("btnRegister");

register.addEventListener("click", function (e) {
  e.preventDefault();

  let statusOfUserID = document.getElementById("statusOfUserID");
  let statusOfPass = document.getElementById("statusOfPass");
  let statusOfName = document.getElementById("statusOfName");
  let statusOfAdd = document.getElementById("statusOfAdd");
  let statusOfCountry = document.getElementById("statusOfCountry");
  let statusOfZip = document.getElementById("statusOfZip");
  let statusOfEmail = document.getElementById("statusOfEmail");
  let statusOfGender = document.getElementById("statusOfGender");
  let statusOfLanguage = document.getElementById("statusOfLanguage");

  if (checkUserID()) {
    statusOfUserID.textContent = "User ID hợp lệ !";
    statusOfUserID.style.color = "green";
  } else {
    statusOfUserID.textContent = "User ID không hợp lệ !";
    statusOfUserID.style.color = "red";
  }

  if (checkPW()) {
    statusOfPass.textContent = "Password hợp lệ !";
    statusOfPass.style.color = "green";
  } else {
    statusOfPass.textContent = "Password không hợp lệ !";
    statusOfPass.style.color = "red";
  }

  if (checkCountry()) {
    statusOfCountry.textContent = "OK !";
    statusOfCountry.style.color = "green";
  } else {
    statusOfCountry.textContent = "Vui lòng chọn !";
    statusOfCountry.style.color = "red";
  }

  if (checkAdd()) {
    statusOfAdd.textContent = "Địa chỉ hợp lệ !";
    statusOfAdd.style.color = "green";
  } else {
    statusOfAdd.textContent = "Địa chỉ không hợp lệ !";
    statusOfAdd.style.color = "red";
  }

  if (checkName()) {
    statusOfName.textContent = "Tên hợp lệ";
    statusOfName.style.color = "green";
  } else {
    statusOfName.textContent = "Tên không hợp lệ. Phải là chữ cái";
    statusOfName.style.color = "red";
  }

  if (checkZipcode()) {
    statusOfZip.textContent = "Mã ZIP hợp lệ";
    statusOfZip.style.color = "green";
  } else {
    statusOfZip.textContent = "Mã ZIP không hợp lệ !";
    statusOfZip.style.color = "red";
  }

  if (checkEmail()) {
    statusOfEmail.textContent = "Email hợp lệ !";
    statusOfEmail.style.color = "green";
  } else {
    statusOfEmail.textContent = "Email không hợp lệ !";
    statusOfEmail.style.color = "red";
  }

  if (checkGender()) {
    statusOfGender.textContent = "OK !";
    statusOfGender.style.color = "green";
  } else {
    statusOfGender.textContent = "Vui lòng chọn !";
    statusOfGender.style.color = "red";
  }

  if (checkLanguage()) {
    statusOfLanguage.textContent = "OK !";
    statusOfLanguage.style.color = "green";
  } else {
    statusOfLanguage.textContent = "Vui lòng chọn !";
    statusOfLanguage.style.color = "red";
  }
});

// CACH 3: Using JQUERY

// $(document).ready(function(){

//     function checkUserID() {
//         let userID = $("#txtUserID").val();
//         let userIDRegex = /^[a-zA-z0-9]{5,12}$/;
//         if (userIDRegex.test(userID)) {
//             return true;
//         }
//         return false;
//     }

//     $("#btnRegister").click(function(e){
//         e.preventDefault();
//         if(checkUserID()){
//             $("#statusOfUserID").text('User ID hợp lệ !')
//             $("#statusOfUserID").css('color','blue')
//         }
//         else{
//             $("#statusOfUserID").text('User ID không hợp lệ !')
//             $("#statusOfUserID").css('color','red')
//         }
//     })
// })
