define(['jquery'],
	function($){

	var fetchData = function(queryType, successHandler, errorHandler){
		return $.ajax({
                        url: "http://nutanix.0x10.info/api/deals",
                        dataType: 'json',
                        data: {
                        	type: "json",
                        	query: queryType
                        },
                        cache: false,
                        success: successHandler,
                        error: errorHandler
                  });
	}

	return fetchData;
});