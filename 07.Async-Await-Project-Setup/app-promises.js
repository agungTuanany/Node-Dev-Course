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
            reject(`unable to find user with id of ${id}`);
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
 * 'let' is ES6 equivalent to 'var', using 'let' for changing the value of variable
 *
 * @param grade.grade. 1st grade: individual object, 2nd grade: object property
 */
// return Jono with grade 83% in class
const getStatus = (userId) => {
    let user;
    return getUser(userId).then((tempUser) => {
        user = tempUser;
        return getGrades(user.schoolId);
    }).then((grades) => {
        let average = 0;

        if (grades.length > 0) {
            // average
            average = grades.map((grade) => grade.grade).reduce((a, b) => a + b) / grades.length;
        }
        // return our string
        return `${user.name} has a ${average}% in the class`;
    });
};

/**
 * before we use 'await' we should mark that function as 'async'
 * 'async' function always-always return promises.
 * returning something is equivalent to resolving.
 * throw an error is equivalent to rejecting.
 *
 */

// () => {
//     return new Promise((resolve, reject) => {
//         resolve('Mike');
//         reject('This is an error');
//     })
// }

const getStatusAlt = async (userId) => {
    throw new Error('This is an error');
    return 'Mike';
}

getStatusAlt().then((name) => {
    console.log(name);
}).catch((e) => {
    console.log(e);
})

// console.log(getStatusAlt());

// getStatus(1).then((status) => {
//     console.log(status);
// }).catch((e) => {
//     console.log(e);
// });