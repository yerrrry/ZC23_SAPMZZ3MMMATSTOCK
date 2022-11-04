/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"zc23matstock/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});