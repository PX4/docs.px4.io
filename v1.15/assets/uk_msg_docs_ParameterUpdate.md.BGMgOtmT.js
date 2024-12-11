import{_ as s,c as a,o as n,ab as i}from"./chunks/framework.CUflZczI.js";const u=JSON.parse('{"title":"Оновлення параметрів (Повідомлення UORB)","description":"","frontmatter":{},"headers":[],"relativePath":"uk/msg_docs/ParameterUpdate.md","filePath":"uk/msg_docs/ParameterUpdate.md"}'),t={name:"uk/msg_docs/ParameterUpdate.md"},e=i(`<h1 id="оновлення-параметрів-повідомлення-uorb" tabindex="-1">Оновлення параметрів (Повідомлення UORB) <a class="header-anchor" href="#оновлення-параметрів-повідомлення-uorb" aria-label="Permalink to &quot;Оновлення параметрів (Повідомлення UORB)&quot;">​</a></h1><p>Це повідомлення використовується для повідомлення системі про одну або кілька змін параметрів</p><p><a href="https://github.com/PX4/PX4-Autopilot/blob/release/1.15/msg/ParameterUpdate.msg" target="_blank" rel="noreferrer">вихідний файл</a></p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"># This message is used to notify the system about one or more parameter changes</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uint64 timestamp        # time since system </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (microseconds)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uint32 instance     # Instance count </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> constantly incrementing</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uint32 get_count</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uint32 set_count</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uint32 find_count</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uint32 export_count</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uint16 active</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uint16 changed</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uint16 custom_default</span></span></code></pre></div>`,4),p=[e];function l(r,h,c,o,k,d){return n(),a("div",null,p)}const _=s(t,[["render",l]]);export{u as __pageData,_ as default};
