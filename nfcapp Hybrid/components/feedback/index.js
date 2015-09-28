'use strict';

app.feedback = kendo.observable({
    onShow: function() {
        DisplayLoggedInUser();
        LoadFeedbacks();
    },
    afterShow: function() {},
    
    addNewFeedback : function()
    {
        app.mobileApp.navigate("components/addFeedback/view.html");
    }
});

// START_CUSTOM_CODE_feedback
function LoadFeedbacks() {
    console.log('LoadFeedbacks');
    $.ajax({
        type: "GET",
        crossDomain: true,
        url: WebAPIURL + "/Feedback/GetFeedBacks?Authorization=" + AuthKey,
        dataType: "json",
        success: function(data) {
            console.log(data);
            $("#feedbacks").kendoMobileListView({
                dataSource: data,
                template: "<div> \
							<div>#: data.Comments #</div> \
							<div>Rating :#: data.Rating #</div> \
                			<div>#: data.CreatedByUser.EmailID # #: data.CreatedByUser.CompanyName # #: data.CreatedByUser.Country #</div> \
                		   </div>"
            });
        },
        error: function(xhr) {
            alert(xhr.responseText);
        }
    })
}
// END_CUSTOM_CODE_feedback