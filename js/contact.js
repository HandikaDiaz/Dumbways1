function getData(){
    let name = document.getElementById("inputName").value;
    let email = document.getElementById("inputEmail").value;
    let number = document.getElementById("inputNumber").value;
    let select = document.getElementById("inputSelect").value;
    let massage = document.getElementById("inputMassage").value;

    console.log(name);
    console.log(email);
    console.log(number);
    console.log(select);
    console.log(massage);

    document.getElementById("form").reset();
}