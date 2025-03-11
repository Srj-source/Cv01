    document.addEventListener("DOMContentLoaded", function () {
    // Prevent right-click
    document.addEventListener("contextmenu", (e) => e.preventDefault());

    // Prevent common keyboard shortcuts (DevTools, Print, Save, View Source)
    document.addEventListener("keydown", (e) => {
        const blockedKeys = [
            { ctrl: true, key: ["i", "j", "u", "s", "p"] }, // Ctrl + (I, J, U, S, P)
            { key: ["F12"] }, // F12
        ];

        blockedKeys.forEach((combo) => {
            if (
                (combo.ctrl && e.ctrlKey && combo.key.includes(e.key.toLowerCase())) ||
                (combo.key.includes(e.key))
            ) {
                e.preventDefault();
                alert("This action is disabled.");
            }
        });
    });

    // Prevent text copying, cutting, and dragging images
    ["copy", "cut", "dragstart"].forEach((event) => {
        document.addEventListener(event, (e) => {
            if (e.type === "dragstart" && e.target.tagName !== "IMG") return;
            e.preventDefault();
        });
    });

    // Prevent long-press on images (touch devices)
    document.addEventListener("touchstart", (e) => {
        if (e.target.tagName === "IMG") e.preventDefault();
    });

    // Detect unauthorized browser extensions
    (function detectExtensions() {
        let iframe = document.createElement("iframe");
        iframe.style.display = "none";
        document.body.appendChild(iframe);
        setTimeout(() => {
            if (!iframe.contentWindow.chrome) {
                alert("Unauthorized browser extensions detected!");
                window.location.href = "about:blank";
            }
        }, 1000);
    })();

    // Hide content when the user switches tabs
    document.addEventListener("visibilitychange", () => {
        document.body.style.display = document.hidden ? "none" : "block";
    });

    // Detect three-finger touch gestures
    document.addEventListener(
        "touchstart",
        (event) => {
            if (event.touches.length > 2) event.preventDefault();
        },
        { passive: false }
    );

    // Prevent printing via JavaScript, context menu, or browser menu
    window.onbeforeprint = () => {
        alert("Printing is not allowed.");
        return false;
    };
    window.print = () => {
        alert("Printing is not allowed.");
        return false;
    };

    // Detect volume button changes (if supported)
    let lastVolume = 0;
    if (navigator.mediaSession) {
        window.addEventListener("volumechange", () => {
            let currentVolume = navigator.mediaSession.volume;
            if (currentVolume !== lastVolume) {
                alert("Volume button detected! Screenshots are restricted.");
                lastVolume = currentVolume;
            }
        });
    }
});