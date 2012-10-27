/*
 PureMVC TypeScript by Frederic Saunier <frederic.saunier@puremvc.org>
 PureMVC - Copyright(c) 2006-2012 Futurescale, Inc., Some rights reserved.
 Your reuse is governed by the Creative Commons Attribution 3.0 License
*/

///<reference path='../../../../../../../test/lib/YUITest.d.ts'/>

///<reference path='../../../../../../../src/org/puremvc/typescript/interfaces/INotification.ts'/>

///<reference path='../../../../../../../src/org/puremvc/typescript/patterns/observer/Notification.ts'/>

module puremvc
{
	"use strict";

	import YUITest = module("YUITest");

	/**
	 * @classDescription
	 * A SimpleCommand subclass used by ControllerTest.
	 *
	 * @see puremvc.ControllerTest ControllerTest
	 * @see puremvc.ControllerTestVO ControllerTestVO
	 *
	 * @extends puremvc.SimpleCommand SimpleCommand
	 *
	 * @constructor
	 */
	constructor(){}
	__extends( ControllerTestCommand2, SimpleCommand );

	/**
	 * Fabricate a result by multiplying the input by 2 and adding to the
	 * existing result.
	 *
	 * This tests accumulation effect that would show if the command were
	 * executed more than once.
	 *
	 * @param {Notification} note
	 * 		The note carrying the ControllerTestVO.
	 */
	ControllerTestCommand2.prototype.execute = function( note )
	{
		var vo:ControllerTestVO = note.getBody();

		// Fabricate a result
		vo.result = vo.result+(2 * vo.input);
	}
}