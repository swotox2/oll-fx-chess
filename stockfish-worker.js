/* Stockfish 19 Full · single-threaded WebAssembly worker.
   The JS glue and matching full NNUE WASM are fetched from the pinned npm release. */
'use strict';
const ENGINE_BASE = 'https://cdn.jsdelivr.net/npm/stockfish@19.0.1/bin/';
self.Module = {
  locateFile(path) {
    return new URL(path, ENGINE_BASE).href;
  }
};
importScripts(new URL('stockfish-19-single.js', ENGINE_BASE).href);
