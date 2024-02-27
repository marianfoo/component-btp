sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'inappcomponent1.one',
            componentId: 'RootList',
            contextPath: '/Root'
        },
        CustomPageDefinitions
    );
});