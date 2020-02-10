/**
 * @author Scott Lewis <scott@atomiclotus.net>
 * @copyright 2018 Scott Lewis
 * @version 1.0.0
 * @url http://github.com/iconifyit
 * @url https://atomiclotus.net
 *
 * ABOUT:
 *
 *    JavaScript class for building CEP Extension flyout menus.
 *
 * NO WARRANTIES:
 *
 *   You are free to use, modify, and distribute this script as you see fit.
 *   No credit is required but would be greatly appreciated.
 *
 *   THIS SCRIPT IS OFFERED AS-IS WITHOUT ANY WARRANTY OR GUARANTEES OF ANY KIND.
 *   YOU USE THIS SCRIPT COMPLETELY AT YOUR OWN RISK AND UNDER NO CIRCUMSTANCES WILL
 *   THE DEVELOPER AND/OR DISTRIBUTOR OF THIS SCRIPT BE HELD LIABLE FOR DAMAGES OF
 *   ANY KIND INCLUDING LOSS OF DATA OR DAMAGE TO HARDWARE OR SOFTWARE. IF YOU DO
 *   NOT AGREE TO THESE TERMS, DO NOT USE THIS SCRIPT.
 */

import csInterface from "../../lib/CSInterface/CSInterface";

class FlyoutMenu {

    /**
     * @constructor
     */
    constructor() {
        this.Menu = {
            state : {},
            items : []
        };
    }

    /**
     * Add a divider item.
     */
    divider() {
        this.Menu.items.push( this.menuDivider() );
    }

    /**
     * Create menu divider.
     * @returns {string}
     */
    menuDivider() {
        return '<MenuItem Label="---" />';
    }

    /**
     * Create a menu item.
     * @param id
     * @param label
     * @param enabled
     * @param checked
     * @returns {string}
     */
    menuItem(id, label, enabled, checked) {

        if (typeof id === 'undefined') {
            throw 'MenuItem must have an id';
        }

        if (typeof label === 'undefined') {
            throw 'MenuItem must have a label';
        }

        if (typeof enabled === 'undefined') {
            enabled = true;
        }

        if (typeof checked === 'unedefined') {
            checked = false;
        }

        return `<MenuItem Id="${id}" Label="${label}" Enabled="${enabled}" Checked="${checked}" />`;
    }

    /**
     * Add a MenuItem
     * @param id
     * @param label
     * @param enabled
     * @param checked
     */
    add(id, label, enabled, checked) {
        this.Menu.items.push(
            this.menuItem(id, label, enabled, checked)
        );
        this.Menu.state[id] = {
            enabled : enabled,
            checked : checked,
            text    : label
        };
    }

    /**
     * Get the Menu state object.
     * @returns {*}
     */
    getState() {
        return this.Menu.state;
    }

    /**
     * Set the menu click handler.
     * @param clickHandler
     */
    setHandler(clickHandler) {
        csInterface.addEventListener(
            'com.adobe.csxs.events.flyoutMenuClicked',
            clickHandler
        );
    }

    /**
     * Coerce menu to string.
     * @returns {*|jQuery}
     */
    toString() {
        const menuItems = this.Menu.items.join('\n');
        return `<Menu>${menuItems}</Menu>`;
    }

    /**
     * Set the context menu.
     */
    build() {
        csInterface.setPanelFlyoutMenu(this.toString());
    }
}

export default FlyoutMenu