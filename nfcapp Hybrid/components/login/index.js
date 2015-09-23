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
        submit: function() {},
        cancel: function() {}
    });

    parent.set('loginModel', loginModel);
})(app.login);

// START_CUSTOM_CODE_loginModel
// END_CUSTOM_CODE_loginModel