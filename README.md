# selected-work

A curated showcase of Marion Moranetz's working portfolio: iOS apps, web experiences, research artifacts and operator tools.

Live at **https://moranetz.github.io/selected-work/**

## What's here

`index.html` is a single-page gallery of about 35 selected projects in six groups:

1. **Persuasion-training suite.** Three iOS games built for App Store submission (Reality Distortion, MindCraft, ViralIQ).
2. **Persuasion and influence training.** iOS and web apps for practicing influence mechanics.
3. **Atmospheric and narrative games.** Native SwiftUI games drawn with Canvas or SpriteKit.
4. **Decision and productivity.** Local-first iOS apps for hard thinking.
5. **Research artifacts and operator tools.** Public repos such as Atlas, LSM, Persuasion-Max, AE Playbook and GTM Teardowns.
6. **Web experiences.** Interactive HTML, Canvas and React pieces.

## What's not here

About 100 more repos are private. Most are unfinished experiments, abandoned prototypes, client work, or apps headed for the App Store that stay closed until launch.

## How it is checked

`tests/check-links.mjs` requests every external link on the page and fails if any answers with something other than 200, so a project repo that goes private shows up as a failed run before a visitor finds the dead link. GitHub Actions runs it on every push and every Monday.

```
node tests/check-links.mjs
```

## License

MIT. Use the design pattern (an HTML and CSS gallery on static hosting) for your own work if it helps.
