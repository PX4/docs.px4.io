import{_ as s,c as a,o as n,ab as i}from"./chunks/framework.CUflZczI.js";const _=JSON.parse('{"title":"SensorsStatus (повідомлення UORB)","description":"","frontmatter":{},"headers":[],"relativePath":"uk/msg_docs/SensorsStatus.md","filePath":"uk/msg_docs/SensorsStatus.md"}'),e={name:"uk/msg_docs/SensorsStatus.md"},t=i(`<h1 id="sensorsstatus-повідомлення-uorb" tabindex="-1">SensorsStatus (повідомлення UORB) <a class="header-anchor" href="#sensorsstatus-повідомлення-uorb" aria-label="Permalink to &quot;SensorsStatus (повідомлення UORB)&quot;">​</a></h1><p>Метрики перевірки датчика. Це значення буде нульовим для датчика, який є первинним або незаповненим.</p><p><a href="https://github.com/PX4/PX4-Autopilot/blob/release/1.15/msg/SensorsStatus.msg" target="_blank" rel="noreferrer">source file</a></p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">#</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"># Sensor check metrics. This will be zero </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a sensor that</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;s primary or unpopulated.</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">#</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">uint64 timestamp # time since system start (microseconds)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">uint32 device_id_primary       # current primary device id for reference</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">uint32[4] device_ids</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">float32[4] inconsistency       # magnitude of difference between sensor instance and mean</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">bool[4] healthy                # sensor healthy</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">uint8[4] priority</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">bool[4] enabled</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">bool[4] external</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"># TOPICS sensors_status_baro sensors_status_mag</span></span></code></pre></div>`,4),l=[t];function p(r,o,h,c,k,d){return n(),a("div",null,l)}const F=s(e,[["render",p]]);export{_ as __pageData,F as default};
