export default function getListStudents() {
  let obj1 = new Object();
  let obj2 = new Object();
  let obj3 = new Object();
  let arr = [];

  obj1.id = 1;
  obj1.firstName = "Guillaume";
  obj1.location = "San Francisco"

  obj2.id = 2;
  obj2.firstName = "James";
  obj2.location = "Columbia";

  obj3.id = 5;
  obj3.firstName = "Serena";
  obj3.location = "San Francisco";

  arr.push(obj1, obj2, obj3);

  return arr;
}
