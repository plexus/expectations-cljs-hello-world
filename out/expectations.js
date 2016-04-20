// Compiled by ClojureScript 1.8.40 {}
goog.provide('expectations');
goog.require('cljs.core');
goog.require('clojure.data');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('expectations.platform');
expectations.no_op = (function expectations$no_op(var_args){
var args__7090__auto__ = [];
var len__7083__auto___9409 = arguments.length;
var i__7084__auto___9410 = (0);
while(true){
if((i__7084__auto___9410 < len__7083__auto___9409)){
args__7090__auto__.push((arguments[i__7084__auto___9410]));

var G__9411 = (i__7084__auto___9410 + (1));
i__7084__auto___9410 = G__9411;
continue;
} else {
}
break;
}

var argseq__7091__auto__ = ((((0) < args__7090__auto__.length))?(new cljs.core.IndexedSeq(args__7090__auto__.slice((0)),(0),null)):null);
return expectations.no_op.cljs$core$IFn$_invoke$arity$variadic(argseq__7091__auto__);
});

expectations.no_op.cljs$core$IFn$_invoke$arity$variadic = (function (_){
return null;
});

expectations.no_op.cljs$lang$maxFixedArity = (0);

expectations.no_op.cljs$lang$applyTo = (function (seq9408){
return expectations.no_op.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9408));
});
expectations.in$ = (function expectations$in(n){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("expectations","in","expectations/in",-1616294280),n,new cljs.core.Keyword("expectations","in-flag","expectations/in-flag",-130698686),true], null);
});
expectations.run_tests_on_shutdown = cljs.core.atom.call(null,true);
expectations.warn_on_iref_updates_boolean = cljs.core.atom.call(null,false);
expectations._STAR_test_name_STAR_ = null;
expectations._STAR_test_meta_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
expectations._STAR_test_var_STAR_ = null;
expectations._STAR_prune_stacktrace_STAR_ = true;
expectations._STAR_report_counters_STAR_ = null;
expectations.initial_report_counters = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"test","test",577538877),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0),new cljs.core.Keyword(null,"run-time","run-time",-1231674133),(0)], null);
expectations.reminder = null;
expectations.show_raw_choice = (function expectations$show_raw_choice(){
var temp__4655__auto__ = expectations.platform.getenv.call(null,"EXPECTATIONS_SHOW_RAW");
if(cljs.core.truth_(temp__4655__auto__)){
var choice = temp__4655__auto__;
return cljs.core._EQ_.call(null,"TRUE",clojure.string.upper_case.call(null,choice));
} else {
return true;
}
});
expectations.colorize_choice = (function expectations$colorize_choice(){
return clojure.string.upper_case.call(null,(function (){var or__6014__auto__ = expectations.platform.getenv.call(null,"EXPECTATIONS_COLORIZE");
if(cljs.core.truth_(or__6014__auto__)){
return or__6014__auto__;
} else {
return [cljs.core.str(cljs.core.not.call(null,expectations.platform.on_windows_QMARK_.call(null)))].join('');
}
})());
});
expectations.ansi_colors = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"reset","reset",-800929946),"[0m",new cljs.core.Keyword(null,"red","red",-969428204),"[31m",new cljs.core.Keyword(null,"blue","blue",-622100620),"[34m",new cljs.core.Keyword(null,"yellow","yellow",-881035449),"[33m",new cljs.core.Keyword(null,"cyan","cyan",1118839274),"[36m",new cljs.core.Keyword(null,"green","green",-945526839),"[32m",new cljs.core.Keyword(null,"magenta","magenta",1687937081),"[35m"], null);
expectations.ansi = (function expectations$ansi(code){
return [cljs.core.str("\u001B"),cljs.core.str(cljs.core.get.call(null,expectations.ansi_colors,code,new cljs.core.Keyword(null,"reset","reset",-800929946).cljs$core$IFn$_invoke$arity$1(expectations.ansi_colors)))].join('');
});
expectations.color = (function expectations$color(var_args){
var args__7090__auto__ = [];
var len__7083__auto___9414 = arguments.length;
var i__7084__auto___9415 = (0);
while(true){
if((i__7084__auto___9415 < len__7083__auto___9414)){
args__7090__auto__.push((arguments[i__7084__auto___9415]));

var G__9416 = (i__7084__auto___9415 + (1));
i__7084__auto___9415 = G__9416;
continue;
} else {
}
break;
}

var argseq__7091__auto__ = ((((1) < args__7090__auto__.length))?(new cljs.core.IndexedSeq(args__7090__auto__.slice((1)),(0),null)):null);
return expectations.color.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7091__auto__);
});

expectations.color.cljs$core$IFn$_invoke$arity$variadic = (function (code,s){
return [cljs.core.str(expectations.ansi.call(null,code)),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,s)),cljs.core.str(expectations.ansi.call(null,new cljs.core.Keyword(null,"reset","reset",-800929946)))].join('');
});

expectations.color.cljs$lang$maxFixedArity = (1);

