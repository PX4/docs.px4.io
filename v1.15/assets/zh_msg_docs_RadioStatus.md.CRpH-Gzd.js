import{_ as s,c as a,o as e,ab as i}from"./chunks/framework.CUflZczI.js";const E=JSON.parse('{"title":"RadioStatus (UORB message)","description":"","frontmatter":{},"headers":[],"relativePath":"zh/msg_docs/RadioStatus.md","filePath":"zh/msg_docs/RadioStatus.md"}'),t={name:"zh/msg_docs/RadioStatus.md"},n=i(`<h1 id="radiostatus-uorb-message" tabindex="-1">RadioStatus (UORB message) <a class="header-anchor" href="#radiostatus-uorb-message" aria-label="Permalink to &quot;RadioStatus (UORB message)&quot;">​</a></h1><p><a href="https://github.com/PX4/PX4-Autopilot/blob/release/1.15/msg/RadioStatus.msg" target="_blank" rel="noreferrer">源文件</a></p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uint64 timestamp    # time since system </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (microseconds)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uint8 rssi              # local signal strength</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uint8 remote_rssi           # remote signal strength</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uint8 txbuf             # how full the tx buffer is as a percentage</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uint8 noise             # background noise level</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uint8 remote_noise          # remote background noise level</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uint16 rxerrors             # receive errors</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uint16 fix              # count of error corrected packets</span></span></code></pre></div>`,3),l=[n];function r(o,p,c,h,d,k){return e(),a("div",null,l)}const g=s(t,[["render",r]]);export{E as __pageData,g as default};
