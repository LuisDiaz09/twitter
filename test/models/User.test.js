const User = require('./../../app/models/User');

describe ("Creando prueba de unidad para Clase User" , () => {
    test('Creando un objeto de tipo User', () => {
        const user = new User(1, "luan", "Luis", "Bio")
        expect(user.id).toBe(1)
        expect(user.username).toBe("luan")
        expect(user.name).toBe("Luis")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined()
    });

    test('Crear getters', () => {
        const user = new User(1, "luan", "Luis", "Bio")
        expect(user.getUsername).toBe("luan")
        expect(user.getBio).toBe("Bio")
        expect(user.getDateCreated).not.toBeUndefined()
        expect(user.getLastUpdated).not.toBeUndefined()
    });
})