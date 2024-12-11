import{_ as s,c as a,o as e,ab as i}from"./chunks/framework.CUflZczI.js";const m=JSON.parse('{"title":"SensorsStatusImu (UORB message)","description":"","frontmatter":{},"headers":[],"relativePath":"ko/msg_docs/SensorsStatusImu.md","filePath":"ko/msg_docs/SensorsStatusImu.md"}'),n={name:"ko/msg_docs/SensorsStatusImu.md"},t=i(`<h1 id="sensorsstatusimu-uorb-message" tabindex="-1">SensorsStatusImu (UORB message) <a class="header-anchor" href="#sensorsstatusimu-uorb-message" aria-label="Permalink to &quot;SensorsStatusImu (UORB message)&quot;">​</a></h1><p>Sensor check metrics. This will be zero for a sensor that&#39;s primary or unpopulated.</p><p><a href="https://github.com/PX4/PX4-Autopilot/blob/release/1.15/msg/SensorsStatusImu.msg" target="_blank" rel="noreferrer">source file</a></p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">#</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"># Sensor check metrics. This will be zero </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a sensor that</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;s primary or unpopulated.</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">#</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">uint64 timestamp # time since system start (microseconds)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">uint32 accel_device_id_primary       # current primary accel device id for reference</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">uint32[4] accel_device_ids</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">float32[4] accel_inconsistency_m_s_s # magnitude of acceleration difference between IMU instance and mean in m/s^2.</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">bool[4] accel_healthy</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">uint8[4] accel_priority</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">uint32 gyro_device_id_primary       # current primary gyro device id for reference</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">uint32[4] gyro_device_ids</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">float32[4] gyro_inconsistency_rad_s # magnitude of angular rate difference between IMU instance and mean in (rad/s).</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">bool[4] gyro_healthy</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">uint8[4] gyro_priority</span></span></code></pre></div>`,4),r=[t];function l(p,c,o,h,d,k){return e(),a("div",null,r)}const _=s(n,[["render",l]]);export{m as __pageData,_ as default};
