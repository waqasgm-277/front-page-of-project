let form = document.getElementById('myform')

form.addEventListener('submit', function(a){
    a.preventDefault();
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let message = document.getElementById('message').value

    if(name == '' || email == '' || message == ''){
        alert('please fill out all the fields')
    }
    else{
        let users = JSON.parse(localStorage.getItem('users')) || [];
        users.push({kname: name, kemail: email, kmessage: message})

        localStorage.setItem('users', JSON.stringify(users));

        this.reset()
    }
})
// form validation
$(document).ready(function(){
    $('#name').keyup(function(){
        let name = $(this).val()

        let nameRe = /^[a-zA-Z\s]{3,}$/
        
        if(nameRe.text(name)){
            $(this).next('span').show().text('invalid formate').css('color', 'red')
            $(this).css('border', '2px solid red')
        }
        else{
            $(this).next('span').hide()
            $(this).css('border', '2px solid green')
        }
    })
})