expectations.color.cljs$lang$applyTo = (function (seq9412){
var G__9413 = cljs.core.first.call(null,seq9412);
var seq9412__$1 = cljs.core.next.call(null,seq9412);
return expectations.color.cljs$core$IFn$_invoke$arity$variadic(G__9413,seq9412__$1);
});
expectations.colorize_filename = (function expectations$colorize_filename(s){
var pred__9420 = cljs.core._EQ_;
var expr__9421 = expectations.colorize_choice.call(null);
if(cljs.core.truth_(pred__9420.call(null,"TRUE",expr__9421))){
return expectations.color.call(null,new cljs.core.Keyword(null,"magenta","magenta",1687937081),s);
} else {
return s;
}
});
expectations.colorize_raw = (function expectations$colorize_raw(s){
var pred__9426 = cljs.core._EQ_;
var expr__9427 = expectations.colorize_choice.call(null);
if(cljs.core.truth_(pred__9426.call(null,"TRUE",expr__9427))){
return expectations.color.call(null,new cljs.core.Keyword(null,"cyan","cyan",1118839274),s);
} else {
return s;
}
});
expectations.colorize_results = (function expectations$colorize_results(pred,s){
var pred__9432 = cljs.core._EQ_;
var expr__9433 = expectations.colorize_choice.call(null);
if(cljs.core.truth_(pred__9432.call(null,"TRUE",expr__9433))){
if(cljs.core.truth_(pred.call(null))){
return expectations.color.call(null,new cljs.core.Keyword(null,"green","green",-945526839),s);
} else {
return expectations.color.call(null,new cljs.core.Keyword(null,"red","red",-969428204),s);
}
} else {
return s;
}
});
expectations.colorize_warn = (function expectations$colorize_warn(s){
var pred__9438 = cljs.core._EQ_;
var expr__9439 = expectations.colorize_choice.call(null);
if(cljs.core.truth_(pred__9438.call(null,"TRUE",expr__9439))){
return expectations.color.call(null,new cljs.core.Keyword(null,"yellow","yellow",-881035449),s);
} else {
return s;
}
});
expectations.string_join = (function expectations$string_join(s,coll){
return clojure.string.join.call(null,s,cljs.core.remove.call(null,cljs.core.nil_QMARK_,coll));
});
expectations.inc_counter_BANG_ = (function expectations$inc_counter_BANG_(counters,name){
return cljs.core.assoc.call(null,counters,name,((function (){var or__6014__auto__ = counters.call(null,name);
if(cljs.core.truth_(or__6014__auto__)){
return or__6014__auto__;
} else {
return (0);
}
})() + (1)));
});
expectations.inc_report_counter = (function expectations$inc_report_counter(name){
if(cljs.core.truth_(expectations._STAR_report_counters_STAR_)){
return cljs.core.swap_BANG_.call(null,expectations._STAR_report_counters_STAR_,expectations.inc_counter_BANG_,name);
} else {
return null;
}
});
expectations.test_name = (function expectations$test_name(p__9441){
var map__9444 = p__9441;
var map__9444__$1 = ((((!((map__9444 == null)))?((((map__9444.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9444.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9444):map__9444);
var line = cljs.core.get.call(null,map__9444__$1,new cljs.core.Keyword(null,"line","line",212345235));
var ns = cljs.core.get.call(null,map__9444__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return [cljs.core.str(ns),cljs.core.str(":"),cljs.core.str(line)].join('');
});
expectations.test_file = (function expectations$test_file(p__9446){
var map__9449 = p__9446;
var map__9449__$1 = ((((!((map__9449 == null)))?((((map__9449.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9449.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9449):map__9449);
var file = cljs.core.get.call(null,map__9449__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__9449__$1,new cljs.core.Keyword(null,"line","line",212345235));
return expectations.colorize_filename.call(null,[cljs.core.str(cljs.core.last.call(null,cljs.core.re_seq.call(null,/[0-9A-Za-z_\.]+/,file))),cljs.core.str(":"),cljs.core.str(line)].join(''));
});
expectations.raw_str = (function expectations$raw_str(p__9451){
var vec__9455 = p__9451;
var e = cljs.core.nth.call(null,vec__9455,(0),null);
var a = cljs.core.nth.call(null,vec__9455,(1),null);
var sb__6999__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_9456_9458 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_9457_9459 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_9456_9458,_STAR_print_fn_STAR_9457_9459,sb__6999__auto__,vec__9455,e,a){
return (function (x__7000__auto__){
return sb__6999__auto__.append(x__7000__auto__);
});})(_STAR_print_newline_STAR_9456_9458,_STAR_print_fn_STAR_9457_9459,sb__6999__auto__,vec__9455,e,a))
;

try{expectations.platform.pprint.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"expect","expect",470404175,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,e),cljs.core._conj.call(null,cljs.core.List.EMPTY,a)))));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_9457_9459;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_9456_9458;
}
return [cljs.core.str(sb__6999__auto__)].join('');
});
expectations.pp_str = (function expectations$pp_str(e){
return clojure.string.trim.call(null,(function (){var sb__6999__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_9462_9464 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_9463_9465 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_9462_9464,_STAR_print_fn_STAR_9463_9465,sb__6999__auto__){
return (function (x__7000__auto__){
return sb__6999__auto__.append(x__7000__auto__);
});})(_STAR_print_newline_STAR_9462_9464,_STAR_print_fn_STAR_9463_9465,sb__6999__auto__))
;

try{expectations.platform.pprint.call(null,e);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_9463_9465;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_9462_9464;
}
return [cljs.core.str(sb__6999__auto__)].join('');
})());
});
expectations.fail = (function expectations$fail(test_name,test_meta,msg){
cljs.core.println.call(null,[cljs.core.str("\nfailure in ("),cljs.core.str(expectations.test_file.call(null,test_meta)),cljs.core.str(") : "),cljs.core.str(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(test_meta))].join(''));

return cljs.core.println.call(null,msg);
});
expectations.summary = (function expectations$summary(msg){
return cljs.core.println.call(null,msg);
});
expectations.started = (function expectations$started(test_name,test_meta){
return null;
});
expectations.finished = (function expectations$finished(test_name,test_meta){
return null;
});
expectations.ns_finished = (function expectations$ns_finished(a_ns){
return null;
});
expectations.expectation_finished = (function expectations$expectation_finished(a_var){
return null;
});
expectations.ignored_fns = (function expectations$ignored_fns(p__9466){
var map__9469 = p__9466;
var map__9469__$1 = ((((!((map__9469 == null)))?((((map__9469.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9469.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9469):map__9469);
var className = cljs.core.get.call(null,map__9469__$1,new cljs.core.Keyword(null,"className","className",-1983287057));
var fileName = cljs.core.get.call(null,map__9469__$1,new cljs.core.Keyword(null,"fileName","fileName",1063478601));
if(cljs.core.truth_(expectations._STAR_prune_stacktrace_STAR_)){
var or__6014__auto__ = cljs.core._EQ_.call(null,fileName,"expectations.clj");
if(or__6014__auto__){
return or__6014__auto__;
} else {
var or__6014__auto____$1 = cljs.core._EQ_.call(null,fileName,"expectations_options.clj");
if(or__6014__auto____$1){
return or__6014__auto____$1;
} else {
var or__6014__auto____$2 = cljs.core._EQ_.call(null,fileName,"NO_SOURCE_FILE");
if(or__6014__auto____$2){
return or__6014__auto____$2;
} else {
var or__6014__auto____$3 = cljs.core._EQ_.call(null,fileName,"interruptible_eval.clj");
if(or__6014__auto____$3){
return or__6014__auto____$3;
} else {
var or__6014__auto____$4 = cljs.core.re_seq.call(null,/clojure\.lang/,className);
if(cljs.core.truth_(or__6014__auto____$4)){
return or__6014__auto____$4;
} else {
var or__6014__auto____$5 = cljs.core.re_seq.call(null,/clojure\.core/,className);
if(cljs.core.truth_(or__6014__auto____$5)){
return or__6014__auto____$5;
} else {
var or__6014__auto____$6 = cljs.core.re_seq.call(null,/clojure\.main/,className);
if(cljs.core.truth_(or__6014__auto____$6)){
return or__6014__auto____$6;
} else {
var or__6014__auto____$7 = cljs.core.re_seq.call(null,/java\.lang/,className);
if(cljs.core.truth_(or__6014__auto____$7)){
return or__6014__auto____$7;
} else {
return cljs.core.re_seq.call(null,/java\.util\.concurrent\.ThreadPoolExecutor\$Worker/,className);
}
}
}
}
}
}
}
}
} else {
return null;
}
});
expectations.stackline__GT_str = (function expectations$stackline__GT_str(p__9471){
var map__9474 = p__9471;
var map__9474__$1 = ((((!((map__9474 == null)))?((((map__9474.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9474.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9474):map__9474);
var className = cljs.core.get.call(null,map__9474__$1,new cljs.core.Keyword(null,"className","className",-1983287057));
var methodName = cljs.core.get.call(null,map__9474__$1,new cljs.core.Keyword(null,"methodName","methodName",-2055958885));
var fileName = cljs.core.get.call(null,map__9474__$1,new cljs.core.Keyword(null,"fileName","fileName",1063478601));
var lineNumber = cljs.core.get.call(null,map__9474__$1,new cljs.core.Keyword(null,"lineNumber","lineNumber",974255001));
if(cljs.core._EQ_.call(null,methodName,"invoke")){
return [cljs.core.str("           on ("),cljs.core.str(fileName),cljs.core.str(":"),cljs.core.str(lineNumber),cljs.core.str(")")].join('');
} else {
return [cljs.core.str("           "),cljs.core.str(className),cljs.core.str("$"),cljs.core.str(methodName),cljs.core.str(" ("),cljs.core.str(fileName),cljs.core.str(":"),cljs.core.str(lineNumber),cljs.core.str(")")].join('');
}
});
expectations.pruned_stack_trace = (function expectations$pruned_stack_trace(t){
return t.stack;
});
expectations.__GT_failure_message = (function expectations$__GT_failure_message(p__9477){
var map__9482 = p__9477;
var map__9482__$1 = ((((!((map__9482 == null)))?((((map__9482.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9482.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9482):map__9482);
var raw = cljs.core.get.call(null,map__9482__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
var ref_data = cljs.core.get.call(null,map__9482__$1,new cljs.core.Keyword(null,"ref-data","ref-data",743306603));
var result = cljs.core.get.call(null,map__9482__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var expected_message = cljs.core.get.call(null,map__9482__$1,new cljs.core.Keyword(null,"expected-message","expected-message",-615750006));
var actual_message = cljs.core.get.call(null,map__9482__$1,new cljs.core.Keyword(null,"actual-message","actual-message",1010600886));
var message = cljs.core.get.call(null,map__9482__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var list = cljs.core.get.call(null,map__9482__$1,new cljs.core.Keyword(null,"list","list",765357683));
var show_raw = cljs.core.get.call(null,map__9482__$1,new cljs.core.Keyword(null,"show-raw","show-raw",312153310));
return expectations.string_join.call(null,"\n",new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(expectations.reminder)?expectations.colorize_warn.call(null,[cljs.core.str("     ***** "),cljs.core.str(clojure.string.upper_case.call(null,expectations.reminder)),cljs.core.str(" *****")].join('')):null),(cljs.core.truth_(raw)?(cljs.core.truth_((function (){var or__6014__auto__ = show_raw;
if(cljs.core.truth_(or__6014__auto__)){
return or__6014__auto__;
} else {
return expectations.show_raw_choice.call(null);
}
})())?expectations.colorize_raw.call(null,expectations.raw_str.call(null,raw)):null):null),(function (){var temp__4657__auto__ = ref_data;
if(cljs.core.truth_(temp__4657__auto__)){
var vec__9484 = temp__4657__auto__;
var n1 = cljs.core.nth.call(null,vec__9484,(0),null);
var v1 = cljs.core.nth.call(null,vec__9484,(1),null);
var _ = cljs.core.nthnext.call(null,vec__9484,(2));
return expectations.platform.format.call(null,"             locals %s: %s",n1,cljs.core.pr_str.call(null,v1));
} else {
return null;
}
})(),(function (){var temp__4657__auto__ = ref_data;
if(cljs.core.truth_(temp__4657__auto__)){
var vec__9485 = temp__4657__auto__;
var _ = cljs.core.nth.call(null,vec__9485,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__9485,(1),null);
var the_rest = cljs.core.nthnext.call(null,vec__9485,(2));
if(cljs.core.truth_(the_rest)){
return expectations.string_join.call(null,"\n",cljs.core.map.call(null,((function (vec__9485,_,___$1,the_rest,temp__4657__auto__,map__9482,map__9482__$1,raw,ref_data,result,expected_message,actual_message,message,list,show_raw){
return (function (p1__9476_SHARP_){
return expectations.platform.format.call(null,"                    %s: %s",cljs.core.first.call(null,p1__9476_SHARP_),cljs.core.pr_str.call(null,cljs.core.second.call(null,p1__9476_SHARP_)));
});})(vec__9485,_,___$1,the_rest,temp__4657__auto__,map__9482,map__9482__$1,raw,ref_data,result,expected_message,actual_message,message,list,show_raw))
,cljs.core.partition.call(null,(2),the_rest)));
} else {
return null;
}
} else {
return null;
}
})(),(cljs.core.truth_(result)?[cljs.core.str("           "),cljs.core.str(expectations.string_join.call(null," ",result))].join(''):null),(cljs.core.truth_((function (){var and__6002__auto__ = result;
if(cljs.core.truth_(and__6002__auto__)){
var or__6014__auto__ = expected_message;
if(cljs.core.truth_(or__6014__auto__)){
return or__6014__auto__;
} else {
var or__6014__auto____$1 = actual_message;
if(cljs.core.truth_(or__6014__auto____$1)){
return or__6014__auto____$1;
} else {
return message;
}
}
} else {
return and__6002__auto__;
}
})())?"":null),(cljs.core.truth_(expected_message)?[cljs.core.str("           "),cljs.core.str(expected_message)].join(''):null),(cljs.core.truth_(actual_message)?[cljs.core.str("           "),cljs.core.str(actual_message)].join(''):null),(cljs.core.truth_(message)?[cljs.core.str("           "),cljs.core.str(message)].join(''):null),(cljs.core.truth_(list)?[cljs.core.str("\n"),cljs.core.str(expectations.string_join.call(null,"\n\n",cljs.core.map.call(null,expectations$__GT_failure_message,list)))].join(''):null)], null));
});
if(typeof expectations.report !== 'undefined'){
} else {
expectations.report = (function (){var method_table__6938__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__6939__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__6940__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__6941__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__6942__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"expectations","report"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__6942__auto__,method_table__6938__auto__,prefer_table__6939__auto__,method_cache__6940__auto__,cached_hierarchy__6941__auto__));
})();
}
cljs.core._add_method.call(null,expectations.report,new cljs.core.Keyword(null,"pass","pass",1574159993),(function (m){
cljs.core.alter_meta_BANG_.call(null,expectations._STAR_test_var_STAR_,cljs.core.assoc,new cljs.core.Keyword("expectations","run","expectations/run",-1889289556),true,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"success","success",1890645906),"",new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(expectations._STAR_test_meta_STAR_)], null));

return expectations.inc_report_counter.call(null,new cljs.core.Keyword(null,"pass","pass",1574159993));
}));
cljs.core._add_method.call(null,expectations.report,new cljs.core.Keyword(null,"fail","fail",1706214930),(function (m){
expectations.inc_report_counter.call(null,new cljs.core.Keyword(null,"fail","fail",1706214930));

var current_test = expectations._STAR_test_var_STAR_;
var message = expectations.__GT_failure_message.call(null,m);
cljs.core.alter_meta_BANG_.call(null,current_test,cljs.core.assoc,new cljs.core.Keyword("expectations","run","expectations/run",-1889289556),true,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fail","fail",1706214930),message,new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(expectations._STAR_test_meta_STAR_)], null));

return expectations.fail.call(null,expectations._STAR_test_name_STAR_,expectations._STAR_test_meta_STAR_,message);
}));
cljs.core._add_method.call(null,expectations.report,new cljs.core.Keyword(null,"error","error",-978969032),(function (p__9486){
var map__9487 = p__9486;
var map__9487__$1 = ((((!((map__9487 == null)))?((((map__9487.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9487.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9487):map__9487);
var m = map__9487__$1;
var result = cljs.core.get.call(null,map__9487__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var raw = cljs.core.get.call(null,map__9487__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
expectations.inc_report_counter.call(null,new cljs.core.Keyword(null,"error","error",-978969032));

var result__$1 = cljs.core.first.call(null,result);
var current_test = expectations._STAR_test_var_STAR_;
var message = expectations.string_join.call(null,"\n",new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(expectations.reminder)?expectations.colorize_warn.call(null,[cljs.core.str("     ***** "),cljs.core.str(clojure.string.upper_case.call(null,expectations.reminder)),cljs.core.str(" *****")].join('')):null),(cljs.core.truth_(raw)?(cljs.core.truth_(expectations.show_raw_choice.call(null))?expectations.colorize_raw.call(null,expectations.raw_str.call(null,raw)):null):null),(function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"expected-message","expected-message",-615750006).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var msg = temp__4657__auto__;
return [cljs.core.str("  exp-msg: "),cljs.core.str(msg)].join('');
} else {
return null;
}
})(),(function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"actual-message","actual-message",1010600886).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var msg = temp__4657__auto__;
return [cljs.core.str("  act-msg: "),cljs.core.str(msg)].join('');
} else {
return null;
}
})(),[cljs.core.str("    threw: "),cljs.core.str(cljs.core.type.call(null,result__$1)),cljs.core.str(" - "),cljs.core.str(expectations.platform.get_message.call(null,result__$1))].join(''),expectations.pruned_stack_trace.call(null,result__$1)], null));
cljs.core.alter_meta_BANG_.call(null,current_test,cljs.core.assoc,new cljs.core.Keyword("expectations","run","expectations/run",-1889289556),true,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),message,new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(expectations._STAR_test_meta_STAR_)], null));

return expectations.fail.call(null,expectations._STAR_test_name_STAR_,expectations._STAR_test_meta_STAR_,message);
}));
cljs.core._add_method.call(null,expectations.report,new cljs.core.Keyword(null,"summary","summary",380847952),(function (p__9489){
var map__9490 = p__9489;
var map__9490__$1 = ((((!((map__9490 == null)))?((((map__9490.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9490.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9490):map__9490);
var test = cljs.core.get.call(null,map__9490__$1,new cljs.core.Keyword(null,"test","test",577538877));
var pass = cljs.core.get.call(null,map__9490__$1,new cljs.core.Keyword(null,"pass","pass",1574159993));
var fail = cljs.core.get.call(null,map__9490__$1,new cljs.core.Keyword(null,"fail","fail",1706214930));
var error = cljs.core.get.call(null,map__9490__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var run_time = cljs.core.get.call(null,map__9490__$1,new cljs.core.Keyword(null,"run-time","run-time",-1231674133));
var ignored_expectations = cljs.core.get.call(null,map__9490__$1,new cljs.core.Keyword(null,"ignored-expectations","ignored-expectations",303531187));
return expectations.summary.call(null,[cljs.core.str("\nRan "),cljs.core.str(test),cljs.core.str(" tests containing "),cljs.core.str(((pass + fail) + error)),cljs.core.str(" assertions in "),cljs.core.str(run_time),cljs.core.str(" msecs\n"),cljs.core.str((((ignored_expectations > (0)))?expectations.colorize_warn.call(null,[cljs.core.str("IGNORED "),cljs.core.str(ignored_expectations),cljs.core.str(" EXPECTATIONS\n")].join('')):null)),cljs.core.str(expectations.colorize_results.call(null,cljs.core.partial.call(null,cljs.core._EQ_,(0),fail,error),[cljs.core.str(fail),cljs.core.str(" failures, "),cljs.core.str(error),cljs.core.str(" errors")].join(''))),cljs.core.str(".")].join(''));
}));
expectations.disable_run_on_shutdown = (function expectations$disable_run_on_shutdown(){
return cljs.core.reset_BANG_.call(null,expectations.run_tests_on_shutdown,false);
});
expectations.warn_on_iref_updates = (function expectations$warn_on_iref_updates(){
return cljs.core.reset_BANG_.call(null,expectations.warn_on_iref_updates_boolean,true);
});
expectations.add_watch_every_iref_for_updates = (function expectations$add_watch_every_iref_for_updates(iref_vars){
var seq__9496 = cljs.core.seq.call(null,iref_vars);
var chunk__9497 = null;
var count__9498 = (0);
var i__9499 = (0);
while(true){
if((i__9499 < count__9498)){
var var$ = cljs.core._nth.call(null,chunk__9497,i__9499);
cljs.core.add_watch.call(null,cljs.core.deref.call(null,var$),new cljs.core.Keyword("expectations","expectations-watching-state-modifications","expectations/expectations-watching-state-modifications",1804238518),((function (seq__9496,chunk__9497,count__9498,i__9499,var$){
return (function (_,reference,old_state,new_state){
cljs.core.println.call(null,expectations.colorize_warn.call(null,clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WARNING:",(function (){var or__6014__auto__ = expectations._STAR_test_name_STAR_;
if(cljs.core.truth_(or__6014__auto__)){
return or__6014__auto__;
} else {
return "test name unset";
}
})(),"modified",var$,"from",cljs.core.pr_str.call(null,old_state),"to",cljs.core.pr_str.call(null,new_state)], null))));

if(cljs.core.truth_(expectations._STAR_test_name_STAR_)){
return null;
} else {
return expectations.platform.print_stack_trace.call(null,(new Error("stacktrace for var modification")));
}
});})(seq__9496,chunk__9497,count__9498,i__9499,var$))
);

var G__9500 = seq__9496;
var G__9501 = chunk__9497;
var G__9502 = count__9498;
var G__9503 = (i__9499 + (1));
seq__9496 = G__9500;
chunk__9497 = G__9501;
count__9498 = G__9502;
i__9499 = G__9503;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9496);
if(temp__4657__auto__){
var seq__9496__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9496__$1)){
var c__6825__auto__ = cljs.core.chunk_first.call(null,seq__9496__$1);
var G__9504 = cljs.core.chunk_rest.call(null,seq__9496__$1);
var G__9505 = c__6825__auto__;
var G__9506 = cljs.core.count.call(null,c__6825__auto__);
var G__9507 = (0);
seq__9496 = G__9504;
chunk__9497 = G__9505;
count__9498 = G__9506;
i__9499 = G__9507;
continue;
} else {
var var$ = cljs.core.first.call(null,seq__9496__$1);
cljs.core.add_watch.call(null,cljs.core.deref.call(null,var$),new cljs.core.Keyword("expectations","expectations-watching-state-modifications","expectations/expectations-watching-state-modifications",1804238518),((function (seq__9496,chunk__9497,count__9498,i__9499,var$,seq__9496__$1,temp__4657__auto__){
return (function (_,reference,old_state,new_state){
cljs.core.println.call(null,expectations.colorize_warn.call(null,clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WARNING:",(function (){var or__6014__auto__ = expectations._STAR_test_name_STAR_;
if(cljs.core.truth_(or__6014__auto__)){
return or__6014__auto__;
} else {
return "test name unset";
}
})(),"modified",var$,"from",cljs.core.pr_str.call(null,old_state),"to",cljs.core.pr_str.call(null,new_state)], null))));

if(cljs.core.truth_(expectations._STAR_test_name_STAR_)){
return null;
} else {
return expectations.platform.print_stack_trace.call(null,(new Error("stacktrace for var modification")));
}
});})(seq__9496,chunk__9497,count__9498,i__9499,var$,seq__9496__$1,temp__4657__auto__))
);

var G__9508 = cljs.core.next.call(null,seq__9496__$1);
var G__9509 = null;
var G__9510 = (0);
var G__9511 = (0);
seq__9496 = G__9508;
chunk__9497 = G__9509;
count__9498 = G__9510;
i__9499 = G__9511;
continue;
}
} else {
return null;
}
}
break;
}
});
expectations.remove_watch_every_iref_for_updates = (function expectations$remove_watch_every_iref_for_updates(iref_vars){
var seq__9516 = cljs.core.seq.call(null,iref_vars);
var chunk__9517 = null;
var count__9518 = (0);
var i__9519 = (0);
while(true){
if((i__9519 < count__9518)){
var var$ = cljs.core._nth.call(null,chunk__9517,i__9519);
cljs.core.remove_watch.call(null,cljs.core.deref.call(null,var$),new cljs.core.Keyword("expectations","expectations-watching-state-modifications","expectations/expectations-watching-state-modifications",1804238518));

var G__9520 = seq__9516;
var G__9521 = chunk__9517;
var G__9522 = count__9518;
var G__9523 = (i__9519 + (1));
seq__9516 = G__9520;
chunk__9517 = G__9521;
count__9518 = G__9522;
i__9519 = G__9523;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9516);
if(temp__4657__auto__){
var seq__9516__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9516__$1)){
var c__6825__auto__ = cljs.core.chunk_first.call(null,seq__9516__$1);
var G__9524 = cljs.core.chunk_rest.call(null,seq__9516__$1);
var G__9525 = c__6825__auto__;
var G__9526 = cljs.core.count.call(null,c__6825__auto__);
var G__9527 = (0);
seq__9516 = G__9524;
chunk__9517 = G__9525;
count__9518 = G__9526;
i__9519 = G__9527;
continue;
} else {
var var$ = cljs.core.first.call(null,seq__9516__$1);
cljs.core.remove_watch.call(null,cljs.core.deref.call(null,var$),new cljs.core.Keyword("expectations","expectations-watching-state-modifications","expectations/expectations-watching-state-modifications",1804238518));

var G__9528 = cljs.core.next.call(null,seq__9516__$1);
var G__9529 = null;
var G__9530 = (0);
var G__9531 = (0);
seq__9516 = G__9528;
chunk__9517 = G__9529;
count__9518 = G__9530;
i__9519 = G__9531;
continue;
}
} else {
return null;
}
}
break;
}
});
expectations.test_var = (function expectations$test_var(v){
var temp__4657__auto__ = cljs.core.deref.call(null,v);
if(cljs.core.truth_(temp__4657__auto__)){
var t = temp__4657__auto__;
var tn = expectations.test_name.call(null,cljs.core.meta.call(null,v));
var tm = cljs.core.meta.call(null,v);
expectations.started.call(null,tn,tm);

expectations.inc_report_counter.call(null,new cljs.core.Keyword(null,"test","test",577538877));

var _STAR_test_name_STAR_9536_9540 = expectations._STAR_test_name_STAR_;
var _STAR_test_meta_STAR_9537_9541 = expectations._STAR_test_meta_STAR_;
var _STAR_test_var_STAR_9538_9542 = expectations._STAR_test_var_STAR_;
expectations._STAR_test_name_STAR_ = tn;

expectations._STAR_test_meta_STAR_ = tm;

expectations._STAR_test_var_STAR_ = v;

try{try{t.call(null);
}catch (e9539){if((e9539 instanceof Error)){
var e_9543 = e9539;
cljs.core.println.call(null,"\nunexpected error in",tn);

expectations.platform.print_stack_trace.call(null,e_9543);
} else {
throw e9539;

}
}}finally {expectations._STAR_test_var_STAR_ = _STAR_test_var_STAR_9538_9542;

expectations._STAR_test_meta_STAR_ = _STAR_test_meta_STAR_9537_9541;

expectations._STAR_test_name_STAR_ = _STAR_test_name_STAR_9536_9540;
}
return expectations.finished.call(null,tn,tm);
} else {
return null;
}
});
expectations.execute_vars = (function expectations$execute_vars(vars){
var seq__9548 = cljs.core.seq.call(null,vars);
var chunk__9549 = null;
var count__9550 = (0);
var i__9551 = (0);
while(true){
if((i__9551 < count__9550)){
var var$ = cljs.core._nth.call(null,chunk__9549,i__9551);
if(cljs.core.truth_(expectations.platform.bound_QMARK_.call(null,var$))){
var temp__4657__auto___9552 = cljs.core.deref.call(null,var$);
if(cljs.core.truth_(temp__4657__auto___9552)){
var vv_9553 = temp__4657__auto___9552;
vv_9553.call(null);
} else {
}
} else {
}

var G__9554 = seq__9548;
var G__9555 = chunk__9549;
var G__9556 = count__9550;
var G__9557 = (i__9551 + (1));
seq__9548 = G__9554;
chunk__9549 = G__9555;
count__9550 = G__9556;
i__9551 = G__9557;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9548);
if(temp__4657__auto__){
var seq__9548__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9548__$1)){
var c__6825__auto__ = cljs.core.chunk_first.call(null,seq__9548__$1);
var G__9558 = cljs.core.chunk_rest.call(null,seq__9548__$1);
var G__9559 = c__6825__auto__;
var G__9560 = cljs.core.count.call(null,c__6825__auto__);
var G__9561 = (0);
seq__9548 = G__9558;
chunk__9549 = G__9559;
count__9550 = G__9560;
i__9551 = G__9561;
continue;
} else {
var var$ = cljs.core.first.call(null,seq__9548__$1);
if(cljs.core.truth_(expectations.platform.bound_QMARK_.call(null,var$))){
var temp__4657__auto___9562__$1 = cljs.core.deref.call(null,var$);
if(cljs.core.truth_(temp__4657__auto___9562__$1)){
var vv_9563 = temp__4657__auto___9562__$1;
vv_9563.call(null);
} else {
}
} else {
}

var G__9564 = cljs.core.next.call(null,seq__9548__$1);
var G__9565 = null;
var G__9566 = (0);
var G__9567 = (0);
seq__9548 = G__9564;
chunk__9549 = G__9565;
count__9550 = G__9566;
i__9551 = G__9567;
continue;
}
} else {
return null;
}
}
break;
}
});
expectations.create_context = (function expectations$create_context(in_context_vars,work){
var G__9569 = cljs.core.count.call(null,in_context_vars);
switch (G__9569) {
case (0):
return work.call(null);

break;
case (1):
return cljs.core.deref.call(null,cljs.core.first.call(null,in_context_vars)).call(null,work);

break;
default:
cljs.core.println.call(null,"expectations only supports 0 or 1 :in-context fns. Ignoring:",in_context_vars);

return work.call(null);

}
});
expectations.test_vars = (function expectations$test_vars(vars_by_kind,ignored_expectations){
expectations.execute_vars.call(null,new cljs.core.Keyword(null,"before-run","before-run",-1615468948).cljs$core$IFn$_invoke$arity$1(vars_by_kind));

if(cljs.core.truth_(cljs.core.deref.call(null,expectations.warn_on_iref_updates_boolean))){
expectations.add_watch_every_iref_for_updates.call(null,new cljs.core.Keyword(null,"iref","iref",2006639238).cljs$core$IFn$_invoke$arity$1(vars_by_kind));
} else {
}

var _STAR_report_counters_STAR_9586 = expectations._STAR_report_counters_STAR_;
expectations._STAR_report_counters_STAR_ = cljs.core.atom.call(null,expectations.initial_report_counters);

try{var ns__GT_vars = cljs.core.group_by.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.meta),cljs.core.sort_by.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.meta),new cljs.core.Keyword(null,"expectation","expectation",-250416721).cljs$core$IFn$_invoke$arity$1(vars_by_kind)));
var start = expectations.platform.nano_time.call(null);
var in_context_vars = cljs.core.vec.call(null,new cljs.core.Keyword(null,"in-context","in-context",-673372070).cljs$core$IFn$_invoke$arity$1(vars_by_kind));
var seq__9587_9601 = cljs.core.seq.call(null,ns__GT_vars);
var chunk__9588_9602 = null;
var count__9589_9603 = (0);
var i__9590_9604 = (0);
while(true){
if((i__9590_9604 < count__9589_9603)){
var vec__9591_9605 = cljs.core._nth.call(null,chunk__9588_9602,i__9590_9604);
var a_ns_9606 = cljs.core.nth.call(null,vec__9591_9605,(0),null);
var the_vars_9607 = cljs.core.nth.call(null,vec__9591_9605,(1),null);
var seq__9592_9608 = cljs.core.seq.call(null,the_vars_9607);
var chunk__9593_9609 = null;
var count__9594_9610 = (0);
var i__9595_9611 = (0);
while(true){
if((i__9595_9611 < count__9594_9610)){
var v_9612 = cljs.core._nth.call(null,chunk__9593_9609,i__9595_9611);
expectations.create_context.call(null,in_context_vars,cljs.core.with_meta(((function (seq__9592_9608,chunk__9593_9609,count__9594_9610,i__9595_9611,seq__9587_9601,chunk__9588_9602,count__9589_9603,i__9590_9604,v_9612,vec__9591_9605,a_ns_9606,the_vars_9607,ns__GT_vars,start,in_context_vars,_STAR_report_counters_STAR_9586){
return (function (){
return expectations.test_var.call(null,v_9612);
});})(seq__9592_9608,chunk__9593_9609,count__9594_9610,i__9595_9611,seq__9587_9601,chunk__9588_9602,count__9589_9603,i__9590_9604,v_9612,vec__9591_9605,a_ns_9606,the_vars_9607,ns__GT_vars,start,in_context_vars,_STAR_report_counters_STAR_9586))
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"the-var","the-var",1428415613),v_9612], null)));

expectations.expectation_finished.call(null,v_9612);

var G__9613 = seq__9592_9608;
var G__9614 = chunk__9593_9609;
var G__9615 = count__9594_9610;
var G__9616 = (i__9595_9611 + (1));
seq__9592_9608 = G__9613;
chunk__9593_9609 = G__9614;
count__9594_9610 = G__9615;
i__9595_9611 = G__9616;
continue;
} else {
var temp__4657__auto___9617 = cljs.core.seq.call(null,seq__9592_9608);
if(temp__4657__auto___9617){
var seq__9592_9618__$1 = temp__4657__auto___9617;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9592_9618__$1)){
var c__6825__auto___9619 = cljs.core.chunk_first.call(null,seq__9592_9618__$1);
var G__9620 = cljs.core.chunk_rest.call(null,seq__9592_9618__$1);
var G__9621 = c__6825__auto___9619;
var G__9622 = cljs.core.count.call(null,c__6825__auto___9619);
var G__9623 = (0);
seq__9592_9608 = G__9620;
chunk__9593_9609 = G__9621;
count__9594_9610 = G__9622;
i__9595_9611 = G__9623;
continue;
} else {
var v_9624 = cljs.core.first.call(null,seq__9592_9618__$1);
expectations.create_context.call(null,in_context_vars,cljs.core.with_meta(((function (seq__9592_9608,chunk__9593_9609,count__9594_9610,i__9595_9611,seq__9587_9601,chunk__9588_9602,count__9589_9603,i__9590_9604,v_9624,seq__9592_9618__$1,temp__4657__auto___9617,vec__9591_9605,a_ns_9606,the_vars_9607,ns__GT_vars,start,in_context_vars,_STAR_report_counters_STAR_9586){
return (function (){
return expectations.test_var.call(null,v_9624);
});})(seq__9592_9608,chunk__9593_9609,count__9594_9610,i__9595_9611,seq__9587_9601,chunk__9588_9602,count__9589_9603,i__9590_9604,v_9624,seq__9592_9618__$1,temp__4657__auto___9617,vec__9591_9605,a_ns_9606,the_vars_9607,ns__GT_vars,start,in_context_vars,_STAR_report_counters_STAR_9586))
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"the-var","the-var",1428415613),v_9624], null)));

