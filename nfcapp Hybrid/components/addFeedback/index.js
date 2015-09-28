'use strict';

app.addFeedback = kendo.observable({
    onShow: function () {
        DisplayLoggedInUser();
    },
    afterShow: function () {}
});

// START_CUSTOM_CODE_addFeedback
// END_CUSTOM_CODE_addFeedback
(function (parent) {
    var addFeedbackModel = kendo.observable({
        fields: {
            rating: '',
            comments: '',
        },
        submit: function () {
            AddNewFeedback(addFeedbackModel.fields.rating, addFeedbackModel.fields.comments, GetLoggedInUserSession(), app);
        },
        cancel: function () {}
    });

    parent.set('addFeedbackModel', addFeedbackModel);
})(app.addFeedback);

// START_CUSTOM_CODE_addFeedbackModel


function AddNewFeedback(rating, comments, loggedinUserSessionID, app) {
        var WebAPIURL = "http://schneidernfcservices.cloudapp.net/api";
        var AuthKey = "1cede1a2-e7d4-44f4-ab39-75c646c88b71";
        $.ajax({
            type: "POST",
            crossDomain: true,
            url: WebAPIURL + "/FeedBack/SaveFeedBack?Authorization=" + AuthKey,
            data: {
                "Comments": rating,
                "Rating": comments,
                "SessionID": loggedinUserSessionID
            },
            success: function (data) {
                app.mobileApp.navigate("components/feedback/view.html");
            },
            error: function (xhr) {
                alert(xhr.responseText);
            }
        });
    }
    // END_CUSTOM_CODE_addFeedbackModel