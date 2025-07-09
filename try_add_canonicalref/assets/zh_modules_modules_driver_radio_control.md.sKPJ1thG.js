import{_ as s,c as n,al as e,o as t}from"./chunks/framework.ByhWQ_D0.js";const h=JSON.parse('{"title":"Modules Reference: Radio Control (Driver)","description":"","frontmatter":{},"headers":[],"relativePath":"zh/modules/modules_driver_radio_control.md","filePath":"zh/modules/modules_driver_radio_control.md"}'),r={name:"zh/modules/modules_driver_radio_control.md"};function p(l,a,i,c,o,d){return t(),n("div",null,a[0]||(a[0]=[e(`<h1 id="modules-reference-radio-control-driver" tabindex="-1">Modules Reference: Radio Control (Driver) <a class="header-anchor" href="#modules-reference-radio-control-driver" aria-label="Permalink to &quot;Modules Reference: Radio Control (Driver)&quot;">​</a></h1><h2 id="crsf-rc" tabindex="-1">crsf_rc <a class="header-anchor" href="#crsf-rc" aria-label="Permalink to &quot;crsf_rc&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/rc/crsf_rc" target="_blank" rel="noreferrer">drivers/rc/crsf_rc</a></p><h3 id="描述" tabindex="-1">描述 <a class="header-anchor" href="#描述" aria-label="Permalink to &quot;描述&quot;">​</a></h3><p>This module parses the CRSF RC uplink protocol and generates CRSF downlink telemetry data</p><h3 id="crsf_rc_usage" tabindex="-1">Usage <a class="header-anchor" href="#crsf_rc_usage" aria-label="Permalink to &quot;Usage {#crsf_rc_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>crsf_rc &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span>     [-d &lt;val&gt;]  RC device</span></span>
<span class="line"><span>                 values: &lt;file:dev&gt;, default: /dev/ttyS3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="dsm-rc" tabindex="-1">dsm_rc <a class="header-anchor" href="#dsm-rc" aria-label="Permalink to &quot;dsm_rc&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/rc/dsm_rc" target="_blank" rel="noreferrer">drivers/rc/dsm_rc</a></p><h3 id="描述-1" tabindex="-1">描述 <a class="header-anchor" href="#描述-1" aria-label="Permalink to &quot;描述&quot;">​</a></h3><p>This module does Spektrum DSM RC input parsing.</p><h3 id="dsm_rc_usage" tabindex="-1">Usage <a class="header-anchor" href="#dsm_rc_usage" aria-label="Permalink to &quot;Usage {#dsm_rc_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>dsm_rc &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span>     [-d &lt;val&gt;]  RC device</span></span>
<span class="line"><span>                 values: &lt;file:dev&gt;, default: /dev/ttyS3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   bind          Send a DSM bind command (module must be running)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="ghst-rc" tabindex="-1">ghst_rc <a class="header-anchor" href="#ghst-rc" aria-label="Permalink to &quot;ghst_rc&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/rc/ghst_rc" target="_blank" rel="noreferrer">drivers/rc/ghst_rc</a></p><h3 id="描述-2" tabindex="-1">描述 <a class="header-anchor" href="#描述-2" aria-label="Permalink to &quot;描述&quot;">​</a></h3><p>This module does Ghost (GHST) RC input parsing.</p><h3 id="ghst_rc_usage" tabindex="-1">Usage <a class="header-anchor" href="#ghst_rc_usage" aria-label="Permalink to &quot;Usage {#ghst_rc_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ghst_rc &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span>     [-d &lt;val&gt;]  RC device</span></span>
<span class="line"><span>                 values: &lt;file:dev&gt;, default: /dev/ttyS3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="rc-input" tabindex="-1">rc_input <a class="header-anchor" href="#rc-input" aria-label="Permalink to &quot;rc_input&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/rc_input" target="_blank" rel="noreferrer">drivers/rc_input</a></p><h3 id="描述-3" tabindex="-1">描述 <a class="header-anchor" href="#描述-3" aria-label="Permalink to &quot;描述&quot;">​</a></h3><p>This module does the RC input parsing and auto-selecting the method. Supported methods are:</p><ul><li>PPM</li><li>SBUS</li><li>DSM</li><li>SUMD</li><li>ST24</li><li>TBS Crossfire (CRSF)</li></ul><h3 id="rc_input_usage" tabindex="-1">Usage <a class="header-anchor" href="#rc_input_usage" aria-label="Permalink to &quot;Usage {#rc_input_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>rc_input &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span>     [-d &lt;val&gt;]  RC device</span></span>
<span class="line"><span>                 values: &lt;file:dev&gt;, default: /dev/ttyS3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   bind          Send a DSM bind command (module must be running)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="sbus-rc" tabindex="-1">sbus_rc <a class="header-anchor" href="#sbus-rc" aria-label="Permalink to &quot;sbus_rc&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/rc/sbus_rc" target="_blank" rel="noreferrer">drivers/rc/sbus_rc</a></p><h3 id="描述-4" tabindex="-1">描述 <a class="header-anchor" href="#描述-4" aria-label="Permalink to &quot;描述&quot;">​</a></h3><p>This module does SBUS RC input parsing.</p><h3 id="sbus_rc_usage" tabindex="-1">Usage <a class="header-anchor" href="#sbus_rc_usage" aria-label="Permalink to &quot;Usage {#sbus_rc_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sbus_rc &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span>     [-d &lt;val&gt;]  RC device</span></span>
<span class="line"><span>                 values: &lt;file:dev&gt;, default: /dev/ttyS3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div>`,32)]))}const m=s(r,[["render",p]]);export{h as __pageData,m as default};
