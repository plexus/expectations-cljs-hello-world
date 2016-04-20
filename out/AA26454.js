goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9223__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9223 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9224__i = 0, G__9224__a = new Array(arguments.length -  0);
while (G__9224__i < G__9224__a.length) {G__9224__a[G__9224__i] = arguments[G__9224__i + 0]; ++G__9224__i;}
  args = new cljs.core.IndexedSeq(G__9224__a,0);
} 
return G__9223__delegate.call(this,args);};
G__9223.cljs$lang$maxFixedArity = 0;
G__9223.cljs$lang$applyTo = (function (arglist__9225){
var args = cljs.core.seq(arglist__9225);
return G__9223__delegate(args);
});
G__9223.cljs$core$IFn$_invoke$arity$variadic = G__9223__delegate;
return G__9223;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9226__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9226 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9227__i = 0, G__9227__a = new Array(arguments.length -  0);
while (G__9227__i < G__9227__a.length) {G__9227__a[G__9227__i] = arguments[G__9227__i + 0]; ++G__9227__i;}
  args = new cljs.core.IndexedSeq(G__9227__a,0);
} 
return G__9226__delegate.call(this,args);};
G__9226.cljs$lang$maxFixedArity = 0;
G__9226.cljs$lang$applyTo = (function (arglist__9228){
var args = cljs.core.seq(arglist__9228);
return G__9226__delegate(args);
});
G__9226.cljs$core$IFn$_invoke$arity$variadic = G__9226__delegate;
return G__9226;
})()
;

return null;
});
