import{_ as s,c as a,o as i,ab as n}from"./chunks/framework.CUflZczI.js";const _=JSON.parse('{"title":"EstimatorAidSource1d (UORB message)","description":"","frontmatter":{},"headers":[],"relativePath":"zh/msg_docs/EstimatorAidSource1d.md","filePath":"zh/msg_docs/EstimatorAidSource1d.md"}'),t={name:"zh/msg_docs/EstimatorAidSource1d.md"},e=n(`<h1 id="estimatoraidsource1d-uorb-message" tabindex="-1">EstimatorAidSource1d (UORB message) <a class="header-anchor" href="#estimatoraidsource1d-uorb-message" aria-label="Permalink to &quot;EstimatorAidSource1d (UORB message)&quot;">​</a></h1><p><a href="https://github.com/PX4/PX4-Autopilot/blob/release/1.15/msg/EstimatorAidSource1d.msg" target="_blank" rel="noreferrer">source file</a></p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uint64 timestamp             # time since system </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (microseconds)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uint64 timestamp_sample      # the timestamp of the raw </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (microseconds)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uint8 estimator_instance</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uint32 device_id</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uint64 time_last_fuse</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">float32 observation</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">float32 observation_variance</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">float32 innovation</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">float32 innovation_filtered</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">float32 innovation_variance</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">float32 test_ratio           # normalized innovation squared</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">float32 test_ratio_filtered  # </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">signed</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> filtered test ratio</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">bool</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> innovation_rejected     # </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> the observation has been rejected</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">bool</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fused                   # </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> the sample was successfully fused</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"># TOPICS estimator_aid_src_baro_hgt estimator_aid_src_ev_hgt estimator_aid_src_gnss_hgt estimator_aid_src_rng_hgt</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"># TOPICS estimator_aid_src_airspeed estimator_aid_src_sideslip</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"># TOPICS estimator_aid_src_fake_hgt</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"># TOPICS estimator_aid_src_gnss_yaw estimator_aid_src_ev_yaw</span></span></code></pre></div>`,3),l=[e];function p(r,h,o,d,k,E){return i(),a("div",null,l)}const g=s(t,[["render",p]]);export{_ as __pageData,g as default};
