define(["underscore", "knockout", "jquery", "./fetchData"],
	function(_, ko, $, fetchData){

	var main = function() {

		var self = this;
		var PARCEL_QUERY = "list_deals";
		var APIHITS_QUERY = "api_hits";
		this.deals = ko.observableArray();
		this.apiHits = ko.observable();

		this.fetchDeals = function(){
			var self = this;
			fetchData(PARCEL_QUERY, this.fetchDealsSuccessHandler, this.fetchDealsErrorHandler);
		};

		this.fetchDealsSuccessHandler = function(data) {
			_.each(data.deals, function(deal){
				deal.finalPrice = this.calculateFinalPrice(deal.actual_price, deal.discount)
			}, this);
			this.deals(data.deals); 
		};

		this.fetchDealsErrorHandler = function(xhr, status, err) {
			console.error("fetchDeals", status, err.toString());
		};

		this.fetchApiHits = function(){
			fetchData(APIHITS_QUERY, this.fetchApiHitsSuccessHandler, this.fetchApiHitsErrorHandler);
		};

		this.fetchApiHitsSuccessHandler = function(data) {
			this.apiHits(data.api_hits);
		};

		this.fetchApiHitsErrorHandler = function(xhr, status, err) {
			console.error("fetchApiHits", status, err.toString());
		};

		this.calculateFinalPrice = function(actualPrice, discount){
			discountNumber = parseInt(discount.replace("%", ""));
			var discountAmount= (actualPrice*discountNumber)/100;
			return (actualPrice - discountAmount).toFixed(2);
		};

		_.bindAll(this, 'fetchDeals', 'fetchDealsSuccessHandler', 'fetchDealsErrorHandler',
		 'fetchApiHits', 'fetchApiHitsSuccessHandler', 'fetchApiHitsErrorHandler',
		 'calculateFinalPrice');

		this.fetchDeals();
		this.fetchApiHits();
		
	}
	
	return main;
});