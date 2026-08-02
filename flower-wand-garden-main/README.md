# Flower Wand

Point your index finger at the camera and flowers grow along the trail.
Open your hand and they scatter like fireworks.

## Setup

```bash
npm install
curl -o public/models/hand_landmarker.task \
  https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task
npm run dev
```

Open http://localhost:3000 and allow camera access.

## Adding your flowers

1. Drop PNGs into `public/flowers/`
2. List their filenames in `public/flowers/manifest.json`

**PNG specs:** 512x512, transparent PNG-24, flower centered with roughly 15%
padding on all sides so rotation never clips. Keep each file under ~80KB.
They render between 34 and 80px on canvas, so 512 leaves room for retina
displays and the scale-up during a burst.

## Tuning

Everything worth adjusting lives in `CONFIG` at the top of `lib/garden.ts`:
spacing between flowers, size range, breathing speed and depth, gravity,
fade rate, and the flower cap.

Gesture sensitivity lives in `lib/hands.ts` (the y-thresholds) and at the top
of `components/FlowerWand.tsx` (`BURST_FRAMES`, `BURST_COOLDOWN_MS`).

## Deploying

Push to GitHub, import in Vercel, done. No env vars needed. Camera access
requires HTTPS, which Vercel gives you automatically.