expectations.expectation_finished.call(null,v_9624);

var G__9625 = cljs.core.next.call(null,seq__9592_9618__$1);
var G__9626 = null;
var G__9627 = (0);
var G__9628 = (0);
seq__9592_9608 = G__9625;
chunk__9593_9609 = G__9626;
count__9594_9610 = G__9627;
i__9595_9611 = G__9628;
continue;
}
} else {
}
}
break;
}

expectations.ns_finished.call(null,expectations.platform.ns_name.call(null,a_ns_9606));

var G__9629 = seq__9587_9601;
var G__9630 = chunk__9588_9602;
var G__9631 = count__9589_9603;
var G__9632 = (i__9590_9604 + (1));
seq__9587_9601 = G__9629;
chunk__9588_9602 = G__9630;
count__9589_9603 = G__9631;
i__9590_9604 = G__9632;
continue;
} else {
var temp__4657__auto___9633 = cljs.core.seq.call(null,seq__9587_9601);
if(temp__4657__auto___9633){
var seq__9587_9634__$1 = temp__4657__auto___9633;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9587_9634__$1)){
var c__6825__auto___9635 = cljs.core.chunk_first.call(null,seq__9587_9634__$1);
var G__9636 = cljs.core.chunk_rest.call(null,seq__9587_9634__$1);
var G__9637 = c__6825__auto___9635;
var G__9638 = cljs.core.count.call(null,c__6825__auto___9635);
var G__9639 = (0);
seq__9587_9601 = G__9636;
chunk__9588_9602 = G__9637;
count__9589_9603 = G__9638;
i__9590_9604 = G__9639;
continue;
} else {
var vec__9596_9640 = cljs.core.first.call(null,seq__9587_9634__$1);
var a_ns_9641 = cljs.core.nth.call(null,vec__9596_9640,(0),null);
var the_vars_9642 = cljs.core.nth.call(null,vec__9596_9640,(1),null);
var seq__9597_9643 = cljs.core.seq.call(null,the_vars_9642);
var chunk__9598_9644 = null;
var count__9599_9645 = (0);
var i__9600_9646 = (0);
while(true){
if((i__9600_9646 < count__9599_9645)){
var v_9647 = cljs.core._nth.call(null,chunk__9598_9644,i__9600_9646);
expectations.create_context.call(null,in_context_vars,cljs.core.with_meta(((function (seq__9597_9643,chunk__9598_9644,count__9599_9645,i__9600_9646,seq__9587_9601,chunk__9588_9602,count__9589_9603,i__9590_9604,v_9647,vec__9596_9640,a_ns_9641,the_vars_9642,seq__9587_9634__$1,temp__4657__auto___9633,ns__GT_vars,start,in_context_vars,_STAR_report_counters_STAR_9586){
return (function (){
return expectations.test_var.call(null,v_9647);
});})(seq__9597_9643,chunk__9598_9644,count__9599_9645,i__9600_9646,seq__9587_9601,chunk__9588_9602,count__9589_9603,i__9590_9604,v_9647,vec__9596_9640,a_ns_9641,the_vars_9642,seq__9587_9634__$1,temp__4657__auto___9633,ns__GT_vars,start,in_context_vars,_STAR_report_counters_STAR_9586))
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"the-var","the-var",1428415613),v_9647], null)));

