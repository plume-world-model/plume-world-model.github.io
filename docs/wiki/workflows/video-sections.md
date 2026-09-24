# Video Sections

The page embeds local MP4 files with a repeated figure and caption pattern.

Last updated: 2026-09-24

Related: [Index](../index.md), [Overview](../overview.md)

## Source

See [index.html](../../../index.html) and the video card rules in `static/css/index.css`.

## Workflow

Add a group inside the Simulation or Hardware section with a `simulation-method` wrapper. Each card uses Bulma column classes, a `video` element with a local `static/videos/*.mp4` source, and a `figcaption`. The green PLUME caption uses the `plume` class. Numbered hardware demonstrations use `PLUME (Ours) #N` captions, with `(Ours)` in a `small` element.

The HRI Prototype 5 Screwdriver hardware group uses `proto5_plume_cropped_1.mp4` and `proto5_plume_cropped_2.mp4` as demonstrations #1 and #2.
