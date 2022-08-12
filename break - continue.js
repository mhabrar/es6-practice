const user = {id:55555, roll:4444};
const userJason = JSON.stringify(user);
console.log(userJason);

const newJson = JSON.parse(userJason);
console.log(newJson);