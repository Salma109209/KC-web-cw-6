alert ("مرحبا في موقعي الذي سيحسب درجتك")
   
let grade = prompt("اكتب درجتك بالارقام")

console.log(grade)


  
  if   (grade>=90 && grade<=100) {   
    console.log ("لقد حصلت على امتياز")
  }

  if (grade>=80 && grade<=89) {
    
        cpnsole.log ( "لقد حصلت على جيد جدا")
   
  }

  if (grade>=70 && grade<=79 ) {
    console.log("لقد حصلت على جيد🙂")
  }

  if (grade>=60 && grade<=69) {
    console.log ( "لقد حصلت على مقبول😕")
  }
  if (grade>=50 && grade<=59) {
    console.log( "لقد حصلت على ضعيف☹️")
  }

  if (grade<50) {
    console.log (   "راسب💔")
  }