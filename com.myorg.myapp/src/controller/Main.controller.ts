import MessageBox from "sap/m/MessageBox";
import BaseController from "./BaseController";
import formatter from "../model/formatter";
import Example from "com/myorg/myUI5Library/Example";
import { ExampleColor } from "com/myorg/myUI5Library/library";

/**
 * @namespace com.myorg.myapp.controller
 */
export default class Main extends BaseController {
	private formatter = formatter;

	public sayHello() : void {
		const ex = new Example({text:"test"});
		ex.setColor(ExampleColor.Highlight);
		MessageBox.show("Hello World!");
	}

}
