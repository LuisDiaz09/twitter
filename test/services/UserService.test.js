const UserService = require('./../../app/services/UserService');

describe("Creando prueba de unidad para la clase UserService", () =>{
    test('Creando un metodo create', () => {
        const userservice = UserService.create(1,"luan","Luis")
        expect(userservice.id).toBe(1)
        expect(userservice.username).toBe("luan")
        expect(userservice.name).toBe("Luis")
        expect(userservice.bio).not.toBeUndefined()
    });
})