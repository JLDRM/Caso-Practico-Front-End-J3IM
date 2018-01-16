$.validator.addMethod(
    "regex",
    function (value, element, regexp) {
        var re = new RegExp(regexp);
        return this.optional(element) || re.test(value);
    },
    "Por favor, introduce datos correctos."
);
$("#bot").click((evnt) => {
    // evnt.preventDefault();
    let t = $("form").validate({
        rules: {
            nombre: {
                required: true
            },
            apellido: {
                required: true,
            },
            email: {
                required: true,
            },
            contraseña: {
                required: true,
            },
            empresa: {
                required: true,
            },
            nif: {
                required: true,
            },
            telefono: {
                required: true,
            },
            idreg: {
                required: true,
            }
        },
        messages: {
            nombre: "Por favor, introduce tu nombre.",
            apellido: "Por favor, introduce tu apellido.",
            email: "Por favor, introduce tu email.",
            contraseña: "Por favor, introduce una contraseña.",
            empresa: "Por favor, introduce el nombre de tu empresa.",
            nif: "Por favor, introduce el NIF de tu empresa.",
            telefono: "Por favor, introduce un número de teléfono.",
            idreg: "Este campo es obligatorio.",
        },
        submitHandler: function (form) {
            console.log("entra submithandler:",form)
            jQuery.ajax({
                url: "http://www.mocky.io/v2/5a5cc2e02e0000ef1a9f840f",
                type: "POST",
                success: function(){
                    alert('Registrado correctamente.'),
                    location.href = "http://www.mocky.io/v2/5a5cc2e02e0000ef1a9f840f",
                },
                error: function(){
                    alert('Los sentimos, se ha producido un error.')
                }
            })
            form.submit();
        }
    });

    $("#nombre").rules("add", { regex: "^[A-Z ÁÉÍÓÚ][a-z áéíóú]+$" });
    $("#apellido").rules("add", { regex: "^[A-Z ÁÉÍÓÚ][a-z áéíóú]+$" });
    $("#email").rules("add", { regex: "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" });
    $("#contraseña").rules("add", { regex: "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}$" });
    $("#nif").rules("add", { regex: "^[A-Za-z][0-9]{8}$" });
    $("#telefono").rules("add", { regex: "^[0-9]{9}$" });
   
    t.form();
});

