const userList = document.getElementById('listaUsuarios')

fetch('https://jsonplaceholder.typicode.com/users').then((response) =>{
    if(!response.ok){
        console.log('Ha habido un problema obteniendo los datos')
    }
    return response.json()
}).then((data) => {
    console.log(data[0])
    data.forEach(user => {
        user.age = Math.floor(25 + Math.random()*30)
        userList.innerHTML += `
            <li class="border">
                <div id="top">
                    <div class="border info">
                        <p><b>Nombre: </b>${user.name}</p>
                        <p><b>Edad: </b>${user.age}</p>
                        <p><b>Username: </b>${user.username}</p>
                        <p><b>Teléfono: </b>${user.phone}</p>
                        <p><b>Email: </b>${user.email}</p>
                    </div>
                    <img src="../assets/img/${user.id}.jpeg" height=65>
                </div>
                <div class="info">
                    <p><b>Compañía: </b>${user.company.name}</p>
                    <p><b>Dirección: </b>${user.address.street}, ${user.address.suite}, ${user.address.city}</p>
                </div>
            </li>
        `
    });
})