'use strict';

app.addUser = kendo.observable({
    onShow: function () {
       // LoadCountries();
    },
    afterShow: function () {}
});

// START_CUSTOM_CODE_addUser
// END_CUSTOM_CODE_addUser
(function (parent) {
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
        submit: function () {},
        cancel: function () {app.mobileApp.navigate($('#usersview').attr("href"));}
    });

    parent.set('addUserModel', addUserModel);
})(app.addUser);

// START_CUSTOM_CODE_addUserModel

function LoadCountries() {
    var dataSource = new kendo.data.DataSource({
        transport: {
            read: {
                url: "http://services.groupkt.com/country/get/all",
                dataType: "json"
            }
        }
    });
    $("#cmbCountries").kendoComboBox({
        dataSource: dataSource,
        dataTextField: "name",
        dataValueField: "alpha2_code"
    });
}

function AddNewUser(email1, password1, companyName, country, application, platform) {
        var WebAPIURL = "http://schneidernfcservices.cloudapp.net/api";
        var AuthKey = "1cede1a2-e7d4-44f4-ab39-75c646c88b71";
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
            success: function (data) {
                app.mobileApp.navigate($('#usersview').attr("href"));
            },
            error: function (xhr) {
                alert(xhr.responseText);
            }
        });
    }
    // END_CUSTOM_CODE_addUserModel