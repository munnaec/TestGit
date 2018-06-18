sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("Custom.controlCustomTable.controller.Main", {
		onInit: function() {
			// get mock data for select
			var oModel = new sap.ui.model.json.JSONModel(this.aMockData);
			this.getView().setModel(oModel);
		},

		handleNewValue: function(oEvent) {
			var sNewValue = oEvent.getParameter("value");
			var oModel = this.getView().getModel();
			var aData = oModel.getData();

			aData.push({
				"CountryId": sNewValue,
				"Name": sNewValue
			});

			oModel.setData(aData);
		},
		aMockData: [{
				  "CountryId": 1,
				  "Name": "Sweden"
				}, {
				  "CountryId": 2,
				  "Name": "Japan"
				}, {
				  "CountryId": 3,
				  "Name": "Russia"
				}, {
				  "CountryId": 4,
				  "Name": "China"
				}, {
				  "CountryId": 5,
				  "Name": "Brazil"
				}, {
				  "CountryId": 6,
				  "Name": "France"
				}]
	});
});