expectations.expectation_finished.call(null,v_9647);

var G__9648 = seq__9597_9643;
var G__9649 = chunk__9598_9644;
var G__9650 = count__9599_9645;
var G__9651 = (i__9600_9646 + (1));
seq__9597_9643 = G__9648;
chunk__9598_9644 = G__9649;
count__9599_9645 = G__9650;
i__9600_9646 = G__9651;
continue;
} else {
var temp__4657__auto___9652__$1 = cljs.core.seq.call(null,seq__9597_9643);
if(temp__4657__auto___9652__$1){
var seq__9597_9653__$1 = temp__4657__auto___9652__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9597_9653__$1)){
var c__6825__auto___9654 = cljs.core.chunk_first.call(null,seq__9597_9653__$1);
var G__9655 = cljs.core.chunk_rest.call(null,seq__9597_9653__$1);
var G__9656 = c__6825__auto___9654;
var G__9657 = cljs.core.count.call(null,c__6825__auto___9654);
var G__9658 = (0);
seq__9597_9643 = G__9655;
chunk__9598_9644 = G__9656;
count__9599_9645 = G__9657;
i__9600_9646 = G__9658;
continue;
} else {
var v_9659 = cljs.core.first.call(null,seq__9597_9653__$1);
expectations.create_context.call(null,in_context_vars,cljs.core.with_meta(((function (seq__9597_9643,chunk__9598_9644,count__9599_9645,i__9600_9646,seq__9587_9601,chunk__9588_9602,count__9589_9603,i__9590_9604,v_9659,seq__9597_9653__$1,temp__4657__auto___9652__$1,vec__9596_9640,a_ns_9641,the_vars_9642,seq__9587_9634__$1,temp__4657__auto___9633,ns__GT_vars,start,in_context_vars,_STAR_report_counters_STAR_9586){
return (function (){
return expectations.test_var.call(null,v_9659);
});})(seq__9597_9643,chunk__9598_9644,count__9599_9645,i__9600_9646,seq__9587_9601,chunk__9588_9602,count__9589_9603,i__9590_9604,v_9659,seq__9597_9653__$1,temp__4657__auto___9652__$1,vec__9596_9640,a_ns_9641,the_vars_9642,seq__9587_9634__$1,temp__4657__auto___9633,ns__GT_vars,start,in_context_vars,_STAR_report_counters_STAR_9586))
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"the-var","the-var",1428415613),v_9659], null)));

