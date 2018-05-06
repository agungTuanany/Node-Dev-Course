const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: 'psdajo32133ff',
            name: 'Jono',
            room: 'The Office Fans'
        };
        var resUser = users.addUser(user.id, user.name, user.room);

        // the 1st users: belong to users variable, the 2nd users belong to this.users[];
        expect(users.users).toEqual([user]);
    });
})