
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

import FlyoutMenu from "./FlyoutMenu/FlyoutMenu";

class Client {
    constructor() {
        this.checkableMenuItem_isChecked = true;
        this.targetMenuItem_isEnabled    = true;
        this.initFlyoutMenu();
    }

    initFlyoutMenu() {
        const Menu = new FlyoutMenu();
        Menu.add('enabledMenuItem',   'Enabled Menu Item', true, false, false);
        Menu.add('disabledMenuItem',  'Disabled Menu Item', false, false, false);
        Menu.divider();
        Menu.add('checkableMenuItem', 'Yo, check it', true, true, true);
        Menu.add('actionMenuItem',    'Click to toggle the target', true, false, false);
        Menu.add('targetMenuItem',    'I am the target', true, false, false);
        Menu.add('reloadExtension',   'Reload Extension', true, false, false);
        Menu.setHandler(this.flyoutMenuClickedHandler);
        Menu.build();
    }

    flyoutMenuClickedHandler(event) {
        switch (event.data.menuId) {
            case "checkableMenuItem":
                this.checkableMenuItem_isChecked = ! this.checkableMenuItem_isChecked;
                csInterface.updatePanelMenuItem("Yo, check it", true, this.checkableMenuItem_isChecked);
                break;

            case "actionMenuItem":
                this.targetMenuItem_isEnabled = ! this.targetMenuItem_isEnabled;
                csInterface.updatePanelMenuItem("I am the target", this.targetMenuItem_isEnabled, false);
                break;

            case "reloadExtension":
                this.reload();
                break;

            default:
                break;
        }

        console.log(`${event.data.menuName} clicked`);
    }

    reload() {
        try {
            window.cep.process.removeAllListeners();
            window.location.href = "index.html";
        }
        catch (e) {
            window.location.href = "index.html";
        }
    }
}

export default Client;