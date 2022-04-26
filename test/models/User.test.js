const User = require('./../../app/models/User');

describe ("Creando prueba de unidad para Clase User" , () => {
    test('Creando un objeto de tipo User', () => {
        const user = new User(1, "luan", "Luis", "Bio", "dateCreated", "lastUpdated")
        expect(user.id).toBe(1)
        expect(user.username).toBe("luan")
        expect(user.name).toBe("Luis")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).toBe("dateCreated")
        expect(user.lastUpdated).toBe("lastUpdated")
    });
})