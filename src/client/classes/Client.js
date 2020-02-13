
// __webpack_public_path__ = myRuntimePublicPath;

/**
 * @author Scott Lewis <scott@atomiclotus.net>
 * @copyright 2018 Scott Lewis
 * @version 1.0.0
 * @url http://github.com/iconifyit
 * @url https://atomiclotus.net
 *
 * ABOUT:
 *
 *    This script is a very basic boilerplate for Adobe CEP extensions.
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

import FlyoutMenu from './FlyoutMenu/FlyoutMenu';
import {csInterface, SystemPath} from '../lib/CSInterface/CSInterface';
import $ from 'jquery';

class Client {

    constructor() {

        this.checkableMenuItem_isChecked = true;
        this.targetMenuItem_isEnabled    = true;

        this.menu = this.initFlyoutMenu();

        this.kEXT_PATH = csInterface.getSystemPath(SystemPath.EXTENSION);

        console.log(this.menu);
        console.log('Client created');

        this.initFlyoutMenu    = this.initFlyoutMenu.bind(this);
        this.reloadExtension   = this.reloadExtension.bind(this);
        this.flyoutMenuOnClick = this.flyoutMenuOnClick.bind(this);

        try {
            // console.log('createHost()');
            // window.__adobe_cep__.evalScript('var extPath = ' + this.kEXT_PATH + ';', (result) => {
            //     window.__adobe_cep__.evalScript('createHost("' + this.kEXT_PATH + '"); host.test();', (result) => {
            //         console.log(result);
            //     })
            // })
            // window.__adobe_cep__.evalScript('test("OK");', (result) => {
            //     console.log(result);
            // })
        }
        catch(e) { console.error(e) }

        $("#app").html(
            '<p>Welcome to CEP-Webpack. The purpose of this package is ' +
            'to create a foundational module for building CEP extensions ' +
            'based on modern JavaScript. This package does not include any ' +
            'front-end libraries except jQuery. You can use this extension ' +
            'to build React, Vue, or Angular apps but you will need to add ' +
            'those libraries separately. This package is only for getting ' +
            'started with a bundler. You can remove this message in ' +
            '`src/client/classes/Client.js`</p>'
        );
    }

    initFlyoutMenu() {
        const Menu = new FlyoutMenu();
        Menu.add('enabledMenuItem',   'Enabled Menu Item', true, false);
        Menu.add('disabledMenuItem',  'Disabled Menu Item', false, false);
        Menu.divider();
        Menu.add('checkableMenuItem', 'Yo, check it', true, true);
        Menu.add('actionMenuItem',    'Click to toggle the target', true, false);
        Menu.add('targetMenuItem',    'I am the target', true, false);
        Menu.add('reloadExtension',   'Reload Extension', true, false);
        Menu.setHandler((event) => {
            this.flyoutMenuOnClick.call(this, event);
        });
        Menu.build();
        return Menu;
    }

    flyoutMenuOnClick(event) {
        switch (event.data.menuId) {
            case 'checkableMenuItem':
                this.menu.toggleChecked( event.data.menuId );
                break;

            case 'actionMenuItem':
                this.menu.toggleEnabled( event.data.menuId );
                break;

            case 'reloadExtension':
                this.reloadExtension();
                break;

            default:
                break;
        }

        console.log(`${event.data.menuName} clicked`);
    }

    reloadExtension() {
        try {
            window.cep.process.removeAllListeners();
            window.location.href = 'index.html';
        }
        catch (e) {
            window.location.href = 'index.html';
        }
    }
}

export default Client;