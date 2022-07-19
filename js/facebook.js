$(document).ready(function(){
    $("#signup_form").validate({ 
        rules:{
            fname:{
                required:true,
                minlength:4,
                maxlength:8
            } ,
            surname:{
                required:true,
                minlength:4
            },
            email:{
                required:true,
                email:true
            },
            passwd:{
                minlength:8
            },
            day:{
                required:true
            },
            gender:{
                required:true
            }
        },
        messages:{
            fname:"Enter first name",
            surname:{
                 required:"Enter surname",
                 minlength:"Atleast 4 characters"
            }
            
            
        }
     
    })
})