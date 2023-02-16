
      const email = document.getElementById("emailInput");
      const password = document.getElementById("passwordInput");

      const allUsers = JSON.parse(localStorage.getItem("AllUsers")) || [];

      function login() {
        const checkUser = allUsers.find(
          (user) =>
            user.email === email.value && user.password === password.value
        );

        const findUserIndex = allUsers.findIndex(
          (user) => user.email === email.value
        );

        if (!checkUser) {
          return alert("Email ou senha incorreta");
        }
        checkUser.logged = true;

        sessionStorage.setItem("loggedUser", JSON.stringify(checkUser));
        window.location.href = "home.html";
      }
   
