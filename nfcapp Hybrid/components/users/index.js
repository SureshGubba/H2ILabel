'use strict';

app.users = kendo.observable({
    onShow: function() {
        				DisplayLoggedInUser();
                       LoadNFCUsers();},
    afterShow: function() {},    
    addNewUser: function() {
        app.mobileApp.navigate("components/addUser/view.html");
    }
});

// START_CUSTOM_CODE_users

function LoadNFCUsers() {
    console.log('LoadUsers');
    $.ajax({
        type: "GET",
        crossDomain: true,
        url: WebAPIURL + "/user/GetUsers?Authorization=" + AuthKey,
        dataType: "json",
        success: function(data) {           
            $("#users").kendoMobileListView({
                dataSource: data,
                template: "<div><div>Email #: data.EmailID #</div><div>Password #: data.Password #</div><div>IsActive #: data.IsActivated #</div></div>"
            });
        },
        error: function(xhr) {
            alert(xhr.responseText);
        }
    })
}
// END_CUSTOM_CODE_users