const UserView = require ('./../../app/views/UserView')

describe("Prueba de unidad para la clase UserViwe", () => {
    test('Obtener un objeto Error cuando enviamos un paylod null ', () => { 
        const payload = null
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/El payload no existe/)
    });
})