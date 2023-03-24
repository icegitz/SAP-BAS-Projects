sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/ui/model/json/JSONModel',
    "sap/m/MessageBox",
    "sap/ui/core/UIComponent",
    'sap/ui/model/Sorter',
    "sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, MessageBox, UIComponent, Sorter, Filter, FilterOperator) {
        "use strict";

        return Controller.extend("sapips.training.employeeapp.controller.EmployeeList", {

            //onAfterRendering: function() {
            //    debugger
            //},

            onInit: function () {
                this.oRouter = this.getOwnerComponent().getRouter();
			    
            },
                onAddEmployee: function() {
                    var oView = this.getView();
                    this.getRouter().navTo("EmployeeCreate");
    
                },
    
                onDeleteEmployee: function() {
                    MessageBox.confirm("Are you sure you want to delete the selected employee/s?");
                },
    
                onDetailView: function(oEvent) {   
                    //var oView = this.getView();
                    var oPath = oEvent.getSource().getBindingContextPath();
                    var EmployeeID = oPath.split("/").slice(-1).pop();
                    this.oRouter.navTo("EmployeeDetails", {EmployeeID: EmployeeID});

                    //this.getRouter().navTo("EmployeeDetails", {"EmployeeID": EmployeeID});
                },

                getRouter: function() {
                    return sap.ui.core.UIComponent.getRouterFor(this);
                },
        });
    });