expectations.expectation_finished.call(null,v_9659);

var G__9660 = cljs.core.next.call(null,seq__9597_9653__$1);
var G__9661 = null;
var G__9662 = (0);
var G__9663 = (0);
seq__9597_9643 = G__9660;
chunk__9598_9644 = G__9661;
count__9599_9645 = G__9662;
i__9600_9646 = G__9663;
continue;
}
} else {
}
}
break;
}

expectations.ns_finished.call(null,expectations.platform.ns_name.call(null,a_ns_9641));

var G__9664 = cljs.core.next.call(null,seq__9587_9634__$1);
var G__9665 = null;
var G__9666 = (0);
var G__9667 = (0);
seq__9587_9601 = G__9664;
chunk__9588_9602 = G__9665;
count__9589_9603 = G__9666;
i__9590_9604 = G__9667;
continue;
}
} else {
}
}
break;
}

var result = cljs.core.assoc.call(null,cljs.core.deref.call(null,expectations._STAR_report_counters_STAR_),new cljs.core.Keyword(null,"run-time","run-time",-1231674133),(((expectations.platform.nano_time.call(null) - start) / (1000000)) | (0)),new cljs.core.Keyword(null,"ignored-expectations","ignored-expectations",303531187),ignored_expectations);
if(cljs.core.truth_(cljs.core.deref.call(null,expectations.warn_on_iref_updates_boolean))){
expectations.remove_watch_every_iref_for_updates.call(null,new cljs.core.Keyword(null,"iref","iref",2006639238).cljs$core$IFn$_invoke$arity$1(vars_by_kind));
} else {
}

expectations.execute_vars.call(null,new cljs.core.Keyword(null,"after-run","after-run",1986853392).cljs$core$IFn$_invoke$arity$1(vars_by_kind));

return result;
}finally {expectations._STAR_report_counters_STAR_ = _STAR_report_counters_STAR_9586;
}});
expectations.run_tests_in_vars = (function expectations$run_tests_in_vars(vars_by_kind){
var G__9669 = cljs.core.assoc.call(null,expectations.test_vars.call(null,vars_by_kind,(0)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952));
expectations.report.call(null,G__9669);

return G__9669;
});
expectations.var_kind = (function expectations$var_kind(v){
var m = cljs.core.meta.call(null,v);
if(cljs.core.truth_((function (){var and__6002__auto__ = new cljs.core.Keyword(null,"focused","focused",1851572115).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(and__6002__auto__)){
return new cljs.core.Keyword(null,"expectation","expectation",-250416721).cljs$core$IFn$_invoke$arity$1(m);
} else {
return and__6002__auto__;
}
})())){
return new cljs.core.Keyword(null,"focused","focused",1851572115);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"expectation","expectation",-250416721).cljs$core$IFn$_invoke$arity$1(m))){
return new cljs.core.Keyword(null,"expectation","expectation",-250416721);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"expectations-options","expectations-options",-1135296272).cljs$core$IFn$_invoke$arity$1(m))){
return new cljs.core.Keyword(null,"expectations-options","expectations-options",-1135296272).cljs$core$IFn$_invoke$arity$1(m);
} else {
if(cljs.core.truth_(expectations.platform.iref_types.call(null,cljs.core.type.call(null,cljs.core.deref.call(null,v))))){
return new cljs.core.Keyword(null,"iref","iref",2006639238);
} else {
return null;
}
}
}
}
});
expectations.by_kind = (function expectations$by_kind(vars){
return cljs.core.group_by.call(null,expectations.var_kind,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.nil_QMARK_,expectations.var_kind),cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.Keyword("expectations","run","expectations/run",-1889289556),cljs.core.meta),vars)));
});

/**
 * @interface
 */
expectations.CustomPred = function(){};

expectations.expect_fn = (function expectations$expect_fn(e,a){
if((!((e == null))) && (!((e.expectations$CustomPred$expect_fn$arity$2 == null)))){
return e.expectations$CustomPred$expect_fn$arity$2(e,a);
} else {
var x__6677__auto__ = (((e == null))?null:e);
var m__6678__auto__ = (expectations.expect_fn[goog.typeOf(x__6677__auto__)]);
if(!((m__6678__auto__ == null))){
return m__6678__auto__.call(null,e,a);
} else {
var m__6678__auto____$1 = (expectations.expect_fn["_"]);
if(!((m__6678__auto____$1 == null))){
return m__6678__auto____$1.call(null,e,a);
} else {
throw cljs.core.missing_protocol.call(null,"CustomPred.expect-fn",e);
}
}
}
});

expectations.expected_message = (function expectations$expected_message(e,a,str_e,str_a){
if((!((e == null))) && (!((e.expectations$CustomPred$expected_message$arity$4 == null)))){
return e.expectations$CustomPred$expected_message$arity$4(e,a,str_e,str_a);
} else {
var x__6677__auto__ = (((e == null))?null:e);
var m__6678__auto__ = (expectations.expected_message[goog.typeOf(x__6677__auto__)]);
if(!((m__6678__auto__ == null))){
return m__6678__auto__.call(null,e,a,str_e,str_a);
} else {
var m__6678__auto____$1 = (expectations.expected_message["_"]);
if(!((m__6678__auto____$1 == null))){
return m__6678__auto____$1.call(null,e,a,str_e,str_a);
} else {
throw cljs.core.missing_protocol.call(null,"CustomPred.expected-message",e);
}
}
}
});

expectations.actual_message = (function expectations$actual_message(e,a,str_e,str_a){
if((!((e == null))) && (!((e.expectations$CustomPred$actual_message$arity$4 == null)))){
return e.expectations$CustomPred$actual_message$arity$4(e,a,str_e,str_a);
} else {
var x__6677__auto__ = (((e == null))?null:e);
var m__6678__auto__ = (expectations.actual_message[goog.typeOf(x__6677__auto__)]);
if(!((m__6678__auto__ == null))){
return m__6678__auto__.call(null,e,a,str_e,str_a);
} else {
var m__6678__auto____$1 = (expectations.actual_message["_"]);
if(!((m__6678__auto____$1 == null))){
return m__6678__auto____$1.call(null,e,a,str_e,str_a);
} else {
throw cljs.core.missing_protocol.call(null,"CustomPred.actual-message",e);
}
}
}
});

expectations.message = (function expectations$message(e,a,str_e,str_a){
if((!((e == null))) && (!((e.expectations$CustomPred$message$arity$4 == null)))){
return e.expectations$CustomPred$message$arity$4(e,a,str_e,str_a);
} else {
var x__6677__auto__ = (((e == null))?null:e);
var m__6678__auto__ = (expectations.message[goog.typeOf(x__6677__auto__)]);
if(!((m__6678__auto__ == null))){
return m__6678__auto__.call(null,e,a,str_e,str_a);
} else {
var m__6678__auto____$1 = (expectations.message["_"]);
if(!((m__6678__auto____$1 == null))){
return m__6678__auto____$1.call(null,e,a,str_e,str_a);
} else {
throw cljs.core.missing_protocol.call(null,"CustomPred.message",e);
}
}
}
});

