import{_ as a,c as s,o as n,ab as e}from"./chunks/framework.CUflZczI.js";const b=JSON.parse('{"title":"Modules Reference: Distance Sensor (Driver)","description":"","frontmatter":{},"headers":[],"relativePath":"en/modules/modules_driver_distance_sensor.md","filePath":"en/modules/modules_driver_distance_sensor.md"}'),p={name:"en/modules/modules_driver_distance_sensor.md"},t=e(`<h1 id="modules-reference-distance-sensor-driver" tabindex="-1">Modules Reference: Distance Sensor (Driver) <a class="header-anchor" href="#modules-reference-distance-sensor-driver" aria-label="Permalink to &quot;Modules Reference: Distance Sensor (Driver)&quot;">​</a></h1><h2 id="afbrs50" tabindex="-1">afbrs50 <a class="header-anchor" href="#afbrs50" aria-label="Permalink to &quot;afbrs50&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/distance_sensor/broadcom/afbrs50" target="_blank" rel="noreferrer">drivers/distance_sensor/broadcom/afbrs50</a></p><h3 id="description" tabindex="-1">Description <a class="header-anchor" href="#description" aria-label="Permalink to &quot;Description&quot;">​</a></h3><p>Driver for the Broadcom AFBRS50.</p><h3 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h3><p>Attempt to start driver on a specified serial device.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>afbrs50 start</span></span></code></pre></div><p>Stop driver</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>afbrs50 stop</span></span></code></pre></div><p><a id="afbrs50_usage"></a></p><h3 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>afbrs50 &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start         Start driver</span></span>
<span class="line"><span>     -d &lt;val&gt;    Serial device</span></span>
<span class="line"><span>     [-r &lt;val&gt;]  Sensor rotation - downward facing by default</span></span>
<span class="line"><span>                 default: 25</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   test          Test driver</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop          Stop driver</span></span></code></pre></div><h2 id="gy-us42" tabindex="-1">gy_us42 <a class="header-anchor" href="#gy-us42" aria-label="Permalink to &quot;gy_us42&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/distance_sensor/gy_us42" target="_blank" rel="noreferrer">drivers/distance_sensor/gy_us42</a></p><p><a id="gy_us42_usage"></a></p><h3 id="usage-1" tabindex="-1">Usage <a class="header-anchor" href="#usage-1" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>gy_us42 &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="leddar-one" tabindex="-1">leddar_one <a class="header-anchor" href="#leddar-one" aria-label="Permalink to &quot;leddar_one&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/distance_sensor/leddar_one" target="_blank" rel="noreferrer">drivers/distance_sensor/leddar_one</a></p><h3 id="description-1" tabindex="-1">Description <a class="header-anchor" href="#description-1" aria-label="Permalink to &quot;Description&quot;">​</a></h3><p>Serial bus driver for the LeddarOne LiDAR.</p><p>Most boards are configured to enable/start the driver on a specified UART using the SENS_LEDDAR1_CFG parameter.</p><p>Setup/usage information: <a href="https://docs.px4.io/v1.15/en/sensor/leddar_one.html" target="_blank" rel="noreferrer">https://docs.px4.io/v1.15/en/sensor/leddar_one.html</a></p><h3 id="examples-1" tabindex="-1">Examples <a class="header-anchor" href="#examples-1" aria-label="Permalink to &quot;Examples&quot;">​</a></h3><p>Attempt to start driver on a specified serial device.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>leddar_one start -d /dev/ttyS1</span></span></code></pre></div><p>Stop driver</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>leddar_one stop</span></span></code></pre></div><p><a id="leddar_one_usage"></a></p><h3 id="usage-2" tabindex="-1">Usage <a class="header-anchor" href="#usage-2" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>leddar_one &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start         Start driver</span></span>
<span class="line"><span>     -d &lt;val&gt;    Serial device</span></span>
<span class="line"><span>     [-r &lt;val&gt;]  Sensor rotation - downward facing by default</span></span>
<span class="line"><span>                 default: 25</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop          Stop driver</span></span></code></pre></div><h2 id="lightware-laser-i2c" tabindex="-1">lightware_laser_i2c <a class="header-anchor" href="#lightware-laser-i2c" aria-label="Permalink to &quot;lightware_laser_i2c&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/distance_sensor/lightware_laser_i2c" target="_blank" rel="noreferrer">drivers/distance_sensor/lightware_laser_i2c</a></p><h3 id="description-2" tabindex="-1">Description <a class="header-anchor" href="#description-2" aria-label="Permalink to &quot;Description&quot;">​</a></h3><p>I2C bus driver for Lightware SFxx series LIDAR rangefinders: SF10/a, SF10/b, SF10/c, SF11/c, SF/LW20.</p><p>Setup/usage information: <a href="https://docs.px4.io/v1.15/en/sensor/sfxx_lidar.html" target="_blank" rel="noreferrer">https://docs.px4.io/v1.15/en/sensor/sfxx_lidar.html</a></p><p><a id="lightware_laser_i2c_usage"></a></p><h3 id="usage-3" tabindex="-1">Usage <a class="header-anchor" href="#usage-3" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>lightware_laser_i2c &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="lightware-laser-serial" tabindex="-1">lightware_laser_serial <a class="header-anchor" href="#lightware-laser-serial" aria-label="Permalink to &quot;lightware_laser_serial&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/distance_sensor/lightware_laser_serial" target="_blank" rel="noreferrer">drivers/distance_sensor/lightware_laser_serial</a></p><h3 id="description-3" tabindex="-1">Description <a class="header-anchor" href="#description-3" aria-label="Permalink to &quot;Description&quot;">​</a></h3><p>Serial bus driver for the LightWare SF02/F, SF10/a, SF10/b, SF10/c, SF11/c Laser rangefinders.</p><p>Most boards are configured to enable/start the driver on a specified UART using the SENS_SF0X_CFG parameter.</p><p>Setup/usage information: <a href="https://docs.px4.io/v1.15/en/sensor/sfxx_lidar.html" target="_blank" rel="noreferrer">https://docs.px4.io/v1.15/en/sensor/sfxx_lidar.html</a></p><h3 id="examples-2" tabindex="-1">Examples <a class="header-anchor" href="#examples-2" aria-label="Permalink to &quot;Examples&quot;">​</a></h3><p>Attempt to start driver on a specified serial device.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>lightware_laser_serial start -d /dev/ttyS1</span></span></code></pre></div><p>Stop driver</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>lightware_laser_serial stop</span></span></code></pre></div><p><a id="lightware_laser_serial_usage"></a></p><h3 id="usage-4" tabindex="-1">Usage <a class="header-anchor" href="#usage-4" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>lightware_laser_serial &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start         Start driver</span></span>
<span class="line"><span>     -d &lt;val&gt;    Serial device</span></span>
<span class="line"><span>     [-R &lt;val&gt;]  Sensor rotation - downward facing by default</span></span>
<span class="line"><span>                 default: 25</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop          Stop driver</span></span></code></pre></div><h2 id="lightware-sf45-serial" tabindex="-1">lightware_sf45_serial <a class="header-anchor" href="#lightware-sf45-serial" aria-label="Permalink to &quot;lightware_sf45_serial&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/distance_sensor/lightware_sf45_serial" target="_blank" rel="noreferrer">drivers/distance_sensor/lightware_sf45_serial</a></p><h3 id="description-4" tabindex="-1">Description <a class="header-anchor" href="#description-4" aria-label="Permalink to &quot;Description&quot;">​</a></h3><p>Serial bus driver for the Lightware SF45/b Laser rangefinder.</p><p>Setup/usage information: <a href="https://docs.px4.io/master/en/sensor/sfxx_lidar.html" target="_blank" rel="noreferrer">https://docs.px4.io/master/en/sensor/sfxx_lidar.html</a></p><h3 id="examples-3" tabindex="-1">Examples <a class="header-anchor" href="#examples-3" aria-label="Permalink to &quot;Examples&quot;">​</a></h3><p>Attempt to start driver on a specified serial device.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>lightware_sf45_serial start -d /dev/ttyS1</span></span></code></pre></div><p>Stop driver</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>lightware_sf45_serial stop</span></span></code></pre></div><p><a id="lightware_sf45_serial_usage"></a></p><h3 id="usage-5" tabindex="-1">Usage <a class="header-anchor" href="#usage-5" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>lightware_sf45_serial &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start         Start driver</span></span>
<span class="line"><span>     -d &lt;val&gt;    Serial device</span></span>
<span class="line"><span>     -R &lt;val&gt;    Sensor rotation - downward facing by default</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop          Stop driver</span></span></code></pre></div><h2 id="ll40ls" tabindex="-1">ll40ls <a class="header-anchor" href="#ll40ls" aria-label="Permalink to &quot;ll40ls&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/distance_sensor/ll40ls" target="_blank" rel="noreferrer">drivers/distance_sensor/ll40ls</a></p><h3 id="description-5" tabindex="-1">Description <a class="header-anchor" href="#description-5" aria-label="Permalink to &quot;Description&quot;">​</a></h3><p>I2C bus driver for LidarLite rangefinders.</p><p>The sensor/driver must be enabled using the parameter SENS_EN_LL40LS.</p><p>Setup/usage information: <a href="https://docs.px4.io/v1.15/en/sensor/lidar_lite.html" target="_blank" rel="noreferrer">https://docs.px4.io/v1.15/en/sensor/lidar_lite.html</a></p><p><a id="ll40ls_usage"></a></p><h3 id="usage-6" tabindex="-1">Usage <a class="header-anchor" href="#usage-6" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>ll40ls &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="mappydot" tabindex="-1">mappydot <a class="header-anchor" href="#mappydot" aria-label="Permalink to &quot;mappydot&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/distance_sensor/mappydot" target="_blank" rel="noreferrer">drivers/distance_sensor/mappydot</a></p><p><a id="mappydot_usage"></a></p><h3 id="usage-7" tabindex="-1">Usage <a class="header-anchor" href="#usage-7" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>mappydot &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="mb12xx" tabindex="-1">mb12xx <a class="header-anchor" href="#mb12xx" aria-label="Permalink to &quot;mb12xx&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/distance_sensor/mb12xx" target="_blank" rel="noreferrer">drivers/distance_sensor/mb12xx</a></p><p><a id="mb12xx_usage"></a></p><h3 id="usage-8" tabindex="-1">Usage <a class="header-anchor" href="#usage-8" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>mb12xx &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="pga460" tabindex="-1">pga460 <a class="header-anchor" href="#pga460" aria-label="Permalink to &quot;pga460&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/distance_sensor/pga460" target="_blank" rel="noreferrer">drivers/distance_sensor/pga460</a></p><h3 id="description-6" tabindex="-1">Description <a class="header-anchor" href="#description-6" aria-label="Permalink to &quot;Description&quot;">​</a></h3><p>Ultrasonic range finder driver that handles the communication with the device and publishes the distance via uORB.</p><h3 id="implementation" tabindex="-1">Implementation <a class="header-anchor" href="#implementation" aria-label="Permalink to &quot;Implementation&quot;">​</a></h3><p>This driver is implemented as a NuttX task. This Implementation was chosen due to the need for polling on a message via UART, which is not supported in the work_queue. This driver continuously takes range measurements while it is running. A simple algorithm to detect false readings is implemented at the driver levelin an attemptto improve the quality of data that is being published. The driver will not publish data at all if it deems the sensor data to be invalid or unstable.</p><p><a id="pga460_usage"></a></p><h3 id="usage-9" tabindex="-1">Usage <a class="header-anchor" href="#usage-9" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>pga460 &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span>     [device_path] The pga460 sensor device path, (e.g: /dev/ttyS6)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   help</span></span></code></pre></div><h2 id="srf02" tabindex="-1">srf02 <a class="header-anchor" href="#srf02" aria-label="Permalink to &quot;srf02&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/distance_sensor/srf02" target="_blank" rel="noreferrer">drivers/distance_sensor/srf02</a></p><p><a id="srf02_usage"></a></p><h3 id="usage-10" tabindex="-1">Usage <a class="header-anchor" href="#usage-10" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>srf02 &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="srf05" tabindex="-1">srf05 <a class="header-anchor" href="#srf05" aria-label="Permalink to &quot;srf05&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/distance_sensor/srf05" target="_blank" rel="noreferrer">drivers/distance_sensor/srf05</a></p><h3 id="description-7" tabindex="-1">Description <a class="header-anchor" href="#description-7" aria-label="Permalink to &quot;Description&quot;">​</a></h3><p>Driver for HY-SRF05 / HC-SR05 and HC-SR04 rangefinders.</p><p>The sensor/driver must be enabled using the parameter SENS_EN_HXSRX0X.</p><p><a id="srf05_usage"></a></p><h3 id="usage-11" tabindex="-1">Usage <a class="header-anchor" href="#usage-11" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>srf05 &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="teraranger" tabindex="-1">teraranger <a class="header-anchor" href="#teraranger" aria-label="Permalink to &quot;teraranger&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/distance_sensor/teraranger" target="_blank" rel="noreferrer">drivers/distance_sensor/teraranger</a></p><h3 id="description-8" tabindex="-1">Description <a class="header-anchor" href="#description-8" aria-label="Permalink to &quot;Description&quot;">​</a></h3><p>I2C bus driver for TeraRanger rangefinders.</p><p>The sensor/driver must be enabled using the parameter SENS_EN_TRANGER.</p><p>Setup/usage information: <a href="https://docs.px4.io/v1.15/en/sensor/rangefinders.html#teraranger-rangefinders" target="_blank" rel="noreferrer">https://docs.px4.io/v1.15/en/sensor/rangefinders.html#teraranger-rangefinders</a></p><p><a id="teraranger_usage"></a></p><h3 id="usage-12" tabindex="-1">Usage <a class="header-anchor" href="#usage-12" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>teraranger &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="tf02pro" tabindex="-1">tf02pro <a class="header-anchor" href="#tf02pro" aria-label="Permalink to &quot;tf02pro&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/distance_sensor/tf02pro" target="_blank" rel="noreferrer">drivers/distance_sensor/tf02pro</a></p><p><a id="tf02pro_usage"></a></p><h3 id="usage-13" tabindex="-1">Usage <a class="header-anchor" href="#usage-13" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>tf02pro &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="tfmini" tabindex="-1">tfmini <a class="header-anchor" href="#tfmini" aria-label="Permalink to &quot;tfmini&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/distance_sensor/tfmini" target="_blank" rel="noreferrer">drivers/distance_sensor/tfmini</a></p><h3 id="description-9" tabindex="-1">Description <a class="header-anchor" href="#description-9" aria-label="Permalink to &quot;Description&quot;">​</a></h3><p>Serial bus driver for the Benewake TFmini LiDAR.</p><p>Most boards are configured to enable/start the driver on a specified UART using the SENS_TFMINI_CFG parameter.</p><p>Setup/usage information: <a href="https://docs.px4.io/v1.15/en/sensor/tfmini.html" target="_blank" rel="noreferrer">https://docs.px4.io/v1.15/en/sensor/tfmini.html</a></p><h3 id="examples-4" tabindex="-1">Examples <a class="header-anchor" href="#examples-4" aria-label="Permalink to &quot;Examples&quot;">​</a></h3><p>Attempt to start driver on a specified serial device.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>tfmini start -d /dev/ttyS1</span></span></code></pre></div><p>Stop driver</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>tfmini stop</span></span></code></pre></div><p><a id="tfmini_usage"></a></p><h3 id="usage-14" tabindex="-1">Usage <a class="header-anchor" href="#usage-14" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>tfmini &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>   status        Print driver status</span></span></code></pre></div><h2 id="ulanding-radar" tabindex="-1">ulanding_radar <a class="header-anchor" href="#ulanding-radar" aria-label="Permalink to &quot;ulanding_radar&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/distance_sensor/ulanding_radar" target="_blank" rel="noreferrer">drivers/distance_sensor/ulanding_radar</a></p><h3 id="description-10" tabindex="-1">Description <a class="header-anchor" href="#description-10" aria-label="Permalink to &quot;Description&quot;">​</a></h3><p>Serial bus driver for the Aerotenna uLanding radar.</p><p>Setup/usage information: <a href="https://docs.px4.io/v1.9.0/en/sensor/ulanding_radar.html" target="_blank" rel="noreferrer">https://docs.px4.io/v1.9.0/en/sensor/ulanding_radar.html</a></p><h3 id="examples-5" tabindex="-1">Examples <a class="header-anchor" href="#examples-5" aria-label="Permalink to &quot;Examples&quot;">​</a></h3><p>Attempt to start driver on a specified serial device.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>ulanding_radar start -d /dev/ttyS1</span></span></code></pre></div><p>Stop driver</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>ulanding_radar stop</span></span></code></pre></div><p><a id="ulanding_radar_usage"></a></p><h3 id="usage-15" tabindex="-1">Usage <a class="header-anchor" href="#usage-15" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>ulanding_radar &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start         Start driver</span></span>
<span class="line"><span>     -d &lt;val&gt;    Serial device</span></span>
<span class="line"><span>                 values: &lt;file:dev&gt;, default: /dev/ttyS3</span></span>
<span class="line"><span>     [-R &lt;val&gt;]  Sensor rotation - downward facing by default</span></span>
<span class="line"><span>                 default: 25</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop          Stop driver</span></span></code></pre></div><h2 id="vl53l0x" tabindex="-1">vl53l0x <a class="header-anchor" href="#vl53l0x" aria-label="Permalink to &quot;vl53l0x&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/distance_sensor/vl53l0x" target="_blank" rel="noreferrer">drivers/distance_sensor/vl53l0x</a></p><p><a id="vl53l0x_usage"></a></p><h3 id="usage-16" tabindex="-1">Usage <a class="header-anchor" href="#usage-16" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>vl53l0x &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="vl53l1x" tabindex="-1">vl53l1x <a class="header-anchor" href="#vl53l1x" aria-label="Permalink to &quot;vl53l1x&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/distance_sensor/vl53l1x" target="_blank" rel="noreferrer">drivers/distance_sensor/vl53l1x</a></p><p><a id="vl53l1x_usage"></a></p><h3 id="usage-17" tabindex="-1">Usage <a class="header-anchor" href="#usage-17" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>vl53l1x &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>   status        print status info</span></span></code></pre></div>`,159),l=[t];function i(r,o,d,c,h,u){return n(),s("div",null,l)}const m=a(p,[["render",i]]);export{b as __pageData,m as default};
