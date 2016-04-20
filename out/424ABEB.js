goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9194__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9194 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9195__i = 0, G__9195__a = new Array(arguments.length -  0);
while (G__9195__i < G__9195__a.length) {G__9195__a[G__9195__i] = arguments[G__9195__i + 0]; ++G__9195__i;}
  args = new cljs.core.IndexedSeq(G__9195__a,0);
} 
return G__9194__delegate.call(this,args);};
G__9194.cljs$lang$maxFixedArity = 0;
G__9194.cljs$lang$applyTo = (function (arglist__9196){
var args = cljs.core.seq(arglist__9196);
return G__9194__delegate(args);
});
G__9194.cljs$core$IFn$_invoke$arity$variadic = G__9194__delegate;
return G__9194;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9197__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9197 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9198__i = 0, G__9198__a = new Array(arguments.length -  0);
while (G__9198__i < G__9198__a.length) {G__9198__a[G__9198__i] = arguments[G__9198__i + 0]; ++G__9198__i;}
  args = new cljs.core.IndexedSeq(G__9198__a,0);
} 
return G__9197__delegate.call(this,args);};
G__9197.cljs$lang$maxFixedArity = 0;
G__9197.cljs$lang$applyTo = (function (arglist__9199){
var args = cljs.core.seq(arglist__9199);
return G__9197__delegate(args);
});
G__9197.cljs$core$IFn$_invoke$arity$variadic = G__9197__delegate;
return G__9197;
})()
;

return null;
});
