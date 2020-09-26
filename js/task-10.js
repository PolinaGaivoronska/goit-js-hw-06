const getSortedUniqueSkills = (array) => array.reduce((acc, item) => [...acc, ...item.skills], []).filter((current, index, arr) => arr.indexOf(current) === index).sort();

console.log(getSortedUniqueSkills(users));