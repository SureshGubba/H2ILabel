'use strict';

app.addErrorReport = kendo.observable({
    onShow: function() {DisplayLoggedInUser();},
    afterShow: function() {}
});

// START_CUSTOM_CODE_addErrorReport
// END_CUSTOM_CODE_addErrorReport
(function(parent) {
    var addErrorReportModel = kendo.observable({
        fields: {
            problemDescription: '',
            model: '',
            serialNo: '',
            phoneIdentity: '',
        },
       submit: function() {
                            AddNewErrorReport(addErrorReportModel.fields.problemDescription, addErrorReportModel.fields.model, addErrorReportModel.fields.serialNo, 
                                       addErrorReportModel.fields.phoneIdentity, GetLoggedInUser(),app);},
        cancel: function() {app.mobileApp.navigate("components/errorReports/view.html");}
    });

    parent.set('addErrorReportModel', addErrorReportModel);
})(app.addErrorReport);

// START_CUSTOM_CODE_addErrorReportModel
function AddNewErrorReport(problemDescription, model, serialNo,phoneIdentity, loggedinUserSessionID,app) 
{
    $.ajax({
        type: "POST",
        crossDomain: true,
        url: WebAPIURL + "/FeedBack/SaveFeedBack?Authorization=" + AuthKey,
        data: {
            "Comments": rating,
            "Rating": comments,
            "SessionID": loggedinUserSessionID
        },
        success: function(data) {
            app.mobileApp.navigate("components/feedback/view.html");
        },
        error: function(xhr) {
            alert(xhr.responseText);
        }
    });
}
// END_CUSTOM_CODE_addErrorReportModel