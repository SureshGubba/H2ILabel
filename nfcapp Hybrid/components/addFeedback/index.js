'use strict';

app.addFeedback = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});

// START_CUSTOM_CODE_addFeedback
// END_CUSTOM_CODE_addFeedback
(function(parent) {
    var addFeedbackModel = kendo.observable({
        fields: {
            rating: '',
            comments: '',
        },
        submit: function() {AddNewFeedback(addFeedbackModel.rating, addFeedbackModel.comments, addFeedbackModel.loggedinUserSessionID, app)},
        cancel: function() {}
    });

    parent.set('addFeedbackModel', addFeedbackModel);
})(app.addFeedback);

// START_CUSTOM_CODE_addFeedbackModel

function AddNewFeedback(rating, comments, loggedinUserSessionID, app) {
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
// END_CUSTOM_CODE_addFeedbackModel