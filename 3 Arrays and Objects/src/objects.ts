// Define an object type for a person
type Person = {
    name: string;
    age: number;
    isStudent: boolean;
  };
  
  // Create an object
  let person: Person = {
    name: "John",
    age: 25,
    isStudent: true,
  };
  
  // Access and modify properties
  console.log("Name:", person.name); // Output: Name: John
  person.age += 1; // Increment age
  console.log("Age:", person.age); // Output: Age: 26
  
  // Add a method to the object
  let personWithMethod: Person & { greet: () => string } = {
    ...person,
    greet: () => `Hello, my name is ${person.name}`,
  };
  
  console.log(personWithMethod.greet()); // Output: Hello, my name is John

  
  // Define a nested object type
type Address = {
    street: string;
    city: string;
    zipCode?: string; // Optional property
  };
  
  type User = {
    id: number;
    name: string;
    address: Address; // Nested object
  };
  
  // Create a user object
  let user: User = {
    id: 1,
    name: "Alice",
    address: {
      street: "123 Main St",
      city: "Wonderland",
    },
  };
  
  // Access nested object properties
  console.log("City:", user.address.city); // Output: City: Wonderland
  
  // Add optional property dynamically
  user.address.zipCode = "12345";
  console.log("Zip Code:", user.address.zipCode); // Output: Zip Code: 12345
  
  // Use object destructuring
  const { name, address: { city } } = user;
  console.log(`${name} lives in ${city}`); // Output: Alice lives in Wonderland
  