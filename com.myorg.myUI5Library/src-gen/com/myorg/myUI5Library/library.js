sap.ui.define(["sap/base/util/ObjectPath"], function (ObjectPath) {
  /**
   * Initialization Code and shared classes of library com.myorg.myUI5Library.
   */
  // delegate further initialization of this library to the Core
  // Hint: sap.ui.getCore() must still be used here to support preload with sync bootstrap!
  sap.ui.getCore().initLibrary({
    name: "com.myorg.myUI5Library",
    version: "${version}",
    dependencies: [// keep in sync with the ui5.yaml and .library files
    "sap.ui.core"],
    types: ["com.myorg.myUI5Library.ExampleColor"],
    interfaces: [],
    controls: ["com.myorg.myUI5Library.Example"],
    elements: [],
    noLibraryCSS: false // if no CSS is provided, you can disable the library.css load here

  }); // get the library object from global object space because all enums must be attached to it to be usable as UI5 types
  // FIXME: this line is planned to become obsolete and may need to be removed later

  const thisLib = ObjectPath.get("com.myorg.myUI5Library");
  /**
   * Semantic Colors of the com.myorg.myUI5Library.Example control.
   *
   * @enum {string}
   * @public
   */

  var ExampleColor; // FIXME: this line is planned to become obsolete and may need to be removed later

  (function (ExampleColor) {
    ExampleColor["Default"] = "Default";
    ExampleColor["Highlight"] = "Highlight";
  })(ExampleColor || (ExampleColor = {}));

  thisLib.ExampleColor = ExampleColor; // add the enum to the library; this is important because UI5 otherwise cannot identify the type and will skip type checking for properties of this type

  var __exports = {
    __esModule: true
  };
  __exports.ExampleColor = ExampleColor;
  return __exports;
});