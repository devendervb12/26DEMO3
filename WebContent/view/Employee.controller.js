sap.ui.controller("view.Employee", {
	
	gotoNextPage : function(){
	
		var oController = this;
		
		var oView = oController.getView();
		
		var oApp = oView.getParent();
		
		
	//	var oApp = this.getView().getParent();
		
		oApp.to("idV2");
		
	}
	
});