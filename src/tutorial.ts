// // type anotation can be any ONE of type. type include string,number and boolean
// let awesomeName:string = 'Abdul kadir'
// awesomeName = 'something'
// awesomeName = awesomeName.toUpperCase()
// console.log(awesomeName);

// let someNum :number = 20
// someNum = someNum - 5
// console.log(someNum);

// let someBoolean: boolean = false
// if(someBoolean){
//     console.log('its true');
    
// } else {
//     console.log('its false');
    
// }

// // union: where a type can be MORE THAN ONE and max upto TEN.
// let tax : number | string | boolean= 10
// tax = 100
// tax = 'any string val'
// tax = true
// console.log(tax);

// // you can also add literals to any variable and TS will take only that literal values and wont accept anything. for Eg.
// let unionLiteral: 'success'| 'pending'| 'failed' = 'pending';
// unionLiteral= 'success';
// unionLiteral= 'failed'
// console.log(unionLiteral);

// // type:any sets a type of variable to any datatypes
// let notSure: any = -9
// notSure = 'string instead'
// notSure = true
// let books = [ '1984' , 'fredrick 1756' , 'TVD']
// let foundBook;

// for (const book of books) {
//     if(book === 'fredrick 1756'){
// foundBook = book
// break;
// }
// console.log(book);
// }

// console.log(foundBook);

// // another eg of books where u can defined type for variable.
// // let books = [ '1984' , 'fredrick 1756' , 'TVD']
// // let foundBook:string | undefined;

// for (const book of books) {
//     if(book === 'fredrick 1756'){
//         foundBook = book;  
//         break;
//     } 
// }
// foundBook = foundBook?.toUpperCase()
// // console.log(foundBook?.length);

// // # challenge 2
// let orderStatus: 'processing' | 'ordered' | 'delivered' = 'processing';
// orderStatus = "ordered"  
// console.log(orderStatus);

// // array in TS
// let prices :number[] = [20, 30, 50, 70] // it means that this array will only consists of array of numbers
// prices.push(90)
// console.log(prices);

// let fruits: string[] = ['apple' , 'mango' , 'banana']  // it means that this array will only consists of array of string
// fruits.push('kiwi')
// console.log(fruits);

// let emptyEg:[] = ['hie'] //if you provide empty array as type of variable then TS will consider it as this array is always going to be empty
// // and wont let you add any values to the array  

// // you can also create empty array of number or string
// let emptyValues:number[] = [] 
// emptyValues.push(20)
// console.log(emptyValues);


// // you can also create empty array
// let empty = [] //u can add any values to this array and TS will consider it. this may gave some problem later on.i dont know about it yet

// // u can create a union of type for an array
// let array:(string | boolean)[] = ['apple' , true , 'orange' , false]
// console.log(array);

// // a simple way to create to objects
// let car :{brand:string , year: number} = {brand: 'toyota' , year:  2020 , }
// // apart from brand and year u cant add anything to this obj because thats how u specified it to be.
// // but u can change the value of brand or year like this
// car.brand = 'GTR'
// console.log(car);

// // adding objects to array
// let book = { title: 'book', cost: 20 };
// let pen = { title: 'pen', cost: 5 };
// let notebook = { title: 'notebook' };

// // i can set type for all the above objects but its too lenghty so u can set the type to an array like this
// // let items:{title:string , cost: number}[] = [book , pen , notebook] //this will throw an error becuase cost is not present in notebook
// // so another u can set cost to optional type like it can be present or not like this 
// // let items:{title:string , cost?: number}[] = [book , pen , notebook] 
// // u can set the array to be readonly if u dont want to add values to that array ever again, u do it like this
// let items:{ readonly title:string , cost?: number }[] = [book , pen , notebook] 
// console.log(items);
// items[0].title = 'efef' // this will not work because the array is readonly u cant do operations on that 

// // function starts here
// function sayHi(name:string){
//     console.log(`hello there !! ${name.toUpperCase()}`);
    
// }
// sayHi('ak')
// how to set type for return value
// function calculate(num:number):number{
//     return num + 10
// }
// let check = calculate(190);
// console.log(check);

// // ## challenge 3
// let names:string[] = ['abdul' , 'farhad' , 'lareb', 'aman']

// function checkName( nameValue:string){
//     for (const name of names) {
        
//         console.log(name , nameValue);
//         if(name === nameValue){
//             return true 
//         }
//     }
// }

// let resultName = checkName('aman');
// console.log(resultName);

// // easy way to do the same thing done above
// function isNameInList(name:string):boolean{
//    return names.includes(name)
// }

// let resultName= isNameInList('aman')
// console.log(resultName);

