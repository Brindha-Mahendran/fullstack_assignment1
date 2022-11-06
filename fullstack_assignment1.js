//1
let practicefile = [273.15];
practicefile.push(42);
practicefile.push(“hello”);
practicefile.push(false, -4.6, "87");
console.log(practicefile);

//2
let cargohold = [‘Oxygen tanks’,’Space suits’,’Parrot’,’Instruction manual’, 'meal packs', 'slinky', 'security blanket'];
  //a
cargohold[5] = ‘space tether’;
console.log(cargohold);
  //b
let remove = cargohold.pop();
console.log(remove);
console.log(cargohold);
  //c
let remove1 = cargohold.shift();
console.log(remove1);
console.log(cargohold);
  //d
cargohold.unshift(1138);
cargohold.push(“20 meters”);
console.log(cargohold);
  //e
console.log(`Array = ${cargohold} length = ${cargohold.length}`);

//3
  //a
cargohold.splice(3,0,’keys’);
console.log(cargohold);
   //b
let f = cargohold.indexOf("instruction manual");
delete cargohold [f];
console.log(cargohold);
  //c
cargohold.splice(2,3,”cat”,”fog”,”string cheese”);
console.log(cargohold);

//4
  //a
let holdCabinet1 = ['duct tape', 'gum', 3.14, false, 6.022e23];
let holdCabinet2 = ['orange drink', 'nerf toys', 'camera', 42, 'parsnip'];
console.log(holdCabinet1.concat(holdCabinet2));
console.log(holdCabinet1);
  //b
let s1 = holdCabinet1.slice(1,3);
let s2 = holdCabinet2.slice(0,2);
console.log(s1);
console.log(s2);
  //c
holdCabinet1.reverse();
holdCabinet2.sort();
console.log(holdCabinet1);
console.log(holdCabinet2);

//5
  //a
let str = 'In space, no one can hear you code.';
console.log(str.split());
console.log(str.split('e'));
console.log(str.split(' '));
console.log(str.split(''));
  //b
let arr = ['B', 'n', 'n', 5];
console.log(arr.join('a'));
console.log(arr.join(' '));
console.log(arr.join(''));
  //c
let str2 =”java script”;
console.log(str2.split(‘,’).sort().join(‘,’));

//6
  //a
let element1 = ['hydrogen', 'H', 1.008];
let element2 = ['helium', 'He', 4.003];
let element26 = ['iron', 'Fe', 55.85];
  //b
console.log(table[1], table[1][1]);

//7
  //a
  let people = ["Greg", "Mary", "Devon", "James"];
for(let i =0; i< people.length; i++){
    console.log(people[i]);
}
  //b
people.shift();
  //c
people.pop();
  //d
people.unshift("Matt");
  //e
people.push("Elie");
  //f
for(let i =0; i< people.length; i++){
    if(i > 1){
        break;
    }
    console.log(people[i]);
}
  //g
people.slice(2);
  //h

people.indexOf("Mary");

  //i
people.indexOf("Foo");
  //j
people = ["Greg", "Mary", "Devon", "James"];
people.splice(2,1,"Elizabeth", "Artie");
  //k
let withBob = people.concat("Bob");
