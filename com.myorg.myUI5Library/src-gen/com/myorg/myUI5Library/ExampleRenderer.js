sap.ui.define(["sap/ui/core/Core", "./library"], function (Core, ___library) {
  const ExampleColor = ___library["ExampleColor"];
  /**
   * Example renderer.
   * @namespace
   */

  const ExampleRenderer = {
    apiVersion: 2,
    // usage of DOM Patcher

    /**
     * Renders the HTML for the given control, using the provided {@link RenderManager}.
     *
     * @param {RenderManager} rm The reference to the <code>sap.ui.core.RenderManager</code>
     * @param {Example} control The control instance to be rendered
     */
    render: function (rm, control) {
      const i18n = Core.getLibraryResourceBundle("com.myorg.myUI5Library");
      rm.openStart("div", control);

      if (control.getColor() === ExampleColor.Highlight) {
        rm.class("myLibPrefixExampleHighlight");
      } else {
        rm.class("myLibPrefixExample");
      }

      rm.openEnd();
      rm.text(i18n.getText("ANY_TEXT") + ": " + control.getText());
      rm.close("div");
    }
  };
  return ExampleRenderer;
});