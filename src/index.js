import factory from "./factory";

factory();




// (
//     function(root, factory) {
//         if (typeof define === 'function' && define.amd) {
//             define(
//                 [ 'dustjs-linkedin', 'moment' ],
//                 factory
//             );
//         } else if (typeof exports === 'object') {
//             module.exports = factory(
//                 require('dustjs-linkedin'),
//                 require('moment')
//             );
//         } else {
//             factory( root.dust, root.moment );
//         }
//     }( this, _factory )
// );
