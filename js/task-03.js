const getUsersWithGender = (array, gender) => array.filter(el => el.gender === gender).map(({name}) => name);

console.log(getUsersWithGender(users, 'male'));