const userList = document.getElementById('listaUsuarios')
const users = []

fetch('https://jsonplaceholder.typicode.com/users').then((response) =>{
    if(!response.ok){
        console.log('Ha habido un problema obteniendo los datos')
    }
    return response.json()
}).then((data) => {
    const resultado = data.map(user =>{
        let usuario = {
            ...user,
            age: Math.floor(25 + Math.random()*30),
            address: `${user.address.street} ${user.address.suite}, ${user.address.city}`
        }
        users.push(usuario)
        return `
            <li class="border">
                <div id="top">
                    <div class="border info">
                        <p><b>Nombre: </b>${usuario.name}</p>
                        <p><b>Edad: </b>${usuario.age}</p>
                        <p><b>Username: </b>${usuario.username}</p>
                        <p><b>Teléfono: </b>${usuario.phone}</p>
                        <p><b>Email: </b>${usuario.email}</p>
                    </div>
                    <img src="../assets/img/${usuario.id}.jpeg" height=65>
                </div>
                <div class="info">
                    <p><b>Compañía: </b>${usuario.company.name}</p>
                    <p><b>Dirección: </b>${usuario.address}</p>
                </div>
            </li>
        `
    })
    /*Así se actualiza el DOM 1 sola vez.
    El .join("") sirve para juntar todos los elementos del array sin espacios, en vez de comas*/
    userList.innerHTML = resultado.join("")
}).catch(err => console.error(err))