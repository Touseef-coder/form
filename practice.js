function add(){
    let Students= []
    var Name = document.getElementById('name').value;
    var Last = document.getElementById('last').value;
    var roll = document.getElementById('roll').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var institute = document.getElementById('institute').value;

    Students.push(Name,Last,roll,phone,email,institute)

    document.getElementById('removeall').innerHTML=Students
    console.log(Students);

}

function removeall(){
    Students =[]
    console.log(Students);
    document.getElementById('removeall').innerHTML = Students;
}