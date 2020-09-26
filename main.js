"use strict";

/*
 * Created with @ioBroker/create-adapter v1.21.1
 */

// The adapter-core module gives you access to the core ioBroker functions
// you need to create an adapter
const utils = require("@iobroker/adapter-core");

// Load  your  modules here, e.g.:
// const fs = require("fs");


class visInventwo extends utils.Adapter {


	/**
	 * @param {Partial<ioBroker.AdapterOptions>} [options={}]
	 */
	constructor(options) {
		super({
			...options,
			name: "vis-inventwo",
		});
		this.on("ready", this.onReady.bind(this));
		// this.on("objectChange", this.onObjectChange.bind(this));
		// this.on("stateChange", this.onStateChange.bind(this));
		// this.on("message", this.onMessage.bind(this));
		this.on("unload", this.onUnload.bind(this));

	}

	/**
	 * Is called when databases are connected and adapter received configuration.
	 */
	async onReady() {
		// Initialize your adapter here

		/*
		For every state in the system there has to be also an object of type state
		Here a simple template for a boolean variable named "testVariable"
		Because every adapter instance uses its own unique namespace variable names can't collide with other adapters variables
		*/


		let cssData = {

			"Dark-Theme": [
				//Widget
				{
					dp: "Widget.Color",
					name: "Widget-Color",
					write: false,
					def: "#333333",
					unit: ""
				},
				{
					dp: "Widget.Active-Color",
					name: "Widget-Active-Color",
					def: "#455618",
					unit: ""
				},
				{
					dp: "Widget.Radius",
					name: "Widget-Radius",
					def: "12px 0px 12px 0px",
					unit: ""
				},
				{
					dp: "Widget.Shadow-Blur",
					name: "Widget-Shadow-Blur",
					def: "2",
					unit: "px"
				},

			],
			"Light-Theme": [
				{
					dp: "Widget.Color",
					name: "Widget-Color",
					def: "#ffffff",
					unit: ""
				},
				{
					dp: "Widget.Active-Color",
					name: "Widget-Active-Color",
					def: "#455618",
					unit: ""
				},
				{
					dp: "Widget.Radius",
					name: "Widget-Radius",
					def: "12px 0px 12px 0px",
					unit: ""
				},
				{
					dp: "Widget.Shadow-Blur",
					name: "Widget-Shadow-Blur",
					def: "2",
					unit: "px"
				},
			],
			"Custom-Theme": [
				{
					dp: "Widget.Color",
					name: "Widget-Color",
					def: "#ffffff",
					unit: ""
				},
				{
					dp: "Widget.Active-Color",
					name: "Widget-Active-Color",
					def: "#455618",
					unit: ""
				},
				{
					dp: "Widget.Radius",
					name: "Widget-Radius",
					def: "12px 0px 12px 0px",
					unit: ""
				},
				{
					dp: "Widget.Shadow-Blur",
					name: "Widget-Shadow-Blur",
					def: "2",
					unit: "px"
				},
			]
		};


		this.setObjectNotExistsAsync("CSS.Default-Theme.Widget.Shadow-X", {
			type: "state",
			common: {
				name: "Widget-Shadow-X",
				type: "number",
				role: "inventwo.CSS",
				read: true,
				write: true,
				def: "2",
				unit: "px",
			},
			native: {},
		});
		this.setObjectNotExistsAsync("CSS.Default-Theme.Widget.Shadow-Y", {
			type: "state",
			common: {
				name: "Widget-Shadow-Y",
				type: "number",
				role: "inventwo.CSS",
				read: true,
				write: true,
				def: "2",
				unit: "px",
			},
			native: {},
		});
		this.setObjectNotExistsAsync("CSS.Default-Theme.Widget.Shadow-Size", {
			type: "state",
			common: {
				name: "Widget-Shadow-Size",
				type: "number",
				role: "inventwo.CSS",
				read: true,
				write: true,
				def: "1",
				unit: "px",
			},
			native: {},
		});
		this.setObjectNotExistsAsync("CSS.Default-Theme.Widget.Shadow-Color", {
			type: "state",
			common: {
				name: "Widget-Shadow-Color",
				type: "string",
				role: "inventwo.CSS",
				read: true,
				write: true,
				def: "#111111",
			},
			native: {},
		});
		this.setObjectNotExistsAsync("CSS.Default-Theme.Widget.Shadow-Active-Color", {
			type: "state",
			common: {
				name: "Widget-Shadow-Active-Color",
				type: "string",
				role: "inventwo.CSS",
				read: true,
				write: true,
				def: "#111111",
			},
			native: {},
		});
		this.setObjectNotExistsAsync("CSS.Default-Theme.Widget.Border-Size", {
			type: "state",
			common: {
				name: "Widget-Border-Size",
				type: "number",
				role: "inventwo.CSS",
				read: true,
				write: true,
				def: "0",
				unit: "px",
			},
			native: {},
		});
		this.setObjectNotExistsAsync("CSS.Default-Theme.Widget.Border-Color", {
			type: "state",
			common: {
				name: "Widget-Border-Color",
				type: "string",
				role: "inventwo.CSS",
				read: true,
				write: true,
				def: "#FFFFFF",
			},
			native: {},
		});
		this.setObjectNotExistsAsync("CSS.Default-Theme.Widget.Border-Active-Color", {
			type: "state",
			common: {
				name: "Widget-Border-Active-Color",
				type: "string",
				role: "inventwo.CSS",
				read: true,
				write: true,
				def: "#FFFFFF",
			},
			native: {},
		});
		this.setObjectNotExistsAsync("CSS.Default-Theme.Widget.Opacity", {
			type: "state",
			common: {
				name: "Widget-Opacity",
				type: "number",
				role: "inventwo.CSS",
				read: true,
				write: true,
				def: "1",
			},
			native: {},
		});

		//CONTENT

		this.setObjectNotExistsAsync("CSS.Default-Theme.Content.Text-Color", {
			type: "state",
			common: {
				name: "Text-Color",
				type: "string",
				role: "inventwo.CSS",
				read: true,
				write: true,
				def: "#FFFFFF",
			},
			native: {},
		});
		this.setObjectNotExistsAsync("CSS.Default-Theme.Content.Text-Size", {
			type: "state",
			common: {
				name: "Text-Size",
				type: "number",
				role: "inventwo.CSS",
				read: true,
				write: true,
				def: "12",
				unit: "px",
			},
			native: {},
		});
		this.setObjectNotExistsAsync("CSS.Default-Theme.Content.Shadow-Blur", {
			type: "state",
			common: {
				name: "Inside-Shadow-Blur",
				type: "number",
				role: "inventwo.CSS",
				read: true,
				write: true,
				def: "0",
				unit: "px",
			},
			native: {},
		});
		this.setObjectNotExistsAsync("CSS.Default-Theme.Content.Shadow-X", {
			type: "state",
			common: {
				name: "Inside-Shadow-X",
				type: "number",
				role: "inventwo.CSS",
				read: true,
				write: true,
				def: "0",
				unit: "px",
			},
			native: {},
		});
		this.setObjectNotExistsAsync("CSS.Default-Theme.Content.Shadow-Y", {
			type: "state",
			common: {
				name: "Inside-Shadow-Y",
				type: "number",
				role: "inventwo.CSS",
				read: true,
				write: true,
				def: "0",
				unit: "px",
			},
			native: {},
		});
		this.setObjectNotExistsAsync("CSS.Default-Theme.Content.Shadow-Size", {
			type: "state",
			common: {
				name: "Inside-Shadow-Size",
				type: "number",
				role: "inventwo.CSS",
				read: true,
				write: true,
				def: "0",
				unit: "px",
			},
			native: {},
		});
		this.setObjectNotExistsAsync("CSS.Default-Theme.Content.Shadow-Color", {
			type: "state",
			common: {
				name: "Inside-Shadow-Color",
				type: "string",
				role: "inventwo.CSS",
				read: true,
				write: true,
				def: "#111111",
			},
			native: {},
		});
		this.setObjectNotExistsAsync("CSS.Default-Theme.Content.Shadow-Active-Color", {
			type: "state",
			common: {
				name: "Inside-Shadow-Active-Color",
				type: "string",
				role: "inventwo.CSS",
				read: true,
				write: true,
				def: "#111111",
			},
			native: {},
		});
		this.setObjectNotExistsAsync("CSS.Default-Theme.Content.Opacity", {
			type: "state",
			common: {
				name: "Content-Opacity",
				type: "number",
				role: "inventwo.CSS",
				read: true,
				write: true,
				def: "1",
			},
			native: {},
		});

		// BACKGROUND

		this.setObjectNotExistsAsync("CSS.Default-Theme.Background.URL", {
			type: "state",
			common: {
				name: "Background-URL",
				type: "string",
				role: "inventwo.CSS",
				read: true,
				write: true,
				def: "localhost",
			},
			native: {},
		});
		this.setObjectNotExistsAsync("CSS.Default-Theme.Background.Opacity", {
			type: "state",
			common: {
				name: "Background-Opacity",
				type: "string",
				role: "inventwo.CSS",
				read: true,
				write: true,
				def: "1",
			},
			native: {},
		});


		//Function NICHT LÖSCHEN

		for (const [theme, data] of Object.entries(cssData)) {
			for (const [cssName, val] of Object.entries(data)) {
				this.setObjectNotExistsAsync("CSS." + theme + "." + val.dp, {
					type: "state",
					common: {
						name: val.name,
						type: "string",
						role: "inventwo.CSS",
						read: true,
						write: val.write,
						def: val.def,
						unit: val.unit
					},
					native: {},
				});

			}
		}

		// in this template all states changes inside the adapters namespace are subscribed

		//Widget
		this.subscribeStates("CSS.Default-Theme.Widget.Color");
		this.subscribeStates("CSS.Default-Theme.Widget.Active-Color");
		this.subscribeStates("CSS.Default-Theme.Widget.Radius");
		this.subscribeStates("CSS.Default-Theme.Widget.Shadow-Blur");
		this.subscribeStates("CSS.Default-Theme.Widget.Shadow-Size");
		this.subscribeStates("CSS.Default-Theme.Widget.Shadow-Color");
		this.subscribeStates("CSS.Default-Theme.Widget.Shadow-Active-Color");
		this.subscribeStates("CSS.Default-Theme.Widget.Border-Size");
		this.subscribeStates("CSS.Default-Theme.Widget.Border-Color");
		this.subscribeStates("CSS.Default-Theme.Widget.Border-Active-Color");
		this.subscribeStates("CSS.Default-Theme.Widget.Opacity");

		//CONTENT
		this.subscribeStates("CSS.Default-Theme.Content.Text-Color");
		this.subscribeStates("CSS.Default-Theme.Content.Text-Size");
		this.subscribeStates("CSS.Default-Theme.Content.Shadow-Blur");
		this.subscribeStates("CSS.Default-Theme.Content.Shadow-Size");
		this.subscribeStates("CSS.Default-Theme.Content.Shadow-Color");
		this.subscribeStates("CSS.Default-Theme.Content.Shadow-Active-Color");
		this.subscribeStates("CSS.Default-Theme.Content.Opacity");

		//BACKGROUND
		this.subscribeStates("CSS.Default-Theme.Background.URL");
		this.subscribeStates("CSS.Default-Theme.Background.Opacity");

		/*
		setState examples
		you will notice that each setState will cause the stateChange event to fire (because of above subscribeStates cmd)
		*/
		// the variable testVariable is set to true as command (ack=false)
		//this.setStateAsync("testVariable", true);

		// same thing, but the value is flagged "ack"
		// ack should be always set to true if the value is received from or acknowledged from the target system

		// same thing, but the state is deleted after 30s (getState will return null afterwards)
		//this.setStateAsync("testVariable", { val: true, ack: true, expire: 30 });

		// examples for the checkPassword/checkGroup functions
		//let result = this.checkPasswordAsync("admin", "ioBroker");
		//this.log.info("check user admin pw ioBroker: " + result);

		//result = this.checkGroupAsync("admin", "admin");
		//this.log.info("check group user admin group admin: " + result);
	}

