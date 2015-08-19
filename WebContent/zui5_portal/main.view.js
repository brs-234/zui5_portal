sap.ui.jsview("zui5_portal.main", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf zui5_portal.main
	*/ 
	getControllerName : function() {
		return "zui5_portal.main";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf zui5_portal.main
	*/ 
	createContent : function(oController) {
		var oMasterShell = new sap.ui.ux3.Shell("MainShell",{
			appTitle: "Employee Portal",
			showLogoutButton :false,
			showSearchTool : true,
			showInspectorTool : false,
			showFeederTool : false,
			designType : sap.ui.ux3.ShellDesignType.Crystal,
			headerItems: [ new sap.ui.commons.Button({
			               text : "My Data",
			               press: oController.headerItemSelected
			              })
			            ],
			content: [	new sap.ui.view({
							id: "MyTask",
							viewName: "zui5_portal.MyTask",
							type: sap.ui.core.mvc.ViewType.JS
						}), sap.ui.view({
							id: "NotificaitonBar",
							viewName:"zui5_portal.NotificationBar",
							type: sap.ui.core.mvc.ViewType.JS
						})			
					  ],
			worksetItems: [ new sap.ui.ux3.NavigationItem('LP',{
								key: "MyTask",
								text: "Tasks"
							}),
							new sap.ui.ux3.NavigationItem('LR',{
								key: "LeaveRequest",
								text:"Leave Request"
							}),
							new sap.ui.ux3.NavigationItem('MD',{
								key: "MyData",
								text: "My Data"
							}),
							new sap.ui.ux3.NavigationItem('ES',{
								key: "EmployeeSearch",
								text: "Employee Search"
							})
			               ],
			search: function(oEvent, oContext){
				var oSource = oEvent.getSoruce();
				oSource.setSelectedWorksetItem('ES');
				oSource.removeAllContent();
				var to = "EmployeeSearch";
				var oView = sap.ui.getCore().byId(to);
				
				if(oView == undefined){
					oView = new sap.ui.view({
						id :to,
						viewName: "zui5_portal."+to,
						type:sap.ui.core.mvc.ViewType.JS
					});
				}
				oSource.addContent(oView);
				
				var oNotification = sap.ui.getCore().byId('NotificationBar');
				if(oNotificationBar == undefined){
					oNotification = new sap.ui.view({
						id:"Notification",
						viewName: "zui5_portal.NotificationBar",
						type:sap.ui.core.mvc.ViewType.JS
					});
				}
				
				var search = oEvent.getSource().getSearchField().getValue();
				sap.ui.getCore().getControl("ES_TFS").setValue(search);
				
				sap.ui.getCore().getControl("ES_TFS").fireLiveChange(search);
			},
		    worksetItemSelected:oController.worksetItemSelected,
				
		});
		console.log(oMasterShell);
		return oMasterShell;

	}

});
