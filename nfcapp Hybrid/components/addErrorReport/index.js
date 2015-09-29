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
        submit: function() {},
        cancel: function() {}
    });

    parent.set('addErrorReportModel', addErrorReportModel);
})(app.addErrorReport);

// START_CUSTOM_CODE_addErrorReportModel
// END_CUSTOM_CODE_addErrorReportModel