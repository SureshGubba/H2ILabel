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
            password: '',
            email: '',
        },
        submit: function() {VerifyLogin(loginModel.fields.email, loginModel.fields.password, app);},
        cancel: function() {}
    });

    parent.set('loginModel', loginModel);
})(app.login);

// START_CUSTOM_CODE_loginModel

function VerifyLogin(email, password, app) {
    console.log('VerifyLogin');
    $.ajax({
        type: "POST",
        crossDomain: true,
        url: WebAPIURL + "/User/Login?Authorization=" + AuthKey,
        data: {
            "EmailID": email,
            "Password": password,
            "IMEINumber": Math.random()
        },
        success: function(data) {
            SetLoggedInUser(data);
            app.mobileApp.navigate("components/users/view.html");
        },
        error: function(xhr) {
            alert(xhr.responseText);
        }
    });
}
// END_CUSTOM_CODE_loginModel