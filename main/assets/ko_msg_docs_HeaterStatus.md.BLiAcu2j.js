import{_ as a,c as i,a8 as n,o as t}from"./chunks/framework.BDnHobkS.js";const c=JSON.parse('{"title":"HeaterStatus (UORB message)","description":"","frontmatter":{},"headers":[],"relativePath":"ko/msg_docs/HeaterStatus.md","filePath":"ko/msg_docs/HeaterStatus.md"}'),e={name:"ko/msg_docs/HeaterStatus.md"};function l(p,s,r,h,k,o){return t(),i("div",null,s[0]||(s[0]=[n(`<h1 id="heaterstatus-uorb-message" tabindex="-1">HeaterStatus (UORB message) <a class="header-anchor" href="#heaterstatus-uorb-message" aria-label="Permalink to &quot;HeaterStatus (UORB message)&quot;">​</a></h1><p><a href="https://github.com/PX4/PX4-Autopilot/blob/main/msg/HeaterStatus.msg" target="_blank" rel="noreferrer">source file</a></p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uint64 timestamp	# time since system </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (microseconds)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uint32 device_id</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">bool</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> heater_on</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">bool</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> temperature_target_met</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">float32 temperature_sensor</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">float32 temperature_target</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uint32 controller_period_usec</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uint32 controller_time_on_usec</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">float32 proportional_value</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">float32 integrator_value</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">float32 feed_forward_value</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uint8 MODE_GPIO  </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uint8 MODE_PX4IO </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uint8 mode</span></span></code></pre></div>`,3)]))}const d=a(e,[["render",l]]);export{c as __pageData,d as default};
