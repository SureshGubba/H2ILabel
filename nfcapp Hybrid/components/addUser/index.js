'use strict';

app.addUser = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});

// START_CUSTOM_CODE_addUser
// END_CUSTOM_CODE_addUser
(function(parent) {
    var addUserModel = kendo.observable({
        fields: {
            countries: '',
            platform: '',
            application: '',
            country: '',
            companyName: '',
            password1: '',
            email1: '',
        },
        submit: function() {DisplayLoggedInUser();
                            AddNewUser(addUserModel.fields.email1, addUserModel.fields.password1, addUserModel.fields.companyName, 
                                       addUserModel.fields.country, addUserModel.fields.application, addUserModel.fields.platform, app);},
        cancel: function() {}
    });

    parent.set('addUserModel', addUserModel);
})(app.addUser);

// START_CUSTOM_CODE_addUserModel

function AddNewUser(email1, password1, companyName, country, application, platform, app) {
    $.ajax({
        type: "POST",
        crossDomain: true,
        url: WebAPIURL + "/User/RegisterUser?Authorization=" + AuthKey,
        data: {
            "EmailID": email1,
            "Password": password1,
            "Country": country,
            "CompanyName": companyName,
            "Platform": platform,
            "ApplicationName": application
        },
        success: function(data) {
            app.mobileApp.navigate("components/users/view.html");
        },
        error: function(xhr) {
            alert(xhr.responseText);
        }
    });
}
// END_CUSTOM_CODE_addUserModel