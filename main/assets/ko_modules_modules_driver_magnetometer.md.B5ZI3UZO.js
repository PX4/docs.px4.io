import{_ as s,c as n,al as e,o as p}from"./chunks/framework.D3pXwl8O.js";const m=JSON.parse('{"title":"모듈 참조: 자기 센서(드라이버)","description":"","frontmatter":{},"headers":[],"relativePath":"ko/modules/modules_driver_magnetometer.md","filePath":"ko/modules/modules_driver_magnetometer.md"}'),l={name:"ko/modules/modules_driver_magnetometer.md"};function t(i,a,r,c,o,u){return p(),n("div",null,a[0]||(a[0]=[e(`<h1 id="모듈-참조-자기-센서-드라이버" tabindex="-1">모듈 참조: 자기 센서(드라이버) <a class="header-anchor" href="#모듈-참조-자기-센서-드라이버" aria-label="Permalink to &quot;모듈 참조: 자기 센서(드라이버)&quot;">​</a></h1><h2 id="ak09916" tabindex="-1">ak09916 <a class="header-anchor" href="#ak09916" aria-label="Permalink to &quot;ak09916&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/magnetometer/akm/ak09916" target="_blank" rel="noreferrer">drivers/magnetometer/akm/ak09916</a></p><h3 id="ak09916_usage" tabindex="-1">Usage <a class="header-anchor" href="#ak09916_usage" aria-label="Permalink to &quot;Usage {#ak09916_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ak09916 &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="ak8963" tabindex="-1">ak8963 <a class="header-anchor" href="#ak8963" aria-label="Permalink to &quot;ak8963&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/magnetometer/akm/ak8963" target="_blank" rel="noreferrer">drivers/magnetometer/akm/ak8963</a></p><h3 id="ak8963_usage" tabindex="-1">Usage <a class="header-anchor" href="#ak8963_usage" aria-label="Permalink to &quot;Usage {#ak8963_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ak8963 &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="bmm150" tabindex="-1">bmm150 <a class="header-anchor" href="#bmm150" aria-label="Permalink to &quot;bmm150&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/magnetometer/bosch/bmm150" target="_blank" rel="noreferrer">drivers/magnetometer/bosch/bmm150</a></p><h3 id="bmm150_usage" tabindex="-1">Usage <a class="header-anchor" href="#bmm150_usage" aria-label="Permalink to &quot;Usage {#bmm150_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>bmm150 &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="bmm350" tabindex="-1">bmm350 <a class="header-anchor" href="#bmm350" aria-label="Permalink to &quot;bmm350&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/magnetometer/bosch/bmm350" target="_blank" rel="noreferrer">drivers/magnetometer/bosch/bmm350</a></p><h3 id="bmm350_usage" tabindex="-1">Usage <a class="header-anchor" href="#bmm350_usage" aria-label="Permalink to &quot;Usage {#bmm350_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>bmm350 &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="hmc5883" tabindex="-1">hmc5883 <a class="header-anchor" href="#hmc5883" aria-label="Permalink to &quot;hmc5883&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/magnetometer/hmc5883" target="_blank" rel="noreferrer">drivers/magnetometer/hmc5883</a></p><h3 id="hmc5883_usage" tabindex="-1">Usage <a class="header-anchor" href="#hmc5883_usage" aria-label="Permalink to &quot;Usage {#hmc5883_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>hmc5883 &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="iis2mdc" tabindex="-1">iis2mdc <a class="header-anchor" href="#iis2mdc" aria-label="Permalink to &quot;iis2mdc&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/magnetometer/st/iis2mdc" target="_blank" rel="noreferrer">drivers/magnetometer/st/iis2mdc</a></p><h3 id="iis2mdc_usage" tabindex="-1">Usage <a class="header-anchor" href="#iis2mdc_usage" aria-label="Permalink to &quot;Usage {#iis2mdc_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>iis2mdc &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="ist8308" tabindex="-1">ist8308 <a class="header-anchor" href="#ist8308" aria-label="Permalink to &quot;ist8308&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/magnetometer/isentek/ist8308" target="_blank" rel="noreferrer">drivers/magnetometer/isentek/ist8308</a></p><h3 id="ist8308_usage" tabindex="-1">Usage <a class="header-anchor" href="#ist8308_usage" aria-label="Permalink to &quot;Usage {#ist8308_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ist8308 &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="ist8310" tabindex="-1">ist8310 <a class="header-anchor" href="#ist8310" aria-label="Permalink to &quot;ist8310&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/magnetometer/isentek/ist8310" target="_blank" rel="noreferrer">drivers/magnetometer/isentek/ist8310</a></p><h3 id="ist8310_usage" tabindex="-1">Usage <a class="header-anchor" href="#ist8310_usage" aria-label="Permalink to &quot;Usage {#ist8310_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ist8310 &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="lis3mdl" tabindex="-1">lis3mdl <a class="header-anchor" href="#lis3mdl" aria-label="Permalink to &quot;lis3mdl&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/magnetometer/lis3mdl" target="_blank" rel="noreferrer">drivers/magnetometer/lis3mdl</a></p><h3 id="lis3mdl_usage" tabindex="-1">Usage <a class="header-anchor" href="#lis3mdl_usage" aria-label="Permalink to &quot;Usage {#lis3mdl_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>lis3mdl &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="lsm9ds1-mag" tabindex="-1">lsm9ds1_mag <a class="header-anchor" href="#lsm9ds1-mag" aria-label="Permalink to &quot;lsm9ds1_mag&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/magnetometer/lsm9ds1_mag" target="_blank" rel="noreferrer">drivers/magnetometer/lsm9ds1_mag</a></p><h3 id="lsm9ds1_mag_usage" tabindex="-1">Usage <a class="header-anchor" href="#lsm9ds1_mag_usage" aria-label="Permalink to &quot;Usage {#lsm9ds1_mag_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>lsm9ds1_mag &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="mmc5983ma" tabindex="-1">mmc5983ma <a class="header-anchor" href="#mmc5983ma" aria-label="Permalink to &quot;mmc5983ma&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/magnetometer/memsic/mmc5983ma" target="_blank" rel="noreferrer">drivers/magnetometer/memsic/mmc5983ma</a></p><h3 id="mmc5983ma_usage" tabindex="-1">Usage <a class="header-anchor" href="#mmc5983ma_usage" aria-label="Permalink to &quot;Usage {#mmc5983ma_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mmc5983ma &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="qmc5883l" tabindex="-1">qmc5883l <a class="header-anchor" href="#qmc5883l" aria-label="Permalink to &quot;qmc5883l&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/magnetometer/qmc5883l" target="_blank" rel="noreferrer">drivers/magnetometer/qmc5883l</a></p><h3 id="qmc5883l_usage" tabindex="-1">Usage <a class="header-anchor" href="#qmc5883l_usage" aria-label="Permalink to &quot;Usage {#qmc5883l_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>qmc5883l &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="rm3100" tabindex="-1">rm3100 <a class="header-anchor" href="#rm3100" aria-label="Permalink to &quot;rm3100&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/magnetometer/rm3100" target="_blank" rel="noreferrer">drivers/magnetometer/rm3100</a></p><h3 id="rm3100_usage" tabindex="-1">Usage <a class="header-anchor" href="#rm3100_usage" aria-label="Permalink to &quot;Usage {#rm3100_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>rm3100 &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="vcm1193l" tabindex="-1">vcm1193l <a class="header-anchor" href="#vcm1193l" aria-label="Permalink to &quot;vcm1193l&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/magnetometer/vtrantech/vcm1193l" target="_blank" rel="noreferrer">drivers/magnetometer/vtrantech/vcm1193l</a></p><h3 id="vcm1193l_usage" tabindex="-1">Usage <a class="header-anchor" href="#vcm1193l_usage" aria-label="Permalink to &quot;Usage {#vcm1193l_usage}&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>vcm1193l &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>   status        print status info</span></span></code></pre></div>`,57)]))}const g=s(l,[["render",t]]);export{m as __pageData,g as default};
