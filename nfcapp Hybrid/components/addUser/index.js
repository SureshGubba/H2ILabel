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
            application: '',
            country: '',
            companyName: '',
            password1: '',
            email1: '',
        },
        submit: function() {},
        cancel: function() {}
    });

    parent.set('addUserModel', addUserModel);
})(app.addUser);

// START_CUSTOM_CODE_addUserModel
// END_CUSTOM_CODE_addUserModel