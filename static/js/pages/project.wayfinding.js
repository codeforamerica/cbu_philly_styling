/*--------------------------------------------------------------------
  Copyright (c) 2011 Local Projects. All rights reserved.
  Licensed under the Affero GNU GPL v3, see LICENSE for more details.
 --------------------------------------------------------------------*/

var tc = tc || {};
tc.gam = tc.gam || {};
tc.gam.project_widgets = tc.gam.project_widgets || {};
tc.gam.wayfinding = tc.gam.wayfinding || {};

tc.gam.project_widgets.wayfinding = function(options) {
    tc.util.log('project.wayfinding');
    var dom = options.dom,
        self = {},
        west = tc.jQ('.continent.project').find('.west:last');

    tc.jQ(tc).bind('show-project-widget', function(event, widgetName) {
        if (options.name === widgetName) {
            var contents, template;
            tc.util.log('&&& showing ' + options.name);
            tc.showProjectWidget(dom);
            contents = west.contents().remove();
            tc.gam.wayfinding.west = contents;
            template = ich.west_wayfinding();
            west.html(template);
        } else {
            tc.util.log('&&& hiding ' + options.name);
            dom.hide();
            west.html(tc.gam.wayfinding.west);
            delete tc.gam.wayfinding.west;
        }
    });

    tc.jQ('body').delegate('.checkbox', 'click', function (event) {
        var self = $(this);
        event.preventDefault();
        self.parent().addClass('check');
    });

    return self;
};
