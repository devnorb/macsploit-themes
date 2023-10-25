#!/bin/bash

main() {
    cd /Applications/MacSploit.app/Contents/Resources/CodeViewer_CodeViewer.bundle/Contents/Resources/ace.bundle
    echo -e "Downloading the Floppa theme..."
    curl "https://raw.githubusercontent.com/devnorb/macsploit-themes/main/floppa.js" -o "./theme-tomorrow_night.js"
    echo -e "Theme install complete!"
}

main
