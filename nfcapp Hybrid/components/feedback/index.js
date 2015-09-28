'use strict';

app.feedback = kendo.observable({
    onShow: function() {
        LoadFeedbacks();
    },
    afterShow: function() {}
});

// START_CUSTOM_CODE_feedback
function LoadFeedbacks() {
    console.log('LoadFeedbacks');
    var WebAPIURL = "http://schneidernfcservices.cloudapp.net/api";
    var AuthKey = "1cede1a2-e7d4-44f4-ab39-75c646c88b71";
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