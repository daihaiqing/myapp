// /* baseon : https://github.com/ohomer/koa-nunjucks
//  * @desc 在 原有的基础上，增加对nunjucks 实时修改的功能
//  * @author rambo
//  * @date 2016-06-29 14:50:46
//  */
//
// 'use strict';
//
// var nunjucks = require('nunjucks');
//
// const env = process.env.NODE_ENV;
//
// var render = function(path, opts){
//     var ext = opts.ext || '';
//
//     let nunjucks_env = nunjucks.configure(path, opts);
//
//     // 导出 env 变量
//     module.exports.env = nunjucks_env;
//
//     let add_nunjucks_opts = function(key, fn_name){
//         let cache_obj = opts[key] || {};
//
//         Object.keys(cache_obj).forEach(function(name){
//             nunjucks_env[fn_name](name, cache_obj[name]);
//         });
//     };
//
//     add_nunjucks_opts('filters', 'addFilter');
//     add_nunjucks_opts('globals', 'addGlobal');
//
//     return function*(next){
//         var self = this;
//
//         self.render = function(view, context){
//             return new Promise(function(resolve, reject){
//                 nunjucks.render(view + ext, context, function(err, body){
//                     if (err){
//                         return reject(err);
//                     }
//                     self.body = body;
//                     resolve();
//                 });
//             });
//         };
//
//         yield* next;
//     };
// };
//
// var init = (parent)=>{
//     let is_develoment_env = env === 'development';
//
//     parent.use(
//         render(
//             'views',
//             {
//                 ext     : '.html',
//                 noCache : is_develoment_env,
//                 tags    : {
//                     blockStart    : '<<',
//                     blockEnd      : '>>',
//                     variableStart : '<$',
//                     variableEnd   : '$>',
//                     commentStart  : '<#--',
//                     commentEnd    : '#-->'
//                 },
//                 autoescape       : true,
//                 throwOnUndefined : is_develoment_env,
//                 filters          : {
//                     to_json_string : function(str){
//                         return JSON.stringify(str, null, 2);
//                     },
//                     append_list : function(list, append){
//                         list.push(append);
//
//                         return list;
//                     }
//                 },
//                 globals : require('./render_global')
//             }
//         )
//     );
// };
//
// module.exports.render = render;
//
// module.exports.init = init;
