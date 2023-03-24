sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History",
    "sap/ui/core/UIComponent"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, History, UIComponent) {
        "use strict";

        return Controller.extend("sapips.training.employeeapp.controller.EmployeeDetails", {

            //onAfterRendering: function() {
            //    debugger
            //},

            onInit: function () {
                this.oRouter = this.getOwnerComponent().getRouter();
			    this.oModel = this.getOwnerComponent().getModel();
			    this.oRouter.getRoute("EmployeeDetails").attachPatternMatched(this._onEmployeeMatched, this);
            },

            onCancel: function () {
                    var oHistory = History.getInstance();
                    var sPreviousHash = oHistory.getPreviousHash();
          
                    if (sPreviousHash && sPreviousHash !== undefined) {
                        window.history.go(-1);
                    } else {
                        var oRouter = UIComponent.getRouterFor(this);
                        oRouter.navTo("EmployeeList".true);
                    }
            },

            _onEmployeeMatched: function (oEvent) {
                this._EmployeeID = oEvent.getParameter("arguments").EmployeeID || this._EmployeeID || "0";
                this.getView().bindElement({
                    path: "EmployeeModel/" + this._EmployeeID
                    
                });
            },

            getRouter: function() {
                return sap.ui.core.UIComponent.getRouterFor(this);
            },
        });
    });