function baixarPerfilConfigurado() {
    // 1. Puxa os dados que o Rollout identificou (ou usa o padrão)
    const fps = localStorage.getItem('otm_fps') || "60";
    const jitter = localStorage.getItem('otm_jitter') || "0.1";
    
    // 2. Estrutura oficial da Apple (XML/Plist)
    const meuPerfil = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>PayloadContent</key>
    <array>
        <dict>
            <key>PayloadType</key>
            <string>com.apple.accessibility.touchaccommodations</string>
            <key>PayloadIdentifier</key>
            <string>com.oliveira.v3.touch</string>
            <key>PayloadUUID</key>
            <string>${Math.random().toString(36).substring(2, 15)}</string>
            <key>PayloadVersion</key>
            <integer>1</integer>
            <key>pointScanSpeed</key>
            <real>${fps}</real>
            <key>touchAccommodationsIgnoreRepeatDuration</key>
            <real>${jitter}</real>
        </dict>
    </array>
    <key>PayloadDisplayName</key>
    <string>Oliveira_OTM V3 Elite</string>
    <key>PayloadIdentifier</key>
    <string>com.oliveira.v3.main</string>
    <key>PayloadRemovalDisallowed</key>
    <false/>
    <key>PayloadType</key>
    <string>Configuration</string>
    <key>PayloadUUID</key>
    <string>${Math.random().toString(36).substring(2, 15)}</string>
    <key>PayloadVersion</key>
    <integer>1</integer>
</dict>
</plist>`;

    // 3. Cria o Blob (o arquivo invisível na memória)
    const blob = new Blob([meuPerfil], { type: 'application/x-apple-aspen-config' });
    
    // 4. Cria o link de download forçado
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = "Oliveira_OTM_V3_Assinado.mobileconfig";
    
    // 5. Simula o toque para baixar
    document.body.appendChild(a);
    a.click();
    
    // Limpeza
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
    
    console.log("Perfil Gerado com FPS:", fps);
}