// // optional parameter in TS
// function calculateDiscount(price:number , discount?:number ):number{ //step 1: add ? in paramter u want to make optional
//     return price - (discount || 0) //step 2: give func. a default value so func. doesnot fail in case optional parameter is not present
//     // this is how u set optional paramter in TS
// }
// let priceAfterDiscount = calculateDiscount(100 ,70)
// console.log(priceAfterDiscount);

// // another way of providing default value
// function calculateDiscount(price:number , discount:number = 0):number{ //step 1: add ? in paramter u want to make optional
//     return price - discount //step 2: give func. a default value so func. doesnot fail in case optional parameter is not present
//     // this is how u set optional paramter in TS
// }
// let priceAfterDiscount = calculateDiscount(100 ,40)
// console.log(priceAfterDiscount);

// function sum(message:string , ...numbers:number[]):string{
//     let doubled = numbers.map((nums)=>nums)
//     console.log(doubled);
    

//     let total = numbers.reduce((previous , current)=>{
//         return previous + current
//     }, 0)

//     return `${message} ${total}`
// }

// let result = sum('the total is' , 1,2,3,4,5)
// console.log(result);

// //what type should we return if we are not returing anything from the function
// function logMessage(message:string):void{ //if we dont want to return anything we should specify it with void. so if someday in future 
//     // we try to return anything TS wont let us retun anything
//     // NOTE: and if u specify return as :void TS will not let u return anything
//     console.log(message);
//     // return message // u cant return message
// }

// let result = logMessage('kunichiwa')
// console.log(result);// this value will be undefined because we specified above the we will not returing anything from logMessage function 

// // ## challenge 4
// // this is called typeguard
// function processInput(str:string|number){
//         if(typeof str === 'number'){
//                 console.log(str + 10);
           
//         }else{
//                 console.log(str);
                
//         }
// }
// processInput(10)
// processInput('hello')

// // objects as parameter in functions
// function createEmployee({id}:{id:number}): { 
//         id:number;
//         isActive: boolean
// } {
//         return {id , isActive: id % 2 === 0}
// }

// const first = createEmployee({id:1})
// const second = createEmployee({id:2})
// console.log(first , second);

// // alternative.
// // how to give name to object passed as a function params
// function createStudent(student:{id:number , name:string}):void{
//         console.log(`welcome to school ${student.name} your id is ${student.id}`);
        
// }
// const newStudent = {
//         id: 1,
//         name : 'anna'
// }
// createStudent(newStudent)

// // ##challenge 5 
// config:{reverse:false}
// function processData(input:number|string , config:{reverse:boolean}={reverse:false} ) :number|string {


//        if(typeof input === 'number'){
//                 return input * input
//         }else{
//               return  config.reverse? input.toUpperCase().split('').reverse().join(''):input.toUpperCase()
//         }
// }
// console.log(processData(10));
// console.log(processData('hello'));
// console.log(processData('hello', {reverse:true}));

// // type alias
// type User =  { id: number; name: string; isActive: boolean } //u can also export this alias if u want to.
// const john:User = {
//         id: 1,
//         name: 'john',
//         isActive: true,
//       };
//       const susan:User = {
//         id: 1,
//         name: 'susan',
//         isActive: false,
//       };
      
//       function createUser(user:User ):User {
//          {
//         console.log(`Hello there ${user.name.toUpperCase()} !!!`);
      
//         return user;
//       }   
// }   
// const check = createUser(john)

// // another egs.
// type StringOrNumber = string | number 

// let one: StringOrNumber = 'jello'
// one = 343
// console.log(one);

// // 2 eg 
// type theme = 'light' | 'dark'
// let themeColor:theme = 'dark'
// console.log(themeColor);

// // ##challenge 6
// type Employee = { id:number , name:string, department:string }

// type Manager = { id:number , name:string, employee:Employee[] }

// type Staff = Employee | Manager 

// function printStaffDetails(param:Staff){
//    if('employee' in param){
//         console.log(`${param.name} is the manager and has ${param.employee.length} employees`);
        
//    }else{
//         console.log(`${param.name} is the employee in ${param.department} employees`);

//    }
        
// }

// const alice: Employee = { id: 1, name: 'Alice', department: 'Sales' };
// const steve: Employee = { id: 1, name: 'Steve', department: 'HR' };
// const bob: Manager = { id: 2, name: 'Bob', employee: [alice, steve] };

// printStaffDetails(alice)
// printStaffDetails(steve)
// printStaffDetails(bob)

