
      const table = document.getElementById("table-body");
      const loggedUser = JSON.parse(sessionStorage.getItem("loggedUser"));
      const allUsers = JSON.parse(localStorage.getItem("AllUsers"));

      function addErrands() {
        const user = prompt("Digite seu nome");
        const errand = prompt("Digite seu recado");

        const newErrad = {
          user: user,
          errands: errand,
        };

        loggedUser.errands.push(newErrad);
        saveOnStorage();
        renderTable();
      }

      function logout() {
        sessionStorage.removeItem("loggedUser");
        window.location.href = "index.html";
      }

      function saveOnStorage() {
        sessionStorage.setItem("loggedUser", JSON.stringify(loggedUser));

        const findUser = allUsers.findIndex(
          (user) => user.email === loggedUser.email
        );

        allUsers[findUser] = loggedUser;

        localStorage.setItem("AllUsers", JSON.stringify(allUsers));
      }

      function deleteErrand(index) {
        loggedUser.errands.splice(index, 1);
        saveOnStorage();
        renderTable();
      }

      function editErrand(index) {
        const newName = prompt("Digite seu nome");
        const newErrand = prompt("Digite seu novo recado");

        loggedUser.errands[index].user = newName;
        loggedUser.errands[index].errands = newErrand;
        saveOnStorage();
        renderTable();
      }

      function renderTable() {
        table.innerHTML = "";
        loggedUser.errands.map((value, index) => {
          const tr = document.createElement("tr");
          const td1 = document.createElement("td");
          const td2 = document.createElement("td");
          const td3 = document.createElement("td");
          const td4 = document.createElement("td");
          const deleteButton = document.createElement("button");
          deleteButton.style.borderStyle = 'none'
          deleteButton.style.backgroundColor = '#FF4949'
          deleteButton.style.borderRadius = '50px'
          deleteButton.style.height = '40px'
          deleteButton.style.padding = '6px 12px'
          deleteButton.style.color = 'white'
          deleteButton.style.cursor = 'pointer'
          const EditButton = document.createElement("button");
          EditButton.style.borderStyle = 'none'
          EditButton.style.backgroundColor = '#13CE66'
          EditButton.style.borderRadius = '50px'
          EditButton.style.height = '40px'
          EditButton.style.padding = '6px 12px'
          EditButton.style.color = 'white'
          EditButton.style.cursor = 'pointer'

          tr.appendChild(td1);
          tr.appendChild(td2);
          tr.appendChild(td3);
          tr.appendChild(td4);
          td4.appendChild(deleteButton);
          td4.appendChild(EditButton);

          deleteButton.setAttribute("onClick", `deleteErrand(${index})`);

          EditButton.setAttribute("onClick", `editErrand(${index})`);

          td1.innerHTML = index + 1;
          td2.innerHTML = value.user;
          td3.innerHTML = value.errands;
          deleteButton.innerHTML = "Deletar";
          EditButton.innerHTML = "Editar";

          table.appendChild(tr);
        });
      }

      function checkLogged() {
        if (!loggedUser?.logged || !loggedUser) {
          alert("Usuario nao esta credenciado");
          return (window.location.href = "index.html");
        }
      }
      checkLogged();
      renderTable();
 