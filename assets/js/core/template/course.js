define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["./assets/js/core/template/course.handlebars"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <li class=\"yui3-u\">\r\n        <div class=\"item\">\r\n            <p>"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</p>\r\n            <p>"
    + alias3(((helper = (helper = helpers.teach || (depth0 != null ? depth0.teach : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"teach","hash":{},"data":data}) : helper)))
    + "</p>\r\n        </div>\r\n    </li>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = 
  "<ul class=\"yui3-g\">\r\n";
  stack1 = ((helper = (helper = helpers.course || (depth0 != null ? depth0.course : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"course","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0,options) : helper));
  if (!helpers.course) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</ul>";
},"useData":true});

this["JST"]["./assets/js/core/template/otherTime.handlebars"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<tr>\r\n    <td>\r\n        <p>"
    + alias3(((helper = (helper = helpers.starttime || (depth0 != null ? depth0.starttime : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"starttime","hash":{},"data":data}) : helper)))
    + "-"
    + alias3(((helper = (helper = helpers.endtime || (depth0 != null ? depth0.endtime : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"endtime","hash":{},"data":data}) : helper)))
    + "</p>\r\n    </td>\r\n    <td colspan=\"5\">\r\n        <p>"
    + alias3(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"text","hash":{},"data":data}) : helper)))
    + "</p>\r\n    </td>\r\n</tr>";
},"useData":true});

this["JST"]["./assets/js/core/template/test.handlebars"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <li class=\"yui3-u\">\r\n        <div class=\"item\">\r\n            <p>"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</p>\r\n            <p>"
    + alias3(((helper = (helper = helpers.teach || (depth0 != null ? depth0.teach : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"teach","hash":{},"data":data}) : helper)))
    + "</p>\r\n        </div>\r\n    </li>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = 
  "<ul class=\"yui3-g\">\r\n";
  stack1 = ((helper = (helper = helpers.test || (depth0 != null ? depth0.test : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"test","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0,options) : helper));
  if (!helpers.test) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</ul>";
},"useData":true});

this["JST"]["./assets/js/core/template/timetable.handlebars"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression, alias4=this.lambda;

  return "<tr>\r\n    <td>\r\n        <p>"
    + alias3(((helper = (helper = helpers.joint || (depth0 != null ? depth0.joint : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"joint","hash":{},"data":data}) : helper)))
    + "</p>\r\n        <p>"
    + alias3(((helper = (helper = helpers.starttime || (depth0 != null ? depth0.starttime : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"starttime","hash":{},"data":data}) : helper)))
    + "-"
    + alias3(((helper = (helper = helpers.endtime || (depth0 != null ? depth0.endtime : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"endtime","hash":{},"data":data}) : helper)))
    + "</p>\r\n    </td>\r\n    <td class=\"drop\" data-map=\"a1\">\r\n        <div class=\"item assigned\">\r\n            <p>"
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.mon : depth0)) != null ? stack1.name : stack1), depth0))
    + "</p>\r\n            <p>"
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.mon : depth0)) != null ? stack1.teach : stack1), depth0))
    + "</p>\r\n        </div>\r\n    </td>\r\n    <td class=\"drop\" data-map=\"a2\">\r\n        <div class=\"item assigned\">\r\n            <p>"
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.tues : depth0)) != null ? stack1.name : stack1), depth0))
    + "</p>\r\n            <p>"
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.tues : depth0)) != null ? stack1.teach : stack1), depth0))
    + "</p>\r\n        </div>\r\n    </td>\r\n    <td class=\"drop\" data-map=\"a3\">\r\n        <div class=\"item assigned\">\r\n            <p>"
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.wed : depth0)) != null ? stack1.name : stack1), depth0))
    + "</p>\r\n            <p>"
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.wed : depth0)) != null ? stack1.teach : stack1), depth0))
    + "</p>\r\n        </div>\r\n    </td>\r\n    <td class=\"drop\" data-map=\"a4\">\r\n        <div class=\"item assigned\">\r\n            <p>"
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.thurs : depth0)) != null ? stack1.name : stack1), depth0))
    + "</p>\r\n            <p>"
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.thurs : depth0)) != null ? stack1.teach : stack1), depth0))
    + "</p>\r\n        </div>\r\n    </td>\r\n    <td class=\"drop\" data-map=\"a5\">\r\n        <div class=\"item assigned\">\r\n            <p>"
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.fri : depth0)) != null ? stack1.name : stack1), depth0))
    + "</p>\r\n            <p>"
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.fri : depth0)) != null ? stack1.teach : stack1), depth0))
    + "</p>\r\n        </div>\r\n    </td>\r\n</tr>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, options;

  stack1 = ((helper = (helper = helpers.timetable || (depth0 != null ? depth0.timetable : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"timetable","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0,options) : helper));
  if (!helpers.timetable) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { return stack1; }
  else { return ''; }
},"useData":true});

return this["JST"];

});