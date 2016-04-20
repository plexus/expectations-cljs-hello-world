(ns expectations-cljs-hello-world.core-test
  (:require-macros [expectations :refer [expect]]))

(expect 1 1)
(expect 1 2)
(expect 1 3)
