/* Function to create user
 */
function createUser() {
  let form = document.forms["createForm"];
  let firstName = form.elements["fname"].value;
  let lastName = form.elements["lname"].value;
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const myJson = this.responseText;
      let userDiv = document.getElementById("createdUserDetails");
      let child = userDiv.lastElementChild;
      while (child) {
        userDiv.removeChild(child);
        child = userDiv.lastElementChild;
      }
      userDiv.insertAdjacentHTML(
        "afterbegin",
        "<p>Created User: </p><p>" + myJson + "</p>"
      );
    }
  };
  xhr.open(form.method, form.action, true);
  xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
  var j = {
    firstName: firstName,
    lastName: lastName,
  };
  xhr.send(JSON.stringify(j));
}
/*
Function to fetch user by path variable
*/
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
  xhttp.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
  xhttp.send();
}

/**
 * Function to fetch user by request params
 */
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
  xhttp.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
  xhttp.send();
}
