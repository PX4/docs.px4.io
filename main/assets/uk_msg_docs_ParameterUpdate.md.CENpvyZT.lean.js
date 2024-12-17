import{_ as a,c as n,a8 as i,o as t}from"./chunks/framework.BDnHobkS.js";const d=JSON.parse('{"title":"Оновлення параметрів (Повідомлення UORB)","description":"","frontmatter":{},"headers":[],"relativePath":"uk/msg_docs/ParameterUpdate.md","filePath":"uk/msg_docs/ParameterUpdate.md"}'),e={name:"uk/msg_docs/ParameterUpdate.md"};function p(l,s,r,h,c,o){return t(),n("div",null,s[0]||(s[0]=[i(`<h1 id="оновлення-параметрів-повідомлення-uorb" tabindex="-1">Оновлення параметрів (Повідомлення UORB) <a class="header-anchor" href="#оновлення-параметрів-повідомлення-uorb" aria-label="Permalink to &quot;Оновлення параметрів (Повідомлення UORB)&quot;">​</a></h1><p>Це повідомлення використовується для повідомлення системі про одну або кілька змін параметрів</p><p><a href="https://github.com/PX4/PX4-Autopilot/blob/main/msg/ParameterUpdate.msg" target="_blank" rel="noreferrer">source file</a></p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"># This message is used to notify the system about one or more parameter changes</span></span>
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
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uint16 custom_default</span></span></code></pre></div>`,4)]))}const E=a(e,[["render",p]]);export{d as __pageData,E as default};
