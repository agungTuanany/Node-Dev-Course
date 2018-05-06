const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
    var users;

    // to initialize some data before all singgle test was called
    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Jono',
            room: 'Node Course'
        }, {
            id: '2',
            name: 'Tiancha',
            room: 'React Course'
        }, {
            id: '1',
            name: 'Jaroko',
            room: 'Node Course'
        }];
    });

    it('should add new user', () => {
        let users = new Users();
        let user = {
            id: 'psdajo32133ff',
            name: 'Jono',
            room: 'The Office Fans'
        };
        let resUser = users.addUser(user.id, user.name, user.room);

        // the 1st users: belong to users variable, the 2nd users belong to this.users[];
        expect(users.users).toEqual([user]);
    });

    it('should remove a user', () => {
        let userId = '2';
        let user = users.removeUser(userId);

        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove user', () => {
        let userId = '99';
        let user = users.removeUser(userId);

        expect(user).toBeFalsy();
        expect(users.users.length).toBe(3);
    });

    it('should find user by id', () => {
        let userId = "2";
        let user = users.getUser(userId);

        expect(user.id).toBe(userId);
    });

    it('should not find user by id', () => {
        let userId = '99';
        var user = users.getUser(userId);

        expect(user).toBeFalsy();
    });

    it('should return names for node course,', () => {
        let userList = users.getUserList('Node Course');

        expect(userList).toEqual(['Jono', 'Jaroko']);
    });

    it('should return name for react course', () => {
        let userList = users.getUserList('React Course');

        expect(userList).toEqual(['Tiancha']);
    })
});