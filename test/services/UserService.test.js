const User = require('../../app/models/User');
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

    test('Creando un método estático updateUserName', () => {
        const user = UserService.create(1,"luan","Luis")
        UserService.updateUserName(user, "luandiru")
        expect(user.username).toBe("luandiru")
    });

    test ('Creando un método estático getAllUsernames', () => {
        const user1 = UserService.create(1,"luan","Luis")
        const user2 = UserService.create(2,"juca","Juan")
        const user3 = UserService.create(3,"juanma","Manuel")
        const usernames = UserService.getAllUsernames([user1,user2,user3])
        expect(usernames).toContain("luan")
        expect(usernames).toContain("juca")
        expect(usernames).toContain("juanma")

    });
})