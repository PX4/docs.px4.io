import{_ as s,c as a,o as e,ab as n}from"./chunks/framework.CUflZczI.js";const f=JSON.parse('{"title":"Modules Reference: Rpm Sensor (Driver)","description":"","frontmatter":{},"headers":[],"relativePath":"uk/modules/modules_driver_rpm_sensor.md","filePath":"uk/modules/modules_driver_rpm_sensor.md"}'),p={name:"uk/modules/modules_driver_rpm_sensor.md"},r=n(`<h1 id="modules-reference-rpm-sensor-driver" tabindex="-1">Modules Reference: Rpm Sensor (Driver) <a class="header-anchor" href="#modules-reference-rpm-sensor-driver" aria-label="Permalink to &quot;Modules Reference: Rpm Sensor (Driver)&quot;">​</a></h1><h2 id="pcf8583" tabindex="-1">pcf8583 <a class="header-anchor" href="#pcf8583" aria-label="Permalink to &quot;pcf8583&quot;">​</a></h2><p>Джерело: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/rpm/pcf8583" target="_blank" rel="noreferrer">drivers/rpm/pcf8583</a></p><p><a id="pcf8583_usage"></a></p><h3 id="використання" tabindex="-1">Використання <a class="header-anchor" href="#використання" aria-label="Permalink to &quot;Використання&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>pcf8583 &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span>     [-I]        Internal I2C bus(es)</span></span>
<span class="line"><span>     [-X]        External I2C bus(es)</span></span>
<span class="line"><span>     [-b &lt;val&gt;]  board-specific bus (default=all) (external SPI: n-th bus</span></span>
<span class="line"><span>                 (default=1))</span></span>
<span class="line"><span>     [-f &lt;val&gt;]  bus frequency in kHz</span></span>
<span class="line"><span>     [-q]        quiet startup (no message if no device found)</span></span>
<span class="line"><span>     [-a &lt;val&gt;]  I2C address</span></span>
<span class="line"><span>                 default: 80</span></span>
<span class="line"><span>     [-k]        if initialization (probing) fails, keep retrying periodically</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div>`,6),l=[r];function t(i,o,c,d,u,m){return e(),a("div",null,l)}const h=s(p,[["render",t]]);export{f as __pageData,h as default};
