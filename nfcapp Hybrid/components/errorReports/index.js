'use strict';

app.errorReports = kendo.observable({
    onShow: function() {DisplayLoggedInUser();
                        LoadErrorReports();},
    afterShow: function() {},
    
    addNewErrorReport: function(){app.mobileApp.navigate("components/addErrorReport/view.html");}
});

// START_CUSTOM_CODE_errorReports

function LoadErrorReports() {
    console.log('LoadErrorReports');
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