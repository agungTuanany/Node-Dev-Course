/**

contrive : merancang
**/

const users = [{
    id: 1,
    name: 'Jono',
    schoolId: 101,
}, {
    id: 2,
    name: 'Jaroko',
    schoolId: 999,
}];

const grades = [{
    id: 1,
    schoolId: 101,
    grade: 86
}, {
    id: 3,
    schoolId: 999,
    grade: 100
}, {
    id: 3,
    schoolId: 101,
    grade: 80
}];

const getUser = (id) => {
    return new Promise((resolve, reject) => {
        const user = users.find((user) => user.id === id);

        if (user) {
            resolve(user);
        } else {
            reject(`user yo find user with id of ${id}`);
        }
    });
};

const getGrades = (schoolId) => {
    return new Promise((resolve, reject) => {
        resolve(grades.filter((grade) => grade.schoolId === schoolId));
    });
};

/**
 * One of the most problem when working with chaining promises
 *
 * @param getGrades(user,schoolId): we have 2nd promises chain,
 *  in order to start we have to call the 1st other promises chain @param getUser(userId).then((user))
 *  and at the end we want to get a value from above promise. it 'avaerage'
 *  We can't cause we do not have access for 'user' from getUser() inside  @param .then((grades))
 *  cause it was created with another function @param getGrades(user.schooId).
 *
 */
// return Jono with grade 83% in class
const getStatus = (userId) => {
    return getUser(userId).then((user) => {
        return getGrades(user.schoolId);
    }).then((grades) => {
        // average
        // return our string
    });
}

getGrades(101).then((grades) => {
    console.log(grades);
}).catch((e) => {
    console.log(e);
});