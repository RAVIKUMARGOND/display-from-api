document.getElementById('fetch-users-button').addEventListener('click', fetchUsers);

function fetchUsers() {
    fetch('https://reqres.in/api/users')
        .then(response => response.json())
        .then(data => {
            const users = data.data;
            const userContainer = document.getElementById('user-container');
            userContainer.innerHTML = ''; // Clear any previous data

            users.forEach(user => {
                const userCard = document.createElement('div');
                userCard.classList.add('user-card');

                userCard.innerHTML = `
                    <img src="${user.avatar}" alt="${user.first_name} ${user.last_name}">
                    <h3>${user.first_name} ${user.last_name}</h3>
                    <p>${user.email}</p>
                `;

                userContainer.appendChild(userCard);
            });
        })
        .catch(error => {
            console.error('Error fetching users:', error);
        });
}
