interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const stdnt1: Student = {
  firstName: "Cristiano",
  lastName: "Ronaldo",
  age: 36,
  location: "Portugal",
};

const stdnt2: Student = {
  firstName: "Lionel",
  lastName: "Messi",
  age: 36,
  location: "Argentina",
};

const studentsList = [stdnt1, stdnt2];
