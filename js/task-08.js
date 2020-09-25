const getUsersWithFriend = (array, friendName) => array.filter(({friends}) => friends.includes(friendName)).map(({name}) => name);

console.log(getUsersWithFriend(users, 'Briana Decker'));

console.log(getUsersWithFriend(users, 'Goldie Gentry'));