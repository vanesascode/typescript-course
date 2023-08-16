"use strict";
const fetchUsers = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
        return res.json();
    })
        .catch((err) => {
        if (err instanceof Error)
            console.log(err.message);
    });
    return data;
};
fetchUsers().then((users) => console.log(users));
