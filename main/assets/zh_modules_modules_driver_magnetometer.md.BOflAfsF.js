import{_ as s,c as n,a8 as e,o as p}from"./chunks/framework.BDnHobkS.js";const m=JSON.parse('{"title":"Modules Reference: Magnetometer (Driver)","description":"","frontmatter":{},"headers":[],"relativePath":"zh/modules/modules_driver_magnetometer.md","filePath":"zh/modules/modules_driver_magnetometer.md"}'),l={name:"zh/modules/modules_driver_magnetometer.md"};function t(i,a,r,c,o,d){return p(),n("div",null,a[0]||(a[0]=[e(`<h1 id="modules-reference-magnetometer-driver" tabindex="-1">Modules Reference: Magnetometer (Driver) <a class="header-anchor" href="#modules-reference-magnetometer-driver" aria-label="Permalink to &quot;Modules Reference: Magnetometer (Driver)&quot;">​</a></h1><h2 id="ak09916" tabindex="-1">ak09916 <a class="header-anchor" href="#ak09916" aria-label="Permalink to &quot;ak09916&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/magnetometer/akm/ak09916" target="_blank" rel="noreferrer">drivers/magnetometer/akm/ak09916</a></p><p><a id="ak09916_usage"></a></p><h3 id="用法" tabindex="-1">用法 <a class="header-anchor" href="#用法" aria-label="Permalink to &quot;用法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ak09916 &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span>     [-I]        Internal I2C bus(es)</span></span>
<span class="line"><span>     [-X]        External I2C bus(es)</span></span>
<span class="line"><span>     [-b &lt;val&gt;]  board-specific bus (default=all) (external SPI: n-th bus</span></span>
<span class="line"><span>                 (default=1))</span></span>
<span class="line"><span>     [-f &lt;val&gt;]  bus frequency in kHz</span></span>
<span class="line"><span>     [-q]        quiet startup (no message if no device found)</span></span>
<span class="line"><span>     [-a &lt;val&gt;]  I2C address</span></span>
<span class="line"><span>                 default: 12</span></span>
<span class="line"><span>     [-R &lt;val&gt;]  Rotation</span></span>
<span class="line"><span>                 default: 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="ak8963" tabindex="-1">ak8963 <a class="header-anchor" href="#ak8963" aria-label="Permalink to &quot;ak8963&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/magnetometer/akm/ak8963" target="_blank" rel="noreferrer">drivers/magnetometer/akm/ak8963</a></p><p><a id="ak8963_usage"></a></p><h3 id="用法-1" tabindex="-1">用法 <a class="header-anchor" href="#用法-1" aria-label="Permalink to &quot;用法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ak8963 &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span>     [-I]        Internal I2C bus(es)</span></span>
<span class="line"><span>     [-X]        External I2C bus(es)</span></span>
<span class="line"><span>     [-b &lt;val&gt;]  board-specific bus (default=all) (external SPI: n-th bus</span></span>
<span class="line"><span>                 (default=1))</span></span>
<span class="line"><span>     [-f &lt;val&gt;]  bus frequency in kHz</span></span>
<span class="line"><span>     [-q]        quiet startup (no message if no device found)</span></span>
<span class="line"><span>     [-a &lt;val&gt;]  I2C address</span></span>
<span class="line"><span>                 default: 12</span></span>
<span class="line"><span>     [-R &lt;val&gt;]  Rotation</span></span>
<span class="line"><span>                 default: 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="bmm150" tabindex="-1">bmm150 <a class="header-anchor" href="#bmm150" aria-label="Permalink to &quot;bmm150&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/magnetometer/bosch/bmm150" target="_blank" rel="noreferrer">drivers/magnetometer/bosch/bmm150</a></p><p><a id="bmm150_usage"></a></p><h3 id="用法-2" tabindex="-1">用法 <a class="header-anchor" href="#用法-2" aria-label="Permalink to &quot;用法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>bmm150 &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span>     [-I]        Internal I2C bus(es)</span></span>
<span class="line"><span>     [-X]        External I2C bus(es)</span></span>
<span class="line"><span>     [-b &lt;val&gt;]  board-specific bus (default=all) (external SPI: n-th bus</span></span>
<span class="line"><span>                 (default=1))</span></span>
<span class="line"><span>     [-f &lt;val&gt;]  bus frequency in kHz</span></span>
<span class="line"><span>     [-q]        quiet startup (no message if no device found)</span></span>
<span class="line"><span>     [-a &lt;val&gt;]  I2C address</span></span>
<span class="line"><span>                 default: 16</span></span>
<span class="line"><span>     [-R &lt;val&gt;]  Rotation</span></span>
<span class="line"><span>                 default: 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="bmm350" tabindex="-1">bmm350 <a class="header-anchor" href="#bmm350" aria-label="Permalink to &quot;bmm350&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/magnetometer/bosch/bmm350" target="_blank" rel="noreferrer">drivers/magnetometer/bosch/bmm350</a></p><p><a id="bmm350_usage"></a></p><h3 id="用法-3" tabindex="-1">用法 <a class="header-anchor" href="#用法-3" aria-label="Permalink to &quot;用法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>bmm350 &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span>     [-I]        Internal I2C bus(es)</span></span>
<span class="line"><span>     [-X]        External I2C bus(es)</span></span>
<span class="line"><span>     [-b &lt;val&gt;]  board-specific bus (default=all) (external SPI: n-th bus</span></span>
<span class="line"><span>                 (default=1))</span></span>
<span class="line"><span>     [-f &lt;val&gt;]  bus frequency in kHz</span></span>
<span class="line"><span>     [-q]        quiet startup (no message if no device found)</span></span>
<span class="line"><span>     [-a &lt;val&gt;]  I2C address</span></span>
<span class="line"><span>                 default: 20</span></span>
<span class="line"><span>     [-R &lt;val&gt;]  Rotation</span></span>
<span class="line"><span>                 default: 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="hmc5883" tabindex="-1">hmc5883 <a class="header-anchor" href="#hmc5883" aria-label="Permalink to &quot;hmc5883&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/magnetometer/hmc5883" target="_blank" rel="noreferrer">drivers/magnetometer/hmc5883</a></p><p><a id="hmc5883_usage"></a></p><h3 id="用法-4" tabindex="-1">用法 <a class="header-anchor" href="#用法-4" aria-label="Permalink to &quot;用法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>hmc5883 &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>     [-R &lt;val&gt;]  Rotation</span></span>
<span class="line"><span>                 default: 0</span></span>
<span class="line"><span>     [-T]        Enable temperature compensation</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="iis2mdc" tabindex="-1">iis2mdc <a class="header-anchor" href="#iis2mdc" aria-label="Permalink to &quot;iis2mdc&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/magnetometer/st/iis2mdc" target="_blank" rel="noreferrer">drivers/magnetometer/st/iis2mdc</a></p><p><a id="iis2mdc_usage"></a></p><h3 id="用法-5" tabindex="-1">用法 <a class="header-anchor" href="#用法-5" aria-label="Permalink to &quot;用法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>iis2mdc &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span>     [-I]        Internal I2C bus(es)</span></span>
<span class="line"><span>     [-X]        External I2C bus(es)</span></span>
<span class="line"><span>     [-b &lt;val&gt;]  board-specific bus (default=all) (external SPI: n-th bus</span></span>
<span class="line"><span>                 (default=1))</span></span>
<span class="line"><span>     [-f &lt;val&gt;]  bus frequency in kHz</span></span>
<span class="line"><span>     [-q]        quiet startup (no message if no device found)</span></span>
<span class="line"><span>     [-a &lt;val&gt;]  I2C address</span></span>
<span class="line"><span>                 default: 48</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="ist8308" tabindex="-1">ist8308 <a class="header-anchor" href="#ist8308" aria-label="Permalink to &quot;ist8308&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/magnetometer/isentek/ist8308" target="_blank" rel="noreferrer">drivers/magnetometer/isentek/ist8308</a></p><p><a id="ist8308_usage"></a></p><h3 id="用法-6" tabindex="-1">用法 <a class="header-anchor" href="#用法-6" aria-label="Permalink to &quot;用法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ist8308 &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span>     [-I]        Internal I2C bus(es)</span></span>
<span class="line"><span>     [-X]        External I2C bus(es)</span></span>
<span class="line"><span>     [-b &lt;val&gt;]  board-specific bus (default=all) (external SPI: n-th bus</span></span>
<span class="line"><span>                 (default=1))</span></span>
<span class="line"><span>     [-f &lt;val&gt;]  bus frequency in kHz</span></span>
<span class="line"><span>     [-q]        quiet startup (no message if no device found)</span></span>
<span class="line"><span>     [-a &lt;val&gt;]  I2C address</span></span>
<span class="line"><span>                 default: 12</span></span>
<span class="line"><span>     [-R &lt;val&gt;]  Rotation</span></span>
<span class="line"><span>                 default: 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="ist8310" tabindex="-1">ist8310 <a class="header-anchor" href="#ist8310" aria-label="Permalink to &quot;ist8310&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/magnetometer/isentek/ist8310" target="_blank" rel="noreferrer">drivers/magnetometer/isentek/ist8310</a></p><p><a id="ist8310_usage"></a></p><h3 id="用法-7" tabindex="-1">用法 <a class="header-anchor" href="#用法-7" aria-label="Permalink to &quot;用法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ist8310 &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span>     [-I]        Internal I2C bus(es)</span></span>
<span class="line"><span>     [-X]        External I2C bus(es)</span></span>
<span class="line"><span>     [-b &lt;val&gt;]  board-specific bus (default=all) (external SPI: n-th bus</span></span>
<span class="line"><span>                 (default=1))</span></span>
<span class="line"><span>     [-f &lt;val&gt;]  bus frequency in kHz</span></span>
<span class="line"><span>     [-q]        quiet startup (no message if no device found)</span></span>
<span class="line"><span>     [-a &lt;val&gt;]  I2C address</span></span>
<span class="line"><span>                 default: 14</span></span>
<span class="line"><span>     [-R &lt;val&gt;]  Rotation</span></span>
<span class="line"><span>                 default: 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="lis2mdl" tabindex="-1">lis2mdl <a class="header-anchor" href="#lis2mdl" aria-label="Permalink to &quot;lis2mdl&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/magnetometer/lis2mdl" target="_blank" rel="noreferrer">drivers/magnetometer/lis2mdl</a></p><p><a id="lis2mdl_usage"></a></p><h3 id="用法-8" tabindex="-1">用法 <a class="header-anchor" href="#用法-8" aria-label="Permalink to &quot;用法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>lis2mdl &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>                 default: 30</span></span>
<span class="line"><span>     [-R &lt;val&gt;]  Rotation</span></span>
<span class="line"><span>                 default: 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="lis3mdl" tabindex="-1">lis3mdl <a class="header-anchor" href="#lis3mdl" aria-label="Permalink to &quot;lis3mdl&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/magnetometer/lis3mdl" target="_blank" rel="noreferrer">drivers/magnetometer/lis3mdl</a></p><p><a id="lis3mdl_usage"></a></p><h3 id="用法-9" tabindex="-1">用法 <a class="header-anchor" href="#用法-9" aria-label="Permalink to &quot;用法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>lis3mdl &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>                 default: 30</span></span>
<span class="line"><span>     [-R &lt;val&gt;]  Rotation</span></span>
<span class="line"><span>                 default: 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   reset</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="lsm9ds1-mag" tabindex="-1">lsm9ds1_mag <a class="header-anchor" href="#lsm9ds1-mag" aria-label="Permalink to &quot;lsm9ds1_mag&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/magnetometer/lsm9ds1_mag" target="_blank" rel="noreferrer">drivers/magnetometer/lsm9ds1_mag</a></p><p><a id="lsm9ds1_mag_usage"></a></p><h3 id="用法-10" tabindex="-1">用法 <a class="header-anchor" href="#用法-10" aria-label="Permalink to &quot;用法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>lsm9ds1_mag &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span>     [-s]        Internal SPI bus(es)</span></span>
<span class="line"><span>     [-S]        External SPI bus(es)</span></span>
<span class="line"><span>     [-b &lt;val&gt;]  board-specific bus (default=all) (external SPI: n-th bus</span></span>
<span class="line"><span>                 (default=1))</span></span>
<span class="line"><span>     [-c &lt;val&gt;]  chip-select pin (for internal SPI) or index (for external SPI)</span></span>
<span class="line"><span>     [-m &lt;val&gt;]  SPI mode</span></span>
<span class="line"><span>     [-f &lt;val&gt;]  bus frequency in kHz</span></span>
<span class="line"><span>     [-q]        quiet startup (no message if no device found)</span></span>
<span class="line"><span>     [-R &lt;val&gt;]  Rotation</span></span>
<span class="line"><span>                 default: 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="mmc5983ma" tabindex="-1">mmc5983ma <a class="header-anchor" href="#mmc5983ma" aria-label="Permalink to &quot;mmc5983ma&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/magnetometer/memsic/mmc5983ma" target="_blank" rel="noreferrer">drivers/magnetometer/memsic/mmc5983ma</a></p><p><a id="mmc5983ma_usage"></a></p><h3 id="用法-11" tabindex="-1">用法 <a class="header-anchor" href="#用法-11" aria-label="Permalink to &quot;用法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mmc5983ma &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>                 default: 48</span></span>
<span class="line"><span>     [-R &lt;val&gt;]  Rotation</span></span>
<span class="line"><span>                 default: 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   reset</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="qmc5883l" tabindex="-1">qmc5883l <a class="header-anchor" href="#qmc5883l" aria-label="Permalink to &quot;qmc5883l&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/magnetometer/qmc5883l" target="_blank" rel="noreferrer">drivers/magnetometer/qmc5883l</a></p><p><a id="qmc5883l_usage"></a></p><h3 id="用法-12" tabindex="-1">用法 <a class="header-anchor" href="#用法-12" aria-label="Permalink to &quot;用法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>qmc5883l &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span>     [-I]        Internal I2C bus(es)</span></span>
<span class="line"><span>     [-X]        External I2C bus(es)</span></span>
<span class="line"><span>     [-b &lt;val&gt;]  board-specific bus (default=all) (external SPI: n-th bus</span></span>
<span class="line"><span>                 (default=1))</span></span>
<span class="line"><span>     [-f &lt;val&gt;]  bus frequency in kHz</span></span>
<span class="line"><span>     [-q]        quiet startup (no message if no device found)</span></span>
<span class="line"><span>     [-a &lt;val&gt;]  I2C address</span></span>
<span class="line"><span>                 default: 13</span></span>
<span class="line"><span>     [-R &lt;val&gt;]  Rotation</span></span>
<span class="line"><span>                 default: 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="rm3100" tabindex="-1">rm3100 <a class="header-anchor" href="#rm3100" aria-label="Permalink to &quot;rm3100&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/magnetometer/rm3100" target="_blank" rel="noreferrer">drivers/magnetometer/rm3100</a></p><p><a id="rm3100_usage"></a></p><h3 id="用法-13" tabindex="-1">用法 <a class="header-anchor" href="#用法-13" aria-label="Permalink to &quot;用法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>rm3100 &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>     [-R &lt;val&gt;]  Rotation</span></span>
<span class="line"><span>                 default: 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="vcm1193l" tabindex="-1">vcm1193l <a class="header-anchor" href="#vcm1193l" aria-label="Permalink to &quot;vcm1193l&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/magnetometer/vtrantech/vcm1193l" target="_blank" rel="noreferrer">drivers/magnetometer/vtrantech/vcm1193l</a></p><p><a id="vcm1193l_usage"></a></p><h3 id="用法-14" tabindex="-1">用法 <a class="header-anchor" href="#用法-14" aria-label="Permalink to &quot;用法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>vcm1193l &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span>     [-I]        Internal I2C bus(es)</span></span>
<span class="line"><span>     [-X]        External I2C bus(es)</span></span>
<span class="line"><span>     [-b &lt;val&gt;]  board-specific bus (default=all) (external SPI: n-th bus</span></span>
<span class="line"><span>                 (default=1))</span></span>
<span class="line"><span>     [-f &lt;val&gt;]  bus frequency in kHz</span></span>
<span class="line"><span>     [-q]        quiet startup (no message if no device found)</span></span>
<span class="line"><span>     [-R &lt;val&gt;]  Rotation</span></span>
<span class="line"><span>                 default: 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div>`,76)]))}const h=s(l,[["render",t]]);export{m as __pageData,h as default};
