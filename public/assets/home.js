$(document).ready(function(){
    $('#submit').on('click', function(){

        $.ajax({
            type: 'POST', 
            url: '/',
            data: {name: name, email: email, message: message},
            success: function(data){
                console.log('The post request worked');
                location.reload();
            }
        });
        return false;
    });
});