const users = ["Jacob", "Carlos", "Sofia", "Victor"];

function getUser(userName){
    try {   
        const userIndex = users.indexOf(userName);

        if(!userName) {
            return {
                code: 400,
                body: null,
                msg: "No se ha enviado un nombre de usuario",
            }
        }

        if(userIndex>=0) {
            const user = users.at(userIndex);
            return {
                code: 200,
                body: user,
                msg: "Usuario encontrado con exito",
            }
        }

        return {
            code: 404,
            body: null,
            msg: "Usuario no encontrado",
        }
        
    } catch (error) {
        return {
            code: 500,
            body: null,
            msg: error,
        }
    }
}

function getUsers() {
    try {
        return {
            code: 200,
            body: users,
            msg: "Usuarios obtenidos con exito",
        }
    } catch (error) {
        return {
            code: 500,
            body: null,
            msg: error,
        }
    }
}

function addUser(userName) {
    try {
        if(!userName) {
            return {
                code: 400,
                body: null,
                msg: "No se ha enviado un nombre de usuario",
            }
        }

        users.push(userName);
        return {
            code: 201,
            body: userName,
            msg: "Usuario '" + userName +  "' agregado con exito",
        }
        
    } catch (error) {
        return {
            code: 500,
            body: null,
            msg: error,
        }
    }
}    

function removeUserByIndex(userIndex) {
    try {
        if(userIndex<0) {
            return {
                code: 400,
                body: null,
                msg: "No se ha enviado un indice de usuario valido",
            }
        }

        const user = users.at(userIndex);
        users.splice(userIndex, 1);
        return {
            code: 200,
            body: user,
            msg: "Usuario '" + user +  "' eliminado con exito",
        }
        
    } catch (error) {
        return {
            code: 500,
            body: null,
            msg: error,
        }
    }
}

function removeLastUser() {
    try {
        const lastUser = users.pop();
        return {
            code: 200,
            body: lastUser,
            msg: "Usuario '" + lastUser +  "' eliminado con exito",
        }
    }  catch (error) {
        return {
            code: 500,
            body: null,
            msg: error,
        }
    }
}

function removeFirstUser() {
    try {
        const firstUser = users.shift();
        return {
            code: 200,
            body: firstUser,
            msg: "Usuario '" + firstUser +  "' eliminado con exito",
        }
    } catch (error) {
        return {
            code: 500,
            body: null,
            msg: error,
        }
    }
}

function updateUserByIndex(userIndex, userName) {
    try {
        if(userIndex<0) {
            return {
                code: 400,
                body: null,
                msg: "No se ha enviado un indice de usuario valido",
            }
        }
        if(!userName) {
            return {
                code: 400,
                body: null,
                msg: "No se ha enviado un nombre de usuario",
            }
        }
        if(userIndex>=users.length) {
            return {
                code: 404,
                body: null,
                msg: "Usuario no encontrado",
            }
        }
        if(users.indexOf(userName)>=0) {
            return {
                code: 409,
                body: null,
                msg: "El nombre de usuario ya existe",
            }
        }
        users[userIndex] = userName;
        return {
            code: 200,
            body: userName,
            msg: "Usuario '" + userName +  "' actualizado con exito",
        }
    } catch (error) {
        return {
            code: 500,
            body: null,
            msg: error,
        }
    }
}

function getUserSize() {
    try {
        const usersSize = users.length;
        return {
            code: 200,
            body: usersSize,
            msg: "La cantidad de usuarios en el arreglo son: " + usersSize,
        }
    } catch (error) {
        return {
            code: 500,
            body: null,
            msg: error,
        }
    }
}

console.log("getUser:")
console.log(getUser("Sofia"));
console.log("------ Next method ------")
console.log("getUsers:")
console.log(getUsers());
console.log("------ Next method ------")
console.log("addUser:")
console.log(addUser("Eduardo"));
console.log("------ Next method ------")
console.log("Users before remove user:")
console.log(getUsers());
console.log("removeUserByIndex:")
console.log(removeUserByIndex(3));
console.log("Users after remove user:")
console.log(getUsers());
console.log("------ Next method ------")
console.log("Users before remove last user:")
console.log(getUsers());
console.log("removeLastUser:")
console.log(removeLastUser());
console.log("Users after remove user:")
console.log(getUsers());
console.log("------ Next method ------")
console.log("Users before remove first user:")
console.log(getUsers());
console.log("removeFirstUser:")
console.log(removeFirstUser());
console.log("Users after remove first user:")
console.log(getUsers());
console.log("------ Next method ------")
console.log("Users before edit user:")
console.log(getUsers());
console.log("updateUserByIndex:")
console.log(updateUserByIndex(1, "Jaime"));
console.log("Users after edit user:")
console.log(getUsers());
console.log("------ Next method ------");
console.log(getUserSize());