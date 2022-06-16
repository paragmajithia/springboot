/* Function to create user
 */
function createUser() {
  let form = document.forms["createForm"];
  let firstName = form.elements["fname"].value;
  let lastName = form.elements["lname"].value;
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    // Remove existing child elements
    let userDiv = document.getElementById("createdUserDetails");
    let child = userDiv.lastElementChild;
    while (child) {
      userDiv.removeChild(child);
      child = userDiv.lastElementChild;
    }

    if (this.readyState == 4 && this.status == 200) {
      const myJson = this.responseText;
      userDiv.insertAdjacentHTML(
        "afterbegin",
        "<p>Created User: </p><p>" + myJson + "</p>"
      );
    } else {
      userDiv.insertAdjacentHTML(
        "afterbegin",
        "<p>Failed to create user: </p>"
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

  // Remove any existing child element
  let userDiv = document.getElementById("userDetails");
  let child = userDiv.lastElementChild;
  while (child) {
    userDiv.removeChild(child);
    child = userDiv.lastElementChild;
  }

  // Fire get request
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      userDiv.innerHTML = this.responseText;
    } else {
      userDiv.innerHTML = `User with id ${id} not found`;
    }
  };
  xhttp.open("GET", "/user/" + id, true);
  xhttp.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
  xhttp.send();
}

/**
 * Function to fetch user by request params
 */
function fetchUserByRequestParam() {
  // Get user id whose details is to be fetched
  let id = document.getElementById("fetchRequestUserId").value;

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    // Remove currently displayed elements
    let userDiv = document.getElementById("userDetails");
    let child = userDiv.lastElementChild;
    while (child) {
      userDiv.removeChild(child);
      child = userDiv.lastElementChild;
    }

    // Check response status and add message accordingle
    if (this.readyState == 4 && this.status == 200) {
      userDiv.innerHTML = this.responseText;
    } else {
      userDiv.innerHTML = `User with id ${id} not found`;
    }
  };
  xhttp.open("GET", "/user/getById?id=" + id, true);
  xhttp.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
  xhttp.send();
}
