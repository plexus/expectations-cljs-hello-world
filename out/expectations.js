// Compiled by ClojureScript 1.8.40 {}
goog.provide('expectations');
goog.require('cljs.core');
goog.require('clojure.data');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('expectations.platform');
expectations.no_op = (function expectations$no_op(var_args){
var args__7090__auto__ = [];
var len__7083__auto___10503 = arguments.length;
var i__7084__auto___10504 = (0);
while(true){
if((i__7084__auto___10504 < len__7083__auto___10503)){
args__7090__auto__.push((arguments[i__7084__auto___10504]));

var G__10505 = (i__7084__auto___10504 + (1));
i__7084__auto___10504 = G__10505;
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

expectations.no_op.cljs$lang$applyTo = (function (seq10502){
return expectations.no_op.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10502));
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
var len__7083__auto___10508 = arguments.length;
var i__7084__auto___10509 = (0);
while(true){
if((i__7084__auto___10509 < len__7083__auto___10508)){
args__7090__auto__.push((arguments[i__7084__auto___10509]));

var G__10510 = (i__7084__auto___10509 + (1));
i__7084__auto___10509 = G__10510;
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

expectations.color.cljs$lang$applyTo = (function (seq10506){
var G__10507 = cljs.core.first.call(null,seq10506);
var seq10506__$1 = cljs.core.next.call(null,seq10506);
return expectations.color.cljs$core$IFn$_invoke$arity$variadic(G__10507,seq10506__$1);
});
expectations.colorize_filename = (function expectations$colorize_filename(s){
var pred__10514 = cljs.core._EQ_;
var expr__10515 = expectations.colorize_choice.call(null);
if(cljs.core.truth_(pred__10514.call(null,"TRUE",expr__10515))){
return expectations.color.call(null,new cljs.core.Keyword(null,"magenta","magenta",1687937081),s);
} else {
return s;
}
});
expectations.colorize_raw = (function expectations$colorize_raw(s){
var pred__10520 = cljs.core._EQ_;
var expr__10521 = expectations.colorize_choice.call(null);
if(cljs.core.truth_(pred__10520.call(null,"TRUE",expr__10521))){
return expectations.color.call(null,new cljs.core.Keyword(null,"cyan","cyan",1118839274),s);
} else {
return s;
}
});
expectations.colorize_results = (function expectations$colorize_results(pred,s){
var pred__10526 = cljs.core._EQ_;
var expr__10527 = expectations.colorize_choice.call(null);
if(cljs.core.truth_(pred__10526.call(null,"TRUE",expr__10527))){
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
var pred__10532 = cljs.core._EQ_;
var expr__10533 = expectations.colorize_choice.call(null);
if(cljs.core.truth_(pred__10532.call(null,"TRUE",expr__10533))){
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
expectations.test_name = (function expectations$test_name(p__10535){
var map__10538 = p__10535;
var map__10538__$1 = ((((!((map__10538 == null)))?((((map__10538.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10538.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10538):map__10538);
var line = cljs.core.get.call(null,map__10538__$1,new cljs.core.Keyword(null,"line","line",212345235));
var ns = cljs.core.get.call(null,map__10538__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return [cljs.core.str(ns),cljs.core.str(":"),cljs.core.str(line)].join('');
});
expectations.test_file = (function expectations$test_file(p__10540){
var map__10543 = p__10540;
var map__10543__$1 = ((((!((map__10543 == null)))?((((map__10543.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10543.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10543):map__10543);
var file = cljs.core.get.call(null,map__10543__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__10543__$1,new cljs.core.Keyword(null,"line","line",212345235));
return expectations.colorize_filename.call(null,[cljs.core.str(cljs.core.last.call(null,cljs.core.re_seq.call(null,/[0-9A-Za-z_\.]+/,file))),cljs.core.str(":"),cljs.core.str(line)].join(''));
});
expectations.raw_str = (function expectations$raw_str(p__10545){
var vec__10549 = p__10545;
var e = cljs.core.nth.call(null,vec__10549,(0),null);
var a = cljs.core.nth.call(null,vec__10549,(1),null);
var sb__6999__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_10550_10552 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_10551_10553 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_10550_10552,_STAR_print_fn_STAR_10551_10553,sb__6999__auto__,vec__10549,e,a){
return (function (x__7000__auto__){
return sb__6999__auto__.append(x__7000__auto__);
});})(_STAR_print_newline_STAR_10550_10552,_STAR_print_fn_STAR_10551_10553,sb__6999__auto__,vec__10549,e,a))
;

try{expectations.platform.pprint.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"expect","expect",470404175,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,e),cljs.core._conj.call(null,cljs.core.List.EMPTY,a)))));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_10551_10553;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_10550_10552;
}
return [cljs.core.str(sb__6999__auto__)].join('');
});
expectations.pp_str = (function expectations$pp_str(e){
return clojure.string.trim.call(null,(function (){var sb__6999__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_10556_10558 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_10557_10559 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_10556_10558,_STAR_print_fn_STAR_10557_10559,sb__6999__auto__){
return (function (x__7000__auto__){
return sb__6999__auto__.append(x__7000__auto__);
});})(_STAR_print_newline_STAR_10556_10558,_STAR_print_fn_STAR_10557_10559,sb__6999__auto__))
;

try{expectations.platform.pprint.call(null,e);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_10557_10559;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_10556_10558;
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
expectations.ignored_fns = (function expectations$ignored_fns(p__10560){
var map__10563 = p__10560;
var map__10563__$1 = ((((!((map__10563 == null)))?((((map__10563.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10563.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10563):map__10563);
var className = cljs.core.get.call(null,map__10563__$1,new cljs.core.Keyword(null,"className","className",-1983287057));
var fileName = cljs.core.get.call(null,map__10563__$1,new cljs.core.Keyword(null,"fileName","fileName",1063478601));
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
expectations.stackline__GT_str = (function expectations$stackline__GT_str(p__10565){
var map__10568 = p__10565;
var map__10568__$1 = ((((!((map__10568 == null)))?((((map__10568.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10568.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10568):map__10568);
var className = cljs.core.get.call(null,map__10568__$1,new cljs.core.Keyword(null,"className","className",-1983287057));
var methodName = cljs.core.get.call(null,map__10568__$1,new cljs.core.Keyword(null,"methodName","methodName",-2055958885));
var fileName = cljs.core.get.call(null,map__10568__$1,new cljs.core.Keyword(null,"fileName","fileName",1063478601));
var lineNumber = cljs.core.get.call(null,map__10568__$1,new cljs.core.Keyword(null,"lineNumber","lineNumber",974255001));
if(cljs.core._EQ_.call(null,methodName,"invoke")){
return [cljs.core.str("           on ("),cljs.core.str(fileName),cljs.core.str(":"),cljs.core.str(lineNumber),cljs.core.str(")")].join('');
} else {
return [cljs.core.str("           "),cljs.core.str(className),cljs.core.str("$"),cljs.core.str(methodName),cljs.core.str(" ("),cljs.core.str(fileName),cljs.core.str(":"),cljs.core.str(lineNumber),cljs.core.str(")")].join('');
}
});
expectations.pruned_stack_trace = (function expectations$pruned_stack_trace(t){
return t.stack;
});
expectations.__GT_failure_message = (function expectations$__GT_failure_message(p__10571){
var map__10576 = p__10571;
var map__10576__$1 = ((((!((map__10576 == null)))?((((map__10576.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10576.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10576):map__10576);
var raw = cljs.core.get.call(null,map__10576__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
var ref_data = cljs.core.get.call(null,map__10576__$1,new cljs.core.Keyword(null,"ref-data","ref-data",743306603));
var result = cljs.core.get.call(null,map__10576__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var expected_message = cljs.core.get.call(null,map__10576__$1,new cljs.core.Keyword(null,"expected-message","expected-message",-615750006));
var actual_message = cljs.core.get.call(null,map__10576__$1,new cljs.core.Keyword(null,"actual-message","actual-message",1010600886));
var message = cljs.core.get.call(null,map__10576__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var list = cljs.core.get.call(null,map__10576__$1,new cljs.core.Keyword(null,"list","list",765357683));
var show_raw = cljs.core.get.call(null,map__10576__$1,new cljs.core.Keyword(null,"show-raw","show-raw",312153310));
return expectations.string_join.call(null,"\n",new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(expectations.reminder)?expectations.colorize_warn.call(null,[cljs.core.str("     ***** "),cljs.core.str(clojure.string.upper_case.call(null,expectations.reminder)),cljs.core.str(" *****")].join('')):null),(cljs.core.truth_(raw)?(cljs.core.truth_((function (){var or__6014__auto__ = show_raw;
if(cljs.core.truth_(or__6014__auto__)){
return or__6014__auto__;
} else {
return expectations.show_raw_choice.call(null);
}
})())?expectations.colorize_raw.call(null,expectations.raw_str.call(null,raw)):null):null),(function (){var temp__4657__auto__ = ref_data;
if(cljs.core.truth_(temp__4657__auto__)){
var vec__10578 = temp__4657__auto__;
var n1 = cljs.core.nth.call(null,vec__10578,(0),null);
var v1 = cljs.core.nth.call(null,vec__10578,(1),null);
var _ = cljs.core.nthnext.call(null,vec__10578,(2));
return expectations.platform.format.call(null,"             locals %s: %s",n1,cljs.core.pr_str.call(null,v1));
} else {
return null;
}
})(),(function (){var temp__4657__auto__ = ref_data;
if(cljs.core.truth_(temp__4657__auto__)){
var vec__10579 = temp__4657__auto__;
var _ = cljs.core.nth.call(null,vec__10579,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__10579,(1),null);
var the_rest = cljs.core.nthnext.call(null,vec__10579,(2));
if(cljs.core.truth_(the_rest)){
return expectations.string_join.call(null,"\n",cljs.core.map.call(null,((function (vec__10579,_,___$1,the_rest,temp__4657__auto__,map__10576,map__10576__$1,raw,ref_data,result,expected_message,actual_message,message,list,show_raw){
return (function (p1__10570_SHARP_){
return expectations.platform.format.call(null,"                    %s: %s",cljs.core.first.call(null,p1__10570_SHARP_),cljs.core.pr_str.call(null,cljs.core.second.call(null,p1__10570_SHARP_)));
});})(vec__10579,_,___$1,the_rest,temp__4657__auto__,map__10576,map__10576__$1,raw,ref_data,result,expected_message,actual_message,message,list,show_raw))
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
cljs.core._add_method.call(null,expectations.report,new cljs.core.Keyword(null,"error","error",-978969032),(function (p__10580){
var map__10581 = p__10580;
var map__10581__$1 = ((((!((map__10581 == null)))?((((map__10581.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10581.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10581):map__10581);
var m = map__10581__$1;
var result = cljs.core.get.call(null,map__10581__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var raw = cljs.core.get.call(null,map__10581__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
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
cljs.core._add_method.call(null,expectations.report,new cljs.core.Keyword(null,"summary","summary",380847952),(function (p__10583){
var map__10584 = p__10583;
var map__10584__$1 = ((((!((map__10584 == null)))?((((map__10584.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10584.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10584):map__10584);
var test = cljs.core.get.call(null,map__10584__$1,new cljs.core.Keyword(null,"test","test",577538877));
var pass = cljs.core.get.call(null,map__10584__$1,new cljs.core.Keyword(null,"pass","pass",1574159993));
var fail = cljs.core.get.call(null,map__10584__$1,new cljs.core.Keyword(null,"fail","fail",1706214930));
var error = cljs.core.get.call(null,map__10584__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var run_time = cljs.core.get.call(null,map__10584__$1,new cljs.core.Keyword(null,"run-time","run-time",-1231674133));
var ignored_expectations = cljs.core.get.call(null,map__10584__$1,new cljs.core.Keyword(null,"ignored-expectations","ignored-expectations",303531187));
return expectations.summary.call(null,[cljs.core.str("\nRan "),cljs.core.str(test),cljs.core.str(" tests containing "),cljs.core.str(((pass + fail) + error)),cljs.core.str(" assertions in "),cljs.core.str(run_time),cljs.core.str(" msecs\n"),cljs.core.str((((ignored_expectations > (0)))?expectations.colorize_warn.call(null,[cljs.core.str("IGNORED "),cljs.core.str(ignored_expectations),cljs.core.str(" EXPECTATIONS\n")].join('')):null)),cljs.core.str(expectations.colorize_results.call(null,cljs.core.partial.call(null,cljs.core._EQ_,(0),fail,error),[cljs.core.str(fail),cljs.core.str(" failures, "),cljs.core.str(error),cljs.core.str(" errors")].join(''))),cljs.core.str(".")].join(''));
}));
expectations.disable_run_on_shutdown = (function expectations$disable_run_on_shutdown(){
return cljs.core.reset_BANG_.call(null,expectations.run_tests_on_shutdown,false);
});
expectations.warn_on_iref_updates = (function expectations$warn_on_iref_updates(){
return cljs.core.reset_BANG_.call(null,expectations.warn_on_iref_updates_boolean,true);
});
expectations.add_watch_every_iref_for_updates = (function expectations$add_watch_every_iref_for_updates(iref_vars){
var seq__10590 = cljs.core.seq.call(null,iref_vars);
var chunk__10591 = null;
var count__10592 = (0);
var i__10593 = (0);
while(true){
if((i__10593 < count__10592)){
var var$ = cljs.core._nth.call(null,chunk__10591,i__10593);
cljs.core.add_watch.call(null,cljs.core.deref.call(null,var$),new cljs.core.Keyword("expectations","expectations-watching-state-modifications","expectations/expectations-watching-state-modifications",1804238518),((function (seq__10590,chunk__10591,count__10592,i__10593,var$){
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
});})(seq__10590,chunk__10591,count__10592,i__10593,var$))
);

var G__10594 = seq__10590;
var G__10595 = chunk__10591;
var G__10596 = count__10592;
var G__10597 = (i__10593 + (1));
seq__10590 = G__10594;
chunk__10591 = G__10595;
count__10592 = G__10596;
i__10593 = G__10597;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__10590);
if(temp__4657__auto__){
var seq__10590__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10590__$1)){
var c__6825__auto__ = cljs.core.chunk_first.call(null,seq__10590__$1);
var G__10598 = cljs.core.chunk_rest.call(null,seq__10590__$1);
var G__10599 = c__6825__auto__;
var G__10600 = cljs.core.count.call(null,c__6825__auto__);
var G__10601 = (0);
seq__10590 = G__10598;
chunk__10591 = G__10599;
count__10592 = G__10600;
i__10593 = G__10601;
continue;
} else {
var var$ = cljs.core.first.call(null,seq__10590__$1);
cljs.core.add_watch.call(null,cljs.core.deref.call(null,var$),new cljs.core.Keyword("expectations","expectations-watching-state-modifications","expectations/expectations-watching-state-modifications",1804238518),((function (seq__10590,chunk__10591,count__10592,i__10593,var$,seq__10590__$1,temp__4657__auto__){
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
});})(seq__10590,chunk__10591,count__10592,i__10593,var$,seq__10590__$1,temp__4657__auto__))
);

var G__10602 = cljs.core.next.call(null,seq__10590__$1);
var G__10603 = null;
var G__10604 = (0);
var G__10605 = (0);
seq__10590 = G__10602;
chunk__10591 = G__10603;
count__10592 = G__10604;
i__10593 = G__10605;
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
var seq__10610 = cljs.core.seq.call(null,iref_vars);
var chunk__10611 = null;
var count__10612 = (0);
var i__10613 = (0);
while(true){
if((i__10613 < count__10612)){
var var$ = cljs.core._nth.call(null,chunk__10611,i__10613);
cljs.core.remove_watch.call(null,cljs.core.deref.call(null,var$),new cljs.core.Keyword("expectations","expectations-watching-state-modifications","expectations/expectations-watching-state-modifications",1804238518));

var G__10614 = seq__10610;
var G__10615 = chunk__10611;
var G__10616 = count__10612;
var G__10617 = (i__10613 + (1));
seq__10610 = G__10614;
chunk__10611 = G__10615;
count__10612 = G__10616;
i__10613 = G__10617;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__10610);
if(temp__4657__auto__){
var seq__10610__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10610__$1)){
var c__6825__auto__ = cljs.core.chunk_first.call(null,seq__10610__$1);
var G__10618 = cljs.core.chunk_rest.call(null,seq__10610__$1);
var G__10619 = c__6825__auto__;
var G__10620 = cljs.core.count.call(null,c__6825__auto__);
var G__10621 = (0);
seq__10610 = G__10618;
chunk__10611 = G__10619;
count__10612 = G__10620;
i__10613 = G__10621;
continue;
} else {
var var$ = cljs.core.first.call(null,seq__10610__$1);
cljs.core.remove_watch.call(null,cljs.core.deref.call(null,var$),new cljs.core.Keyword("expectations","expectations-watching-state-modifications","expectations/expectations-watching-state-modifications",1804238518));

var G__10622 = cljs.core.next.call(null,seq__10610__$1);
var G__10623 = null;
var G__10624 = (0);
var G__10625 = (0);
seq__10610 = G__10622;
chunk__10611 = G__10623;
count__10612 = G__10624;
i__10613 = G__10625;
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

var _STAR_test_name_STAR_10630_10634 = expectations._STAR_test_name_STAR_;
var _STAR_test_meta_STAR_10631_10635 = expectations._STAR_test_meta_STAR_;
var _STAR_test_var_STAR_10632_10636 = expectations._STAR_test_var_STAR_;
expectations._STAR_test_name_STAR_ = tn;

expectations._STAR_test_meta_STAR_ = tm;

expectations._STAR_test_var_STAR_ = v;

try{try{t.call(null);
}catch (e10633){if((e10633 instanceof Error)){
var e_10637 = e10633;
cljs.core.println.call(null,"\nunexpected error in",tn);

expectations.platform.print_stack_trace.call(null,e_10637);
} else {
throw e10633;

}
}}finally {expectations._STAR_test_var_STAR_ = _STAR_test_var_STAR_10632_10636;

expectations._STAR_test_meta_STAR_ = _STAR_test_meta_STAR_10631_10635;

expectations._STAR_test_name_STAR_ = _STAR_test_name_STAR_10630_10634;
}
return expectations.finished.call(null,tn,tm);
} else {
return null;
}
});
expectations.execute_vars = (function expectations$execute_vars(vars){
var seq__10642 = cljs.core.seq.call(null,vars);
var chunk__10643 = null;
var count__10644 = (0);
var i__10645 = (0);
while(true){
if((i__10645 < count__10644)){
var var$ = cljs.core._nth.call(null,chunk__10643,i__10645);
if(cljs.core.truth_(expectations.platform.bound_QMARK_.call(null,var$))){
var temp__4657__auto___10646 = cljs.core.deref.call(null,var$);
if(cljs.core.truth_(temp__4657__auto___10646)){
var vv_10647 = temp__4657__auto___10646;
vv_10647.call(null);
} else {
}
} else {
}

var G__10648 = seq__10642;
var G__10649 = chunk__10643;
var G__10650 = count__10644;
var G__10651 = (i__10645 + (1));
seq__10642 = G__10648;
chunk__10643 = G__10649;
count__10644 = G__10650;
i__10645 = G__10651;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__10642);
if(temp__4657__auto__){
var seq__10642__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10642__$1)){
var c__6825__auto__ = cljs.core.chunk_first.call(null,seq__10642__$1);
var G__10652 = cljs.core.chunk_rest.call(null,seq__10642__$1);
var G__10653 = c__6825__auto__;
var G__10654 = cljs.core.count.call(null,c__6825__auto__);
var G__10655 = (0);
seq__10642 = G__10652;
chunk__10643 = G__10653;
count__10644 = G__10654;
i__10645 = G__10655;
continue;
} else {
var var$ = cljs.core.first.call(null,seq__10642__$1);
if(cljs.core.truth_(expectations.platform.bound_QMARK_.call(null,var$))){
var temp__4657__auto___10656__$1 = cljs.core.deref.call(null,var$);
if(cljs.core.truth_(temp__4657__auto___10656__$1)){
var vv_10657 = temp__4657__auto___10656__$1;
vv_10657.call(null);
} else {
}
} else {
}

var G__10658 = cljs.core.next.call(null,seq__10642__$1);
var G__10659 = null;
var G__10660 = (0);
var G__10661 = (0);
seq__10642 = G__10658;
chunk__10643 = G__10659;
count__10644 = G__10660;
i__10645 = G__10661;
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
var G__10663 = cljs.core.count.call(null,in_context_vars);
switch (G__10663) {
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

var _STAR_report_counters_STAR_10680 = expectations._STAR_report_counters_STAR_;
expectations._STAR_report_counters_STAR_ = cljs.core.atom.call(null,expectations.initial_report_counters);

try{var ns__GT_vars = cljs.core.group_by.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.meta),cljs.core.sort_by.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.meta),new cljs.core.Keyword(null,"expectation","expectation",-250416721).cljs$core$IFn$_invoke$arity$1(vars_by_kind)));
var start = expectations.platform.nano_time.call(null);
var in_context_vars = cljs.core.vec.call(null,new cljs.core.Keyword(null,"in-context","in-context",-673372070).cljs$core$IFn$_invoke$arity$1(vars_by_kind));
var seq__10681_10695 = cljs.core.seq.call(null,ns__GT_vars);
var chunk__10682_10696 = null;
var count__10683_10697 = (0);
var i__10684_10698 = (0);
while(true){
if((i__10684_10698 < count__10683_10697)){
var vec__10685_10699 = cljs.core._nth.call(null,chunk__10682_10696,i__10684_10698);
var a_ns_10700 = cljs.core.nth.call(null,vec__10685_10699,(0),null);
var the_vars_10701 = cljs.core.nth.call(null,vec__10685_10699,(1),null);
var seq__10686_10702 = cljs.core.seq.call(null,the_vars_10701);
var chunk__10687_10703 = null;
var count__10688_10704 = (0);
var i__10689_10705 = (0);
while(true){
if((i__10689_10705 < count__10688_10704)){
var v_10706 = cljs.core._nth.call(null,chunk__10687_10703,i__10689_10705);
expectations.create_context.call(null,in_context_vars,cljs.core.with_meta(((function (seq__10686_10702,chunk__10687_10703,count__10688_10704,i__10689_10705,seq__10681_10695,chunk__10682_10696,count__10683_10697,i__10684_10698,v_10706,vec__10685_10699,a_ns_10700,the_vars_10701,ns__GT_vars,start,in_context_vars,_STAR_report_counters_STAR_10680){
return (function (){
return expectations.test_var.call(null,v_10706);
});})(seq__10686_10702,chunk__10687_10703,count__10688_10704,i__10689_10705,seq__10681_10695,chunk__10682_10696,count__10683_10697,i__10684_10698,v_10706,vec__10685_10699,a_ns_10700,the_vars_10701,ns__GT_vars,start,in_context_vars,_STAR_report_counters_STAR_10680))
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"the-var","the-var",1428415613),v_10706], null)));

expectations.expectation_finished.call(null,v_10706);

var G__10707 = seq__10686_10702;
var G__10708 = chunk__10687_10703;
var G__10709 = count__10688_10704;
var G__10710 = (i__10689_10705 + (1));
seq__10686_10702 = G__10707;
chunk__10687_10703 = G__10708;
count__10688_10704 = G__10709;
i__10689_10705 = G__10710;
continue;
} else {
var temp__4657__auto___10711 = cljs.core.seq.call(null,seq__10686_10702);
if(temp__4657__auto___10711){
var seq__10686_10712__$1 = temp__4657__auto___10711;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10686_10712__$1)){
var c__6825__auto___10713 = cljs.core.chunk_first.call(null,seq__10686_10712__$1);
var G__10714 = cljs.core.chunk_rest.call(null,seq__10686_10712__$1);
var G__10715 = c__6825__auto___10713;
var G__10716 = cljs.core.count.call(null,c__6825__auto___10713);
var G__10717 = (0);
seq__10686_10702 = G__10714;
chunk__10687_10703 = G__10715;
count__10688_10704 = G__10716;
i__10689_10705 = G__10717;
continue;
} else {
var v_10718 = cljs.core.first.call(null,seq__10686_10712__$1);
expectations.create_context.call(null,in_context_vars,cljs.core.with_meta(((function (seq__10686_10702,chunk__10687_10703,count__10688_10704,i__10689_10705,seq__10681_10695,chunk__10682_10696,count__10683_10697,i__10684_10698,v_10718,seq__10686_10712__$1,temp__4657__auto___10711,vec__10685_10699,a_ns_10700,the_vars_10701,ns__GT_vars,start,in_context_vars,_STAR_report_counters_STAR_10680){
return (function (){
return expectations.test_var.call(null,v_10718);
});})(seq__10686_10702,chunk__10687_10703,count__10688_10704,i__10689_10705,seq__10681_10695,chunk__10682_10696,count__10683_10697,i__10684_10698,v_10718,seq__10686_10712__$1,temp__4657__auto___10711,vec__10685_10699,a_ns_10700,the_vars_10701,ns__GT_vars,start,in_context_vars,_STAR_report_counters_STAR_10680))
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"the-var","the-var",1428415613),v_10718], null)));

expectations.expectation_finished.call(null,v_10718);

var G__10719 = cljs.core.next.call(null,seq__10686_10712__$1);
var G__10720 = null;
var G__10721 = (0);
var G__10722 = (0);
seq__10686_10702 = G__10719;
chunk__10687_10703 = G__10720;
count__10688_10704 = G__10721;
i__10689_10705 = G__10722;
continue;
}
} else {
}
}
break;
}

expectations.ns_finished.call(null,expectations.platform.ns_name.call(null,a_ns_10700));

var G__10723 = seq__10681_10695;
var G__10724 = chunk__10682_10696;
var G__10725 = count__10683_10697;
var G__10726 = (i__10684_10698 + (1));
seq__10681_10695 = G__10723;
chunk__10682_10696 = G__10724;
count__10683_10697 = G__10725;
i__10684_10698 = G__10726;
continue;
} else {
var temp__4657__auto___10727 = cljs.core.seq.call(null,seq__10681_10695);
if(temp__4657__auto___10727){
var seq__10681_10728__$1 = temp__4657__auto___10727;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10681_10728__$1)){
var c__6825__auto___10729 = cljs.core.chunk_first.call(null,seq__10681_10728__$1);
var G__10730 = cljs.core.chunk_rest.call(null,seq__10681_10728__$1);
var G__10731 = c__6825__auto___10729;
var G__10732 = cljs.core.count.call(null,c__6825__auto___10729);
var G__10733 = (0);
seq__10681_10695 = G__10730;
chunk__10682_10696 = G__10731;
count__10683_10697 = G__10732;
i__10684_10698 = G__10733;
continue;
} else {
var vec__10690_10734 = cljs.core.first.call(null,seq__10681_10728__$1);
var a_ns_10735 = cljs.core.nth.call(null,vec__10690_10734,(0),null);
var the_vars_10736 = cljs.core.nth.call(null,vec__10690_10734,(1),null);
var seq__10691_10737 = cljs.core.seq.call(null,the_vars_10736);
var chunk__10692_10738 = null;
var count__10693_10739 = (0);
var i__10694_10740 = (0);
while(true){
if((i__10694_10740 < count__10693_10739)){
var v_10741 = cljs.core._nth.call(null,chunk__10692_10738,i__10694_10740);
expectations.create_context.call(null,in_context_vars,cljs.core.with_meta(((function (seq__10691_10737,chunk__10692_10738,count__10693_10739,i__10694_10740,seq__10681_10695,chunk__10682_10696,count__10683_10697,i__10684_10698,v_10741,vec__10690_10734,a_ns_10735,the_vars_10736,seq__10681_10728__$1,temp__4657__auto___10727,ns__GT_vars,start,in_context_vars,_STAR_report_counters_STAR_10680){
return (function (){
return expectations.test_var.call(null,v_10741);
});})(seq__10691_10737,chunk__10692_10738,count__10693_10739,i__10694_10740,seq__10681_10695,chunk__10682_10696,count__10683_10697,i__10684_10698,v_10741,vec__10690_10734,a_ns_10735,the_vars_10736,seq__10681_10728__$1,temp__4657__auto___10727,ns__GT_vars,start,in_context_vars,_STAR_report_counters_STAR_10680))
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"the-var","the-var",1428415613),v_10741], null)));

expectations.expectation_finished.call(null,v_10741);

var G__10742 = seq__10691_10737;
var G__10743 = chunk__10692_10738;
var G__10744 = count__10693_10739;
var G__10745 = (i__10694_10740 + (1));
seq__10691_10737 = G__10742;
chunk__10692_10738 = G__10743;
count__10693_10739 = G__10744;
i__10694_10740 = G__10745;
continue;
} else {
var temp__4657__auto___10746__$1 = cljs.core.seq.call(null,seq__10691_10737);
if(temp__4657__auto___10746__$1){
var seq__10691_10747__$1 = temp__4657__auto___10746__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10691_10747__$1)){
var c__6825__auto___10748 = cljs.core.chunk_first.call(null,seq__10691_10747__$1);
var G__10749 = cljs.core.chunk_rest.call(null,seq__10691_10747__$1);
var G__10750 = c__6825__auto___10748;
var G__10751 = cljs.core.count.call(null,c__6825__auto___10748);
var G__10752 = (0);
seq__10691_10737 = G__10749;
chunk__10692_10738 = G__10750;
count__10693_10739 = G__10751;
i__10694_10740 = G__10752;
continue;
} else {
var v_10753 = cljs.core.first.call(null,seq__10691_10747__$1);
expectations.create_context.call(null,in_context_vars,cljs.core.with_meta(((function (seq__10691_10737,chunk__10692_10738,count__10693_10739,i__10694_10740,seq__10681_10695,chunk__10682_10696,count__10683_10697,i__10684_10698,v_10753,seq__10691_10747__$1,temp__4657__auto___10746__$1,vec__10690_10734,a_ns_10735,the_vars_10736,seq__10681_10728__$1,temp__4657__auto___10727,ns__GT_vars,start,in_context_vars,_STAR_report_counters_STAR_10680){
return (function (){
return expectations.test_var.call(null,v_10753);
});})(seq__10691_10737,chunk__10692_10738,count__10693_10739,i__10694_10740,seq__10681_10695,chunk__10682_10696,count__10683_10697,i__10684_10698,v_10753,seq__10691_10747__$1,temp__4657__auto___10746__$1,vec__10690_10734,a_ns_10735,the_vars_10736,seq__10681_10728__$1,temp__4657__auto___10727,ns__GT_vars,start,in_context_vars,_STAR_report_counters_STAR_10680))
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"the-var","the-var",1428415613),v_10753], null)));

expectations.expectation_finished.call(null,v_10753);

var G__10754 = cljs.core.next.call(null,seq__10691_10747__$1);
var G__10755 = null;
var G__10756 = (0);
var G__10757 = (0);
seq__10691_10737 = G__10754;
chunk__10692_10738 = G__10755;
count__10693_10739 = G__10756;
i__10694_10740 = G__10757;
continue;
}
} else {
}
}
break;
}

expectations.ns_finished.call(null,expectations.platform.ns_name.call(null,a_ns_10735));

var G__10758 = cljs.core.next.call(null,seq__10681_10728__$1);
var G__10759 = null;
var G__10760 = (0);
var G__10761 = (0);
seq__10681_10695 = G__10758;
chunk__10682_10696 = G__10759;
count__10683_10697 = G__10760;
i__10684_10698 = G__10761;
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
}finally {expectations._STAR_report_counters_STAR_ = _STAR_report_counters_STAR_10680;
}});
expectations.run_tests_in_vars = (function expectations$run_tests_in_vars(vars_by_kind){
var G__10763 = cljs.core.assoc.call(null,expectations.test_vars.call(null,vars_by_kind,(0)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952));
expectations.report.call(null,G__10763);

return G__10763;
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
}catch (e10766){if((e10766 instanceof Error)){
var ex = e10766;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"raw","raw",1604651272),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [str_e,str_a], null),new cljs.core.Keyword(null,"expected-message","expected-message",-615750006),[cljs.core.str("also attempted: ("),cljs.core.str(str_e),cljs.core.str(" "),cljs.core.str(str_a),cljs.core.str(")")].join(''),new cljs.core.Keyword(null,"actual-message","actual-message",1010600886),[cljs.core.str("       and got: "),cljs.core.str(expectations.platform.get_message.call(null,ex))].join(''),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["expected:",str_e,"\n                was:",cljs.core.pr_str.call(null,a)], null)], null);
} else {
throw e10766;

}
}}));
expectations.find_failures = (function expectations$find_failures(the_seq){
return cljs.core.seq.call(null,cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.comp.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pass","pass",1574159993),null], null), null),new cljs.core.Keyword(null,"type","type",1174270348)),the_seq)));
});
expectations.find_successes = (function expectations$find_successes(the_seq){
return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pass","pass",1574159993),null], null), null),new cljs.core.Keyword(null,"type","type",1174270348)),the_seq));
});
cljs.core._add_method.call(null,expectations.compare_expr,new cljs.core.Keyword("expectations","from-each","expectations/from-each",-1067663208),(function (e,p__10768,str_e,str_a){
var map__10769 = p__10768;
var map__10769__$1 = ((((!((map__10769 == null)))?((((map__10769.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10769.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10769):map__10769);
var a = cljs.core.get.call(null,map__10769__$1,new cljs.core.Keyword("expectations","from-each","expectations/from-each",-1067663208));
var str_i_a = cljs.core.get.call(null,map__10769__$1,new cljs.core.Keyword("expectations","from-each-body","expectations/from-each-body",-1647304945));
var temp__4655__auto__ = expectations.find_failures.call(null,(function (){var iter__6794__auto__ = ((function (map__10769,map__10769__$1,a,str_i_a){
return (function expectations$iter__10771(s__10772){
return (new cljs.core.LazySeq(null,((function (map__10769,map__10769__$1,a,str_i_a){
return (function (){
var s__10772__$1 = s__10772;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__10772__$1);
if(temp__4657__auto__){
var s__10772__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10772__$2)){
var c__6792__auto__ = cljs.core.chunk_first.call(null,s__10772__$2);
var size__6793__auto__ = cljs.core.count.call(null,c__6792__auto__);
var b__10774 = cljs.core.chunk_buffer.call(null,size__6793__auto__);
if((function (){var i__10773 = (0);
while(true){
if((i__10773 < size__6793__auto__)){
var map__10779 = cljs.core._nth.call(null,c__6792__auto__,i__10773);
var map__10779__$1 = ((((!((map__10779 == null)))?((((map__10779.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10779.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10779):map__10779);
var ts = cljs.core.get.call(null,map__10779__$1,new cljs.core.Keyword("expectations","the-result","expectations/the-result",268799287));
var rd = cljs.core.get.call(null,map__10779__$1,new cljs.core.Keyword("expectations","ref-data","expectations/ref-data",303734692));
cljs.core.chunk_append.call(null,b__10774,cljs.core.assoc.call(null,expectations.compare_expr.call(null,e,ts,str_e,str_i_a),new cljs.core.Keyword(null,"ref-data","ref-data",743306603),rd));

var G__10783 = (i__10773 + (1));
i__10773 = G__10783;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10774),expectations$iter__10771.call(null,cljs.core.chunk_rest.call(null,s__10772__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10774),null);
}
} else {
var map__10781 = cljs.core.first.call(null,s__10772__$2);
var map__10781__$1 = ((((!((map__10781 == null)))?((((map__10781.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10781.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10781):map__10781);
var ts = cljs.core.get.call(null,map__10781__$1,new cljs.core.Keyword("expectations","the-result","expectations/the-result",268799287));
var rd = cljs.core.get.call(null,map__10781__$1,new cljs.core.Keyword("expectations","ref-data","expectations/ref-data",303734692));
return cljs.core.cons.call(null,cljs.core.assoc.call(null,expectations.compare_expr.call(null,e,ts,str_e,str_i_a),new cljs.core.Keyword(null,"ref-data","ref-data",743306603),rd),expectations$iter__10771.call(null,cljs.core.rest.call(null,s__10772__$2)));
}
} else {
return null;
}
break;
}
});})(map__10769,map__10769__$1,a,str_i_a))
,null,null));
});})(map__10769,map__10769__$1,a,str_i_a))
;
return iter__6794__auto__.call(null,a);
})());
if(cljs.core.truth_(temp__4655__auto__)){
var failures = temp__4655__auto__;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"raw","raw",1604651272),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [str_e,str_a], null),new cljs.core.Keyword(null,"message","message",-406056002),expectations.platform.format.call(null,"the list: %s",cljs.core.pr_str.call(null,cljs.core.map.call(null,((function (failures,temp__4655__auto__,map__10769,map__10769__$1,a,str_i_a){
return (function (x){
var temp__4655__auto____$1 = new cljs.core.Keyword("expectations","in","expectations/in",-1616294280).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(temp__4655__auto____$1)){
var y = temp__4655__auto____$1;
return y;
} else {
return x;
}
});})(failures,temp__4655__auto__,map__10769,map__10769__$1,a,str_i_a))
,cljs.core.map.call(null,new cljs.core.Keyword("expectations","the-result","expectations/the-result",268799287),a)))),new cljs.core.Keyword(null,"list","list",765357683),cljs.core.mapv.call(null,((function (failures,temp__4655__auto__,map__10769,map__10769__$1,a,str_i_a){
return (function (p1__10767_SHARP_){
return cljs.core.assoc.call(null,p1__10767_SHARP_,new cljs.core.Keyword(null,"show-raw","show-raw",312153310),true);
});})(failures,temp__4655__auto__,map__10769,map__10769__$1,a,str_i_a))
,failures)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993)], null);
}
}));
cljs.core._add_method.call(null,expectations.compare_expr,new cljs.core.Keyword("expectations","more","expectations/more",-1187281521),(function (p__10785,a,str_e,str_a){
var map__10786 = p__10785;
var map__10786__$1 = ((((!((map__10786 == null)))?((((map__10786.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10786.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10786):map__10786);
var es = cljs.core.get.call(null,map__10786__$1,new cljs.core.Keyword("expectations","more","expectations/more",-1187281521));
var temp__4655__auto__ = expectations.find_failures.call(null,(function (){var iter__6794__auto__ = ((function (map__10786,map__10786__$1,es){
return (function expectations$iter__10788(s__10789){
return (new cljs.core.LazySeq(null,((function (map__10786,map__10786__$1,es){
return (function (){
var s__10789__$1 = s__10789;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__10789__$1);
if(temp__4657__auto__){
var s__10789__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10789__$2)){
var c__6792__auto__ = cljs.core.chunk_first.call(null,s__10789__$2);
var size__6793__auto__ = cljs.core.count.call(null,c__6792__auto__);
var b__10791 = cljs.core.chunk_buffer.call(null,size__6793__auto__);
if((function (){var i__10790 = (0);
while(true){
if((i__10790 < size__6793__auto__)){
var map__10798 = cljs.core._nth.call(null,c__6792__auto__,i__10790);
var map__10798__$1 = ((((!((map__10798 == null)))?((((map__10798.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10798.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10798):map__10798);
var e = cljs.core.get.call(null,map__10798__$1,new cljs.core.Keyword(null,"e","e",1381269198));
var str_e__$1 = cljs.core.get.call(null,map__10798__$1,new cljs.core.Keyword(null,"str-e","str-e",2007824807));
var a_fn = cljs.core.get.call(null,map__10798__$1,new cljs.core.Keyword(null,"a-fn","a-fn",-979165273));
var gen_str_a = cljs.core.get.call(null,map__10798__$1,new cljs.core.Keyword(null,"gen-str-a","gen-str-a",1722083628));
cljs.core.chunk_append.call(null,b__10791,expectations.compare_expr.call(null,e,(function (){try{return a_fn.call(null,a);
}catch (e10800){if((e10800 instanceof Error)){
var t = e10800;
return t;
} else {
throw e10800;

}
}})(),str_e__$1,gen_str_a.call(null,str_a)));

var G__10804 = (i__10790 + (1));
i__10790 = G__10804;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10791),expectations$iter__10788.call(null,cljs.core.chunk_rest.call(null,s__10789__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10791),null);
}
} else {
var map__10801 = cljs.core.first.call(null,s__10789__$2);
var map__10801__$1 = ((((!((map__10801 == null)))?((((map__10801.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10801.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10801):map__10801);
var e = cljs.core.get.call(null,map__10801__$1,new cljs.core.Keyword(null,"e","e",1381269198));
var str_e__$1 = cljs.core.get.call(null,map__10801__$1,new cljs.core.Keyword(null,"str-e","str-e",2007824807));
var a_fn = cljs.core.get.call(null,map__10801__$1,new cljs.core.Keyword(null,"a-fn","a-fn",-979165273));
var gen_str_a = cljs.core.get.call(null,map__10801__$1,new cljs.core.Keyword(null,"gen-str-a","gen-str-a",1722083628));
return cljs.core.cons.call(null,expectations.compare_expr.call(null,e,(function (){try{return a_fn.call(null,a);
}catch (e10803){if((e10803 instanceof Error)){
var t = e10803;
return t;
} else {
throw e10803;

}
}})(),str_e__$1,gen_str_a.call(null,str_a)),expectations$iter__10788.call(null,cljs.core.rest.call(null,s__10789__$2)));
}
} else {
return null;
}
break;
}
});})(map__10786,map__10786__$1,es))
,null,null));
});})(map__10786,map__10786__$1,es))
;
return iter__6794__auto__.call(null,es);
})());
if(cljs.core.truth_(temp__4655__auto__)){
var failures = temp__4655__auto__;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"raw","raw",1604651272),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [str_e,str_a], null),new cljs.core.Keyword(null,"message","message",-406056002),expectations.platform.format.call(null,"actual val: %s",cljs.core.pr_str.call(null,a)),new cljs.core.Keyword(null,"list","list",765357683),cljs.core.mapv.call(null,((function (failures,temp__4655__auto__,map__10786,map__10786__$1,es){
return (function (p1__10784_SHARP_){
return cljs.core.assoc.call(null,p1__10784_SHARP_,new cljs.core.Keyword(null,"show-raw","show-raw",312153310),true);
});})(failures,temp__4655__auto__,map__10786,map__10786__$1,es))
,failures)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993)], null);
}
}));
cljs.core._add_method.call(null,expectations.compare_expr,new cljs.core.Keyword("expectations","in","expectations/in",-1616294280),(function (e,a,str_e,str_a){
if((cljs.core.sequential_QMARK_.call(null,new cljs.core.Keyword("expectations","in","expectations/in",-1616294280).cljs$core$IFn$_invoke$arity$1(a))) || (cljs.core.set_QMARK_.call(null,new cljs.core.Keyword("expectations","in","expectations/in",-1616294280).cljs$core$IFn$_invoke$arity$1(a)))){
if(cljs.core.truth_(expectations.find_successes.call(null,(function (){var iter__6794__auto__ = (function expectations$iter__10806(s__10807){
return (new cljs.core.LazySeq(null,(function (){
var s__10807__$1 = s__10807;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__10807__$1);
if(temp__4657__auto__){
var s__10807__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10807__$2)){
var c__6792__auto__ = cljs.core.chunk_first.call(null,s__10807__$2);
var size__6793__auto__ = cljs.core.count.call(null,c__6792__auto__);
var b__10809 = cljs.core.chunk_buffer.call(null,size__6793__auto__);
if((function (){var i__10808 = (0);
while(true){
if((i__10808 < size__6793__auto__)){
var a__$1 = cljs.core._nth.call(null,c__6792__auto__,i__10808);
cljs.core.chunk_append.call(null,b__10809,expectations.compare_expr.call(null,e,a__$1,str_e,str_a));

var G__10814 = (i__10808 + (1));
i__10808 = G__10814;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10809),expectations$iter__10806.call(null,cljs.core.chunk_rest.call(null,s__10807__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10809),null);
}
} else {
var a__$1 = cljs.core.first.call(null,s__10807__$2);
return cljs.core.cons.call(null,expectations.compare_expr.call(null,e,a__$1,str_e,str_a),expectations$iter__10806.call(null,cljs.core.rest.call(null,s__10807__$2)));
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
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"raw","raw",1604651272),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [str_e,str_a], null),new cljs.core.Keyword(null,"list","list",765357683),cljs.core.map.call(null,(function (p1__10805_SHARP_){
return cljs.core.assoc.call(null,p1__10805_SHARP_,new cljs.core.Keyword(null,"show-raw","show-raw",312153310),true);
}),expectations.find_failures.call(null,(function (){var iter__6794__auto__ = (function expectations$iter__10810(s__10811){
return (new cljs.core.LazySeq(null,(function (){
var s__10811__$1 = s__10811;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__10811__$1);
if(temp__4657__auto__){
var s__10811__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10811__$2)){
var c__6792__auto__ = cljs.core.chunk_first.call(null,s__10811__$2);
var size__6793__auto__ = cljs.core.count.call(null,c__6792__auto__);
var b__10813 = cljs.core.chunk_buffer.call(null,size__6793__auto__);
if((function (){var i__10812 = (0);
while(true){
if((i__10812 < size__6793__auto__)){
var a__$1 = cljs.core._nth.call(null,c__6792__auto__,i__10812);
cljs.core.chunk_append.call(null,b__10813,expectations.compare_expr.call(null,e,a__$1,str_e,a__$1));

var G__10815 = (i__10812 + (1));
i__10812 = G__10815;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10813),expectations$iter__10810.call(null,cljs.core.chunk_rest.call(null,s__10811__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10813),null);
}
} else {
var a__$1 = cljs.core.first.call(null,s__10811__$2);
return cljs.core.cons.call(null,expectations.compare_expr.call(null,e,a__$1,str_e,a__$1),expectations$iter__10810.call(null,cljs.core.rest.call(null,s__10811__$2)));
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
if(cljs.core.truth_((function (){var and__6002__auto__ = a;
if(cljs.core.truth_(and__6002__auto__)){
return cljs.core.re_seq.call(null,e,a);
} else {
return and__6002__auto__;
}
})())){
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
var vec__10816 = clojure.data.diff.call(null,e,a);
var in_e = cljs.core.nth.call(null,vec__10816,(0),null);
var in_a = cljs.core.nth.call(null,vec__10816,(1),null);
if(((in_e == null)) && ((in_a == null))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected-message","expected-message",-615750006),(function (){var G__10817 = in_e;
if((G__10817 == null)){
return null;
} else {
return expectations.platform.format.call(null,"in expected, not actual: %s",G__10817);
}
})(),new cljs.core.Keyword(null,"actual-message","actual-message",1010600886),(function (){var G__10818 = in_a;
if((G__10818 == null)){
return null;
} else {
return expectations.platform.format.call(null,"in actual, not expected: %s",G__10818);
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