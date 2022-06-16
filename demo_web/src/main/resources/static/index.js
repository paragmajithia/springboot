function fetchUserByPathVar() {
    let id = document.getElementById("fetchPathUserId").value;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const myJson = this.responseText;
            let userDiv = document.getElementById("userDetails");
            let child = userDiv.lastElementChild;
            while (child) {
                userDiv.removeChild(child);
                child = userDiv.lastElementChild;
            }
            userDiv.innerHTML = myJson;
        }
    };
    xhttp.open("GET", "http://localhost:8080/user/" + id, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
}
function fetchUserByRequestParam() {
    let id = document.getElementById("fetchRequestUserId").value;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const myJson = this.responseText;
            let userDiv = document.getElementById("userDetails");
            let child = userDiv.lastElementChild;
            while (child) {
                userDiv.removeChild(child);
                child = userDiv.lastElementChild;
            }
            userDiv.innerHTML = myJson;
        }
    };
    xhttp.open("GET", "http://localhost:8080/user/getById?id=" + id, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
}