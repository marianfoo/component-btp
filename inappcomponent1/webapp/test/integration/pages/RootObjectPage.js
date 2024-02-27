sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'inappcomponent1.one',
            componentId: 'RootObjectPage',
            contextPath: '/Root'
        },
        CustomPageDefinitions
    );
});