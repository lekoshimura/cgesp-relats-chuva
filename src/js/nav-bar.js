YUI().use('node-menunav', function(Y) {

        //  Retrieve the Node instance representing the root menu
        //  (<div id="productsandservices">) and call the "plug" method
        //  passing in a reference to the MenuNav Node Plugin.

        var menu = Y.one("#nav-bar");

        menu.plug(Y.Plugin.NodeMenuNav,{autoSubmenuDisplay: false, mouseOutHideDelay: 0});

        //  Show the menu now that it is ready

        //menu.get("ownerDocument").get("documentElement").removeClass("yui3-loading");
        
        menu.removeClass("yui3-loading");

    });