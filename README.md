# oll.fx Chess — Self-play + Stockfish 19 Full

A browser chessboard for one person to play both colors. Stockfish 19 Full analyzes the current position and highlights its best move; it never makes a move for you.

## Run it

Serve this folder over HTTPS or localhost (recommended):

```bash
python -m http.server 8000
```

Then open http://localhost:8000. A modern browser and an internet connection are required for the first engine load.

## Engine build

The page loads the **full, single-threaded Stockfish 19 WebAssembly build**, not Lite, from the pinned `stockfish@19.0.1` package on jsDelivr:

- `stockfish-19-single.js`
- `stockfish-19-single.wasm`

The full engine assets are approximately 94 MB in total. They are fetched only by the browser and cached by the browser/CDN where supported. Single-threaded Full does not require cross-origin isolation headers; it still uses the full NNUE network. The page pins the versioned package URL to avoid accidentally loading a different engine release.

## Controls

- You control White and Black. Select a piece, then a destination; drag-and-drop also works.
- Stockfish analyzes the side to move and highlights the best move with origin/destination markers and an arrow.
- Change analysis depth or press **Analyze position** to run a fresh search.
- Stockfish never moves pieces. You decide whether to play the suggestion.
- New game, undo, board flip, promotion, legal move markers, move list and draw claims are included.

## Notes

The rules and board UI are in `index.html`; `stockfish-worker.js` loads the engine in a dedicated worker. The engine is an external, unmodified WebAssembly build. Stockfish.js and Stockfish are GPL-3.0; see the linked source and license in the app's engine panel.
