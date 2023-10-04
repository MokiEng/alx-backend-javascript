// main.ts

import Cpp from './subjects/Cpp';
import Java from './subjects/Java';
import React from './subjects/React';

import { Teacher } from './subjects/Teacher';

// Create a Teacher object with experienceTeachingC = 10
const cTeacher: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 10,
};

// Create constants for the subjects
const cpp = new Cpp();
const java = new Java();
const react = new React();

// Set the teacher for each subject
cpp.setTeacher(cTeacher);
java.setTeacher(cTeacher);
react.setTeacher(cTeacher);

// Log information for Cpp subject
console.log('C++');
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// Log information for Java subject
console.log('Java');
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// Log information for React subject
console.log('React');
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