// // how to add another type in alias in TS
// // In TypeScript, an intersection type (TypeA & TypeB) is a way of combining multiple types into one. This means that an object of an intersection type will have all the properties of TypeA and all the properties of TypeB. It's a way of creating a new type that merges the properties of existing types.
// type Book = { id: number; name: string; price: number };
// type DiscountedBook = Book & { discount: number };
// const book1: Book = {
//   id: 2,
//   name: 'How to Cook a Dragon',
//   price: 15,
// };

// const book2: Book = {
//   id: 3,
//   name: 'The Secret Life of Unicorns',
//   price: 18,
// };

// const discountedBook: DiscountedBook = {
//   id: 4,
//   name: 'Gnomes vs. Goblins: The Ultimate Guide',
//   price: 25,
//   discount: 0.15,
// };

// // Type Alias - Computed Properties
// // Computed properties in JavaScript are a feature that allows you to dynamically create property keys on objects. This is done by wrapping an expression in square brackets [] that computes the property name when creating an object.
// const propName = 'age'

// type Animal = {
//         [propName]:number
// }

// let tiger: Animal = {[propName]:5} //propname: age 
// console.log(tiger);

// // Interface - Fundamentals
// // allow to setup shape for objects (only objects)
// // we can also add functions(method) in the interface   

// interface Book {
//         readonly isbn: number;
//         title: string;
//         author: string;
//         genre?: string;
//         // how to add method in inteface
//         printAuthor():void;
//         printTitle(message:string):string;
//         printSomething: (someValue: number) => number; // another way of adding method in TS
//       }
      
//       const deepWork: Book = {
//         isbn: 9781455586691,
//         title: 'Deep Work',
//         author: 'Cal Newport',
//         genre: 'Self-help',
//         printAuthor(){
//                 console.log(this.author); 
//         },
//         printTitle(message) {
//            return `${this.title} ${message}`     
//         },
//         // first option
//   // printSomething: function (someValue) {
//   //   return someValue;
//   // },
//   // second option
//   printSomething: (someValue) => {
//         // "this" gotcha
//         console.log(deepWork.author);
//         return someValue;
//       },
//       // third option
//       // printSomething(someValue) {
//       //   return someValue;
//       // },
//       };
      
// // deepWork.title = 'New Title'; // allowed
// // deepWork.isbn = 654321; // not allowed
// console.log(deepWork.printAuthor());
// const result = deepWork.printTitle('is an awesome book')
// console.log(result);
// console.log(deepWork.printSomething(34));

// // ##challenge 7
// interface Computer {
//         readonly id: number; // cannot be changed once initialized
//         brand: string;
//         ram: number;
//         upgradeRam(increase: number): number;
//         storage?: number; // optional property
//       }
      
//       const laptop: Computer = {
//         id: 1,
//         brand: 'random brand',
//         ram: 8, // in GB
//         upgradeRam(amount: number) {
//           this.ram += amount;
//           return this.ram;
//         },
//       };
      
//       laptop.storage = 256; // assigning value to optional property
      
//       console.log(laptop.upgradeRam(4)); // upgrades RAM by 4GB
//       console.log(laptop);

// // Interface - Merging, Extend, TypeGuard
// interface Person {
//   name: string;
//   getDetails(): string;
// }

// interface DogOwner {
//   dogName: string;
//   getDogDetails(): string;
// }

// // Merging (reopening) an interface in TypeScript is a process where you declare an interface with the same name more than once, and TypeScript will merge their members.

// // Merging the interface
// interface Person {
//   age: number;
// }

// // Usage
// const person: Person = {
//   name: 'John',
//   age: 30,
//   getDetails() {
//     return `Name: ${this.name}, Age: ${this.age}`;
//   },
// };

// // Extending an interface in TypeScript is a way to create a new interface that inherits the properties and methods of an existing interface. You use the extends keyword to do this. When you extend an interface, the new interface will have all the members of the base interface, plus any new members that you add.

// // Extending the interface
// interface Employee extends Person{
//         employeeId: number;
// }

// const employee: Employee = {
//   name: 'jane',
//   age: 28,
//   employeeId: 123,
//   getDetails() {
//     return `Name: ${this.name}, Age: ${this.age}, Employee ID: ${this.employeeId}`;
//   },
// };

// // Interface multiple inheritance
// interface Manager extends Person, DogOwner {
//         managePeople(): void;
//       }
      
//       const manager: Manager = {
//         name: 'Bob',
//         age: 35,
//         dogName: 'Rex',
//         getDetails() {
//           return `Name: ${this.name}, Age: ${this.age}`;
//         },
//         getDogDetails() {
//           return `Dog Name: ${this.dogName}`;
//         },
//         managePeople() {
//           console.log('Managing people...');
//         },
// };

// // interface - merging(reopening), extend, typeguard
// interface Person {
//   name: string;
//   getDetails(): string;
// }

