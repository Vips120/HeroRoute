"use strict";
var router_1 = require("@angular/router");
var heroic_component_1 = require("./heroic.component");
var dasboard_component_1 = require("./dasboard.component");
var appRoutes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'heroic',
        component: heroic_component_1.HeroComponent
    },
    {
        path: 'dashboard',
        component: dasboard_component_1.DashboardComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map