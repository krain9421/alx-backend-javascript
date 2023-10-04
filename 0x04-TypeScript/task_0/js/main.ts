interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Alex",
  lastName: "Mason",
  age: 25,
  location: "Canada"
};

const student2: Student = {
  firstName: "Fred",
  lastName: "Igwe",
  age: 23,
  location: "Nigeria"
};

const studentsList = [student1, student2];

const table = document.createElement("table");
document.body.appendChild(table);

for (const x of studentsList) {
  const row = table.insertRow();
  const firstNameCol = row.insertCell();
  const locationCol = row.insertCell();

  firstNameCol.innerHTML = x.firstName;
  locationCol.innerHTML = x.location;
}
