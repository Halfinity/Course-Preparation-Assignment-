function makeUser() {
    return {
      name: "John",
      ref: this
    };
  }
  
  let user = makeUser();
  
  console.log( user.ref.name );

  //The answer is: [Empty String]