if(typeof expectations.compare_expr !== 'undefined'){
} else {
expectations.compare_expr = (function (){var method_table__6938__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__6939__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__6940__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__6941__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__6942__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"expectations","compare-expr"),((function (method_table__6938__auto__,prefer_table__6939__auto__,method_cache__6940__auto__,cached_hierarchy__6941__auto__,hierarchy__6942__auto__){
return (function (e,a,_,___$1){
if(((!((e == null)))?(((false) || (e.expectations$CustomPred$))?true:(((!e.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,expectations.CustomPred,e):false)):cljs.core.native_satisfies_QMARK_.call(null,expectations.CustomPred,e))){
return new cljs.core.Keyword("expectations","custom-pred","expectations/custom-pred",-805975120);
} else {
if((cljs.core.map_QMARK_.call(null,a)) && (!(cljs.core.sorted_QMARK_.call(null,a))) && (cljs.core.contains_QMARK_.call(null,a,new cljs.core.Keyword("expectations","from-each-flag","expectations/from-each-flag",1734220986)))){
return new cljs.core.Keyword("expectations","from-each","expectations/from-each",-1067663208);
} else {
if((cljs.core.map_QMARK_.call(null,a)) && (!(cljs.core.sorted_QMARK_.call(null,a))) && (cljs.core.contains_QMARK_.call(null,a,new cljs.core.Keyword("expectations","in-flag","expectations/in-flag",-130698686)))){
return new cljs.core.Keyword("expectations","in","expectations/in",-1616294280);
} else {
if((cljs.core.map_QMARK_.call(null,e)) && (!(cljs.core.sorted_QMARK_.call(null,e))) && (cljs.core.contains_QMARK_.call(null,e,new cljs.core.Keyword("expectations","more","expectations/more",-1187281521)))){
return new cljs.core.Keyword("expectations","more","expectations/more",-1187281521);
} else {
if(cljs.core._EQ_.call(null,e,a)){
return new cljs.core.Keyword("expectations","equals","expectations/equals",-367825465);
} else {
if((typeof e === 'string') && (typeof a === 'string')){
return new cljs.core.Keyword("expectations","strings","expectations/strings",-1987464060);
} else {
if((cljs.core.map_QMARK_.call(null,e)) && (cljs.core.map_QMARK_.call(null,a))){
return new cljs.core.Keyword("expectations","maps","expectations/maps",-1640972023);
} else {
if((cljs.core.set_QMARK_.call(null,e)) && (cljs.core.set_QMARK_.call(null,a))){
return new cljs.core.Keyword("expectations","sets","expectations/sets",63554325);
} else {
if((cljs.core.sequential_QMARK_.call(null,e)) && (cljs.core.sequential_QMARK_.call(null,a))){
return new cljs.core.Keyword("expectations","sequentials","expectations/sequentials",160347083);
} else {
if(((e instanceof RegExp)) && ((a instanceof RegExp))){
return new cljs.core.Keyword("expectations","regexps","expectations/regexps",976628246);
} else {
if((e instanceof RegExp)){
return new cljs.core.Keyword("expectations","re-seq","expectations/re-seq",1017362038);
} else {
if(cljs.core.isa_QMARK_.call(null,e,Error)){
return new cljs.core.Keyword("expectations","expect-exception","expectations/expect-exception",-625804045);
} else {
if((e instanceof Error)){
return new cljs.core.Keyword("expectations","expected-exception","expectations/expected-exception",256433227);
} else {
if((a instanceof Error)){
return new cljs.core.Keyword("expectations","actual-exception","expectations/actual-exception",-271507269);
} else {
if(((e instanceof Function)) && ((a instanceof Function))){
return new cljs.core.Keyword("expectations","types","expectations/types",655900024);
} else {
if(((e instanceof Function)) && (cljs.core.not.call(null,(function (){var and__6002__auto__ = cljs.core.fn_QMARK_.call(null,e);
if(and__6002__auto__){
return e.call(null,a);
} else {
return and__6002__auto__;
}
})()))){
return new cljs.core.Keyword("expectations","expect-instance","expectations/expect-instance",1758326554);
} else {
if(cljs.core.fn_QMARK_.call(null,e)){
return new cljs.core.Keyword("expectations","fn","expectations/fn",-1243905589);
} else {
return new cljs.core.Keyword("expectations","default","expectations/default",-1785257137);

}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(method_table__6938__auto__,prefer_table__6939__auto__,method_cache__6940__auto__,cached_hierarchy__6941__auto__,hierarchy__6942__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__6942__auto__,method_table__6938__auto__,prefer_table__6939__auto__,method_cache__6940__auto__,cached_hierarchy__6941__auto__));
})();
}
cljs.core._add_method.call(null,expectations.compare_expr,new cljs.core.Keyword("expectations","equals","expectations/equals",-367825465),(function (e,a,str_e,str_a){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993)], null);
}));
cljs.core._add_method.call(null,expectations.compare_expr,new cljs.core.Keyword("expectations","default","expectations/default",-1785257137),(function (e,a,str_e,str_a){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"raw","raw",1604651272),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [str_e,str_a], null),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["expected:",cljs.core.pr_str.call(null,e),"\n                was:",cljs.core.pr_str.call(null,a)], null)], null);
}));
cljs.core._add_method.call(null,expectations.compare_expr,new cljs.core.Keyword("expectations","custom-pred","expectations/custom-pred",-805975120),(function (e,a,str_e,str_a){
if(cljs.core.truth_(expectations.expect_fn.call(null,e,a))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"raw","raw",1604651272),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [str_e,str_a], null),new cljs.core.Keyword(null,"expected-message","expected-message",-615750006),expectations.expected_message.call(null,e,a,str_e,str_a),new cljs.core.Keyword(null,"actual-message","actual-message",1010600886),expectations.actual_message.call(null,e,a,str_e,str_a),new cljs.core.Keyword(null,"message","message",-406056002),expectations.message.call(null,e,a,str_e,str_a)], null);
}
}));
cljs.core._add_method.call(null,expectations.compare_expr,new cljs.core.Keyword("expectations","fn","expectations/fn",-1243905589),(function (e,a,str_e,str_a){
try{if(cljs.core.truth_(e.call(null,a))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"raw","raw",1604651272),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [str_e,str_a], null),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.pr_str.call(null,a),"is not",str_e], null)], null);
}
}catch (e9672){if((e9672 instanceof Error)){
var ex = e9672;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"raw","raw",1604651272),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [str_e,str_a], null),new cljs.core.Keyword(null,"expected-message","expected-message",-615750006),[cljs.core.str("also attempted: ("),cljs.core.str(str_e),cljs.core.str(" "),cljs.core.str(str_a),cljs.core.str(")")].join(''),new cljs.core.Keyword(null,"actual-message","actual-message",1010600886),[cljs.core.str("       and got: "),cljs.core.str(expectations.platform.get_message.call(null,ex))].join(''),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["expected:",str_e,"\n                was:",cljs.core.pr_str.call(null,a)], null)], null);
} else {
throw e9672;

}
}}));
expectations.find_failures = (function expectations$find_failures(the_seq){
return cljs.core.seq.call(null,cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.comp.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pass","pass",1574159993),null], null), null),new cljs.core.Keyword(null,"type","type",1174270348)),the_seq)));
});
expectations.find_successes = (function expectations$find_successes(the_seq){
return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pass","pass",1574159993),null], null), null),new cljs.core.Keyword(null,"type","type",1174270348)),the_seq));
});
cljs.core._add_method.call(null,expectations.compare_expr,new cljs.core.Keyword("expectations","from-each","expectations/from-each",-1067663208),(function (e,p__9674,str_e,str_a){
var map__9675 = p__9674;
var map__9675__$1 = ((((!((map__9675 == null)))?((((map__9675.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9675.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9675):map__9675);
var a = cljs.core.get.call(null,map__9675__$1,new cljs.core.Keyword("expectations","from-each","expectations/from-each",-1067663208));
var str_i_a = cljs.core.get.call(null,map__9675__$1,new cljs.core.Keyword("expectations","from-each-body","expectations/from-each-body",-1647304945));
var temp__4655__auto__ = expectations.find_failures.call(null,(function (){var iter__6794__auto__ = ((function (map__9675,map__9675__$1,a,str_i_a){
return (function expectations$iter__9677(s__9678){
return (new cljs.core.LazySeq(null,((function (map__9675,map__9675__$1,a,str_i_a){
return (function (){
var s__9678__$1 = s__9678;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__9678__$1);
if(temp__4657__auto__){
var s__9678__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9678__$2)){
var c__6792__auto__ = cljs.core.chunk_first.call(null,s__9678__$2);
var size__6793__auto__ = cljs.core.count.call(null,c__6792__auto__);
var b__9680 = cljs.core.chunk_buffer.call(null,size__6793__auto__);
if((function (){var i__9679 = (0);
while(true){
if((i__9679 < size__6793__auto__)){
var map__9685 = cljs.core._nth.call(null,c__6792__auto__,i__9679);
var map__9685__$1 = ((((!((map__9685 == null)))?((((map__9685.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9685.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9685):map__9685);
var ts = cljs.core.get.call(null,map__9685__$1,new cljs.core.Keyword("expectations","the-result","expectations/the-result",268799287));
var rd = cljs.core.get.call(null,map__9685__$1,new cljs.core.Keyword("expectations","ref-data","expectations/ref-data",303734692));
cljs.core.chunk_append.call(null,b__9680,cljs.core.assoc.call(null,expectations.compare_expr.call(null,e,ts,str_e,str_i_a),new cljs.core.Keyword(null,"ref-data","ref-data",743306603),rd));

var G__9689 = (i__9679 + (1));
i__9679 = G__9689;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9680),expectations$iter__9677.call(null,cljs.core.chunk_rest.call(null,s__9678__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9680),null);
}
} else {
var map__9687 = cljs.core.first.call(null,s__9678__$2);
var map__9687__$1 = ((((!((map__9687 == null)))?((((map__9687.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9687.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9687):map__9687);
var ts = cljs.core.get.call(null,map__9687__$1,new cljs.core.Keyword("expectations","the-result","expectations/the-result",268799287));
var rd = cljs.core.get.call(null,map__9687__$1,new cljs.core.Keyword("expectations","ref-data","expectations/ref-data",303734692));
return cljs.core.cons.call(null,cljs.core.assoc.call(null,expectations.compare_expr.call(null,e,ts,str_e,str_i_a),new cljs.core.Keyword(null,"ref-data","ref-data",743306603),rd),expectations$iter__9677.call(null,cljs.core.rest.call(null,s__9678__$2)));
}
} else {
return null;
}
break;
}
});})(map__9675,map__9675__$1,a,str_i_a))
,null,null));
});})(map__9675,map__9675__$1,a,str_i_a))
;
return iter__6794__auto__.call(null,a);
})());
if(cljs.core.truth_(temp__4655__auto__)){
var failures = temp__4655__auto__;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"raw","raw",1604651272),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [str_e,str_a], null),new cljs.core.Keyword(null,"message","message",-406056002),expectations.platform.format.call(null,"the list: %s",cljs.core.pr_str.call(null,cljs.core.map.call(null,((function (failures,temp__4655__auto__,map__9675,map__9675__$1,a,str_i_a){
return (function (x){
var temp__4655__auto____$1 = new cljs.core.Keyword("expectations","in","expectations/in",-1616294280).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(temp__4655__auto____$1)){
var y = temp__4655__auto____$1;
return y;
} else {
return x;
}
});})(failures,temp__4655__auto__,map__9675,map__9675__$1,a,str_i_a))
,cljs.core.map.call(null,new cljs.core.Keyword("expectations","the-result","expectations/the-result",268799287),a)))),new cljs.core.Keyword(null,"list","list",765357683),cljs.core.mapv.call(null,((function (failures,temp__4655__auto__,map__9675,map__9675__$1,a,str_i_a){
return (function (p1__9673_SHARP_){
return cljs.core.assoc.call(null,p1__9673_SHARP_,new cljs.core.Keyword(null,"show-raw","show-raw",312153310),true);
});})(failures,temp__4655__auto__,map__9675,map__9675__$1,a,str_i_a))
,failures)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993)], null);
}
}));
cljs.core._add_method.call(null,expectations.compare_expr,new cljs.core.Keyword("expectations","more","expectations/more",-1187281521),(function (p__9691,a,str_e,str_a){
var map__9692 = p__9691;
var map__9692__$1 = ((((!((map__9692 == null)))?((((map__9692.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9692.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9692):map__9692);
var es = cljs.core.get.call(null,map__9692__$1,new cljs.core.Keyword("expectations","more","expectations/more",-1187281521));
var temp__4655__auto__ = expectations.find_failures.call(null,(function (){var iter__6794__auto__ = ((function (map__9692,map__9692__$1,es){
return (function expectations$iter__9694(s__9695){
return (new cljs.core.LazySeq(null,((function (map__9692,map__9692__$1,es){
return (function (){
var s__9695__$1 = s__9695;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__9695__$1);
if(temp__4657__auto__){
var s__9695__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9695__$2)){
var c__6792__auto__ = cljs.core.chunk_first.call(null,s__9695__$2);
var size__6793__auto__ = cljs.core.count.call(null,c__6792__auto__);
var b__9697 = cljs.core.chunk_buffer.call(null,size__6793__auto__);
if((function (){var i__9696 = (0);
while(true){
if((i__9696 < size__6793__auto__)){
var map__9704 = cljs.core._nth.call(null,c__6792__auto__,i__9696);
var map__9704__$1 = ((((!((map__9704 == null)))?((((map__9704.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9704.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9704):map__9704);
var e = cljs.core.get.call(null,map__9704__$1,new cljs.core.Keyword(null,"e","e",1381269198));
var str_e__$1 = cljs.core.get.call(null,map__9704__$1,new cljs.core.Keyword(null,"str-e","str-e",2007824807));
var a_fn = cljs.core.get.call(null,map__9704__$1,new cljs.core.Keyword(null,"a-fn","a-fn",-979165273));
var gen_str_a = cljs.core.get.call(null,map__9704__$1,new cljs.core.Keyword(null,"gen-str-a","gen-str-a",1722083628));
cljs.core.chunk_append.call(null,b__9697,expectations.compare_expr.call(null,e,(function (){try{return a_fn.call(null,a);
}catch (e9706){if((e9706 instanceof Error)){
var t = e9706;
return t;
} else {
throw e9706;

}
}})(),str_e__$1,gen_str_a.call(null,str_a)));

var G__9710 = (i__9696 + (1));
i__9696 = G__9710;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9697),expectations$iter__9694.call(null,cljs.core.chunk_rest.call(null,s__9695__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9697),null);
}
} else {
var map__9707 = cljs.core.first.call(null,s__9695__$2);
var map__9707__$1 = ((((!((map__9707 == null)))?((((map__9707.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9707.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9707):map__9707);
var e = cljs.core.get.call(null,map__9707__$1,new cljs.core.Keyword(null,"e","e",1381269198));
var str_e__$1 = cljs.core.get.call(null,map__9707__$1,new cljs.core.Keyword(null,"str-e","str-e",2007824807));
var a_fn = cljs.core.get.call(null,map__9707__$1,new cljs.core.Keyword(null,"a-fn","a-fn",-979165273));
var gen_str_a = cljs.core.get.call(null,map__9707__$1,new cljs.core.Keyword(null,"gen-str-a","gen-str-a",1722083628));
return cljs.core.cons.call(null,expectations.compare_expr.call(null,e,(function (){try{return a_fn.call(null,a);
}catch (e9709){if((e9709 instanceof Error)){
var t = e9709;
return t;
} else {
throw e9709;

}
}})(),str_e__$1,gen_str_a.call(null,str_a)),expectations$iter__9694.call(null,cljs.core.rest.call(null,s__9695__$2)));
}
} else {
return null;
}
break;
}
});})(map__9692,map__9692__$1,es))
,null,null));
});})(map__9692,map__9692__$1,es))
;
return iter__6794__auto__.call(null,es);
})());
if(cljs.core.truth_(temp__4655__auto__)){
var failures = temp__4655__auto__;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"raw","raw",1604651272),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [str_e,str_a], null),new cljs.core.Keyword(null,"message","message",-406056002),expectations.platform.format.call(null,"actual val: %s",cljs.core.pr_str.call(null,a)),new cljs.core.Keyword(null,"list","list",765357683),cljs.core.mapv.call(null,((function (failures,temp__4655__auto__,map__9692,map__9692__$1,es){
return (function (p1__9690_SHARP_){
return cljs.core.assoc.call(null,p1__9690_SHARP_,new cljs.core.Keyword(null,"show-raw","show-raw",312153310),true);
});})(failures,temp__4655__auto__,map__9692,map__9692__$1,es))
,failures)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993)], null);
}
}));
cljs.core._add_method.call(null,expectations.compare_expr,new cljs.core.Keyword("expectations","in","expectations/in",-1616294280),(function (e,a,str_e,str_a){
if((cljs.core.sequential_QMARK_.call(null,new cljs.core.Keyword("expectations","in","expectations/in",-1616294280).cljs$core$IFn$_invoke$arity$1(a))) || (cljs.core.set_QMARK_.call(null,new cljs.core.Keyword("expectations","in","expectations/in",-1616294280).cljs$core$IFn$_invoke$arity$1(a)))){
if(cljs.core.truth_(expectations.find_successes.call(null,(function (){var iter__6794__auto__ = (function expectations$iter__9712(s__9713){
return (new cljs.core.LazySeq(null,(function (){
var s__9713__$1 = s__9713;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__9713__$1);
if(temp__4657__auto__){
var s__9713__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9713__$2)){
var c__6792__auto__ = cljs.core.chunk_first.call(null,s__9713__$2);
var size__6793__auto__ = cljs.core.count.call(null,c__6792__auto__);
var b__9715 = cljs.core.chunk_buffer.call(null,size__6793__auto__);
if((function (){var i__9714 = (0);
while(true){
if((i__9714 < size__6793__auto__)){
var a__$1 = cljs.core._nth.call(null,c__6792__auto__,i__9714);
cljs.core.chunk_append.call(null,b__9715,expectations.compare_expr.call(null,e,a__$1,str_e,str_a));

var G__9720 = (i__9714 + (1));
i__9714 = G__9720;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9715),expectations$iter__9712.call(null,cljs.core.chunk_rest.call(null,s__9713__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9715),null);
}
} else {
var a__$1 = cljs.core.first.call(null,s__9713__$2);
return cljs.core.cons.call(null,expectations.compare_expr.call(null,e,a__$1,str_e,str_a),expectations$iter__9712.call(null,cljs.core.rest.call(null,s__9713__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6794__auto__.call(null,new cljs.core.Keyword("expectations","in","expectations/in",-1616294280).cljs$core$IFn$_invoke$arity$1(a));
})()))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"raw","raw",1604651272),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [str_e,str_a], null),new cljs.core.Keyword(null,"list","list",765357683),cljs.core.map.call(null,(function (p1__9711_SHARP_){
return cljs.core.assoc.call(null,p1__9711_SHARP_,new cljs.core.Keyword(null,"show-raw","show-raw",312153310),true);
}),expectations.find_failures.call(null,(function (){var iter__6794__auto__ = (function expectations$iter__9716(s__9717){
return (new cljs.core.LazySeq(null,(function (){
var s__9717__$1 = s__9717;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__9717__$1);
if(temp__4657__auto__){
var s__9717__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9717__$2)){
var c__6792__auto__ = cljs.core.chunk_first.call(null,s__9717__$2);
var size__6793__auto__ = cljs.core.count.call(null,c__6792__auto__);
var b__9719 = cljs.core.chunk_buffer.call(null,size__6793__auto__);
if((function (){var i__9718 = (0);
while(true){
if((i__9718 < size__6793__auto__)){
var a__$1 = cljs.core._nth.call(null,c__6792__auto__,i__9718);
cljs.core.chunk_append.call(null,b__9719,expectations.compare_expr.call(null,e,a__$1,str_e,a__$1));

var G__9721 = (i__9718 + (1));
i__9718 = G__9721;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9719),expectations$iter__9716.call(null,cljs.core.chunk_rest.call(null,s__9717__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9719),null);
}
} else {
var a__$1 = cljs.core.first.call(null,s__9717__$2);
return cljs.core.cons.call(null,expectations.compare_expr.call(null,e,a__$1,str_e,a__$1),expectations$iter__9716.call(null,cljs.core.rest.call(null,s__9717__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6794__auto__.call(null,new cljs.core.Keyword("expectations","in","expectations/in",-1616294280).cljs$core$IFn$_invoke$arity$1(a));
})())),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(new cljs.core.Keyword("expectations","more","expectations/more",-1187281521).cljs$core$IFn$_invoke$arity$1(e))?str_e:expectations.platform.format.call(null,"val %s",cljs.core.pr_str.call(null,e))),"not found in",new cljs.core.Keyword("expectations","in","expectations/in",-1616294280).cljs$core$IFn$_invoke$arity$1(a)], null)], null);
}
} else {
if(cljs.core.truth_((function (){var and__6002__auto__ = cljs.core.map_QMARK_.call(null,new cljs.core.Keyword("expectations","in","expectations/in",-1616294280).cljs$core$IFn$_invoke$arity$1(a));
if(and__6002__auto__){
return new cljs.core.Keyword("expectations","more","expectations/more",-1187281521).cljs$core$IFn$_invoke$arity$1(e);
} else {
return and__6002__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"raw","raw",1604651272),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [str_e,str_a], null),new cljs.core.Keyword(null,"message","message",-406056002),"Using both 'in with a map and 'more is not supported."], null);
} else {
if(cljs.core.map_QMARK_.call(null,new cljs.core.Keyword("expectations","in","expectations/in",-1616294280).cljs$core$IFn$_invoke$arity$1(a))){
var a__$1 = new cljs.core.Keyword("expectations","in","expectations/in",-1616294280).cljs$core$IFn$_invoke$arity$1(a);
if(cljs.core._EQ_.call(null,e,cljs.core.select_keys.call(null,a__$1,cljs.core.keys.call(null,e)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected-message","expected-message",-615750006),expectations.platform.format.call(null,"in expected, not actual: %s",cljs.core.first.call(null,clojure.data.diff.call(null,e,a__$1))),new cljs.core.Keyword(null,"actual-message","actual-message",1010600886),expectations.platform.format.call(null,"in actual, not expected: %s",cljs.core.first.call(null,clojure.data.diff.call(null,a__$1,e))),new cljs.core.Keyword(null,"raw","raw",1604651272),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [str_e,str_a], null),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["expected:",cljs.core.pr_str.call(null,e),"in",cljs.core.pr_str.call(null,a__$1)], null)], null);
}
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"raw","raw",1604651272),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [str_e,str_a], null),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["You supplied:",cljs.core.pr_str.call(null,new cljs.core.Keyword("expectations","in","expectations/in",-1616294280).cljs$core$IFn$_invoke$arity$1(a))], null),new cljs.core.Keyword(null,"message","message",-406056002),"You must supply a list, set, or map when using (in)"], null);

}
}
}
}));
cljs.core._add_method.call(null,expectations.compare_expr,new cljs.core.Keyword("expectations","expect-instance","expectations/expect-instance",1758326554),(function (e,a,str_e,str_a){
if((a instanceof e)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"raw","raw",1604651272),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [str_e,str_a], null),new cljs.core.Keyword(null,"expected-message","expected-message",-615750006),[cljs.core.str("expected: "),cljs.core.str(a),cljs.core.str(" to be an instance of "),cljs.core.str(e)].join(''),new cljs.core.Keyword(null,"actual-message","actual-message",1010600886),[cljs.core.str("     was: "),cljs.core.str(a),cljs.core.str(" is an instance of "),cljs.core.str(cljs.core.type.call(null,a))].join('')], null);
}
}));
cljs.core._add_method.call(null,expectations.compare_expr,new cljs.core.Keyword("expectations","types","expectations/types",655900024),(function (e,a,str_e,str_a){
if(cljs.core.isa_QMARK_.call(null,a,e)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"raw","raw",1604651272),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [str_e,str_a], null),new cljs.core.Keyword(null,"expected-message","expected-message",-615750006),[cljs.core.str("expected: "),cljs.core.str(a),cljs.core.str(" to be a "),cljs.core.str(e)].join('')], null);
}
}));
cljs.core._add_method.call(null,expectations.compare_expr,new cljs.core.Keyword("expectations","actual-exception","expectations/actual-exception",-271507269),(function (e,a,str_e,str_a){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"raw","raw",1604651272),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [str_e,str_a], null),new cljs.core.Keyword(null,"actual-message","actual-message",1010600886),[cljs.core.str("exception in actual: "),cljs.core.str(str_a)].join(''),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null)], null);
}));
cljs.core._add_method.call(null,expectations.compare_expr,new cljs.core.Keyword("expectations","expected-exception","expectations/expected-exception",256433227),(function (e,a,str_e,str_a){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"raw","raw",1604651272),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [str_e,str_a], null),new cljs.core.Keyword(null,"expected-message","expected-message",-615750006),[cljs.core.str("exception in expected: "),cljs.core.str(str_e)].join(''),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e], null)], null);
}));
cljs.core._add_method.call(null,expectations.compare_expr,new cljs.core.Keyword("expectations","regexps","expectations/regexps",976628246),(function (e,a,str_e,str_a){
return expectations.compare_expr.call(null,[cljs.core.str(e)].join(''),[cljs.core.str(a)].join(''),str_e,str_a);
}));
cljs.core._add_method.call(null,expectations.compare_expr,new cljs.core.Keyword("expectations","re-seq","expectations/re-seq",1017362038),(function (e,a,str_e,str_a){
if(cljs.core.truth_(cljs.core.re_seq.call(null,e,a))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"raw","raw",1604651272),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [str_e,str_a], null),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["regex",cljs.core.pr_str.call(null,e),"not found in",cljs.core.pr_str.call(null,a)], null)], null);
}
}));
cljs.core._add_method.call(null,expectations.compare_expr,new cljs.core.Keyword("expectations","strings","expectations/strings",-1987464060),(function (e,a,str_e,str_a){
var matches = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,cljs.core.first,cljs.core.take_while.call(null,cljs.core.partial.call(null,cljs.core.apply,cljs.core._EQ_),cljs.core.map.call(null,cljs.core.vector,e,a))));
var e_diverges = clojure.string.replace.call(null,e,matches,"");
var a_diverges = clojure.string.replace.call(null,a,matches,"");
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"raw","raw",1604651272),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [str_e,str_a], null),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["expected:",cljs.core.pr_str.call(null,e),"\n                was:",cljs.core.pr_str.call(null,a)], null),new cljs.core.Keyword(null,"message","message",-406056002),[cljs.core.str("matches: "),cljs.core.str(cljs.core.pr_str.call(null,matches)),cljs.core.str("\n           diverges: "),cljs.core.str(cljs.core.pr_str.call(null,e_diverges)),cljs.core.str("\n                  &: "),cljs.core.str(cljs.core.pr_str.call(null,a_diverges))].join('')], null);
}));
cljs.core._add_method.call(null,expectations.compare_expr,new cljs.core.Keyword("expectations","expect-exception","expectations/expect-exception",-625804045),(function (e,a,str_e,str_a){
if((a instanceof e)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"raw","raw",1604651272),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [str_e,str_a], null),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [str_a,"did not throw",str_e], null)], null);
}
}));
cljs.core._add_method.call(null,expectations.compare_expr,new cljs.core.Keyword("expectations","maps","expectations/maps",-1640972023),(function (e,a,str_e,str_a){
var vec__9722 = clojure.data.diff.call(null,e,a);
var in_e = cljs.core.nth.call(null,vec__9722,(0),null);
var in_a = cljs.core.nth.call(null,vec__9722,(1),null);
if(((in_e == null)) && ((in_a == null))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected-message","expected-message",-615750006),(function (){var G__9723 = in_e;
if((G__9723 == null)){
return null;
} else {
return expectations.platform.format.call(null,"in expected, not actual: %s",G__9723);
}
})(),new cljs.core.Keyword(null,"actual-message","actual-message",1010600886),(function (){var G__9724 = in_a;
if((G__9724 == null)){
return null;
} else {
return expectations.platform.format.call(null,"in actual, not expected: %s",G__9724);
}
})(),new cljs.core.Keyword(null,"raw","raw",1604651272),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [str_e,str_a], null),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["expected:",cljs.core.pr_str.call(null,e),"\n                was:",cljs.core.pr_str.call(null,a)], null)], null);
}
}));
cljs.core._add_method.call(null,expectations.compare_expr,new cljs.core.Keyword("expectations","sets","expectations/sets",63554325),(function (e,a,str_e,str_a){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"actual-message","actual-message",1010600886),expectations.platform.format.call(null,"in actual, not expected: %s",cljs.core.first.call(null,clojure.data.diff.call(null,a,e))),new cljs.core.Keyword(null,"expected-message","expected-message",-615750006),expectations.platform.format.call(null,"in expected, not actual: %s",cljs.core.first.call(null,clojure.data.diff.call(null,e,a))),new cljs.core.Keyword(null,"raw","raw",1604651272),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [str_e,str_a], null),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["expected:",e,"\n                was:",cljs.core.pr_str.call(null,a)], null)], null);
}));
cljs.core._add_method.call(null,expectations.compare_expr,new cljs.core.Keyword("expectations","sequentials","expectations/sequentials",160347083),(function (e,a,str_e,str_a){
var diff_fn = (function (e__$1,a__$1){
return cljs.core.seq.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,e__$1),cljs.core.set.call(null,a__$1)));
});
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"actual-message","actual-message",1010600886),expectations.platform.format.call(null,"in actual, not expected: %s",cljs.core.first.call(null,clojure.data.diff.call(null,a,e))),new cljs.core.Keyword(null,"expected-message","expected-message",-615750006),expectations.platform.format.call(null,"in expected, not actual: %s",cljs.core.first.call(null,clojure.data.diff.call(null,e,a))),new cljs.core.Keyword(null,"raw","raw",1604651272),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [str_e,str_a], null),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["expected:",e,"\n                was:",cljs.core.pr_str.call(null,a)], null),new cljs.core.Keyword(null,"message","message",-406056002),(((cljs.core._EQ_.call(null,cljs.core.set.call(null,e),cljs.core.set.call(null,a))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,e),cljs.core.count.call(null,a))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,e),cljs.core.count.call(null,cljs.core.set.call(null,a)))))?"lists appear to contain the same items with different ordering":(((cljs.core._EQ_.call(null,cljs.core.set.call(null,e),cljs.core.set.call(null,a))) && ((cljs.core.count.call(null,e) < cljs.core.count.call(null,a))))?"some duplicate items in actual are not expected":(((cljs.core._EQ_.call(null,cljs.core.set.call(null,e),cljs.core.set.call(null,a))) && ((cljs.core.count.call(null,e) > cljs.core.count.call(null,a))))?"some duplicate items in expected are not actual":(((cljs.core.count.call(null,e) < cljs.core.count.call(null,a)))?"actual is larger than expected":(((cljs.core.count.call(null,e) > cljs.core.count.call(null,a)))?"expected is larger than actual":null)))))], null);
}));
if(typeof expectations.localize !== 'undefined'){
} else {
expectations.localize = (function (){var method_table__6938__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__6939__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__6940__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__6941__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__6942__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"expectations","localize"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__6942__auto__,method_table__6938__auto__,prefer_table__6939__auto__,method_cache__6940__auto__,cached_hierarchy__6941__auto__));
})();
}
cljs.core._add_method.call(null,expectations.localize,cljs.core.Atom,(function (a){
return cljs.core.atom.call(null,cljs.core.deref.call(null,a));
}));
cljs.core._add_method.call(null,expectations.localize,new cljs.core.Keyword(null,"default","default",-1987822328),(function (v){
return v;
}));

//# sourceMappingURL=expectations.js.map