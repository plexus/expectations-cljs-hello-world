(defproject expectations-cljs-hello-world "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.8.40"]
                 [expectations "2.1.8"]]

  :plugins [[lein-doo "0.1.6"]]

  :cljsbuild {:builds [{:id "test"
                        :source-paths ["src" "test"]
                        :compiler {:output-to "resources/public/js/testable.js"
                                   :main expectations-cljs-hello-world.runner
                                   :optimizations :none}}
                       {:id "test-node"
                        :source-paths ["src" "test"]
                        :compiler {:output-to "resources/public/js/testable.js"
                                   :main expectations-cljs-hello-world.runner
                                   :optimizations :none
                                   :target :nodejs}}]}

  :doo {:build "test"
        :paths {:karma "./node_modules/.bin/karma"}})
