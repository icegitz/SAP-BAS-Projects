sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "../model/formatter",
    "sap/ui/model/json/JSONModel"

],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, formatter, JSONModel) {
        "use strict";

        return Controller.extend("sapips.training.jsonbinding.controller.JSONBinding", {

            formatter:formatter,

            onInit: function () {
                //Get the view
                var oView = this.getView();

                //Get i18n Model from Component
                var oI18n = this.getOwnerComponent().getModel("i18n");
                //Bin i18n to View
                oView. setModel(oI18n, "i18n");

                //Instantiate JSON Model
                var oAddressModel = new JSONModel();

                //Define Data
                var oAddress = { 
                    "EID": "justin.f.bardoquillo",
                    "enabled" : true,
                    "Address" : {
                        "Street": "Colon St.",
                        "City" : "Cebu City",
                        "Zip" : "1001",
                        "Country" : "Philippines"
                    },
                    "SalesAmount":1000,
                    "CurrencyCode":"USD"
                };

                //Set the data to Model
                oAddressModel.setData(oAddress);

                //Bind the model to View
                oView.setModel(oAddressModel);
            },

            onSelectProduct: function(oEvent){
                //Get the Control (list)
                var oList = oEvent.getSource();

                //Get the selected items
                var oSelItem = oList.getSelectedItem();

                //Get the context binding path
                var sSelItemPath = oSelItem.getBindingContextPath();

                //Get the control to be used
                var oForm = this.getView().byId("ProductDetails");

                //Bind the selected item to the control (panel 4)
                oForm.bindElement({
                    path: sSelItemPath,
                    model: "ProductsModel"
                })
            }

        });
    });
