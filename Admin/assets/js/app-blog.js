// window.localStorage.setItem('data_blog', JSON.stringify(data));

stt = localStorage.length+1;
userForm.stt.value = stt;

function delete_user(obj){
    row = obj.parentElement.parentElement;
    stt = row.firstElementChild.innerHTML;
    localStorage.removeItem(stt);
    row.remove();
}

function edit_user(obj) {
    row = obj.parentElement.parentElement.children;
    userForm.stt.value = row[0].innerHTML;
    userForm.poster.value = row[1].innerHTML;
    userForm.title.value = row[2].innerHTML;
    userForm.content.value = row[3].innerHTML;
}

function update_user() {
var stt = userForm.stt.value;
var poster = userForm.poster.value;
    var title = userForm.title.value;
    var content = userForm.content.value;
    user = {
        stt: stt,
        poster: poster,
        title: title,
        content: content
    };
    localStorage.setItem(stt, JSON.stringify(user));
    read_data();
}
function delete_all(){
    localStorage.clear();
    read_data();
}


function create_user() {
    event.preventDefault();
    var poster = userForm.poster.value;
    var title = userForm.title.value;
    var content = userForm.content.value;

    user = {
        stt: stt,
        poster: poster,
        title: title,
        content: content
    };

    tbody = document.getElementById("data");
    row = tbody.insertRow(-1);

    cell0 = row.insertCell(0);
    cell1 = row.insertCell(1);
    cell2 = row.insertCell(2);
    cell3 = row.insertCell(3);
    cell4 = row.insertCell(4);
    cell5 = row.insertCell(5);

    cell0.innerHTML = stt;
    cell1.innerHTML = poster;
    cell2.innerHTML = title;
    cell3.innerHTML = content;
    cell4.innerHTML = '<i class="fas fa-edit"></i>';
    cell5.innerHTML = `<span onclick="delete_user(this)"><i class="fas fa-trash"></i><span>`;

    localStorage.setItem(stt, JSON.stringify(user));
    stt++;
    userForm.stt.value = stt;
    userForm.poster.value = null;
    userForm.title.value = null;
    userForm.content.value = null;

}


function read_data() {
    tbody = document.getElementById("data");
    tbody.innerHTML = null;



    for (i = 0; i < localStorage.length; i++) {
        row = tbody.insertRow(-1);
        cell0 = row.insertCell(0);
        cell1 = row.insertCell(1);
        cell2 = row.insertCell(2);
        cell3 = row.insertCell(3);
        cell4 = row.insertCell(4);
        cell5 = row.insertCell(5);
        user_data = JSON.parse(localStorage.getItem(localStorage.key(i)));

        cell0.innerHTML = user_data.stt;
        cell1.innerHTML = user_data.poster;
        cell2.innerHTML = user_data.title;
        cell3.innerHTML = user_data.content;
    cell4.innerHTML = `<span onclick="edit_user(this)"><i class="fas fa-edit"></i><span>`;
    cell5.innerHTML = `<span onclick="delete_user(this)"><i class="fas fa-trash"></i><span>`;

    }



}