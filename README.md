# oll.fx Chess — UI update

This update adds:
- Selected-piece inspection: name, color, square, relative value and movement rules.
- Smooth move arrival, selection and best-move arrow animations.
- Soft synthesized move, capture, check, castle and promotion sounds.
- A sound on/off setting remembered on this device.
- Warm green, walnut and midnight board palettes (no slate/grey board theme).
- Suppressed blue mobile tap-highlight while retaining visible keyboard focus.

## Install over your existing Termux/GitHub Pages project

Copy this ZIP to Android Downloads, then in Termux run:

```bash
cd ~/oll-fx-chess
unzip -o ~/storage/downloads/oll_fx_chess_pro_v2.zip -d .
git add index.html README.md favicon.svg manifest.webmanifest .nojekyll
git commit -m "Polish board visuals, piece info and move sounds"
git push
```

**Do not delete or replace `engine/`.** The existing `engine/stockfish-19-single.js` and matching `.wasm` file stay in place and remain the Stockfish 19 Full build.

This is a static-site update. GitHub Pages serves the files; visitors do not need Termux. The first visit still downloads the large WebAssembly engine.
