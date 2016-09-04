"use strict";
var user_component_1 = require("./user.component");
var UserServices = (function () {
    function UserServices() {
    }
    UserServices.prototype.getUsers = function () {
        return user_component_1.USERS;
    };
    return UserServices;
}());
exports.UserServices = UserServices;
//# sourceMappingURL=user.services.js.map