import{_ as s,c as a,o as i,ab as n}from"./chunks/framework.CUflZczI.js";const E=JSON.parse('{"title":"AutotuneAttitudeControlStatus (UORB message)","description":"","frontmatter":{},"headers":[],"relativePath":"zh/msg_docs/AutotuneAttitudeControlStatus.md","filePath":"zh/msg_docs/AutotuneAttitudeControlStatus.md"}'),t={name:"zh/msg_docs/AutotuneAttitudeControlStatus.md"},l=n(`<h1 id="autotuneattitudecontrolstatus-uorb-message" tabindex="-1">AutotuneAttitudeControlStatus (UORB message) <a class="header-anchor" href="#autotuneattitudecontrolstatus-uorb-message" aria-label="Permalink to &quot;AutotuneAttitudeControlStatus (UORB message)&quot;">​</a></h1><p><a href="https://github.com/PX4/PX4-Autopilot/blob/release/1.15/msg/AutotuneAttitudeControlStatus.msg" target="_blank" rel="noreferrer">source file</a></p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uint64 timestamp                # time since system </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (microseconds)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">float32</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] coeff                # coefficients of the identified discrete</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">time model</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">float32</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] coeff_var            # coefficients</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39; variance of the identified discrete-time model</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">float32 fitness                 # fitness of the parameter estimate</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">float32 innov</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">float32 dt_model</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">float32 kc</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">float32 ki</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">float32 kd</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">float32 kff</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">float32 att_p</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">float32[3] rate_sp</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">float32 u_filt</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">float32 y_filt</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">uint8 STATE_IDLE = 0</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">uint8 STATE_INIT = 1</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">uint8 STATE_ROLL = 2</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">uint8 STATE_ROLL_PAUSE = 3</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">uint8 STATE_PITCH = 4</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">uint8 STATE_PITCH_PAUSE = 5</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">uint8 STATE_YAW = 6</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">uint8 STATE_YAW_PAUSE = 7</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">uint8 STATE_VERIFICATION = 8</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">uint8 STATE_APPLY = 9</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">uint8 STATE_TEST = 10</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">uint8 STATE_COMPLETE = 11</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">uint8 STATE_FAIL = 12</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">uint8 STATE_WAIT_FOR_DISARM = 13</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">uint8 state</span></span></code></pre></div>`,3),e=[l];function p(h,k,o,r,F,d){return i(),a("div",null,e)}const u=s(t,[["render",p]]);export{E as __pageData,u as default};
