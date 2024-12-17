import{_ as a,c as e,a8 as t,o as n}from"./chunks/framework.BDnHobkS.js";const k=JSON.parse('{"title":"ParameterUpdate (UORB message)","description":"","frontmatter":{},"headers":[],"relativePath":"ko/msg_docs/ParameterUpdate.md","filePath":"ko/msg_docs/ParameterUpdate.md"}'),i={name:"ko/msg_docs/ParameterUpdate.md"};function p(l,s,r,h,o,c){return n(),e("div",null,s[0]||(s[0]=[t(`<h1 id="parameterupdate-uorb-message" tabindex="-1">ParameterUpdate (UORB message) <a class="header-anchor" href="#parameterupdate-uorb-message" aria-label="Permalink to &quot;ParameterUpdate (UORB message)&quot;">​</a></h1><p>This message is used to notify the system about one or more parameter changes</p><p><a href="https://github.com/PX4/PX4-Autopilot/blob/main/msg/ParameterUpdate.msg" target="_blank" rel="noreferrer">source file</a></p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"># This message is used to notify the system about one or more parameter changes</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uint64 timestamp		# time since system </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (microseconds)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uint32 instance		# Instance count </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> constantly incrementing</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uint32 get_count</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uint32 set_count</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uint32 find_count</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uint32 export_count</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uint16 active</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uint16 changed</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uint16 custom_default</span></span></code></pre></div>`,4)]))}const m=a(i,[["render",p]]);export{k as __pageData,m as default};
