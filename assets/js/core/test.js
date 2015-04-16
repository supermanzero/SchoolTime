define(['handlebars'], function(Handlebars) {
  Handlebars = Handlebars["default"];  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
return templates['person'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<table>\r\n    <tr>\r\n        <td>This is "
    + alias3(((helper = (helper = helpers.firstname || (depth0 != null ? depth0.firstname : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"firstname","hash":{},"data":data}) : helper)))
    + " "
    + alias3(((helper = (helper = helpers.lastname || (depth0 != null ? depth0.lastname : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"lastname","hash":{},"data":data}) : helper)))
    + "</td>\r\n    </tr>\r\n</table>";
},"useData":true});
});