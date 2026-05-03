function baixarPerfilConfigurado() {
    const fps = localStorage.getItem('otm_fps') || "60";
    const jitter = localStorage.getItem('otm_jitter') || "0.1";

    const configContent = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>PayloadContent</key>
    <array>
        <dict>
            <key>PayloadType</key>
            <string>com.apple.accessibility.touchaccommodations</string>
            <key>pointScanSpeed</key>
            <real>${fps}</real>
            <key>touchAccommodationsIgnoreRepeatDuration</key>
            <real>${jitter}</real>
        </dict>
    </array>
    <key>PayloadDisplayName</key>
    <string>Oliveira_OTM V3 - Elite</string>
    <key>PayloadIdentifier</key>
    <string>com.oliveira.v3.elite</string>
    <key>PayloadType</key>
    <string>Configuration</string>
    <key>PayloadUUID</key>
    <string>D1E2F3G4-H5I6-7J8K-L9M0-N1O2P3Q4R5S6</string>
</dict>
</plist>`;

    const blob = new Blob([configContent], { type: 'application/x-apple-aspen-config' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = "Oliveira_OTM_V3.mobileconfig";
    link.click();
}