	/**
	 * Is called when adapter shuts down - callback has to be called under any circumstances!
	 * @param {() => void} callback
	 */
	onUnload(callback) {
		try {
			this.log.info("cleaned everything up...");
			callback();
		} catch (e) {
			callback();
		}
	}

	/**
	 * Is called if a subscribed object changes
	 * @param {string} id
	 * @param {ioBroker.Object | null | undefined} obj
	 */
	onObjectChange(id, obj) {
		if (obj) {
			// The object was changed
			this.log.info(`object ${id} changed: ${JSON.stringify(obj)}`);
		} else {
			// The object was deleted
			this.log.info(`object ${id} deleted`);
		}
	}

	/**
	 * Is called if a subscribed state changes
	 * @param {string} id
	 * @param {ioBroker.State | null | undefined} state
	 */
	onStateChange(id, state) {
		if (state) {
			// The state was changed
			this.log.info(`state ${id} changed: ${state.val} (ack = ${state.ack})`);

		} else {
			// The state was deleted
			this.log.info(`state ${id} deleted`);
		}
	}

	// /**
	//  * Some message was sent to this instance over message box. Used by email, pushover, text2speech, ...
	//  * Using this method requires "common.message" property to be set to true in io-package.json
	//  * @param {ioBroker.Message} obj
	//  */
	// onMessage(obj) {
	// 	if (typeof obj === "object" && obj.message) {
	// 		if (obj.command === "send") {
	// 			// e.g. send email or pushover or whatever
	// 			this.log.info("send command");

	// 			// Send response in callback if required
	// 			if (obj.callback) this.sendTo(obj.from, obj.command, "Message received", obj.callback);
	// 		}
	// 	}
	// }

}

// @ts-ignore parent is a valid property on module
if (module.parent) {
	// Export the constructor in compact mode
	/**
	 * @param {Partial<ioBroker.AdapterOptions>} [options={}]
	 */
	module.exports = (options) => new visInventwo(options);
} else {
	// otherwise start the instance directly
	new visInventwo();
}
