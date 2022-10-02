/*!
 * ${copyright}
 */

// Provides control com.myorg.myUI5Library.Example.
import Control from	"sap/ui/core/Control";
import ExampleRenderer from "./ExampleRenderer";
import { ExampleColor } from "./library";



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
export default class Example extends Control {

	// The following three lines were generated and should remain as-is to make TypeScript aware of the constructor signatures
	constructor(id?: string | $ExampleSettings);
	constructor(id?: string, settings?: $ExampleSettings);
	constructor(id?: string, settings?: $ExampleSettings) { super(id, settings); }

	static readonly metadata = {
		library: "com.myorg.myUI5Library",
		properties: {
			/**
			 * The text to display.
			 */
			text: {
				type: "string",
				group: "Data",
				defaultValue: ""
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
	};

	static renderer = ExampleRenderer;

	onclick = () => {
		this.firePress();
	}
}