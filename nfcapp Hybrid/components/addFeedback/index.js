'use strict';

app.addFeedback = kendo.observable({
    onShow: function() {
         DisplayLoggedInUser();
    },
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
        submit: function() {},
        cancel: function() {}
    });

    parent.set('addFeedbackModel', addFeedbackModel);
})(app.addFeedback);

// START_CUSTOM_CODE_addFeedbackModel
// END_CUSTOM_CODE_addFeedbackModel