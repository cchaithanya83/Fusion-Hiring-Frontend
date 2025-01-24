class User {
  name: string = "";
  age: number = 0;
  email: string = "";
  phone: string = "";
  constructor(name: string, age: number, email: string, phone: string) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.phone = phone;
  }
}

export default User;
