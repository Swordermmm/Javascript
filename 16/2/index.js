function greeting() {
    const username = prompt("Введите имя пользователя");
    if (username == "") {
        throw error
    }
  }
  try { 
    greeting();
  } catch(error) { 
    alert("Имя обязательно для заполнения");
  }