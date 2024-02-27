sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'inappcomponent1.one/test/integration/FirstJourney',
		'inappcomponent1.one/test/integration/pages/RootList',
		'inappcomponent1.one/test/integration/pages/RootObjectPage',
		'inappcomponent1.one/test/integration/pages/ChildObjectPage'
    ],
    function(JourneyRunner, opaJourney, RootList, RootObjectPage, ChildObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('inappcomponent1.one') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRootList: RootList,
					onTheRootObjectPage: RootObjectPage,
					onTheChildObjectPage: ChildObjectPage
                }
            },
            opaJourney.run
        );
    }
);