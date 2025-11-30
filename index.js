function canVote(user) {
  return user.age >= 18;
}
console.log(canVote({ name: "Alice", age: 20 })); // true
console.log(canVote({ name: "Bob", age: 16 }));   // false      