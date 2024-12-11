import{_ as a,c as n,a8 as e,o as p}from"./chunks/framework.BDnHobkS.js";const m=JSON.parse('{"title":"Modules Reference: Transponder (Driver)","description":"","frontmatter":{},"headers":[],"relativePath":"zh/modules/modules_driver_transponder.md","filePath":"zh/modules/modules_driver_transponder.md"}'),t={name:"zh/modules/modules_driver_transponder.md"};function r(l,s,i,o,c,d){return p(),n("div",null,s[0]||(s[0]=[e(`<h1 id="modules-reference-transponder-driver" tabindex="-1">Modules Reference: Transponder (Driver) <a class="header-anchor" href="#modules-reference-transponder-driver" aria-label="Permalink to &quot;Modules Reference: Transponder (Driver)&quot;">​</a></h1><h2 id="sagetech-mxs" tabindex="-1">sagetech_mxs <a class="header-anchor" href="#sagetech-mxs" aria-label="Permalink to &quot;sagetech_mxs&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/transponder/sagetech_mxs" target="_blank" rel="noreferrer">drivers/transponder/sagetech_mxs</a></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>### Description</span></span>
<span class="line"><span></span></span>
<span class="line"><span>This driver integrates the Sagetech MXS Certified Transponder to send and receive ADSB messages and traffic.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### Examples</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Attempt to start driver on a specified serial device.</span></span>
<span class="line"><span>$ sagetech_mxs start -d /dev/ttyS1</span></span>
<span class="line"><span>Stop driver</span></span>
<span class="line"><span>$ sagetech_mxs stop</span></span>
<span class="line"><span>Set Flight ID (8 char max)</span></span>
<span class="line"><span>$ sagetech_mxs flight_id MXS12345</span></span>
<span class="line"><span>Set MXS Operating Mode</span></span>
<span class="line"><span>$ sagetech_mxs opmode off/on/stby/alt</span></span>
<span class="line"><span>$ sagetech_mxs opmode 0/1/2/3</span></span>
<span class="line"><span>Set the Squawk Code</span></span>
<span class="line"><span>$ sagetech_mxs squawk 1200</span></span></code></pre></div><p><a id="sagetech_mxs_usage"></a></p><h3 id="用法" tabindex="-1">用法 <a class="header-anchor" href="#用法" aria-label="Permalink to &quot;用法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sagetech_mxs &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start         Start driver</span></span>
<span class="line"><span>     -d &lt;val&gt;    Serial device</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop          Stop driver</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   flightid      Set Flight ID (8 char max)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   ident         Set the IDENT bit in ADSB-Out messages</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   opmode        Set the MXS operating mode. (&#39;off&#39;, &#39;on&#39;, &#39;stby&#39;, &#39;alt&#39;, or</span></span>
<span class="line"><span>                 numerical [0-3])</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   squawk        Set the Squawk Code. [0-7777] Octal (no digit larger than 7)</span></span></code></pre></div>`,7)]))}const g=a(t,[["render",r]]);export{m as __pageData,g as default};
