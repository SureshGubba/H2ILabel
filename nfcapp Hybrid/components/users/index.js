'use strict';

app.users = kendo.observable({
    onShow: function () {
        
    },
    afterShow: function () {}
});

// START_CUSTOM_CODE_users

alert('hi');

var WebAPIURL = "http://schneidernfcservices.cloudapp.net/api";
        var AuthKey = "1cede1a2-e7d4-44f4-ab39-75c646c88b71";
        $.ajax({
            url: WebAPIURL + "/user/GetUsers?Authorization=" + AuthKey',
            type: "GET",            
            success: function (data) {
                alert(JSON.stringify(data));
            },
            error: function (error) {
                alert(JSON.stringify(error));
            }
        })
        
// END_CUSTOM_CODE_users