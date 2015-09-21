'use strict';

app.feedback = kendo.observable({
    onShow: function() {
        LoadFeedbacks();
    },
    afterShow: function() {}
});

function LoadFeedbacks()
{
    
    console.log('nfc');
    var WebAPIURL = "http://schneidernfcservices.cloudapp.net/api";
	var AuthKey = "1cede1a2-e7d4-44f4-ab39-75c646c88b71";
    $.ajax({
                type: "GET",
                crossDomain: true,
                url: WebAPIURL + "/feedback/GetFeedbacks?Authorization=" + AuthKey,
                dataType: "json",
                success: function (data) {                  
				console.log(data);
                     $("#feedbacks").kendoMobileListView({
                        dataSource: data,
                         template: "<div><span style='visibility: hidden;' >#: data.FeedbackID#</span><span>Rating #: data.Rating #</span><span>#: data.Comments # </span><span>#: data.CreatedByUser.EmailID # </span></div></div>"
                    });
                },
                error: function (xhr) {                    
                    alert(xhr.responseText);
                }
            })
}