// interface DogOwner {
//   dogName: string;
//   getDogDetails(): string;
// }

// // Merging (reopening) an interface in TypeScript is a process where you declare an interface with the same name more than once, and TypeScript will merge their members.

// // Merging the interface
// interface Person {
//   age: number;
// }

// // Usage
// const person: Person = {
//   name: 'John',
//   age: 30,
//   getDetails() {
//     return `Name: ${this.name}, Age: ${this.age}`;
//   },
// };

// // Extending an interface in TypeScript is a way to create a new interface that inherits the properties and methods of an existing interface. You use the extends keyword to do this. When you extend an interface, the new interface will have all the members of the base interface, plus any new members that you add.

// // Extending the interface
// interface Employee extends Person {
//   employeeId: number;
// }

// const employee: Employee = {
//   name: 'jane',
//   age: 28,
//   employeeId: 123,
//   getDetails() {
//     return `Name: ${this.name}, Age: ${this.age}, Employee ID: ${this.employeeId}`;
//   },
// };

// // Interface multiple inheritance
// interface Manager extends Person, DogOwner {
//   managePeople(): void;
// }

// const manager: Manager = {
//   name: 'Bob',
//   age: 35,
//   dogName: 'Rex',
//   getDetails() {
//     return `Name: ${this.name}, Age: ${this.age}`;
//   },
//   getDogDetails() {
//     return `Dog Name: ${this.dogName}`;
//   },
//   managePeople() {
//     console.log('Managing people...');
//   },
// };
// // ##challenge 
// // Define the Person interface Start by defining a Person interface with a name property of type string.
// // Define the DogOwner interface Next, define a DogOwner interface that extends Person and adds a dogName property of type string.
// // Define the Manager interface Then, define a Manager interface that extends Person and adds two methods: managePeople and delegateTasks. Both methods should have a return type of void.
// // Define the getEmployee function Now, define a function called getEmployee that returns a Person, DogOwner, or Manager. Inside this function, generate a random number and use it to decide which type of object to return. If the number is less than 0.33, return a Person. If it's less than 0.66, return a DogOwner. Otherwise, return a Manager.
// // Finally, create a variable called employee that can be a Person, DogOwner, or Manager, and assign it the return value of getEmployee. Then, log employee to the console.
// interface Person {
//   name: string;
// }

// interface DogOwner extends Person {
//   dogName: string;
// }

// interface Manager extends Person {
//   managePeople(): void;
//   delegateTasks(): void;
// }

// const employee: Person | DogOwner | Manager = getEmployee();
// console.log(employee);

// function getEmployee(): Person | DogOwner | Manager {
//   const random = Math.random();

//   if (random < 0.33) {
//     return {
//       name: 'john',
//     };
//   } else if (random < 0.66) {
//     return {
//       name: 'sarah',
//       dogName: 'Rex',
//     };
//   } else {
//     return {
//       name: 'bob',
//       managePeople: () => console.log('Managing people...'),
//       delegateTasks: () => console.log('Delegating tasks...'),
//     };
//   }
// }
// // Challenge - Part 2
// // A type predicate in TypeScript is a special kind of return type for a function that not only returns a boolean, but also asserts that the argument is of a specific type if the function returns true. It's typically used in user-defined type guard functions to narrow down the type of a variable within a certain scope. The syntax is arg is Type, where arg is the function argument and Type is the type you're checking for.

// // Define the isManager function Define a function called isManager that takes an object of type Person | DogOwner | Manager and returns a boolean. This function should check if the managePeople method exists on the object, and return true if it does and false if it doesn't. The return type of this function should be a type predicate: obj is Manager.
// // Run your code to see if it works as expected. If employee is a Manager, you should see the output of the delegateTasks method in the console. If employee is a Person or DogOwner, there should be no output.
// // function isManager(obj: Person | DogOwner | Manager): boolean {
// //   return 'managePeople' in obj;
// // }

// function isManager(obj: Person | DogOwner | Manager): obj is Manager {
//   return 'managePeople' in obj;
// }

// if (isManager(employee)) {
//   employee.delegateTasks();
// }
// // Interface vs Type Alias
// // A type alias is a way to give a name to a type. It can represent primitive types, union types, intersection types, tuples, and any other types. Once defined, the alias can be used anywhere in place of the actual type.

// type Person = {
//   name: string;
//   age: number;
// };

// let john: Person = { name: 'John', age: 30 };
// Interface

// // An interface is a way to define a contract for a certain structure of an object.

// interface Person {
//   name: string;
//   age: number;
// }

// let john: Person = { name: 'John', age: 30 };
// // Key Differences

