'use strict';

app.users = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});

// START_CUSTOM_CODE_users

function LoadNFCUsers() {
    console.log('nfc');
    var WebAPIURL = "http://schneidernfcservices.cloudapp.net/api";
    var AuthKey = "1cede1a2-e7d4-44f4-ab39-75c646c88b71";
    $.ajax({
        type: "GET",
        crossDomain: true,
        url: WebAPIURL + "/user/GetUsers?Authorization=" + AuthKey,
        dataType: "json",
        success: function(data) {
            console.log(data);
            $("#users").kendoMobileListView({
                dataSource: data,
                template: "<div><div>#: data.EmailID #</div><div>#: data.Password #</div><div>#: data.IsActivated #</div></div>"
            });
        },
        error: function(xhr) {
            alert(xhr.responseText);
        }
    })
}
// END_CUSTOM_CODE_users