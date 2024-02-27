sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'inappcomponent2.two',
            componentId: 'ChildObjectPage',
            contextPath: '/Root/_Child'
        },
        CustomPageDefinitions
    );
});