// // Type aliases can represent primitive types, union types, intersection types, tuples, etc., while interfaces are primarily used to represent the shape of an object.
// // Type alias for a primitive type
// type Score = number;
// type NumberOrString = number | string;
// // Type alias for literal types
// type Direction = 'up' | 'down' | 'left' | 'right';

// // Using the type aliases
// let gameScore: Score = 100;
// let move: Direction = 'up';
// // Interfaces can be merged using declaration merging. If you define an interface with the same name more than once, TypeScript will merge their definitions. Type aliases can't be merged in this way.

// // Interfaces can be implemented by classes, while type aliases cannot.

// // Type aliases can use computed properties, while interfaces cannot.

// interface Person {
//   name: string;
//   greet(): void;
// }

// class Employee implements Person {
//   name: string;

//   constructor(name: string) {
//     this.name = name;
//   }

//   greet() {
//     console.log(`Hello, my name is ${this.name}`);
//   }
// }

// let john = new Employee('John');
// john.greet(); // Outputs: Hello, my name is John
// const propName = 'age';

// type Animal = {
//   [propName]: number;
// };

// let tiger: Animal = { [propName]: 5 };

// Tuples : In TypeScript, a Tuple is a special type that allows you to create an array where the type of a fixed number of elements is known, but need not be the same - in other words it's an array with fixed length and ordered with fixed types. This is useful when you want to group different types of values together.

// Tuples are useful when you want to return multiple values from a function.

// By default, tuples in TypeScript are not read-only. This means you can modify the values of the elements in the tuple.However, TypeScript does provide a way to make tuples read-only using the readonly keyword.

// let person: [string , number] = ['john' , 26]
// console.log(person);

// let person1 : [string , number?] = ['john' ] // number as a optional type

// function getPerson(): [string, number] {
//   return ['john', 25];
// }

// let randomPerson = getPerson();
// console.log(randomPerson[0]); // Outputs: john
// console.log(randomPerson[1]);

// // let susan: [string, number] = ['susan', 25];
// // susan[0] = 'bob';
// // susan.push('some random value');

// let susan: readonly [string, number] = ['susan', 25];
// // susan[0] = 'bob';
// // susan.push('some random value');
// console.log(susan);

// Enums in TypeScript allow us to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases.

// enum StateValue{
//   yes = 'true', // true in string is default value. enum doesnot accept boolean value it only accepts number or string
//   no = 'false'
// }
// // console.log(StateValue);

// // if u dont provide default value eg, 200, 'true' then first value of enum will have default value of 0.
// enum noDefault{
//   success,
//   fail
// }
// console.log(noDefault);
// enum ServerResponseStatus{
//   success = 200,
//   error = 'error'
// }

// interface serverResponse{
//   result : ServerResponseStatus,
//   data : string[]
// }

// function getServerResponse(): serverResponse {
//   return {
//     result : ServerResponseStatus.success,
//     data : ['first item' , 'second item']
// }
// }
// const response: serverResponse = getServerResponse()
// console.log(response);
// Enums - Gotcha : Reverse Mapping
// In a numeric enum, TypeScript creates a reverse mapping from the numeric values to the enum member names. This means that if you assign a numeric value to an enum member, you can use that numeric value anywhere the enum type is expected.

// In a string enum, TypeScript does not create a reverse mapping. This means that if you assign a string value to an enum member, you cannot use that string value anywhere the enum type is expected. You must use the enum member itself.
// enum ServerResponseStatus {
//   Success = 'Success',
//   Error = 'Error',
// }

// Object.values(ServerResponseStatus).forEach((value) => {
//   console.log(value);
// });
// above iteration will have only 2 values because it has string as a value.
// enum ServerResponseStatus {
//   Success = 200,
//   Error = 500,
// }

// Object.values(ServerResponseStatus).forEach((value) => {
//   if (typeof value === 'number') {
//     console.log(value);
//   }
// });
// // above iteration will have only 4 values because it has number as a value if u dont use typeguard(typeof)
// // u can prevent 2 values from printing if u use typeof value === 'number'

// enum NumericEnum {
//   Member = 1,
// }

// enum StringEnum {
//   Member = 'Value',
// }
// // const hell : NumericEnum = 1;
// let numericEnumValue: NumericEnum = 1; // This is allowed
// // means u can substitue number for value in TS. eg instead of member i can use 1 but i cant do same with string.
// console.log(numericEnumValue); // 1

// let stringEnumValue: StringEnum = 'Value'; //hence, This is not allowed
 

// ##challenge
// enum UserRole {
//   Admin , 
//   Manager , 
//   Employee
// }

// type User = { id:number , name:string , role: UserRole , contact: [ string , string] }

