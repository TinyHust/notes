# sequenceDiagram

REF

- [https://github.com/mermaid-js/mermaid/blob/develop/docs/sequenceDiagram.md](https://github.com/mermaid-js/mermaid/blob/develop/docs/sequenceDiagram.md)
- [https://sequencediagram.org/instructions.html](https://sequencediagram.org/instructions.html)

```mermaid
sequenceDiagram

    ShowManager->> ShowManager : playVideo
    ShowManager->> VideoSystem : init
    VideoSystem->>onVideoEvent: subscribe
    VideoSystem->> SubtitleSystem : init
    loop onVideo event
        onVideoEvent->>VideoSystem: notify video event
    end
    ShowManager->> SubtitleSystem : subscribe.onCueBeginListeners
    loop onUpdate(dt)
        VideoSystem->>SubtitleSystem: time progressed
        loop check for cues to fire
            SubtitleSystem->>SubtitleSystem: check for cues to fire
            SubtitleSystem->>SubtitleSystem : onCueBeginListeners: notify cue began
            SubtitleSystem-->>ShowManager : runAction
        end
    end

```
