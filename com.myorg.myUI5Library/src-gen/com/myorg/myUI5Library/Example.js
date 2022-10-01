sap.ui.define(["sap/ui/core/Control", "./ExampleRenderer", "./library"], function (Control, __ExampleRenderer, ___library) {
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }

  const ExampleRenderer = _interopRequireDefault(__ExampleRenderer);

  const ExampleColor = ___library["ExampleColor"];
  /**
   * Constructor for a new <code>com.myorg.myUI5Library.Example</code> control.
   *
   * Some class description goes here.
   * @extends Control
   *
   * @author OpenUI5 Team 
   * @version ${version}
   *
   * @constructor
   * @public
   * @name com.myorg.myUI5Library.Example
   */

  const Example = Control.extend("com.myorg.myUI5Library.Example", {
    renderer: ExampleRenderer,
    metadata: {
      library: "com.myorg.myUI5Library",
      properties: {
        /**
         * The text to display.
         */
        text: {
          type: "string",
          group: "Data",
          defaultValue: null
        },

        /**
         * The color to use (default to "Default" color).
         */
        color: {
          type: "com.myorg.myUI5Library.ExampleColor",
          group: "Appearance",
          defaultValue: ExampleColor.Default
        }
      },
      events: {
        /**
         * Event is fired when the user clicks the control.
         */
        press: {}
      }
    },
    constructor: function _constructor(id, settings) {
      Control.prototype.constructor.call(this, id, settings);

      this.onclick = () => {
        this.firePress();
      };
    }
  });
  return Example;
});