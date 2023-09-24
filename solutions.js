// твои решения
/*
fetch(`https://reqres.in/api/users`)
  .then((response) => response.json())
  .then((data) => console.log(data));

fetch("https://this-site-doesnt-exist.intocode").catch((error) =>
  console.error("Ошибка запроса:", error)
);

fetch(`https://reqres.in/api/users`).then((response) => response.json());

fetch("https://reqres.in/api/users")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => console.log("Тип данных ответа:", typeof data))
  .catch((error) => console.error("Ошибка:", error));

fetch("https://reqres.in/api/users")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    const numberOfUsers = data.data.length;
    console.log("Количество элементов в массиве data:", numberOfUsers);
  })
  .catch((error) => console.error("Ошибка:", error));

fetch("https://reqres.in/api/users/1")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    const userEmail = data.data.email;
    console.log("Электронная почта пользователя:", userEmail);
  })
  .catch((error) => console.error("Ошибка:", error));


  fetch('https://reqres.in/api/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ "first_name": "intocode" })
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => console.log('Ответ сервера (POST):', data))
  .catch(error => console.error('Ошибка:', error));


  const requestData = { "first_name": "intocode" };


const requestOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(requestData)
};

fetch('https://reqres.in/api/users', requestOptions)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => console.log('Ответ сервера (POST):', data))
  .catch(error => console.error('Ошибка:', error));


  const newUser = {
  "first_name": "into",
  "last_name": "code"
};


const requestOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(newUser)
};


fetch('https://reqres.in/api/users', requestOptions)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    const userId = data.id;
    const createdAt = data.createdAt;
    console.log('Идентификатор пользователя:', userId);
    console.log('Время добавления:', createdAt);
  })
  .catch(error => console.error('Ошибка:', error));


  const newUser = {
    "first_name": "into",
    "last_name": "code"
  };
  
  
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUser)
  };
  
  
  fetch('https://reqres.in/api/users', requestOptions)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const userId = data.id;
      const createdAt = data.createdAt;
      console.log('Идентификатор пользователя:', userId);
      console.log('Время добавления:', createdAt);
    })
    .catch(error => console.error('Ошибка:', error));


    const userIdToDelete = 5;

    const deleteUrl = `https://reqres.in/api/users/${userIdToDelete}`;

    const requestOptions = {
        method: 'DELETE',
      };
      
      
      fetch(deleteUrl, requestOptions)
        .then(response => {
          if (response.status === 204) {
            console.log('Пользователь с id 5 успешно удален');
          } else {
            console.error('Ошибка при удалении пользователя');
          }
        })
        .catch(error => console.error('Ошибка:', error));
*/

        const updatedUserData = {
            "first_name": "интукод"
          };
          
          
          const requestOptions = {
            method: 'PUT', 
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedUserData)
          };
          
          const userIdToUpdate = 3;
          const updateUrl = `https://reqres.in/api/users/${userIdToUpdate}`;
          

          fetch(updateUrl, requestOptions)
            .then(response => {
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              return response.json();
            })
            .then(data => {
              console.log('Имя пользователя успешно обновлено:', data);
            })
            .catch(error => console.error('Ошибка:', error));