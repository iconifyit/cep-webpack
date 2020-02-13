
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

import '../../node_modules/@spectrum-css/vars/dist/spectrum-global.css';
import '../../node_modules/@spectrum-css/vars/dist/spectrum-medium.css';
import '../../node_modules/@spectrum-css/vars/dist/spectrum-large.css';
import '../../node_modules/@spectrum-css/vars/dist/spectrum-lightest.css';
import '../../node_modules/@spectrum-css/vars/dist/spectrum-light.css';
import '../../node_modules/@spectrum-css/vars/dist/spectrum-dark.css';
import '../../node_modules/@spectrum-css/vars/dist/spectrum-darkest.css';
import '../../node_modules/@spectrum-css/page/dist/index-vars.css';
import '../../node_modules/@spectrum-css/typography/dist/index-vars.css';
import '../../node_modules/@spectrum-css/icon/dist/index-vars.css';
import '../../node_modules/@spectrum-css/button/dist/index-vars.css';
import './theme/style.css';

import Client from './classes/Client';
import csInterface from './lib/CSInterface/CSInterface';

client = new Client();
