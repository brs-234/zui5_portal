sap.ui.controller("zui5_portal.main", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf zui5_portal.main
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf zui5_portal.main
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf zui5_portal.main
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf zui5_portal.main
*/
//	onExit: function() {
//
//	}
worksetItemSelected: function(oEvent){
		this.removeAllContent();
		var to = oEvent.getParameter('key');
		var oView = sap.ui.getCore().byId(to);
		if(oView == undefined){
			oView = new sap.ui.view({
				id: to,
				viewName: 'zui5_portal.'+to,
				type: sap.ui.core.mvc.ViewType.JS
			});
		}
		this.addContent(oView);
		var oNotification = sap.ui.getCore().byId('NotificationBar');
		if(oNotification == undefined){
			oNotification = sap.ui.view({
				id : 'NotificationBar',
				viewName:'zui5_portal.NotificationBar',
				type:sap.ui.core.mvc.ViewType.JS
			});
		}
		this.addContent(oNotification);
			
	},

headerItemSelected: function(oEvent){
	var oView = sap.ui.getCore().byId('MyData');
	if(oView == undefined){
		var oView = sap.ui.View({
			id:"MyData",
			viewName:"zui5_portal.MyData",
			type:sap.ui.core.mvc.ViewType.JS
		});
	}
	
	var oOverlayDialog = new sap.ui.ux3.OverlayDialog({
		width: "800px",
		height: "500px",
		close: function(){
			oView.destroy();
		}
	});
	
	oOverlayDialog.addContent(oView);
	oOverlayDialog.open();
	
	var oNotificationBar = sap.ui.getCore().byId("NavigationBar");
	if(oNotificationBar == undefined){
		oNotificationBar = sap.ui.view({
			id: "NotificationBar",
			viewName: "zui5_portal.NotificationBar",
			type:sap.ui.core.mvc.ViewType.js
		});
	}
	this.oParent.addContent(oNotification);
}

});