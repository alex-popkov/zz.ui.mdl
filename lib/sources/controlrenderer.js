// Copyright 2007 The Closure Library Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Base class for UI MDL controls.
 * @author buntarb@gmail.com (Artem Lytvynov)
 */

/**********************************************************************************************************************
 * Provide section                                                                                                    *
 **********************************************************************************************************************/

goog.provide( 'zz.ui.mdl.ControlRenderer' );

/**********************************************************************************************************************
 * Dependencies section                                                                                               *
 **********************************************************************************************************************/

goog.require( 'goog.ui.registry' );
goog.require( 'goog.ui.ControlRenderer' );

/**********************************************************************************************************************
 * Renderer definition section                                                                                        *
 **********************************************************************************************************************/

/**
 * Default renderer for {@link zz.ui.mdl.Control}s. Extends the superclass to support checkbox states.
 * @constructor
 * @extends {goog.ui.ControlRenderer}
 */
zz.ui.mdl.ControlRenderer = function( ){

	zz.ui.mdl.ControlRenderer.base( this, 'constructor' );
};
goog.inherits( zz.ui.mdl.ControlRenderer, goog.ui.ControlRenderer );
goog.addSingletonGetter( zz.ui.mdl.ControlRenderer );

/**********************************************************************************************************************
 * Life cycle methods                                                                                                 *
 **********************************************************************************************************************/

/**
 * @override
 */
zz.ui.mdl.ControlRenderer.prototype.createDom = function( ){

	goog.base( this, 'createDom' );
};

/**
 * @override
 */
zz.ui.mdl.ControlRenderer.prototype.canDecorate = function( ){

	//TODO: add check of the element
	return true;
};

/**
 * @param {zz.ui.mdl.Control} control
 * @param {Element} element
 * @override
 */
zz.ui.mdl.ControlRenderer.prototype.decorate = function( control, element ){

	// Input element.
	control.setInputElement( control.getDomHelper( ).getElementsByTagNameAndClass(

		goog.dom.TagName.INPUT,
		undefined,
		element )[ 0 ]
	);
	return goog.base( this, 'decorate', control, element );
};

/**********************************************************************************************************************
 * Helpers methods                                                                                                    *
 **********************************************************************************************************************/

/**
 * Updates the appearance of the control in response to a state change.
 * @param {zz.ui.mdl.Control} control Control instance to update.
 * @param {goog.ui.Component.State} state State to enable or disable.
 * @param {boolean} enable Whether the control is entering or exiting the state.
 * @override
 */
zz.ui.mdl.ControlRenderer.prototype.setState = function( control, state, enable ){

	var element = control.getElement( );
	if( element ){

		// TODO (user): Here we can/must add necessary classes for state.
		this.updateAriaState(element, state, enable);
	}
};

/**
 * Returns the element within the component's DOM that should receive keyboard focus (null if none).  The default
 * implementation returns the control's root element.
 * @param {zz.ui.mdl.Control} control Control whose key event target is to be returned.
 * @return {Element} The key event target.
 * @override
 */
zz.ui.mdl.ControlRenderer.prototype.getKeyEventTarget = function( control ){

	return control.getInputElement( );
};

/**
 * Set control input element value.
 * @param {zz.ui.mdl.Control} control
 * @param {*} value
 */
zz.ui.mdl.ControlRenderer.prototype.setValue = function( control, value ){

	control.getInputElement( ).value = value;
};

/**
 * Return control input element value.
 * @param {zz.ui.mdl.Control} control
 * @returns {*} value
 */
zz.ui.mdl.ControlRenderer.prototype.getValue = function( control ){

	return control.getInputElement( ).value;
};