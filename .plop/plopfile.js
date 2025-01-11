// const { component } = require('./settings');
//
// // Add here more generators
// module.exports = function (plop) {
//   plop.setGenerator('component', component);
// };
import { component } from './settings/component/index.js';

// Add here more generators
export default function (plop) {
  plop.setGenerator('component', component);
}
