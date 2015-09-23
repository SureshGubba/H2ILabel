'use strict';

app.login = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});

// START_CUSTOM_CODE_login
// END_CUSTOM_CODE_login
(function(parent) {
    var loginModel = kendo.observable({
        fields: {
            password:'' ,
            email: '',
        },
        login: function() {
            VerifyLogin(loginModel.fields.email,loginModel.fields.password,app);
        },
        cancel: function() {}
    });

    parent.set('loginModel', loginModel);
})(app.login);

// START_CUSTOM_CODE_loginModel

function VerifyLogin(email,password,app)
{
    console.log(email);
    console.log(password);
     var WebAPIURL = "http://schneidernfcservices.cloudapp.net/api";
    var AuthKey = "1cede1a2-e7d4-44f4-ab39-75c646c88b71";
    $.ajax({
                type: "POST",
                crossDomain: true,
                url: WebAPIURL + "/User/Login?Authorization=" + AuthKey,
                data: {
                    "EmailID": email,
                    "Password": password,
					"IMEINumber": Math.random()
                },
                success: function (data) {
                    console.log(data); 
                    app.mobileApp.navigate("#usersview");
                },
                error: function (xhr) {
                    alert(xhr.responseText);
                }
            });
}
// END_CUSTOM_CODE_loginModel