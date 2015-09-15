'use strict';

app.errorReports = kendo.observable({
    onShow: function () {
        LoadErrorReports();
    },
    afterShow: function () {}
});

// START_CUSTOM_CODE_errorReports
// END_CUSTOM_CODE_errorReports

function LoadErrorReports() {
    var WebAPIURL = "http://schneidernfcservices.cloudapp.net/api";
    var AuthKey = "1cede1a2-e7d4-44f4-ab39-75c646c88b71";
    $.ajax({
        type: "GET",
        crossDomain: true,
        url: WebAPIURL + "/ErrorReport/GetErrorReports?Authorization=" + AuthKey,
        dataType: "json",
        success: function (data) {
            console.log(data);
            $("#images").kendoMobileListView({
                dataSource: data,
                template: "<div><h3>#: data.CreatedByUser.EmailID # </h3> <div></div></div>"

            });
        },
        error: function (xhr) {
            alert(xhr.responseText);
        }
    })
}