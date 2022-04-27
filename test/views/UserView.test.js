const UserView = require ('./../../app/views/UserView')

describe("Prueba de unidad para la clase UserViwe", () => {
    test('Obtener un objeto Error cuando enviamos un paylod null ', () => { 
        const payload = null
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/El payload no existe/)
    });

    test('', () =>{
        const payload = {username:null, name:12, id: "id"}
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/necesitan un valor válido/)
    });

    test('Validando que payload regrese un objeto error', () =>{
        const payload = {username:"Username"}
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/necesitan un valor válido/)
    });

    test('Creando usuario al enviar un payload', () => {
        const payload = {username: "username", id: 1, name: "name"}
        const result = UserView.createUser(payload)
        expect(result.name).toBe("name")
        expect(result.id).toBe(1)
        expect(result.username).toBe("username")
    });
})