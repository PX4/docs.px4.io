import{_ as e,c as s,o as a,ab as n}from"./chunks/framework.CUflZczI.js";const u=JSON.parse('{"title":"Modules Reference: Транспондер (Драйвер)","description":"","frontmatter":{},"headers":[],"relativePath":"uk/modules/modules_driver_transponder.md","filePath":"uk/modules/modules_driver_transponder.md"}'),t={name:"uk/modules/modules_driver_transponder.md"},r=n(`<h1 id="modules-reference-транспондер-драивер" tabindex="-1">Modules Reference: Транспондер (Драйвер) <a class="header-anchor" href="#modules-reference-транспондер-драивер" aria-label="Permalink to &quot;Modules Reference: Транспондер (Драйвер)&quot;">​</a></h1><h2 id="sagetech-mxs" tabindex="-1">sagetech_mxs <a class="header-anchor" href="#sagetech-mxs" aria-label="Permalink to &quot;sagetech_mxs&quot;">​</a></h2><p>Джерело: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/transponder/sagetech_mxs" target="_blank" rel="noreferrer">drivers/transponder/sagetech_mxs</a></p><pre><code>### Description

This driver integrates the Sagetech MXS Certified Transponder to send and receive ADSB messages and traffic.

### Examples

Attempt to start driver on a specified serial device.
$ sagetech_mxs start -d /dev/ttyS1
Stop driver
$ sagetech_mxs stop
Set Flight ID (8 char max)
$ sagetech_mxs flight_id MXS12345
Set MXS Operating Mode
$ sagetech_mxs opmode off/on/stby/alt
$ sagetech_mxs opmode 0/1/2/3
Set the Squawk Code
$ sagetech_mxs squawk 1200
</code></pre><p><a id="sagetech_mxs_usage"></a></p><h3 id="використання" tabindex="-1">Використання <a class="header-anchor" href="#використання" aria-label="Permalink to &quot;Використання&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>sagetech_mxs &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>   squawk        Set the Squawk Code. [0-7777] Octal (no digit larger than 7)</span></span></code></pre></div>`,7),p=[r];function o(i,l,d,c,h,m){return a(),s("div",null,p)}const g=e(t,[["render",o]]);export{u as __pageData,g as default};
