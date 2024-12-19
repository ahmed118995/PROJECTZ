sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'projectz/test/integration/FirstJourney',
		'projectz/test/integration/pages/EMPsetList',
		'projectz/test/integration/pages/EMPsetObjectPage'
    ],
    function(JourneyRunner, opaJourney, EMPsetList, EMPsetObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('projectz') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheEMPsetList: EMPsetList,
					onTheEMPsetObjectPage: EMPsetObjectPage
                }
            },
            opaJourney.run
        );
    }
);