import{_ as a,c as n,o as p,al as e}from"./chunks/framework.D8UyiDWg.js";const b=JSON.parse('{"title":"Modules Reference: Baro (Driver)","description":"","frontmatter":{},"headers":[],"relativePath":"zh/modules/modules_driver_baro.md","filePath":"zh/modules/modules_driver_baro.md"}'),l={name:"zh/modules/modules_driver_baro.md"};function t(i,s,r,c,o,u){return p(),n("div",null,s[0]||(s[0]=[e(`<h1 id="modules-reference-baro-driver" tabindex="-1">Modules Reference: Baro (Driver) <a class="header-anchor" href="#modules-reference-baro-driver" aria-label="Permalink to &quot;Modules Reference: Baro (Driver)&quot;">​</a></h1><h2 id="bmp280" tabindex="-1">bmp280 <a class="header-anchor" href="#bmp280" aria-label="Permalink to &quot;bmp280&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/barometer/bmp280" target="_blank" rel="noreferrer">drivers/barometer/bmp280</a></p><h3 id="bmp280_usage" tabindex="-1">Usage <a class="header-anchor" href="#bmp280_usage" aria-label="Permalink to &quot;Usage {#bmp280_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>bmp280 &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span>     [-I]        Internal I2C bus(es)</span></span>
<span class="line"><span>     [-X]        External I2C bus(es)</span></span>
<span class="line"><span>     [-s]        Internal SPI bus(es)</span></span>
<span class="line"><span>     [-S]        External SPI bus(es)</span></span>
<span class="line"><span>     [-b &lt;val&gt;]  board-specific bus (default=all) (external SPI: n-th bus</span></span>
<span class="line"><span>                 (default=1))</span></span>
<span class="line"><span>     [-c &lt;val&gt;]  chip-select pin (for internal SPI) or index (for external SPI)</span></span>
<span class="line"><span>     [-m &lt;val&gt;]  SPI mode</span></span>
<span class="line"><span>     [-f &lt;val&gt;]  bus frequency in kHz</span></span>
<span class="line"><span>     [-q]        quiet startup (no message if no device found)</span></span>
<span class="line"><span>     [-a &lt;val&gt;]  I2C address</span></span>
<span class="line"><span>                 default: 118</span></span>
<span class="line"><span>     [-s]        Internal SPI bus(es)</span></span>
<span class="line"><span>     [-S]        External SPI bus(es)</span></span>
<span class="line"><span>     [-b &lt;val&gt;]  board-specific bus (default=all) (external SPI: n-th bus</span></span>
<span class="line"><span>                 (default=1))</span></span>
<span class="line"><span>     [-c &lt;val&gt;]  chip-select pin (for internal SPI) or index (for external SPI)</span></span>
<span class="line"><span>     [-m &lt;val&gt;]  SPI mode</span></span>
<span class="line"><span>     [-f &lt;val&gt;]  bus frequency in kHz</span></span>
<span class="line"><span>     [-q]        quiet startup (no message if no device found)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="bmp388" tabindex="-1">bmp388 <a class="header-anchor" href="#bmp388" aria-label="Permalink to &quot;bmp388&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/barometer/bmp388" target="_blank" rel="noreferrer">drivers/barometer/bmp388</a></p><h3 id="bmp388_usage" tabindex="-1">Usage <a class="header-anchor" href="#bmp388_usage" aria-label="Permalink to &quot;Usage {#bmp388_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>bmp388 &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span>     [-I]        Internal I2C bus(es)</span></span>
<span class="line"><span>     [-X]        External I2C bus(es)</span></span>
<span class="line"><span>     [-s]        Internal SPI bus(es)</span></span>
<span class="line"><span>     [-S]        External SPI bus(es)</span></span>
<span class="line"><span>     [-b &lt;val&gt;]  board-specific bus (default=all) (external SPI: n-th bus</span></span>
<span class="line"><span>                 (default=1))</span></span>
<span class="line"><span>     [-c &lt;val&gt;]  chip-select pin (for internal SPI) or index (for external SPI)</span></span>
<span class="line"><span>     [-m &lt;val&gt;]  SPI mode</span></span>
<span class="line"><span>     [-f &lt;val&gt;]  bus frequency in kHz</span></span>
<span class="line"><span>     [-q]        quiet startup (no message if no device found)</span></span>
<span class="line"><span>     [-a &lt;val&gt;]  I2C address</span></span>
<span class="line"><span>                 default: 118</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="bmp581" tabindex="-1">bmp581 <a class="header-anchor" href="#bmp581" aria-label="Permalink to &quot;bmp581&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/barometer/bmp581" target="_blank" rel="noreferrer">drivers/barometer/bmp581</a></p><h3 id="bmp581_usage" tabindex="-1">Usage <a class="header-anchor" href="#bmp581_usage" aria-label="Permalink to &quot;Usage {#bmp581_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>bmp581 &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span>     [-I]        Internal I2C bus(es)</span></span>
<span class="line"><span>     [-X]        External I2C bus(es)</span></span>
<span class="line"><span>     [-s]        Internal SPI bus(es)</span></span>
<span class="line"><span>     [-S]        External SPI bus(es)</span></span>
<span class="line"><span>     [-b &lt;val&gt;]  board-specific bus (default=all) (external SPI: n-th bus</span></span>
<span class="line"><span>                 (default=1))</span></span>
<span class="line"><span>     [-c &lt;val&gt;]  chip-select pin (for internal SPI) or index (for external SPI)</span></span>
<span class="line"><span>     [-m &lt;val&gt;]  SPI mode</span></span>
<span class="line"><span>     [-f &lt;val&gt;]  bus frequency in kHz</span></span>
<span class="line"><span>     [-q]        quiet startup (no message if no device found)</span></span>
<span class="line"><span>     [-a &lt;val&gt;]  I2C address</span></span>
<span class="line"><span>                 default: 70</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="dps310" tabindex="-1">dps310 <a class="header-anchor" href="#dps310" aria-label="Permalink to &quot;dps310&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/barometer/dps310" target="_blank" rel="noreferrer">drivers/barometer/dps310</a></p><h3 id="dps310_usage" tabindex="-1">Usage <a class="header-anchor" href="#dps310_usage" aria-label="Permalink to &quot;Usage {#dps310_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>dps310 &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span>     [-I]        Internal I2C bus(es)</span></span>
<span class="line"><span>     [-X]        External I2C bus(es)</span></span>
<span class="line"><span>     [-s]        Internal SPI bus(es)</span></span>
<span class="line"><span>     [-S]        External SPI bus(es)</span></span>
<span class="line"><span>     [-b &lt;val&gt;]  board-specific bus (default=all) (external SPI: n-th bus</span></span>
<span class="line"><span>                 (default=1))</span></span>
<span class="line"><span>     [-c &lt;val&gt;]  chip-select pin (for internal SPI) or index (for external SPI)</span></span>
<span class="line"><span>     [-m &lt;val&gt;]  SPI mode</span></span>
<span class="line"><span>     [-f &lt;val&gt;]  bus frequency in kHz</span></span>
<span class="line"><span>     [-q]        quiet startup (no message if no device found)</span></span>
<span class="line"><span>     [-a &lt;val&gt;]  I2C address</span></span>
<span class="line"><span>                 default: 119</span></span>
<span class="line"><span>     [-s]        Internal SPI bus(es)</span></span>
<span class="line"><span>     [-S]        External SPI bus(es)</span></span>
<span class="line"><span>     [-b &lt;val&gt;]  board-specific bus (default=all) (external SPI: n-th bus</span></span>
<span class="line"><span>                 (default=1))</span></span>
<span class="line"><span>     [-c &lt;val&gt;]  chip-select pin (for internal SPI) or index (for external SPI)</span></span>
<span class="line"><span>     [-m &lt;val&gt;]  SPI mode</span></span>
<span class="line"><span>     [-f &lt;val&gt;]  bus frequency in kHz</span></span>
<span class="line"><span>     [-q]        quiet startup (no message if no device found)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="icp101xx" tabindex="-1">icp101xx <a class="header-anchor" href="#icp101xx" aria-label="Permalink to &quot;icp101xx&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/barometer/invensense/icp101xx" target="_blank" rel="noreferrer">drivers/barometer/invensense/icp101xx</a></p><h3 id="icp101xx_usage" tabindex="-1">Usage <a class="header-anchor" href="#icp101xx_usage" aria-label="Permalink to &quot;Usage {#icp101xx_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>icp101xx &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span>     [-I]        Internal I2C bus(es)</span></span>
<span class="line"><span>     [-X]        External I2C bus(es)</span></span>
<span class="line"><span>     [-b &lt;val&gt;]  board-specific bus (default=all) (external SPI: n-th bus</span></span>
<span class="line"><span>                 (default=1))</span></span>
<span class="line"><span>     [-f &lt;val&gt;]  bus frequency in kHz</span></span>
<span class="line"><span>     [-q]        quiet startup (no message if no device found)</span></span>
<span class="line"><span>     [-a &lt;val&gt;]  I2C address</span></span>
<span class="line"><span>                 default: 99</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="icp201xx" tabindex="-1">icp201xx <a class="header-anchor" href="#icp201xx" aria-label="Permalink to &quot;icp201xx&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/barometer/invensense/icp201xx" target="_blank" rel="noreferrer">drivers/barometer/invensense/icp201xx</a></p><h3 id="icp201xx_usage" tabindex="-1">Usage <a class="header-anchor" href="#icp201xx_usage" aria-label="Permalink to &quot;Usage {#icp201xx_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>icp201xx &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span>     [-I]        Internal I2C bus(es)</span></span>
<span class="line"><span>     [-X]        External I2C bus(es)</span></span>
<span class="line"><span>     [-b &lt;val&gt;]  board-specific bus (default=all) (external SPI: n-th bus</span></span>
<span class="line"><span>                 (default=1))</span></span>
<span class="line"><span>     [-f &lt;val&gt;]  bus frequency in kHz</span></span>
<span class="line"><span>     [-q]        quiet startup (no message if no device found)</span></span>
<span class="line"><span>     [-a &lt;val&gt;]  I2C address</span></span>
<span class="line"><span>                 default: 99</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="lps22hb" tabindex="-1">lps22hb <a class="header-anchor" href="#lps22hb" aria-label="Permalink to &quot;lps22hb&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/barometer/lps22hb" target="_blank" rel="noreferrer">drivers/barometer/lps22hb</a></p><h3 id="lps22hb_usage" tabindex="-1">Usage <a class="header-anchor" href="#lps22hb_usage" aria-label="Permalink to &quot;Usage {#lps22hb_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>lps22hb &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span>     [-I]        Internal I2C bus(es)</span></span>
<span class="line"><span>     [-X]        External I2C bus(es)</span></span>
<span class="line"><span>     [-s]        Internal SPI bus(es)</span></span>
<span class="line"><span>     [-S]        External SPI bus(es)</span></span>
<span class="line"><span>     [-b &lt;val&gt;]  board-specific bus (default=all) (external SPI: n-th bus</span></span>
<span class="line"><span>                 (default=1))</span></span>
<span class="line"><span>     [-c &lt;val&gt;]  chip-select pin (for internal SPI) or index (for external SPI)</span></span>
<span class="line"><span>     [-m &lt;val&gt;]  SPI mode</span></span>
<span class="line"><span>     [-f &lt;val&gt;]  bus frequency in kHz</span></span>
<span class="line"><span>     [-q]        quiet startup (no message if no device found)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="lps25h" tabindex="-1">lps25h <a class="header-anchor" href="#lps25h" aria-label="Permalink to &quot;lps25h&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/barometer/lps25h" target="_blank" rel="noreferrer">drivers/barometer/lps25h</a></p><h3 id="lps25h_usage" tabindex="-1">Usage <a class="header-anchor" href="#lps25h_usage" aria-label="Permalink to &quot;Usage {#lps25h_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>lps25h &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span>     [-I]        Internal I2C bus(es)</span></span>
<span class="line"><span>     [-X]        External I2C bus(es)</span></span>
<span class="line"><span>     [-s]        Internal SPI bus(es)</span></span>
<span class="line"><span>     [-S]        External SPI bus(es)</span></span>
<span class="line"><span>     [-b &lt;val&gt;]  board-specific bus (default=all) (external SPI: n-th bus</span></span>
<span class="line"><span>                 (default=1))</span></span>
<span class="line"><span>     [-c &lt;val&gt;]  chip-select pin (for internal SPI) or index (for external SPI)</span></span>
<span class="line"><span>     [-m &lt;val&gt;]  SPI mode</span></span>
<span class="line"><span>     [-f &lt;val&gt;]  bus frequency in kHz</span></span>
<span class="line"><span>     [-q]        quiet startup (no message if no device found)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="lps33hw" tabindex="-1">lps33hw <a class="header-anchor" href="#lps33hw" aria-label="Permalink to &quot;lps33hw&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/barometer/lps33hw" target="_blank" rel="noreferrer">drivers/barometer/lps33hw</a></p><h3 id="lps33hw_usage" tabindex="-1">Usage <a class="header-anchor" href="#lps33hw_usage" aria-label="Permalink to &quot;Usage {#lps33hw_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>lps33hw &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span>     [-I]        Internal I2C bus(es)</span></span>
<span class="line"><span>     [-X]        External I2C bus(es)</span></span>
<span class="line"><span>     [-s]        Internal SPI bus(es)</span></span>
<span class="line"><span>     [-S]        External SPI bus(es)</span></span>
<span class="line"><span>     [-b &lt;val&gt;]  board-specific bus (default=all) (external SPI: n-th bus</span></span>
<span class="line"><span>                 (default=1))</span></span>
<span class="line"><span>     [-c &lt;val&gt;]  chip-select pin (for internal SPI) or index (for external SPI)</span></span>
<span class="line"><span>     [-m &lt;val&gt;]  SPI mode</span></span>
<span class="line"><span>     [-f &lt;val&gt;]  bus frequency in kHz</span></span>
<span class="line"><span>     [-q]        quiet startup (no message if no device found)</span></span>
<span class="line"><span>     [-a &lt;val&gt;]  I2C address</span></span>
<span class="line"><span>                 default: 93</span></span>
<span class="line"><span>     [-k]        if initialization (probing) fails, keep retrying periodically</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="mpc2520" tabindex="-1">mpc2520 <a class="header-anchor" href="#mpc2520" aria-label="Permalink to &quot;mpc2520&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/barometer/maiertek/mpc2520" target="_blank" rel="noreferrer">drivers/barometer/maiertek/mpc2520</a></p><h3 id="mpc2520_usage" tabindex="-1">Usage <a class="header-anchor" href="#mpc2520_usage" aria-label="Permalink to &quot;Usage {#mpc2520_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mpc2520 &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span>     [-I]        Internal I2C bus(es)</span></span>
<span class="line"><span>     [-X]        External I2C bus(es)</span></span>
<span class="line"><span>     [-b &lt;val&gt;]  board-specific bus (default=all) (external SPI: n-th bus</span></span>
<span class="line"><span>                 (default=1))</span></span>
<span class="line"><span>     [-f &lt;val&gt;]  bus frequency in kHz</span></span>
<span class="line"><span>     [-q]        quiet startup (no message if no device found)</span></span>
<span class="line"><span>     [-a &lt;val&gt;]  I2C address</span></span>
<span class="line"><span>                 default: 118</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="mpl3115a2" tabindex="-1">mpl3115a2 <a class="header-anchor" href="#mpl3115a2" aria-label="Permalink to &quot;mpl3115a2&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/barometer/mpl3115a2" target="_blank" rel="noreferrer">drivers/barometer/mpl3115a2</a></p><h3 id="mpl3115a2_usage" tabindex="-1">Usage <a class="header-anchor" href="#mpl3115a2_usage" aria-label="Permalink to &quot;Usage {#mpl3115a2_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mpl3115a2 &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span>     [-I]        Internal I2C bus(es)</span></span>
<span class="line"><span>     [-X]        External I2C bus(es)</span></span>
<span class="line"><span>     [-b &lt;val&gt;]  board-specific bus (default=all) (external SPI: n-th bus</span></span>
<span class="line"><span>                 (default=1))</span></span>
<span class="line"><span>     [-f &lt;val&gt;]  bus frequency in kHz</span></span>
<span class="line"><span>     [-q]        quiet startup (no message if no device found)</span></span>
<span class="line"><span>     [-a &lt;val&gt;]  I2C address</span></span>
<span class="line"><span>                 default: 96</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="ms5611" tabindex="-1">ms5611 <a class="header-anchor" href="#ms5611" aria-label="Permalink to &quot;ms5611&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/barometer/ms5611" target="_blank" rel="noreferrer">drivers/barometer/ms5611</a></p><h3 id="ms5611_usage" tabindex="-1">Usage <a class="header-anchor" href="#ms5611_usage" aria-label="Permalink to &quot;Usage {#ms5611_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ms5611 &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span>     [-I]        Internal I2C bus(es)</span></span>
<span class="line"><span>     [-X]        External I2C bus(es)</span></span>
<span class="line"><span>     [-s]        Internal SPI bus(es)</span></span>
<span class="line"><span>     [-S]        External SPI bus(es)</span></span>
<span class="line"><span>     [-b &lt;val&gt;]  board-specific bus (default=all) (external SPI: n-th bus</span></span>
<span class="line"><span>                 (default=1))</span></span>
<span class="line"><span>     [-c &lt;val&gt;]  chip-select pin (for internal SPI) or index (for external SPI)</span></span>
<span class="line"><span>     [-m &lt;val&gt;]  SPI mode</span></span>
<span class="line"><span>     [-f &lt;val&gt;]  bus frequency in kHz</span></span>
<span class="line"><span>     [-q]        quiet startup (no message if no device found)</span></span>
<span class="line"><span>     [-s]        Internal SPI bus(es)</span></span>
<span class="line"><span>     [-S]        External SPI bus(es)</span></span>
<span class="line"><span>     [-b &lt;val&gt;]  board-specific bus (default=all) (external SPI: n-th bus</span></span>
<span class="line"><span>                 (default=1))</span></span>
<span class="line"><span>     [-c &lt;val&gt;]  chip-select pin (for internal SPI) or index (for external SPI)</span></span>
<span class="line"><span>     [-m &lt;val&gt;]  SPI mode</span></span>
<span class="line"><span>     [-f &lt;val&gt;]  bus frequency in kHz</span></span>
<span class="line"><span>     [-q]        quiet startup (no message if no device found)</span></span>
<span class="line"><span>     [-T &lt;val&gt;]  Device type</span></span>
<span class="line"><span>                 values: 5607|5611, default: 5611</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="ms5837" tabindex="-1">ms5837 <a class="header-anchor" href="#ms5837" aria-label="Permalink to &quot;ms5837&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/barometer/ms5837" target="_blank" rel="noreferrer">drivers/barometer/ms5837</a></p><h3 id="ms5837_usage" tabindex="-1">Usage <a class="header-anchor" href="#ms5837_usage" aria-label="Permalink to &quot;Usage {#ms5837_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ms5837 &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span>     [-I]        Internal I2C bus(es)</span></span>
<span class="line"><span>     [-X]        External I2C bus(es)</span></span>
<span class="line"><span>     [-b &lt;val&gt;]  board-specific bus (default=all) (external SPI: n-th bus</span></span>
<span class="line"><span>                 (default=1))</span></span>
<span class="line"><span>     [-f &lt;val&gt;]  bus frequency in kHz</span></span>
<span class="line"><span>     [-q]        quiet startup (no message if no device found)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="spa06" tabindex="-1">spa06 <a class="header-anchor" href="#spa06" aria-label="Permalink to &quot;spa06&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/barometer/goertek/spa06" target="_blank" rel="noreferrer">drivers/barometer/goertek/spa06</a></p><h3 id="spa06_usage" tabindex="-1">Usage <a class="header-anchor" href="#spa06_usage" aria-label="Permalink to &quot;Usage {#spa06_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>spa06 &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span>     [-I]        Internal I2C bus(es)</span></span>
<span class="line"><span>     [-X]        External I2C bus(es)</span></span>
<span class="line"><span>     [-s]        Internal SPI bus(es)</span></span>
<span class="line"><span>     [-S]        External SPI bus(es)</span></span>
<span class="line"><span>     [-b &lt;val&gt;]  board-specific bus (default=all) (external SPI: n-th bus</span></span>
<span class="line"><span>                 (default=1))</span></span>
<span class="line"><span>     [-c &lt;val&gt;]  chip-select pin (for internal SPI) or index (for external SPI)</span></span>
<span class="line"><span>     [-m &lt;val&gt;]  SPI mode</span></span>
<span class="line"><span>     [-f &lt;val&gt;]  bus frequency in kHz</span></span>
<span class="line"><span>     [-q]        quiet startup (no message if no device found)</span></span>
<span class="line"><span>     [-a &lt;val&gt;]  I2C address</span></span>
<span class="line"><span>                 default: 118</span></span>
<span class="line"><span>     [-s]        Internal SPI bus(es)</span></span>
<span class="line"><span>     [-S]        External SPI bus(es)</span></span>
<span class="line"><span>     [-b &lt;val&gt;]  board-specific bus (default=all) (external SPI: n-th bus</span></span>
<span class="line"><span>                 (default=1))</span></span>
<span class="line"><span>     [-c &lt;val&gt;]  chip-select pin (for internal SPI) or index (for external SPI)</span></span>
<span class="line"><span>     [-m &lt;val&gt;]  SPI mode</span></span>
<span class="line"><span>     [-f &lt;val&gt;]  bus frequency in kHz</span></span>
<span class="line"><span>     [-q]        quiet startup (no message if no device found)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="spl06" tabindex="-1">spl06 <a class="header-anchor" href="#spl06" aria-label="Permalink to &quot;spl06&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/barometer/goertek/spl06" target="_blank" rel="noreferrer">drivers/barometer/goertek/spl06</a></p><h3 id="spl06_usage" tabindex="-1">Usage <a class="header-anchor" href="#spl06_usage" aria-label="Permalink to &quot;Usage {#spl06_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>spl06 &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span>     [-I]        Internal I2C bus(es)</span></span>
<span class="line"><span>     [-X]        External I2C bus(es)</span></span>
<span class="line"><span>     [-s]        Internal SPI bus(es)</span></span>
<span class="line"><span>     [-S]        External SPI bus(es)</span></span>
<span class="line"><span>     [-b &lt;val&gt;]  board-specific bus (default=all) (external SPI: n-th bus</span></span>
<span class="line"><span>                 (default=1))</span></span>
<span class="line"><span>     [-c &lt;val&gt;]  chip-select pin (for internal SPI) or index (for external SPI)</span></span>
<span class="line"><span>     [-m &lt;val&gt;]  SPI mode</span></span>
<span class="line"><span>     [-f &lt;val&gt;]  bus frequency in kHz</span></span>
<span class="line"><span>     [-q]        quiet startup (no message if no device found)</span></span>
<span class="line"><span>     [-a &lt;val&gt;]  I2C address</span></span>
<span class="line"><span>                 default: 118</span></span>
<span class="line"><span>     [-s]        Internal SPI bus(es)</span></span>
<span class="line"><span>     [-S]        External SPI bus(es)</span></span>
<span class="line"><span>     [-b &lt;val&gt;]  board-specific bus (default=all) (external SPI: n-th bus</span></span>
<span class="line"><span>                 (default=1))</span></span>
<span class="line"><span>     [-c &lt;val&gt;]  chip-select pin (for internal SPI) or index (for external SPI)</span></span>
<span class="line"><span>     [-m &lt;val&gt;]  SPI mode</span></span>
<span class="line"><span>     [-f &lt;val&gt;]  bus frequency in kHz</span></span>
<span class="line"><span>     [-q]        quiet startup (no message if no device found)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div>`,61)]))}const h=a(l,[["render",t]]);export{b as __pageData,h as default};
