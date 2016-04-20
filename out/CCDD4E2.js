goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8145__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8145 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8146__i = 0, G__8146__a = new Array(arguments.length -  0);
while (G__8146__i < G__8146__a.length) {G__8146__a[G__8146__i] = arguments[G__8146__i + 0]; ++G__8146__i;}
  args = new cljs.core.IndexedSeq(G__8146__a,0);
} 
return G__8145__delegate.call(this,args);};
G__8145.cljs$lang$maxFixedArity = 0;
G__8145.cljs$lang$applyTo = (function (arglist__8147){
var args = cljs.core.seq(arglist__8147);
return G__8145__delegate(args);
});
G__8145.cljs$core$IFn$_invoke$arity$variadic = G__8145__delegate;
return G__8145;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8148__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8148 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8149__i = 0, G__8149__a = new Array(arguments.length -  0);
while (G__8149__i < G__8149__a.length) {G__8149__a[G__8149__i] = arguments[G__8149__i + 0]; ++G__8149__i;}
  args = new cljs.core.IndexedSeq(G__8149__a,0);
} 
return G__8148__delegate.call(this,args);};
G__8148.cljs$lang$maxFixedArity = 0;
G__8148.cljs$lang$applyTo = (function (arglist__8150){
var args = cljs.core.seq(arglist__8150);
return G__8148__delegate(args);
});
G__8148.cljs$core$IFn$_invoke$arity$variadic = G__8148__delegate;
return G__8148;
})()
;

return null;
});
