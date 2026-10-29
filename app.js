//Functions - declaration,expression, arrow
greetUser("David", "Florida")
function greetUser( name,title){
  console.log("Hello ", name);
  console.log("Welcome to", title);
  console.log("I'm very happy to see you!");
  console.log(`---------------------------`);
 
}
greetUser("Alisa","Instagram")
greetUser("John","Tiktok")
greetUser("Mary","New York")

const doHomework=function(assignmentNumber,title,hours){
  console.log(`I did ${assignmentNumber} assignment`);
  console.log(`That was ${title} and I spent ${hours} hours`);
  console.log(`----------------------------------`);
  
}
doHomework("2and", "Reading",4)
doHomework("3rd", "Physics",6)