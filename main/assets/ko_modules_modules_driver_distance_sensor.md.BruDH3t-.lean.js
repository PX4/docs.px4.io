import{_ as s,c as n,a8 as e,o as p}from"./chunks/framework.BDnHobkS.js";const u=JSON.parse('{"title":"모듈 참조: 거리 센서(드라이버)","description":"","frontmatter":{},"headers":[],"relativePath":"ko/modules/modules_driver_distance_sensor.md","filePath":"ko/modules/modules_driver_distance_sensor.md"}'),t={name:"ko/modules/modules_driver_distance_sensor.md"};function l(i,a,r,o,d,c){return p(),n("div",null,a[0]||(a[0]=[e(`<h1 id="모듈-참조-거리-센서-드라이버" tabindex="-1">모듈 참조: 거리 센서(드라이버) <a class="header-anchor" href="#모듈-참조-거리-센서-드라이버" aria-label="Permalink to &quot;모듈 참조: 거리 센서(드라이버)&quot;">​</a></h1><h2 id="afbrs50" tabindex="-1">afbrs50 <a class="header-anchor" href="#afbrs50" aria-label="Permalink to &quot;afbrs50&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/distance_sensor/broadcom/afbrs50" target="_blank" rel="noreferrer">drivers/distance_sensor/broadcom/afbrs50</a></p><h3 id="설명" tabindex="-1">설명 <a class="header-anchor" href="#설명" aria-label="Permalink to &quot;설명&quot;">​</a></h3><p>Broadcom AFBRS50용 드라이버입니다.</p><h3 id="예" tabindex="-1">예 <a class="header-anchor" href="#예" aria-label="Permalink to &quot;예&quot;">​</a></h3><p>지정된 직렬 장치에서 드라이버를 시작하려고 합니다.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>afbrs50 start</span></span></code></pre></div><p>드라이버를 중지합니다.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>afbrs50 stop</span></span></code></pre></div><p><a id="afbrs50_usage"></a></p><h3 id="사용법" tabindex="-1">사용법 <a class="header-anchor" href="#사용법" aria-label="Permalink to &quot;사용법&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>afbrs50 &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start         Start driver</span></span>
<span class="line"><span>     -d &lt;val&gt;    Serial device</span></span>
<span class="line"><span>     [-r &lt;val&gt;]  Sensor rotation - downward facing by default</span></span>
<span class="line"><span>                 default: 25</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   test          Test driver</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop          Stop driver</span></span></code></pre></div><h2 id="gy-us42" tabindex="-1">gy_us42 <a class="header-anchor" href="#gy-us42" aria-label="Permalink to &quot;gy_us42&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/distance_sensor/gy_us42" target="_blank" rel="noreferrer">drivers/distance_sensor/gy_us42</a></p><p><a id="gy_us42_usage"></a></p><h3 id="사용법-1" tabindex="-1">사용법 <a class="header-anchor" href="#사용법-1" aria-label="Permalink to &quot;사용법&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>gy_us42 &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span>     [-I]        Internal I2C bus(es)</span></span>
<span class="line"><span>     [-X]        External I2C bus(es)</span></span>
<span class="line"><span>     [-b &lt;val&gt;]  board-specific bus (default=all) (external SPI: n-th bus</span></span>
<span class="line"><span>                 (default=1))</span></span>
<span class="line"><span>     [-f &lt;val&gt;]  bus frequency in kHz</span></span>
<span class="line"><span>     [-q]        quiet startup (no message if no device found)</span></span>
<span class="line"><span>     [-R &lt;val&gt;]  Sensor rotation - downward facing by default</span></span>
<span class="line"><span>                 default: 25</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="leddar-one" tabindex="-1">leddar_one <a class="header-anchor" href="#leddar-one" aria-label="Permalink to &quot;leddar_one&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/distance_sensor/leddar_one" target="_blank" rel="noreferrer">drivers/distance_sensor/leddar_one</a></p><h3 id="설명-1" tabindex="-1">설명 <a class="header-anchor" href="#설명-1" aria-label="Permalink to &quot;설명&quot;">​</a></h3><p>LeddarOne LiDAR 직렬 버스 드라이버입니다.</p><p>대부분의 보드는 SENS_LEDDAR1_CFG 매개변수를 사용하여, 지정된 UART에서 드라이버를 활성화/시작하도록 설정합니다.</p><p>Setup/usage information: <a href="https://docs.px4.io/main/en/sensor/leddar_one.html" target="_blank" rel="noreferrer">https://docs.px4.io/main/en/sensor/leddar_one.html</a></p><h3 id="예-1" tabindex="-1">예 <a class="header-anchor" href="#예-1" aria-label="Permalink to &quot;예&quot;">​</a></h3><p>지정된 직렬 장치에서 드라이버를 시작하려고 합니다.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>leddar_one start -d /dev/ttyS1</span></span></code></pre></div><p>드라이버를 중지합니다.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>leddar_one stop</span></span></code></pre></div><p><a id="leddar_one_usage"></a></p><h3 id="사용법-2" tabindex="-1">사용법 <a class="header-anchor" href="#사용법-2" aria-label="Permalink to &quot;사용법&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>leddar_one &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start         Start driver</span></span>
<span class="line"><span>     -d &lt;val&gt;    Serial device</span></span>
<span class="line"><span>     [-r &lt;val&gt;]  Sensor rotation - downward facing by default</span></span>
<span class="line"><span>                 default: 25</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop          Stop driver</span></span></code></pre></div><h2 id="lightware-laser-i2c" tabindex="-1">lightware_laser_i2c <a class="header-anchor" href="#lightware-laser-i2c" aria-label="Permalink to &quot;lightware_laser_i2c&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/distance_sensor/lightware_laser_i2c" target="_blank" rel="noreferrer">drivers/distance_sensor/lightware_laser_i2c</a></p><h3 id="설명-2" tabindex="-1">설명 <a class="header-anchor" href="#설명-2" aria-label="Permalink to &quot;설명&quot;">​</a></h3><p>Lightware SFxx 시리즈 LIDAR 거리 측정기용 I2C 버스 드라이버: SF10/a, SF10/b, SF10/c, SF11/c, SF/LW20.</p><p>Setup/usage information: <a href="https://docs.px4.io/main/en/sensor/sfxx_lidar.html" target="_blank" rel="noreferrer">https://docs.px4.io/main/en/sensor/sfxx_lidar.html</a></p><p><a id="lightware_laser_i2c_usage"></a></p><h3 id="사용법-3" tabindex="-1">사용법 <a class="header-anchor" href="#사용법-3" aria-label="Permalink to &quot;사용법&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>lightware_laser_i2c &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span>     [-I]        Internal I2C bus(es)</span></span>
<span class="line"><span>     [-X]        External I2C bus(es)</span></span>
<span class="line"><span>     [-b &lt;val&gt;]  board-specific bus (default=all) (external SPI: n-th bus</span></span>
<span class="line"><span>                 (default=1))</span></span>
<span class="line"><span>     [-f &lt;val&gt;]  bus frequency in kHz</span></span>
<span class="line"><span>     [-q]        quiet startup (no message if no device found)</span></span>
<span class="line"><span>     [-a &lt;val&gt;]  I2C address</span></span>
<span class="line"><span>                 default: 102</span></span>
<span class="line"><span>     [-R &lt;val&gt;]  Sensor rotation - downward facing by default</span></span>
<span class="line"><span>                 default: 25</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="lightware-laser-serial" tabindex="-1">lightware_laser_serial <a class="header-anchor" href="#lightware-laser-serial" aria-label="Permalink to &quot;lightware_laser_serial&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/distance_sensor/lightware_laser_serial" target="_blank" rel="noreferrer">drivers/distance_sensor/lightware_laser_serial</a></p><h3 id="설명-3" tabindex="-1">설명 <a class="header-anchor" href="#설명-3" aria-label="Permalink to &quot;설명&quot;">​</a></h3><p>LightWare SF02/F, SF10/a, SF10/b, SF10/c, SF11/c 레이저 거리 측정기용 직렬 버스 드라이버.</p><p>대부분의 보드는 SENS_SF0X_CFG 매개변수를 사용하여 지정된 UART에서 드라이버를 활성화/시작하도록 설정합니다.</p><p>Setup/usage information: <a href="https://docs.px4.io/main/en/sensor/sfxx_lidar.html" target="_blank" rel="noreferrer">https://docs.px4.io/main/en/sensor/sfxx_lidar.html</a></p><h3 id="예-2" tabindex="-1">예 <a class="header-anchor" href="#예-2" aria-label="Permalink to &quot;예&quot;">​</a></h3><p>지정된 직렬 장치에서 드라이버를 시작하려고 합니다.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>lightware_laser_serial start -d /dev/ttyS1</span></span></code></pre></div><p>드라이버를 중지합니다.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>lightware_laser_serial stop</span></span></code></pre></div><p><a id="lightware_laser_serial_usage"></a></p><h3 id="사용법-4" tabindex="-1">사용법 <a class="header-anchor" href="#사용법-4" aria-label="Permalink to &quot;사용법&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>lightware_laser_serial &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start         Start driver</span></span>
<span class="line"><span>     -d &lt;val&gt;    Serial device</span></span>
<span class="line"><span>     [-R &lt;val&gt;]  Sensor rotation - downward facing by default</span></span>
<span class="line"><span>                 default: 25</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop          Stop driver</span></span></code></pre></div><h2 id="lightware-sf45-serial" tabindex="-1">lightware_sf45_serial <a class="header-anchor" href="#lightware-sf45-serial" aria-label="Permalink to &quot;lightware_sf45_serial&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/distance_sensor/lightware_sf45_serial" target="_blank" rel="noreferrer">drivers/distance_sensor/lightware_sf45_serial</a></p><h3 id="설명-4" tabindex="-1">설명 <a class="header-anchor" href="#설명-4" aria-label="Permalink to &quot;설명&quot;">​</a></h3><p>Serial bus driver for the Lightware SF45/b Laser rangefinder.</p><p>설정/사용 정보: <a href="https://docs.px4.io/master/en/sensor/sfxx_lidar.html" target="_blank" rel="noreferrer">https://docs.px4.io/master/en/sensor/sfxx_lidar.html</a></p><h3 id="예-3" tabindex="-1">예 <a class="header-anchor" href="#예-3" aria-label="Permalink to &quot;예&quot;">​</a></h3><p>지정된 직렬 장치에서 드라이버를 시작하려고 합니다.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>lightware_sf45_serial start -d /dev/ttyS1</span></span></code></pre></div><p>드라이버를 중지합니다.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>lightware_sf45_serial stop</span></span></code></pre></div><p><a id="lightware_sf45_serial_usage"></a></p><h3 id="사용법-5" tabindex="-1">사용법 <a class="header-anchor" href="#사용법-5" aria-label="Permalink to &quot;사용법&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>lightware_sf45_serial &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start         Start driver</span></span>
<span class="line"><span>     -d &lt;val&gt;    Serial device</span></span>
<span class="line"><span>     -R &lt;val&gt;    Sensor rotation - downward facing by default</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop          Stop driver</span></span></code></pre></div><h2 id="ll40ls" tabindex="-1">ll40ls <a class="header-anchor" href="#ll40ls" aria-label="Permalink to &quot;ll40ls&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/distance_sensor/ll40ls" target="_blank" rel="noreferrer">drivers/distance_sensor/ll40ls</a></p><h3 id="설명-5" tabindex="-1">설명 <a class="header-anchor" href="#설명-5" aria-label="Permalink to &quot;설명&quot;">​</a></h3><p>LidarLite 거리 측정기를 위한 I2C 버스 드라이버입니다.</p><p>센서/드라이버는 매개변수 SENS_EN_LL40LS를 사용하여 활성화합니다.</p><p>Setup/usage information: <a href="https://docs.px4.io/main/en/sensor/lidar_lite.html" target="_blank" rel="noreferrer">https://docs.px4.io/main/en/sensor/lidar_lite.html</a></p><p><a id="ll40ls_usage"></a></p><h3 id="사용법-6" tabindex="-1">사용법 <a class="header-anchor" href="#사용법-6" aria-label="Permalink to &quot;사용법&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ll40ls &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span>     [-I]        Internal I2C bus(es)</span></span>
<span class="line"><span>     [-X]        External I2C bus(es)</span></span>
<span class="line"><span>     [-b &lt;val&gt;]  board-specific bus (default=all) (external SPI: n-th bus</span></span>
<span class="line"><span>                 (default=1))</span></span>
<span class="line"><span>     [-f &lt;val&gt;]  bus frequency in kHz</span></span>
<span class="line"><span>     [-q]        quiet startup (no message if no device found)</span></span>
<span class="line"><span>     [-a &lt;val&gt;]  I2C address</span></span>
<span class="line"><span>                 default: 98</span></span>
<span class="line"><span>     [-R &lt;val&gt;]  Sensor rotation - downward facing by default</span></span>
<span class="line"><span>                 default: 25</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   regdump</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="mappydot" tabindex="-1">mappydot <a class="header-anchor" href="#mappydot" aria-label="Permalink to &quot;mappydot&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/distance_sensor/mappydot" target="_blank" rel="noreferrer">drivers/distance_sensor/mappydot</a></p><p><a id="mappydot_usage"></a></p><h3 id="사용법-7" tabindex="-1">사용법 <a class="header-anchor" href="#사용법-7" aria-label="Permalink to &quot;사용법&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mappydot &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="mb12xx" tabindex="-1">mb12xx <a class="header-anchor" href="#mb12xx" aria-label="Permalink to &quot;mb12xx&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/distance_sensor/mb12xx" target="_blank" rel="noreferrer">drivers/distance_sensor/mb12xx</a></p><p><a id="mb12xx_usage"></a></p><h3 id="사용법-8" tabindex="-1">사용법 <a class="header-anchor" href="#사용법-8" aria-label="Permalink to &quot;사용법&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mb12xx &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span>     [-I]        Internal I2C bus(es)</span></span>
<span class="line"><span>     [-X]        External I2C bus(es)</span></span>
<span class="line"><span>     [-b &lt;val&gt;]  board-specific bus (default=all) (external SPI: n-th bus</span></span>
<span class="line"><span>                 (default=1))</span></span>
<span class="line"><span>     [-f &lt;val&gt;]  bus frequency in kHz</span></span>
<span class="line"><span>     [-q]        quiet startup (no message if no device found)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   set_address</span></span>
<span class="line"><span>     [-a &lt;val&gt;]  I2C address</span></span>
<span class="line"><span>                 default: 112</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="pga460" tabindex="-1">pga460 <a class="header-anchor" href="#pga460" aria-label="Permalink to &quot;pga460&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/distance_sensor/pga460" target="_blank" rel="noreferrer">drivers/distance_sensor/pga460</a></p><h3 id="설명-6" tabindex="-1">설명 <a class="header-anchor" href="#설명-6" aria-label="Permalink to &quot;설명&quot;">​</a></h3><p>장치와의 통신을 처리하고, uORB를 통해 거리를 게시하는 초음파 거리 측정기 드라이버입니다.</p><h3 id="구현" tabindex="-1">구현 <a class="header-anchor" href="#구현" aria-label="Permalink to &quot;구현&quot;">​</a></h3><p>This driver is implemented as a NuttX task. 이 구현은 work_queue에서 지원되지 않는 UART를 통해 메시지에 대한 폴링이 필요하기 때문에 선택되었습니다. 이 드라이버는 실행되는 동안 지속적으로 범위 측정을 수행합니다. 잘못된 판독값을 감지하는 간단한 알고리즘은 게시중인 데이터의 품질을 개선하기 위하여 드라이버 수준에서 구현됩니다. 드라이버는 센서 데이터가 유효하지 않거나 불안정하다고 판단되는 경우에는, 데이터를 게시하지 않습니다.</p><p><a id="pga460_usage"></a></p><h3 id="사용법-9" tabindex="-1">사용법 <a class="header-anchor" href="#사용법-9" aria-label="Permalink to &quot;사용법&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>pga460 &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span>     [device_path] The pga460 sensor device path, (e.g: /dev/ttyS6)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   help</span></span></code></pre></div><h2 id="srf02" tabindex="-1">srf02 <a class="header-anchor" href="#srf02" aria-label="Permalink to &quot;srf02&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/distance_sensor/srf02" target="_blank" rel="noreferrer">drivers/distance_sensor/srf02</a></p><p><a id="srf02_usage"></a></p><h3 id="사용법-10" tabindex="-1">사용법 <a class="header-anchor" href="#사용법-10" aria-label="Permalink to &quot;사용법&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>srf02 &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span>     [-I]        Internal I2C bus(es)</span></span>
<span class="line"><span>     [-X]        External I2C bus(es)</span></span>
<span class="line"><span>     [-b &lt;val&gt;]  board-specific bus (default=all) (external SPI: n-th bus</span></span>
<span class="line"><span>                 (default=1))</span></span>
<span class="line"><span>     [-f &lt;val&gt;]  bus frequency in kHz</span></span>
<span class="line"><span>     [-q]        quiet startup (no message if no device found)</span></span>
<span class="line"><span>     [-a &lt;val&gt;]  I2C address</span></span>
<span class="line"><span>                 default: 112</span></span>
<span class="line"><span>     [-R &lt;val&gt;]  Sensor rotation - downward facing by default</span></span>
<span class="line"><span>                 default: 25</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="srf05" tabindex="-1">srf05 <a class="header-anchor" href="#srf05" aria-label="Permalink to &quot;srf05&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/distance_sensor/srf05" target="_blank" rel="noreferrer">drivers/distance_sensor/srf05</a></p><h3 id="설명-7" tabindex="-1">설명 <a class="header-anchor" href="#설명-7" aria-label="Permalink to &quot;설명&quot;">​</a></h3><p>HY-SRF05 / HC-SR05 및 HC-SR04 거리 측정기용 드라이버입니다.</p><p>센서/드라이버는 SENS_EN_HXSRX0X 매개변수를 사용하여 활성화합니다.</p><p><a id="srf05_usage"></a></p><h3 id="사용법-11" tabindex="-1">사용법 <a class="header-anchor" href="#사용법-11" aria-label="Permalink to &quot;사용법&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>srf05 &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start         Start driver</span></span>
<span class="line"><span>     [-R &lt;val&gt;]  Sensor rotation - downward facing by default</span></span>
<span class="line"><span>                 default: 25</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        Print driver status information</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop          Stop driver</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="teraranger" tabindex="-1">teraranger <a class="header-anchor" href="#teraranger" aria-label="Permalink to &quot;teraranger&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/distance_sensor/teraranger" target="_blank" rel="noreferrer">drivers/distance_sensor/teraranger</a></p><h3 id="설명-8" tabindex="-1">설명 <a class="header-anchor" href="#설명-8" aria-label="Permalink to &quot;설명&quot;">​</a></h3><p>TeraRanger 거리 측정기를 위한 I2C 버스 드라이버입니다.</p><p>센서/드라이버는 SENS_EN_TRANGER 매개변수를 사용하여 활성화합니다.</p><p>Setup/usage information: <a href="https://docs.px4.io/main/en/sensor/rangefinders.html#teraranger-rangefinders" target="_blank" rel="noreferrer">https://docs.px4.io/main/en/sensor/rangefinders.html#teraranger-rangefinders</a></p><p><a id="teraranger_usage"></a></p><h3 id="사용법-12" tabindex="-1">사용법 <a class="header-anchor" href="#사용법-12" aria-label="Permalink to &quot;사용법&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>teraranger &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>     [-R &lt;val&gt;]  Sensor rotation - downward facing by default</span></span>
<span class="line"><span>                 default: 25</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="tf02pro" tabindex="-1">tf02pro <a class="header-anchor" href="#tf02pro" aria-label="Permalink to &quot;tf02pro&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/distance_sensor/tf02pro" target="_blank" rel="noreferrer">drivers/distance_sensor/tf02pro</a></p><p><a id="tf02pro_usage"></a></p><h3 id="사용법-13" tabindex="-1">사용법 <a class="header-anchor" href="#사용법-13" aria-label="Permalink to &quot;사용법&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>tf02pro &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>     [-R &lt;val&gt;]  Sensor rotation - downward facing by default</span></span>
<span class="line"><span>                 default: 25</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="tfmini" tabindex="-1">tfmini <a class="header-anchor" href="#tfmini" aria-label="Permalink to &quot;tfmini&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/distance_sensor/tfmini" target="_blank" rel="noreferrer">drivers/distance_sensor/tfmini</a></p><h3 id="설명-9" tabindex="-1">설명 <a class="header-anchor" href="#설명-9" aria-label="Permalink to &quot;설명&quot;">​</a></h3><p>Benewake TFmini LiDAR용 직렬 버스 드라이버입니다.</p><p>대부분의 보드는 SENS_TFMINI_CFG 매개변수를 사용하여 지정된 UART에서 드라이버를 활성화/시작하도록 설정합니다.</p><p>Setup/usage information: <a href="https://docs.px4.io/main/en/sensor/tfmini.html" target="_blank" rel="noreferrer">https://docs.px4.io/main/en/sensor/tfmini.html</a></p><h3 id="예-4" tabindex="-1">예 <a class="header-anchor" href="#예-4" aria-label="Permalink to &quot;예&quot;">​</a></h3><p>지정된 직렬 장치에서 드라이버를 시작하려고 합니다.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>tfmini start -d /dev/ttyS1</span></span></code></pre></div><p>드라이버를 중지합니다.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>tfmini stop</span></span></code></pre></div><p><a id="tfmini_usage"></a></p><h3 id="사용법-14" tabindex="-1">사용법 <a class="header-anchor" href="#사용법-14" aria-label="Permalink to &quot;사용법&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>tfmini &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start         Start driver</span></span>
<span class="line"><span>     -d &lt;val&gt;    Serial device</span></span>
<span class="line"><span>     [-R &lt;val&gt;]  Sensor rotation - downward facing by default</span></span>
<span class="line"><span>                 default: 25</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        Driver status</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop          Stop driver</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   test          Test driver (basic functional tests)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        Print driver status</span></span></code></pre></div><h2 id="ulanding-radar" tabindex="-1">ulanding_radar <a class="header-anchor" href="#ulanding-radar" aria-label="Permalink to &quot;ulanding_radar&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/distance_sensor/ulanding_radar" target="_blank" rel="noreferrer">drivers/distance_sensor/ulanding_radar</a></p><h3 id="설명-10" tabindex="-1">설명 <a class="header-anchor" href="#설명-10" aria-label="Permalink to &quot;설명&quot;">​</a></h3><p>Aerotenna uLanding 레이더용 직렬 버스 드라이버입니다.</p><p>설정/사용 정보: <a href="https://docs.px4.io/v1.9.0/en/sensor/ulanding_radar.html" target="_blank" rel="noreferrer">https://docs.px4.io/v1.9.0/en/sensor/ulanding_radar.html</a></p><h3 id="예-5" tabindex="-1">예 <a class="header-anchor" href="#예-5" aria-label="Permalink to &quot;예&quot;">​</a></h3><p>지정된 직렬 장치에서 드라이버를 시작하려고 합니다.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ulanding_radar start -d /dev/ttyS1</span></span></code></pre></div><p>드라이버를 중지합니다.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ulanding_radar stop</span></span></code></pre></div><p><a id="ulanding_radar_usage"></a></p><h3 id="사용법-15" tabindex="-1">사용법 <a class="header-anchor" href="#사용법-15" aria-label="Permalink to &quot;사용법&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ulanding_radar &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start         Start driver</span></span>
<span class="line"><span>     -d &lt;val&gt;    Serial device</span></span>
<span class="line"><span>                 values: &lt;file:dev&gt;, default: /dev/ttyS3</span></span>
<span class="line"><span>     [-R &lt;val&gt;]  Sensor rotation - downward facing by default</span></span>
<span class="line"><span>                 default: 25</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop          Stop driver</span></span></code></pre></div><h2 id="vl53l0x" tabindex="-1">vl53l0x <a class="header-anchor" href="#vl53l0x" aria-label="Permalink to &quot;vl53l0x&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/distance_sensor/vl53l0x" target="_blank" rel="noreferrer">drivers/distance_sensor/vl53l0x</a></p><p><a id="vl53l0x_usage"></a></p><h3 id="사용법-16" tabindex="-1">사용법 <a class="header-anchor" href="#사용법-16" aria-label="Permalink to &quot;사용법&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>vl53l0x &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span>     [-I]        Internal I2C bus(es)</span></span>
<span class="line"><span>     [-X]        External I2C bus(es)</span></span>
<span class="line"><span>     [-b &lt;val&gt;]  board-specific bus (default=all) (external SPI: n-th bus</span></span>
<span class="line"><span>                 (default=1))</span></span>
<span class="line"><span>     [-f &lt;val&gt;]  bus frequency in kHz</span></span>
<span class="line"><span>     [-q]        quiet startup (no message if no device found)</span></span>
<span class="line"><span>     [-a &lt;val&gt;]  I2C address</span></span>
<span class="line"><span>                 default: 41</span></span>
<span class="line"><span>     [-R &lt;val&gt;]  Sensor rotation - downward facing by default</span></span>
<span class="line"><span>                 default: 25</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="vl53l1x" tabindex="-1">vl53l1x <a class="header-anchor" href="#vl53l1x" aria-label="Permalink to &quot;vl53l1x&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/distance_sensor/vl53l1x" target="_blank" rel="noreferrer">drivers/distance_sensor/vl53l1x</a></p><p><a id="vl53l1x_usage"></a></p><h3 id="사용법-17" tabindex="-1">사용법 <a class="header-anchor" href="#사용법-17" aria-label="Permalink to &quot;사용법&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>vl53l1x &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span>     [-I]        Internal I2C bus(es)</span></span>
<span class="line"><span>     [-X]        External I2C bus(es)</span></span>
<span class="line"><span>     [-b &lt;val&gt;]  board-specific bus (default=all) (external SPI: n-th bus</span></span>
<span class="line"><span>                 (default=1))</span></span>
<span class="line"><span>     [-f &lt;val&gt;]  bus frequency in kHz</span></span>
<span class="line"><span>     [-q]        quiet startup (no message if no device found)</span></span>
<span class="line"><span>     [-a &lt;val&gt;]  I2C address</span></span>
<span class="line"><span>                 default: 41</span></span>
<span class="line"><span>     [-R &lt;val&gt;]  Sensor rotation - downward facing by default</span></span>
<span class="line"><span>                 default: 25</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div>`,159)]))}const g=s(t,[["render",l]]);export{u as __pageData,g as default};
