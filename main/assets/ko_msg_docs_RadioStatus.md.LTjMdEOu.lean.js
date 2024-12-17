import{_ as a,c as t,a8 as i,o as e}from"./chunks/framework.BDnHobkS.js";const k=JSON.parse('{"title":"RadioStatus (UORB message)","description":"","frontmatter":{},"headers":[],"relativePath":"ko/msg_docs/RadioStatus.md","filePath":"ko/msg_docs/RadioStatus.md"}'),n={name:"ko/msg_docs/RadioStatus.md"};function l(r,s,o,p,c,h){return e(),t("div",null,s[0]||(s[0]=[i(`<h1 id="radiostatus-uorb-message" tabindex="-1">RadioStatus (UORB message) <a class="header-anchor" href="#radiostatus-uorb-message" aria-label="Permalink to &quot;RadioStatus (UORB message)&quot;">​</a></h1><p><a href="https://github.com/PX4/PX4-Autopilot/blob/main/msg/RadioStatus.msg" target="_blank" rel="noreferrer">source file</a></p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uint64 timestamp	# time since system </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (microseconds)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uint8 rssi				# local signal strength</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uint8 remote_rssi			# remote signal strength</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uint8 txbuf				# how full the tx buffer is as a percentage</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uint8 noise				# background noise level</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uint8 remote_noise			# remote background noise level</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uint16 rxerrors				# receive errors</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uint16 fix				# count of error corrected packets</span></span></code></pre></div>`,3)]))}const u=a(n,[["render",l]]);export{k as __pageData,u as default};
