'use strict';

app.errorReports = kendo.observable({
    onShow: function() {
        LoadErrorReports();
    },
    afterShow: function() {}
});

// START_CUSTOM_CODE_errorReports

function LoadErrorReports() {
    console.log('nfc');
    var WebAPIURL = "http://schneidernfcservices.cloudapp.net/api";
    var AuthKey = "1cede1a2-e7d4-44f4-ab39-75c646c88b71";
    $.ajax({
        type: "GET",
        crossDomain: true,
        url: WebAPIURL + "/ErrorReport/GetErrorReports?Authorization=" + AuthKey,
        dataType: "json",
        success: function(data) {
            console.log(data);
            $("#errorreports").kendoMobileListView({
                dataSource: data,
                template: "<div> \
							<div>#: data.ProblemDescription #</div> \
                			<div>#: data.CreatedByUser.EmailID # #: data.CreatedByUser.CompanyName # #: data.CreatedByUser.Country #</div> \
                		   </div>"
            });
        },
        error: function(xhr) {
            alert(xhr.responseText);
        }
    })
}
// END_CUSTOM_CODE_errorReports