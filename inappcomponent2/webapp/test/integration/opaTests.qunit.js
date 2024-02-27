sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'inappcomponent2.two/test/integration/FirstJourney',
		'inappcomponent2.two/test/integration/pages/RootList',
		'inappcomponent2.two/test/integration/pages/RootObjectPage',
		'inappcomponent2.two/test/integration/pages/ChildObjectPage'
    ],
    function(JourneyRunner, opaJourney, RootList, RootObjectPage, ChildObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('inappcomponent2.two') + '/index.html'
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