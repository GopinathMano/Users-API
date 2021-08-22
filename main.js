// const regionAsia = fetch("https://611f267d9771bf001785c750.mockapi.io/user")
//   .then((data) => data.json())
//   .then((user) => user.forEach((person) => createUsers(person)))
//   .catch((errMsg) => console.log("errMsg"));

//  getUsers
async function getUsers() {
  try {
    const data = await fetch(
      "https://611f267d9771bf001785c750.mockapi.io/user"
    );
    const users = await data.json();
    console.log(users);
    // erase previous inner HTML data
    document.querySelector(".user-list").innerHTML = ``;
    users.forEach((users) => createUsers(users));
  } catch {
    console.log("eroer");
  }
}

// Using Json data to print data

function createUsers({ name, avatar, createdAt, id }) {
  const info = document.createElement("div");
  info.setAttribute("class", "container");

  info.innerHTML = `
    <div >
     <img class="pic" id="pic" src=${avatar} width="250px" height="150px" alt="user-pic">
   </div>
<div class="details">
  <h3 id="name"> ${name} </h3>
    <p id="detail"><b>ID created :</b> ${new Date(
      createdAt
    ).toDateString()} </p>
    <button id="button" class="button" onclick="deletUser(${id})" >Delete</button>
  
  </div>
 
    `;
  document.querySelector(".user-list").append(info);
}
getUsers();

// delete user

async function deletUser(id) {
  try {
    const data = await fetch(
      "https://611f267d9771bf001785c750.mockapi.io/user/" + id,
      { method: "DELETE" }
    );
    const user = await data.json();
    console.log(user);
    getUsers();
  } catch {
    console.log("erooer");
  }
}

// creat a user

async function addUser() {
  const data = await fetch("https://611f267d9771bf001785c750.mockapi.io/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: document.querySelector(".username").value,
      avatar: document.querySelector(".userpic").value,
      createdAt: new Date().toISOString(),
    }),
  });
  getUsers();
}
console.log(document.querySelector(".userpic").value);
