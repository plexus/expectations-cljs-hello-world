// Compiled by ClojureScript 1.8.40 {}
goog.provide('expectations.platform');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string.format');
expectations.platform.ns_name = (function expectations$platform$ns_name(ns){
if((ns instanceof cljs.core.Symbol)){
return ns;
} else {
return null;
}
});
/**
 * @param {...*} var_args
 */
expectations.platform.bound_QMARK_ = (function() { 
var expectations$platform$bound_QMARK___delegate = function (vars){
return cljs.core.every_QMARK_.call(null,(function (p1__9382_SHARP_){
return cljs.core.deref.call(null,p1__9382_SHARP_);
}),vars);
};
var expectations$platform$bound_QMARK_ = function (var_args){
var vars = null;
if (arguments.length > 0) {
var G__9383__i = 0, G__9383__a = new Array(arguments.length -  0);
while (G__9383__i < G__9383__a.length) {G__9383__a[G__9383__i] = arguments[G__9383__i + 0]; ++G__9383__i;}
  vars = new cljs.core.IndexedSeq(G__9383__a,0);
} 
return expectations$platform$bound_QMARK___delegate.call(this,vars);};
expectations$platform$bound_QMARK_.cljs$lang$maxFixedArity = 0;
expectations$platform$bound_QMARK_.cljs$lang$applyTo = (function (arglist__9384){
var vars = cljs.core.seq(arglist__9384);
return expectations$platform$bound_QMARK___delegate(vars);
});
expectations$platform$bound_QMARK_.cljs$core$IFn$_invoke$arity$variadic = expectations$platform$bound_QMARK___delegate;
return expectations$platform$bound_QMARK_;
})()
;
expectations.platform.format = goog.string.format;
expectations.platform.node_QMARK_ = (function expectations$platform$node_QMARK_(){
return cljs.core._EQ_.call(null,typeof(process),"object");
});
expectations.platform.getenv = (function expectations$platform$getenv(var$){
return ((cljs.core.truth_(expectations.platform.node_QMARK_.call(null))?process.env:window)[var$]);
});
expectations.platform.get_message = (function expectations$platform$get_message(e){
return e.message;
});
expectations.platform.nano_time = (function expectations$platform$nano_time(){
if(cljs.core.truth_(expectations.platform.node_QMARK_.call(null))){
return (function (p1__9385_SHARP_){
return ((1.0E9 * p1__9385_SHARP_.call(null,(0))) + p1__9385_SHARP_.call(null,(1)));
}).call(null,cljs.core.js__GT_clj.call(null,process.hrtime()));
} else {
return performance.now();
}
});
expectations.platform.on_windows_QMARK_ = (function expectations$platform$on_windows_QMARK_(){
return cljs.core.re_find.call(null,/[Ww]in/,(cljs.core.truth_(expectations.platform.node_QMARK_.call(null))?process.platform:""));
});
expectations.platform.pprint = cljs.core.println;
expectations.platform.print_stack_trace = (function expectations$platform$print_stack_trace(e){
return cljs.core.println.call(null,e.stack);
});
expectations.platform.iref_types = cljs.core.PersistentHashSet.fromArray([cljs.core.Atom], true);

//# sourceMappingURL=platform.js.map