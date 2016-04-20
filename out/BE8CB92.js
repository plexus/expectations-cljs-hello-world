goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8155__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8155 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8156__i = 0, G__8156__a = new Array(arguments.length -  0);
while (G__8156__i < G__8156__a.length) {G__8156__a[G__8156__i] = arguments[G__8156__i + 0]; ++G__8156__i;}
  args = new cljs.core.IndexedSeq(G__8156__a,0);
} 
return G__8155__delegate.call(this,args);};
G__8155.cljs$lang$maxFixedArity = 0;
G__8155.cljs$lang$applyTo = (function (arglist__8157){
var args = cljs.core.seq(arglist__8157);
return G__8155__delegate(args);
});
G__8155.cljs$core$IFn$_invoke$arity$variadic = G__8155__delegate;
return G__8155;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8158__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8158 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8159__i = 0, G__8159__a = new Array(arguments.length -  0);
while (G__8159__i < G__8159__a.length) {G__8159__a[G__8159__i] = arguments[G__8159__i + 0]; ++G__8159__i;}
  args = new cljs.core.IndexedSeq(G__8159__a,0);
} 
return G__8158__delegate.call(this,args);};
G__8158.cljs$lang$maxFixedArity = 0;
G__8158.cljs$lang$applyTo = (function (arglist__8160){
var args = cljs.core.seq(arglist__8160);
return G__8158__delegate(args);
});
G__8158.cljs$core$IFn$_invoke$arity$variadic = G__8158__delegate;
return G__8158;
})()
;

return null;
});
