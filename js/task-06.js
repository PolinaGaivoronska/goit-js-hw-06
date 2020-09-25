const getUsersWithAge = (array, min, max) => array
 .filter(({age}) => age > min && age < max)   
 .map(({name, email}) => ({name, email}));  

console.log(getUsersWithAge(users, 20, 30));