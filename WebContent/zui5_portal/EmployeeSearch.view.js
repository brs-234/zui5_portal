sap.ui.jsview("zui5_portal.EmployeeSearch", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf zui5_portal.EmployeeSearch
	*/ 
	getControllerName : function() {
		return "zui5_portal.EmployeeSearch";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf zui5_portal.EmployeeSearch
	*/ 
	createContent : function(oController) {
		oText = new sap.ui.commons.TextView({
			text: "Employee Directory"
		});
	
		var oLayout = new sap.ui.commons.layout.VerticalLayout({
			content:[oText]
		});
		
		return oLayout;
	}

});
