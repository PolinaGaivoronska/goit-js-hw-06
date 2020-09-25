const getUsersWithEyeColor = (array, color) => array.filter( ({eyeColor}) => eyeColor === color );

console.log(getUsersWithEyeColor(users, 'blue'));