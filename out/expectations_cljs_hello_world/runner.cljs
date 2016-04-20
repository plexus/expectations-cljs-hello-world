(ns expectations-cljs-hello-world.runner
  (:require-macros [expectations.cljs :refer [run-all-tests]])
  (:require [expectations :as e]
            [doo.runner :as doo]
            [expectations-cljs-hello-world.core-test]))

(doo/set-entry-point! (fn [] (run-all-tests)))
