const submitData = (name, email) => {
  const data = {
    name: name,
    email: email,
  };
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      const id = data.id;
      document.body.innerHTML += `<p>${id}</p>`;
      return data;
    })
    .catch((error) => {
      console.log(error.message);
      document.body.innerHTML += `<p>Error: ${error.message}</p>`;
    });
};
