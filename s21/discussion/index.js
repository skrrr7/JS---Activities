let student = {
    name: "Alice",
    age: 20,
    course: "Computer Science",
    grades: [85, 90, 78]
  };
  
  // Step 2: Print the initial student object
  console.log("Initial student object:", student);
  
  // Step 3: Add a new property 'hobbies'
  student.hobbies = ["Reading", "Gaming"];
  
  // Step 4: Update the 'course' property
  student.course = "Software Engineering";
  
  // Step 5: Remove the 'age' property
  delete student.age;
  
  // Step 6: Add a new grade (95) to the 'grades' array
  student.grades.push(95);
  
  // Step 7: Print the final student object
  console.log("Final student object:", student);
  