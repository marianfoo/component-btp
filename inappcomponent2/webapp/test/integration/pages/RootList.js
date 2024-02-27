sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'inappcomponent2.two',
            componentId: 'RootList',
            contextPath: '/Root'
        },
        CustomPageDefinitions
    );
});