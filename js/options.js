(function () {
    "use strict";

    c1metro.setOptions(
        function () {
            c1metro.options = {
                appTitle: "BOSEbuild test page",                         // App title text
                dataHostUrl: "http://bbcms2.azurewebsites.net/",         // Host part of URL where data is downloaded from
                websiteUrl: "http://bbcms2.azurewebsites.net/",          // Your website URL
                privacyUrl: "http://bbcms2.azurewebsites.net/Privacy",   // Privacy URL - your app won't be accepted by MS if this is not in place 

                // Info to share (share charm) when not showing a content item with a url
                genericShareUrl: "http://bbcms2.azurewebsites.net/",
                genericShareTitle: "BOSEbuild",
                genericShareSubTitle: "A random test website",

                // Cache setting / off-line mode messages
                cacheRefreshDelay: 1000,                                    // ms to wait before server is contacted to refresh cached groups/content
                contentRefreshFrequency: 600000,                            // ms to wait before we pull fresh content from the server - don't set too low (set 600000 or above)
                connectionProblemsTitle: "Running in off-line mode",
                connectionProblemsDetails: "The content server not available right now.",

                // Paths data is downloaded from - these are appended @dataHostUrl 
                dataGroupsPath: "appfeed/data/groups.ashx",
                dataContentPath: "appfeed/data/content.ashx"    
            };
        });
})();