// let suzan: User = {
//   id:12,
//   name: 'suzan',
//   role: UserRole.Admin,
//   contact : ['suzan@gmail.com' , '9139839843']
// }

// function CreateUser(user:User):User{
//   return user
// }

// // another way of calling function
// // Call the createUser function
// const user: User = CreateUser({
//   id: 1,
//   name: 'John Doe',
//   role: UserRole.Admin,
//   contact: ['john.doe@example.com', '123-456-7890'],
// });

// const checkUser = CreateUser(suzan)
// console.log(checkUser);
// console.log(user);

// type assertion in TypeScript is a way to tell the compiler what the type of an existing variable is. This is especially useful when you know more about the type of a variable than TypeScript does.

// let someValue: any = 'This is a string';

// // Using type assertion to treat 'someValue' as a string
// let strLength: number = (someValue as string).length;


// type Bird = {
//   name: string;
// };

// // Assume we have a JSON string from an API or local file
// let birdString = '{"name": "Eagle"}';
// let dogString = '{"breed": "Poodle"}';

// //

// // Parse the JSON string into an object
// let birdObject = JSON.parse(birdString);
// let dogObject = JSON.parse(dogString);

// // We're sure that the jsonObject is actually a Bird
// let bird = birdObject as Bird;
// let dog = dogObject as Bird;

// console.log(bird.name);
// console.log(dog.name); // u will get undefined here because dogObject does not have name property

// enum Status {
//   Pending = 'pending',
//   Declined = 'declined',
// }

// type User = {
//   name: string;
//   status: Status;
// };
// // save Status.Pending in the DB as a string
// // retrieve string from the DB
// const statusValue = 'pending'; 

// // if u save it as statusValue.pending u will get a string('pending') stored in DB which is value of statusValue.pending and when u acccess it back u will get a string so, u know that the value of string is going to match statusValue.pending
// const user: User = { name: 'john', status: statusValue as Status }; // that why we use it 'as' Status


// // The unknown type in TypeScript is a type-safe counterpart of the any type. It's like saying that a variable could be anything, but we need to perform some type-checking before we can use it.

// // "error instanceof Error" checks if the error object is an instance of the Error class.

// let unknownValue:unknown;
// unknownValue = 'hey there buds'
// unknownValue = ['one' , 'two', 'three']
// unknownValue = 12.34
// // unknownValue.length // thiss will not work because u are doing operation on 'unknown' variable which is not allowed in TS
// // first u have to use typegaurd to check if its that value or not. if yes do whatever specified if not do somthing else

// if( typeof unknownValue === 'number'){
//  console.log( unknownValue + unknownValue );
 
// }else{
//   console.log('this is not a number'); 
// }

// function runSomeCode() {
//   const random = Math.random();
//   if (random < 0.5) {
//     throw new Error('Something went wrong');
//   } else {
//     throw 'some error';
//   }
// }

// try {
//   runSomeCode()
// } catch (error) {
//   // here in catch block the error is always going to be type:unknown which is why u have to check the insgtance of error before running anything
//   if(error instanceof Error){
//     console.log(error.message );
//   }
//   else {
//     // console.log(error);
//     console.log('there was an error....');
// }
// }

// Type - "never"
// In TypeScript, never is a type that represents the type of values that never occur.you can't assign any value to a variable of type never. TypeScript will give a compile error if there are any unhandled cases, helping ensure that all cases are handled.

// let someValue:never = 'hello' 

// type Theme = 'light' | 'dark';

// function checkTheme(theme: Theme) {
//   if (theme === 'light') {
//     console.log('light theme');
//     return;
//   }
//   if (theme === 'dark') {
//     console.log('dark theme');
//     return;
//   }
//   theme;
//   // theme is of type never, because it can never have a value that is not 'light' or 'dark'.
//   // Ts will automatically set type:never to theme because u have wrote logic for both possible values.
// }
// enum Color {
//   Red,
//   Blue,
//   // Green,
// }

// function getColorName(color: Color) {
//   switch (color) {
//     case Color.Red:
//       return 'Red';
//     case Color.Blue:
//       return 'Blue';
//     default:
//       // at build time. can check the error like this below
//       // if unexpectedColor: never = color; gets accepted by TS that means everything is correct u are handling anery value of whatever obj
//       // but if does not get accepted that means u are not handling the values correctly
//       let unexpectedColor: never = color;
//       // at runtime. u will face error automatically
//       throw new Error(`Unexpected color value: ${unexpectedColor}`);
//   }
// }

// console.log(getColorName(Color.Red)); // Red
// console.log(getColorName(Color.Blue)); // Blue
// console.log(getColorName(Color.Green)); // Green


