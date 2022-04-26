const UserService = require('./../../app/services/UserService');

describe("Creando prueba de unidad para la clase UserService", () =>{
    test('Creando un metodo create', () => {
        const userservice = UserService.create(1,"luan","Luis")
        expect(userservice.id).toBe(1)
        expect(userservice.username).toBe("luan")
        expect(userservice.name).toBe("Luis")
        expect(userservice.bio).not.toBeUndefined()
    });

    test('Creando un método estático getInfo', () => {
        const user = UserService.create(1,"luan","Luis")
        const userInfo = UserService.getInfo(user)
        expect(userInfo[0]).toBe(1)
        expect(userInfo[1]).toBe("luan")
        expect(userInfo[2]).toBe("Luis")
        expect(userInfo[3]).toBe("Sin Bio")
    });
})