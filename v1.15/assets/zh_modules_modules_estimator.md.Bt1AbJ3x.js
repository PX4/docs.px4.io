import{_ as a,c as s,o as e,ab as n}from"./chunks/framework.CUflZczI.js";const _=JSON.parse('{"title":"模块参考：估计器","description":"","frontmatter":{},"headers":[],"relativePath":"zh/modules/modules_estimator.md","filePath":"zh/modules/modules_estimator.md"}'),t={name:"zh/modules/modules_estimator.md"},i=n(`<h1 id="模块参考-估计器" tabindex="-1">模块参考：估计器 <a class="header-anchor" href="#模块参考-估计器" aria-label="Permalink to &quot;模块参考：估计器&quot;">​</a></h1><h2 id="attitudeestimatorq" tabindex="-1">AttitudeEstimatorQ <a class="header-anchor" href="#attitudeestimatorq" aria-label="Permalink to &quot;AttitudeEstimatorQ&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/modules/attitude_estimator_q" target="_blank" rel="noreferrer">modules/attitude_estimator_q</a></p><h3 id="描述" tabindex="-1">描述 <a class="header-anchor" href="#描述" aria-label="Permalink to &quot;描述&quot;">​</a></h3><p>Attitude and position estimator using an Extended Kalman Filter. It is used for Multirotors and Fixed-Wing.</p><p><a id="AttitudeEstimatorQ_usage"></a></p><h3 id="用法" tabindex="-1">用法 <a class="header-anchor" href="#用法" aria-label="Permalink to &quot;用法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>AttitudeEstimatorQ &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> wind_estimator &amp;lt;command&amp;gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        打印状态信息</span></span></code></pre></div><h2 id="wind-estimator" tabindex="-1">wind_estimator <a class="header-anchor" href="#wind-estimator" aria-label="Permalink to &quot;wind_estimator&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/modules/airspeed_selector" target="_blank" rel="noreferrer">modules/airspeed_selector</a></p><h3 id="描述-1" tabindex="-1">描述 <a class="header-anchor" href="#描述-1" aria-label="Permalink to &quot;描述&quot;">​</a></h3><p>This module provides a single airspeed_validated topic, containing indicated (IAS), calibrated (CAS), true airspeed (TAS) and the information if the estimation currently is invalid and if based sensor readings or on groundspeed minus windspeed. Supporting the input of multiple &quot;raw&quot; airspeed inputs, this module automatically switches to a valid sensor in case of failure detection. For failure detection as well as for the estimation of a scale factor from IAS to CAS, it runs several wind estimators and also publishes those.</p><p><a id="airspeed_estimator_usage"></a></p><h3 id="用法-1" tabindex="-1">用法 <a class="header-anchor" href="#用法-1" aria-label="Permalink to &quot;用法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>airspeed_estimator &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> wind_estimator &amp;lt;command&amp;gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        打印状态信息</span></span></code></pre></div><h2 id="ekf2" tabindex="-1">ekf2 <a class="header-anchor" href="#ekf2" aria-label="Permalink to &quot;ekf2&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/modules/ekf2" target="_blank" rel="noreferrer">modules/ekf2</a></p><h3 id="描述-2" tabindex="-1">描述 <a class="header-anchor" href="#描述-2" aria-label="Permalink to &quot;描述&quot;">​</a></h3><p>基于扩展卡尔曼滤波器的姿态和位置估计器。 该模块同时应用于多旋翼和固定翼飞机。</p><p>The documentation can be found on the <a href="https://docs.px4.io/v1.15/en/advanced_config/tuning_the_ecl_ekf.html" target="_blank" rel="noreferrer">ECL/EKF Overview &amp; Tuning</a> page.</p><p>This module runs a combined wind and airspeed scale factor estimator. If provided the vehicle NED speed and attitude it can estimate the horizontal wind components based on a zero sideslip assumption. This makes the estimator only suitable for fixed wing vehicles. If provided an airspeed measurement this module also estimates an airspeed scale factor based on the following model: measured_airspeed = scale_factor * real_airspeed.</p><p><a id="ekf2_usage"></a></p><h3 id="用法-2" tabindex="-1">用法 <a class="header-anchor" href="#用法-2" aria-label="Permalink to &quot;用法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>ekf2 &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span>     [-r]        Enable replay mode</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span>
<span class="line"><span>     [-v]        verbose (print all states and full covariance matrix)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   select_instance Request switch to new estimator instance</span></span>
<span class="line"><span>     &lt;instance&gt;  Specify desired estimator instance</span></span></code></pre></div><h2 id="local-position-estimator" tabindex="-1">local_position_estimator <a class="header-anchor" href="#local-position-estimator" aria-label="Permalink to &quot;local_position_estimator&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/modules/local_position_estimator" target="_blank" rel="noreferrer">modules/local_position_estimator</a></p><h3 id="参数描述" tabindex="-1">参数描述 <a class="header-anchor" href="#参数描述" aria-label="Permalink to &quot;参数描述&quot;">​</a></h3><p>基于扩展卡尔曼滤波器的姿态和位置估计器。</p><p><a id="local_position_estimator_usage"></a></p><h3 id="用法-3" tabindex="-1">用法 <a class="header-anchor" href="#用法-3" aria-label="Permalink to &quot;用法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>local_position_estimator &amp;lt;command&amp;gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        打印状态信息</span></span>
<span class="line"><span> wind_estimator &amp;lt;command&amp;gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        打印状态信息</span></span></code></pre></div><h2 id="mc-hover-thrust-estimator" tabindex="-1">mc_hover_thrust_estimator <a class="header-anchor" href="#mc-hover-thrust-estimator" aria-label="Permalink to &quot;mc_hover_thrust_estimator&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/modules/mc_hover_thrust_estimator" target="_blank" rel="noreferrer">modules/mc_hover_thrust_estimator</a></p><h3 id="参数描述-1" tabindex="-1">参数描述 <a class="header-anchor" href="#参数描述-1" aria-label="Permalink to &quot;参数描述&quot;">​</a></h3><p><a id="mc_hover_thrust_estimator_usage"></a></p><h3 id="用法-4" tabindex="-1">用法 <a class="header-anchor" href="#用法-4" aria-label="Permalink to &quot;用法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>mc_hover_thrust_estimator &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> wind_estimator &amp;lt;command&amp;gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        打印状态信息</span></span></code></pre></div>`,37),p=[i];function o(l,r,d,c,m,h){return e(),s("div",null,p)}const g=a(t,[["render",o]]);export{_ as __pageData,g as default};