// Modules - Global Scope "Gotcha(catch)"
// If your TypeScript files aren't modules (i.e., they don't have any import or export statements), they're treated as scripts in the global scope. In this case, declaring the same variable in two different files would cause a conflict.


// let name = 'shakeAdnBake';

// const susan = 'susan';

// export let something = 'something';
// // actions.ts

// const susan = 'susan';

// export const something = 'something';

// in tsconfig.json file u can add this "moduleDetection": "force",
// "moduleDetection": "force",

// output
// tsconfig.json

// "module": "ESNext",

// problem : u cant declare one property in one file and re-declare the property in another file with same name
// for eg. i cant use let name = 'shakeAdnBake'; const susan = 'susan'; in main.ts because that will throw an error in TS

// 1st solution : is that u can export/import anything from either file. if u use export/import in this file then TS will consider it as a module. and u can use  let name = 'AK'; const susan = 'rex'; u dont have to export only these value. u can export/import anything. what matters is export/import in ur file.

// 2nd sol: is that u can set "moduleDetection": "force", this in tsconfig.json file. by-default it is set to 'auto' but u can change it.


// Modules - Imports/Exports (including types)
// import newStudent, { sayHello, person, type Student } from './actions';

// sayHello('TypeScript');
// console.log(person);
// console.log(newStudent);

// const anotherStudent: Student = {
//   name: 'bob',
//   age: 23,
// };

// console.log(anotherStudent);

// Modules - Javascript Files

// You can make .js file and do operation from that file but initially TS will not consider it. so in order to let TS know about it u have to
// make a change in tsconfig.ts

// go to tsconfig.TS and write allowJS:true. this will allow u to use .js file in TS


// When you set "allowJs": true in your tsconfig.json, TypeScript will process JavaScript files and can infer types to a certain extent based on the structure and usage of your JavaScript code.

// However, TypeScript's ability to infer types from JavaScript is not as robust as when working with TypeScript files. For example, it might not be able to infer complex types or types that depend on runtime behavior.

// create example.js 
// export someValue, import in tutorial
  // "allowJs": true, in tsconfig.ts file

//Type Guarding
// Type guarding is a term in TypeScript that refers to the ability to narrow down the type of an object within a certain scope. This is usually done using conditional statements that check the type of an object.

// In the context of TypeScript, a type guard is some expression that performs a runtime check that guarantees the type in some scope.

// Challenge - "typeof" guard
// starter code
// type ValueType = string | number | boolean;

// let value: ValueType;
// const random = Math.random();
// value = random < 0.33 ? 'Hello' : random < 0.66 ? 123.456 : true;

// function checkValue(value: ValueType) {
//   if (typeof value === 'string') {
//     console.log(value.toLowerCase());
//     return;
//   }
//   if (typeof value === 'number') {
//     console.log(value.toFixed(2));
//     return;
//   }
//   console.log(`boolean: ${value}`);
// }

// checkValue(value);

// Challenge - Equality Narrowing
// In TypeScript, equality narrowing is a form of type narrowing that occurs when you use equality checks like === or !== in your code

// starter code
// type Dog = { type: 'dog'; name: string; bark: () => void };
// type Cat = { type: 'cat'; name: string; meow: () => void };
// type Animal = Dog | Cat;

// function makeSound(animal: Animal) {
//   if (animal.type === 'dog') {
//     // TypeScript knows that `animal` is a Dog in this block
//     animal.bark();
//   } else {
//     // TypeScript knows that `animal` is a Cat in this block
//     animal.meow();
//   }
// }
// // Challenge - check for property
// // The "in" operator in TypeScript is used to narrow down the type of a variable when used in a conditional statement.It checks if a property or method exists on an object. If it exists, TypeScript will narrow the type to the one that has this property.

// function makeSound1(animal: Animal) {
//   if ('bark' in animal) {
//     // TypeScript knows that `animal` is a Dog in this block
//     animal.bark();
//   } else {
//     // TypeScript knows that `animal` is a Cat in this block
//     animal.meow();
//   }
// }
// Challenge - "Truthy"/"Falsy" guard
// function printLength(str: string | null | undefined) {
//   if (str) {
//     // In this block, TypeScript knows that `str` is a string
//     // because `null` and `undefined` are falsy values.
//     console.log(str.length);
//   } else {
//     console.log('No string provided');
//   }
// }

// printLength('Hello'); // Outputs: 5
// printLength(null); // Outputs: No string provided
// printLength(undefined); // Outputs: No string provided

// type predicate
// type Student = {
//   name: string;
//   study: () => void;
// };

// type User = {
//   name: string;
//   login: () => void;
// };

