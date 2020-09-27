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
				//WIDGET DARK
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
					write: false,
					def: "#455618",
					unit: ""
				},
				{
					dp: "Widget.Radius",
					name: "Widget-Radius",
					def: "12px 0px 12px 0px",
					write: false,
					unit: ""
				},
				{
					dp: "Widget.Shadow-Blur",
					name: "Widget-Shadow-Blur",
					write: false,
					def: "2",
					unit: "px"
				},
				{
					dp: "Widget.Shadow-X",
					name: "Widget-Shadow-X",
					write: false,
					def: "2",
					unit: "px"
				},
				{
					dp: "Widget.Shadow-Y",
					name: "Widget-Shadow-Y",
					write: false,
					def: "2",
					unit: "px"
				},
				{
					dp: "Widget.Shadow-Size",
					name: "Widget-Shadow-Size",
					write: false,
					def: "1",
					unit: "px"
				},
				{
					dp: "Widget.Shadow-Color",
					name: "Widget-Shadow-Color",
					write: false,
					def: "#111111",
					unit: ""
				},
				{
					dp: "Widget.Shadow-Active-Color",
					name: "Widget-Shadow-Active-Color",
					write: false,
					def: "#111111",
					unit: ""
				},
				{
					dp: "Widget.Border-Size",
					name: "Widget-Border-Size",
					write: false,
					def: "0",
					unit: "px"
				},
				{
					dp: "Widget.Border-Color",
					name: "Widget-Border-Color",
					write: false,
					def: "#FFFFFF",
					unit: ""
				},
				{
					dp: "Widget.Border-Active-Color",
					name: "Widget-Border-Active-Color",
					write: false,
					def: "#FFFFFF",
					unit: ""
				},
				{
					dp: "Widget.Opacity",
					name: "Widget-Opacity",
					write: false,
					def: "1",
					unit: ""
				},
				// CONTENT DARK
				{
					dp: "Content.Text-Color",
					name: "Content-Text-Color",
					write: false,
					def: "#FFFFFF",
					unit: ""
				},
				{
					dp: "Content.Text-Size",
					name: "Content-Text-Size",
					write: false,
					def: "12",
					unit: "px"
				},
				{
					dp: "Content.Shadow-Blur",
					name: "Content-Shadow-Blur",
					write: false,
					def: "0",
					unit: "px"
				},
				{
					dp: "Content.Shadow-X",
					name: "Content-Shadow-X",
					write: false,
					def: "0",
					unit: "px"
				},
				{
					dp: "Content.Shadow-Y",
					name: "Content-Shadow-Y",
					write: false,
					def: "0",
					unit: "px"
				},
				{
					dp: "Content.Shadow-Size",
					name: "Content-Shadow-Size",
					write: false,
					def: "0",
					unit: "px"
				},
				{
					dp: "Content.Shadow-Color",
					name: "Content-Shadow-Color",
					write: false,
					def: "#111111",
					unit: ""
				},
				{
					dp: "Content.Shadow-Active-Color",
					name: "Content-Shadow-Active-Color",
					write: false,
					def: "#111111",
					unit: ""
				},
				{
					dp: "Content.Opacity",
					name: "Content-Opacity",
					write: false,
					def: "1",
					unit: ""
				},
				// BACKGROUND DARK
				{
					dp: "Background.URL",
					name: "Background-URL",
					write: false,
					def: "localhost",
					unit: ""
				},
				{
					dp: "Background.Opacity",
					name: "Background-Opacity",
					write: false,
					def: "1",
					unit: ""
				},
			],
			"Light-Theme": [

			],
			"Custom-Theme": [

			]
		};

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
