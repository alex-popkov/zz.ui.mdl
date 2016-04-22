/**
 * @fileoverview Base class for UI MDL controls.
 * @license Apache-2.0
 * @author author buntarb@gmail.com (Artem Lytvynov)
 */

goog.provide( 'zz.ui.mdl.views.BaseView' );


goog.require( 'goog.ui.registry' );
goog.require( 'goog.ui.ControlRenderer' );

/**
 * Default renderer for {@link zz.ui.mdl.controllers.BaseControl}s. Extends the superclass to support checkbox states.
 * @constructor
 * @extends {goog.ui.ControlRenderer}
 */
zz.ui.mdl.views.BaseView = function( ){

    zz.ui.mdl.views.BaseView.base( this, 'constructor' );
};
goog.inherits( zz.ui.mdl.views.BaseView, goog.ui.ControlRenderer );
goog.addSingletonGetter( zz.ui.mdl.views.BaseView );

/**
 * @override
 */
zz.ui.mdl.views.BaseView.prototype.createDom = function( ){

    goog.base( this, 'createDom' );
};

/**
 * @override
 */
zz.ui.mdl.views.BaseView.prototype.canDecorate = function( ){

    //TODO: add check of the element
    return true;
};

/**
 * @param {zz.ui.mdl.controllers.BaseControl} control
 * @param {Element} element
 * @override
 */
zz.ui.mdl.views.BaseView.prototype.decorate = function( control, element ){

    // Input element.
    control.setInputElement( control.getDomHelper( ).getElementsByTagNameAndClass(

        goog.dom.TagName.INPUT,
        undefined,
        element )[ 0 ]
    );
    return goog.base( this, 'decorate', control, element );
};

/**
 * Updates the appearance of the control in response to a state change.
 * @param {zz.ui.mdl.controllers.BaseControl} control Control instance to update.
 * @param {goog.ui.Component.State} state State to enable or disable.
 * @param {boolean} enable Whether the control is entering or exiting the state.
 * @override
 */
zz.ui.mdl.views.BaseView.prototype.setState = function( control, state, enable ){

    var element = control.getElement( );
    if( element ){

        // TODO (user): Here we can/must add necessary classes for state.
        this.updateAriaState(element, state, enable);
    }
};

/**
 * Returns the element within the component's DOM that should receive keyboard focus (null if none).  The default
 * implementation returns the control's root element.
 * @param {zz.ui.mdl.controllers.BaseControl} control Control whose key event target is to be returned.
 * @return {Element} The key event target.
 * @override
 */
zz.ui.mdl.views.BaseView.prototype.getKeyEventTarget = function( control ){

    return control.getInputElement( );
};

/**
 * Set control input element value.
 * @param {zz.ui.mdl.controllers.BaseControl} control
 * @param {*} value
 */
zz.ui.mdl.views.BaseView.prototype.setValue = function( control, value ){

    control.getInputElement( ).value = value;
};

/**
 * Return control input element value.
 * @param {zz.ui.mdl.controllers.BaseControl} control
 * @returns {*} value
 */
zz.ui.mdl.views.BaseView.prototype.getValue = function( control ){

    return control.getInputElement( ).value;
};