// type Person = Student | User;

// const randomPerson = (): Person => {
//   return Math.random() > 0.5
//     ? { name: 'john', study: () => console.log('Studying') }
//     : { name: 'mary', login: () => console.log('Logging in') };
// };

// const person = randomPerson();

// function isStudent (person: Person): person is Student{  
//   return (person as Student).study !== undefined // u can handle it like this if u are sure that its going to be this value only but only if its not undefined
//  }

//  const result = isStudent({
//   name: 'hello',
//   study(){console.log('dssd');}
//  })
//  console.log(result);
 
// Generics - Fundamentals
// Generics in TypeScript are a way to create reusable code components that work with a variety of types as opposed to a single one.

// In other words, generics allow you to write a function or a class that can work with any data type. You can think of generics as a kind of variable for types.

// In TypeScript, you can declare an array using two syntaxes:

// one way is below
// let array1: string[] = ['Apple', 'Banana', 'Mango'];
// let array2: number[] = [1, 2, 3];
// let array3: boolean[] = [true, false, true];

// another way is below 
// let array1:Array<string> = ['Apple', 'Banana', 'Mango'];
// u can do the same for all types

// how to write generic functions 
// function genericFunction<T>(arg: T): T{
// // <T> this name can be anything. but make sure u use the same name in as arg and also in return
//   return arg
// }

// const someStringValue = genericFunction<string>('hello TS')
// const someNumValue = genericFunction<number>(65654)
// console.log(someNumValue , someStringValue);

// // how to make generic interface
// interface genericInterface<T> {
//  value : T,
//  getValue : () => T 
// }

// let genericvalue:genericInterface<string>= {
//   value : 'hello world',
//   getValue() {
//     return this.value
//   }
// }

// // A Promise in JavaScript (and thus TypeScript) is an object representing the eventual completion or failure of an asynchronous operation.

// async function check():Promise<string> {
//   return 'Hello World';
// }
// const result = check();
// console.log(result);

// // generate an array of strings
// function generateStringArray(length: number, value: string): string[] {
//   let result: string[] = [];
//   result = Array(length).fill(value);
//   return result;
// }

// console.log(generateStringArray(3, 'hello'));
// // generate an array of number
// function createArray<T>(length: number, value: T): Array<T> {
//   let result: T[] = [];
//   result = Array(length).fill(value);
//   return result;
// }

// let arrayStrings = createArray<string>(3, 'hello'); // ["hello", "hello", "hello"]
// let arrayNumbers = createArray<number>(4, 100); // [100, 100, 100, 100]

// console.log(arrayStrings);
// console.log(arrayNumbers);

// // how to pass more than one type in generic function
// function pair<T , U>(param1:T , param2:U): [T,U]{
//   return [param1 , param2]
// }

// // let result = pair<number, string>(123, 'Hello');
// console.log(result); // Output: [123, "Hello"]


// // type constraint on the generic type T, generic type can be either a number or a string.
// function processValue<T extends string>(value:T): T{
//   console.log(value);
//   return value
// }

// let whatevervalue = processValue('hello moto')

// function process1Value<T extends string | number>(value:T): T{
//   console.log(value);
//   return value
// }

// let whatever1value = process1Value('hello moto')
// let whatever2value = process1Value(852)

// generic type constraints 2 
// type Car = {
//   brand: string;
//   model: string;
// };

// const car: Car = {
//   brand: 'ford',
//   model: 'mustang',
// };

// type Product = {
//   name: string;
//   price: number;
// };

// const product: Product = {
//   name: 'shoes',
//   price: 1.99,
// };

// type Student = {
//   name: string;
//   age: number;
// };

// const student: Student = {
//   name: 'peter',
//   age: 20,
// };

// T extends Student is a type constraint on the generic type T. It means that the type T can be any type, but it must be a subtype of Student or Student itself. In other words, T must have at least the same properties and methods that Student has.

// function printName<T extends Student>(input: T): void {
//   console.log(input.name);
// }

// printName(student)

// function printName<T extends Student | Product>(input: T): void {
//   console.log(input.name);
// }

// printName(product);

// The extends { name: string } part is a type constraint on T. It means that T can be any type, but it must be an object that has at least a name property of type string.
// In other words, T must have at least the same properties and methods that { name: string } has.

// function printName<T extends {name:string}>(input : T): void{
//   console.log(input.name);
// }

// printName(student);
// printName(product);

// Generics - Default Value
interface StoreData<T = any>{
  data: T[]
}

// const storeNumbers: StoreData<number> = {
//   data: [1, 2, 3, 4],
// };

const randomStuff: StoreData = {
  data: ['random', 1],
};