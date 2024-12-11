import{_ as a,c as s,o as n,ab as e}from"./chunks/framework.CUflZczI.js";const m=JSON.parse('{"title":"Modules Reference: Driver","description":"","frontmatter":{},"headers":[],"relativePath":"en/modules/modules_driver.md","filePath":"en/modules/modules_driver.md"}'),p={name:"en/modules/modules_driver.md"},t=e(`<h1 id="modules-reference-driver" tabindex="-1">Modules Reference: Driver <a class="header-anchor" href="#modules-reference-driver" aria-label="Permalink to &quot;Modules Reference: Driver&quot;">​</a></h1><p>Subcategories:</p><ul><li><a href="./modules_driver_imu.html">Imu</a></li><li><a href="./modules_driver_distance_sensor.html">Distance Sensor</a></li><li><a href="./modules_driver_ins.html">Ins</a></li><li><a href="./modules_driver_airspeed_sensor.html">Airspeed Sensor</a></li><li><a href="./modules_driver_baro.html">Baro</a></li><li><a href="./modules_driver_transponder.html">Transponder</a></li><li><a href="./modules_driver_rpm_sensor.html">Rpm Sensor</a></li><li><a href="./modules_driver_optical_flow.html">Optical Flow</a></li><li><a href="./modules_driver_camera.html">Camera</a></li><li><a href="./modules_driver_magnetometer.html">Magnetometer</a></li></ul><h2 id="mcp23009" tabindex="-1">MCP23009 <a class="header-anchor" href="#mcp23009" aria-label="Permalink to &quot;MCP23009&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/gpio/mcp23009" target="_blank" rel="noreferrer">drivers/gpio/mcp23009</a></p><p><a id="MCP23009_usage"></a></p><h3 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>MCP23009 &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span>     [-I]        Internal I2C bus(es)</span></span>
<span class="line"><span>     [-X]        External I2C bus(es)</span></span>
<span class="line"><span>     [-b &lt;val&gt;]  board-specific bus (default=all) (external SPI: n-th bus</span></span>
<span class="line"><span>                 (default=1))</span></span>
<span class="line"><span>     [-f &lt;val&gt;]  bus frequency in kHz</span></span>
<span class="line"><span>     [-q]        quiet startup (no message if no device found)</span></span>
<span class="line"><span>     [-a &lt;val&gt;]  I2C address</span></span>
<span class="line"><span>                 default: 37</span></span>
<span class="line"><span>     [-D &lt;val&gt;]  Direction</span></span>
<span class="line"><span>                 default: 0</span></span>
<span class="line"><span>     [-O &lt;val&gt;]  Output</span></span>
<span class="line"><span>                 default: 0</span></span>
<span class="line"><span>     [-P &lt;val&gt;]  Pullups</span></span>
<span class="line"><span>                 default: 0</span></span>
<span class="line"><span>     [-U &lt;val&gt;]  Update Interval [ms]</span></span>
<span class="line"><span>                 default: 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="adc" tabindex="-1">adc <a class="header-anchor" href="#adc" aria-label="Permalink to &quot;adc&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/adc/board_adc" target="_blank" rel="noreferrer">drivers/adc/board_adc</a></p><h3 id="description" tabindex="-1">Description <a class="header-anchor" href="#description" aria-label="Permalink to &quot;Description&quot;">​</a></h3><p>ADC driver.</p><p><a id="adc_usage"></a></p><h3 id="usage-1" tabindex="-1">Usage <a class="header-anchor" href="#usage-1" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>adc &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   test</span></span>
<span class="line"><span>     [-n]        Do not publish ADC report, only system power</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="ads1115" tabindex="-1">ads1115 <a class="header-anchor" href="#ads1115" aria-label="Permalink to &quot;ads1115&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/adc/ads1115" target="_blank" rel="noreferrer">drivers/adc/ads1115</a></p><h3 id="description-1" tabindex="-1">Description <a class="header-anchor" href="#description-1" aria-label="Permalink to &quot;Description&quot;">​</a></h3><p>Driver to enable an external <a href="https://www.adafruit.com/product/1085" target="_blank" rel="noreferrer">ADS1115</a> ADC connected via I2C.</p><p>The driver is included by default in firmware for boards that do not have an internal analog to digital converter, such as <a href="./../flight_controller/raspberry_pi_pilotpi.html">PilotPi</a> or <a href="./../flight_controller/cuav_nora.html">CUAV Nora</a> (search for <code>CONFIG_DRIVERS_ADC_ADS1115</code> in board configuration files).</p><p>It is enabled/disabled using the <a href="./../advanced_config/parameter_reference.html#ADC_ADS1115_EN">ADC_ADS1115_EN</a> parameter, and is disabled by default. If enabled, internal ADCs are not used.</p><p><a id="ads1115_usage"></a></p><h3 id="usage-2" tabindex="-1">Usage <a class="header-anchor" href="#usage-2" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>ads1115 &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span>     [-I]        Internal I2C bus(es)</span></span>
<span class="line"><span>     [-X]        External I2C bus(es)</span></span>
<span class="line"><span>     [-b &lt;val&gt;]  board-specific bus (default=all) (external SPI: n-th bus</span></span>
<span class="line"><span>                 (default=1))</span></span>
<span class="line"><span>     [-f &lt;val&gt;]  bus frequency in kHz</span></span>
<span class="line"><span>     [-q]        quiet startup (no message if no device found)</span></span>
<span class="line"><span>     [-a &lt;val&gt;]  I2C address</span></span>
<span class="line"><span>                 default: 72</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="atxxxx" tabindex="-1">atxxxx <a class="header-anchor" href="#atxxxx" aria-label="Permalink to &quot;atxxxx&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/osd/atxxxx" target="_blank" rel="noreferrer">drivers/osd/atxxxx</a></p><h3 id="description-2" tabindex="-1">Description <a class="header-anchor" href="#description-2" aria-label="Permalink to &quot;Description&quot;">​</a></h3><p>OSD driver for the ATXXXX chip that is mounted on the OmnibusF4SD board for example.</p><p>It can be enabled with the OSD_ATXXXX_CFG parameter.</p><p><a id="atxxxx_usage"></a></p><h3 id="usage-3" tabindex="-1">Usage <a class="header-anchor" href="#usage-3" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>atxxxx &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="batmon" tabindex="-1">batmon <a class="header-anchor" href="#batmon" aria-label="Permalink to &quot;batmon&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/smart_battery/batmon" target="_blank" rel="noreferrer">drivers/smart_battery/batmon</a></p><h3 id="description-3" tabindex="-1">Description <a class="header-anchor" href="#description-3" aria-label="Permalink to &quot;Description&quot;">​</a></h3><p>Driver for SMBUS Communication with BatMon enabled smart-battery Setup/usage information: <a href="https://rotoye.com/batmon-tutorial/" target="_blank" rel="noreferrer">https://rotoye.com/batmon-tutorial/</a></p><h3 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h3><p>To start at address 0x0B, on bus 4</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>batmon start -X -a 11 -b 4</span></span></code></pre></div><p><a id="batmon_usage"></a></p><h3 id="usage-4" tabindex="-1">Usage <a class="header-anchor" href="#usage-4" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>batmon &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span>     [-I]        Internal I2C bus(es)</span></span>
<span class="line"><span>     [-X]        External I2C bus(es)</span></span>
<span class="line"><span>     [-b &lt;val&gt;]  board-specific bus (default=all) (external SPI: n-th bus</span></span>
<span class="line"><span>                 (default=1))</span></span>
<span class="line"><span>     [-f &lt;val&gt;]  bus frequency in kHz</span></span>
<span class="line"><span>     [-q]        quiet startup (no message if no device found)</span></span>
<span class="line"><span>     [-a &lt;val&gt;]  I2C address</span></span>
<span class="line"><span>                 default: 11</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   man_info      Prints manufacturer info.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   suspend       Suspends the driver from rescheduling the cycle.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   resume        Resumes the driver from suspension.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="batt-smbus" tabindex="-1">batt_smbus <a class="header-anchor" href="#batt-smbus" aria-label="Permalink to &quot;batt_smbus&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/batt_smbus" target="_blank" rel="noreferrer">drivers/batt_smbus</a></p><h3 id="description-4" tabindex="-1">Description <a class="header-anchor" href="#description-4" aria-label="Permalink to &quot;Description&quot;">​</a></h3><p>Smart battery driver for the BQ40Z50 fuel gauge IC.</p><h3 id="examples-1" tabindex="-1">Examples <a class="header-anchor" href="#examples-1" aria-label="Permalink to &quot;Examples&quot;">​</a></h3><p>To write to flash to set parameters. address, number_of_bytes, byte0, ... , byteN</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>batt_smbus -X write_flash 19069 2 27 0</span></span></code></pre></div><p><a id="batt_smbus_usage"></a></p><h3 id="usage-5" tabindex="-1">Usage <a class="header-anchor" href="#usage-5" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>batt_smbus &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span>     [-I]        Internal I2C bus(es)</span></span>
<span class="line"><span>     [-X]        External I2C bus(es)</span></span>
<span class="line"><span>     [-b &lt;val&gt;]  board-specific bus (default=all) (external SPI: n-th bus</span></span>
<span class="line"><span>                 (default=1))</span></span>
<span class="line"><span>     [-f &lt;val&gt;]  bus frequency in kHz</span></span>
<span class="line"><span>     [-q]        quiet startup (no message if no device found)</span></span>
<span class="line"><span>     [-a &lt;val&gt;]  I2C address</span></span>
<span class="line"><span>                 default: 11</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   man_info      Prints manufacturer info.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   unseal        Unseals the devices flash memory to enable write_flash</span></span>
<span class="line"><span>                 commands.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   seal          Seals the devices flash memory to disable write_flash commands.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   suspend       Suspends the driver from rescheduling the cycle.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   resume        Resumes the driver from suspension.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   write_flash   Writes to flash. The device must first be unsealed with the</span></span>
<span class="line"><span>                 unseal command.</span></span>
<span class="line"><span>     [address]   The address to start writing.</span></span>
<span class="line"><span>     [number of bytes] Number of bytes to send.</span></span>
<span class="line"><span>     [data[0]...data[n]] One byte of data at a time separated by spaces.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="bst" tabindex="-1">bst <a class="header-anchor" href="#bst" aria-label="Permalink to &quot;bst&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/telemetry/bst" target="_blank" rel="noreferrer">drivers/telemetry/bst</a></p><p><a id="bst_usage"></a></p><h3 id="usage-6" tabindex="-1">Usage <a class="header-anchor" href="#usage-6" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>bst &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="crsf-rc" tabindex="-1">crsf_rc <a class="header-anchor" href="#crsf-rc" aria-label="Permalink to &quot;crsf_rc&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/rc/crsf_rc" target="_blank" rel="noreferrer">drivers/rc/crsf_rc</a></p><h3 id="description-5" tabindex="-1">Description <a class="header-anchor" href="#description-5" aria-label="Permalink to &quot;Description&quot;">​</a></h3><p>This module parses the CRSF RC uplink protocol and generates CRSF downlink telemetry data</p><p><a id="crsf_rc_usage"></a></p><h3 id="usage-7" tabindex="-1">Usage <a class="header-anchor" href="#usage-7" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>crsf_rc &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span>     [-d &lt;val&gt;]  RC device</span></span>
<span class="line"><span>                 values: &lt;file:dev&gt;, default: /dev/ttyS3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="dshot" tabindex="-1">dshot <a class="header-anchor" href="#dshot" aria-label="Permalink to &quot;dshot&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/dshot" target="_blank" rel="noreferrer">drivers/dshot</a></p><h3 id="description-6" tabindex="-1">Description <a class="header-anchor" href="#description-6" aria-label="Permalink to &quot;Description&quot;">​</a></h3><p>This is the DShot output driver. It is similar to the fmu driver, and can be used as drop-in replacement to use DShot as ESC communication protocol instead of PWM.</p><p>On startup, the module tries to occupy all available pins for DShot output. It skips all pins already in use (e.g. by a camera trigger module).</p><p>It supports:</p><ul><li>DShot150, DShot300, DShot600, DShot1200</li><li>telemetry via separate UART and publishing as esc_status message</li><li>sending DShot commands via CLI</li></ul><h3 id="examples-2" tabindex="-1">Examples <a class="header-anchor" href="#examples-2" aria-label="Permalink to &quot;Examples&quot;">​</a></h3><p>Permanently reverse motor 1:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>dshot reverse -m 1</span></span>
<span class="line"><span>dshot save -m 1</span></span></code></pre></div><p>After saving, the reversed direction will be regarded as the normal one. So to reverse again repeat the same commands.</p><p><a id="dshot_usage"></a></p><h3 id="usage-8" tabindex="-1">Usage <a class="header-anchor" href="#usage-8" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>dshot &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   telemetry     Enable Telemetry on a UART</span></span>
<span class="line"><span>     &lt;device&gt;    UART device</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   reverse       Reverse motor direction</span></span>
<span class="line"><span>     [-m &lt;val&gt;]  Motor index (1-based, default=all)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   normal        Normal motor direction</span></span>
<span class="line"><span>     [-m &lt;val&gt;]  Motor index (1-based, default=all)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   save          Save current settings</span></span>
<span class="line"><span>     [-m &lt;val&gt;]  Motor index (1-based, default=all)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   3d_on         Enable 3D mode</span></span>
<span class="line"><span>     [-m &lt;val&gt;]  Motor index (1-based, default=all)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   3d_off        Disable 3D mode</span></span>
<span class="line"><span>     [-m &lt;val&gt;]  Motor index (1-based, default=all)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   beep1         Send Beep pattern 1</span></span>
<span class="line"><span>     [-m &lt;val&gt;]  Motor index (1-based, default=all)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   beep2         Send Beep pattern 2</span></span>
<span class="line"><span>     [-m &lt;val&gt;]  Motor index (1-based, default=all)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   beep3         Send Beep pattern 3</span></span>
<span class="line"><span>     [-m &lt;val&gt;]  Motor index (1-based, default=all)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   beep4         Send Beep pattern 4</span></span>
<span class="line"><span>     [-m &lt;val&gt;]  Motor index (1-based, default=all)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   beep5         Send Beep pattern 5</span></span>
<span class="line"><span>     [-m &lt;val&gt;]  Motor index (1-based, default=all)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   esc_info      Request ESC information</span></span>
<span class="line"><span>     -m &lt;val&gt;    Motor index (1-based)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="fake-gps" tabindex="-1">fake_gps <a class="header-anchor" href="#fake-gps" aria-label="Permalink to &quot;fake_gps&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/examples/fake_gps" target="_blank" rel="noreferrer">examples/fake_gps</a></p><h3 id="description-7" tabindex="-1">Description <a class="header-anchor" href="#description-7" aria-label="Permalink to &quot;Description&quot;">​</a></h3><p><a id="fake_gps_usage"></a></p><h3 id="usage-9" tabindex="-1">Usage <a class="header-anchor" href="#usage-9" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>fake_gps &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="fake-imu" tabindex="-1">fake_imu <a class="header-anchor" href="#fake-imu" aria-label="Permalink to &quot;fake_imu&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/examples/fake_imu" target="_blank" rel="noreferrer">examples/fake_imu</a></p><h3 id="description-8" tabindex="-1">Description <a class="header-anchor" href="#description-8" aria-label="Permalink to &quot;Description&quot;">​</a></h3><p><a id="fake_imu_usage"></a></p><h3 id="usage-10" tabindex="-1">Usage <a class="header-anchor" href="#usage-10" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>fake_imu &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="fake-magnetometer" tabindex="-1">fake_magnetometer <a class="header-anchor" href="#fake-magnetometer" aria-label="Permalink to &quot;fake_magnetometer&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/examples/fake_magnetometer" target="_blank" rel="noreferrer">examples/fake_magnetometer</a></p><h3 id="description-9" tabindex="-1">Description <a class="header-anchor" href="#description-9" aria-label="Permalink to &quot;Description&quot;">​</a></h3><p>Publish the earth magnetic field as a fake magnetometer (sensor_mag). Requires vehicle_attitude and vehicle_gps_position.</p><p><a id="fake_magnetometer_usage"></a></p><h3 id="usage-11" tabindex="-1">Usage <a class="header-anchor" href="#usage-11" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>fake_magnetometer &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="ft-technologies-serial" tabindex="-1">ft_technologies_serial <a class="header-anchor" href="#ft-technologies-serial" aria-label="Permalink to &quot;ft_technologies_serial&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/wind_sensor/ft_technologies" target="_blank" rel="noreferrer">drivers/wind_sensor/ft_technologies</a></p><h3 id="description-10" tabindex="-1">Description <a class="header-anchor" href="#description-10" aria-label="Permalink to &quot;Description&quot;">​</a></h3><p>Serial bus driver for the FT Technologies Digital Wind Sensor FT742. This driver is required to operate alongside a RS485 to UART signal transfer module.</p><p>Most boards are configured to enable/start the driver on a specified UART using the SENS_FTX_CFG parameter.</p><h3 id="examples-3" tabindex="-1">Examples <a class="header-anchor" href="#examples-3" aria-label="Permalink to &quot;Examples&quot;">​</a></h3><p>Attempt to start driver on a specified serial device.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>ft_technologies_serial start -d /dev/ttyS1</span></span></code></pre></div><p>Stop driver</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>ft_technologies_serial stop</span></span></code></pre></div><p><a id="ft_technologies_serial_usage"></a></p><h3 id="usage-12" tabindex="-1">Usage <a class="header-anchor" href="#usage-12" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>ft_technologies_serial &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start         Start driver</span></span>
<span class="line"><span>     -d &lt;val&gt;    Serial device</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop          Stop driver</span></span></code></pre></div><h2 id="gimbal" tabindex="-1">gimbal <a class="header-anchor" href="#gimbal" aria-label="Permalink to &quot;gimbal&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/modules/gimbal" target="_blank" rel="noreferrer">modules/gimbal</a></p><h3 id="description-11" tabindex="-1">Description <a class="header-anchor" href="#description-11" aria-label="Permalink to &quot;Description&quot;">​</a></h3><p>Mount/gimbal Gimbal control driver. It maps several different input methods (eg. RC or MAVLink) to a configured output (eg. AUX channels or MAVLink).</p><p>Documentation how to use it is on the <a href="https://docs.px4.io/v1.15/en/advanced/gimbal_control.html" target="_blank" rel="noreferrer">gimbal_control</a> page.</p><h3 id="examples-4" tabindex="-1">Examples <a class="header-anchor" href="#examples-4" aria-label="Permalink to &quot;Examples&quot;">​</a></h3><p>Test the output by setting a angles (all omitted axes are set to 0):</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>gimbal test pitch -45 yaw 30</span></span></code></pre></div><p><a id="gimbal_usage"></a></p><h3 id="usage-13" tabindex="-1">Usage <a class="header-anchor" href="#usage-13" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>gimbal &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   primary-control Set who is in control of gimbal</span></span>
<span class="line"><span>     &lt;sysid&gt; &lt;compid&gt; MAVLink system ID and MAVLink component ID</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   test          Test the output: set a fixed angle for one or multiple axes</span></span>
<span class="line"><span>                 (gimbal must be running)</span></span>
<span class="line"><span>     roll|pitch|yaw &lt;angle&gt; Specify an axis and an angle in degrees</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="gps" tabindex="-1">gps <a class="header-anchor" href="#gps" aria-label="Permalink to &quot;gps&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/gps" target="_blank" rel="noreferrer">drivers/gps</a></p><h3 id="description-12" tabindex="-1">Description <a class="header-anchor" href="#description-12" aria-label="Permalink to &quot;Description&quot;">​</a></h3><p>GPS driver module that handles the communication with the device and publishes the position via uORB. It supports multiple protocols (device vendors) and by default automatically selects the correct one.</p><p>The module supports a secondary GPS device, specified via <code>-e</code> parameter. The position will be published on the second uORB topic instance, but it&#39;s currently not used by the rest of the system (however the data will be logged, so that it can be used for comparisons).</p><h3 id="implementation" tabindex="-1">Implementation <a class="header-anchor" href="#implementation" aria-label="Permalink to &quot;Implementation&quot;">​</a></h3><p>There is a thread for each device polling for data. The GPS protocol classes are implemented with callbacks so that they can be used in other projects as well (eg. QGroundControl uses them too).</p><h3 id="examples-5" tabindex="-1">Examples <a class="header-anchor" href="#examples-5" aria-label="Permalink to &quot;Examples&quot;">​</a></h3><p>Starting 2 GPS devices (the main GPS on /dev/ttyS3 and the secondary on /dev/ttyS4):</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>gps start -d /dev/ttyS3 -e /dev/ttyS4</span></span></code></pre></div><p>Initiate warm restart of GPS device</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>gps reset warm</span></span></code></pre></div><p><a id="gps_usage"></a></p><h3 id="usage-14" tabindex="-1">Usage <a class="header-anchor" href="#usage-14" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>gps &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span>     [-d &lt;val&gt;]  GPS device</span></span>
<span class="line"><span>                 values: &lt;file:dev&gt;, default: /dev/ttyS3</span></span>
<span class="line"><span>     [-b &lt;val&gt;]  Baudrate (can also be p:&lt;param_name&gt;)</span></span>
<span class="line"><span>                 default: 0</span></span>
<span class="line"><span>     [-e &lt;val&gt;]  Optional secondary GPS device</span></span>
<span class="line"><span>                 values: &lt;file:dev&gt;</span></span>
<span class="line"><span>     [-g &lt;val&gt;]  Baudrate (secondary GPS, can also be p:&lt;param_name&gt;)</span></span>
<span class="line"><span>                 default: 0</span></span>
<span class="line"><span>     [-i &lt;val&gt;]  GPS interface</span></span>
<span class="line"><span>                 values: spi|uart, default: uart</span></span>
<span class="line"><span>     [-j &lt;val&gt;]  secondary GPS interface</span></span>
<span class="line"><span>                 values: spi|uart, default: uart</span></span>
<span class="line"><span>     [-p &lt;val&gt;]  GPS Protocol (default=auto select)</span></span>
<span class="line"><span>                 values: ubx|mtk|ash|eml|fem|nmea</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   reset         Reset GPS device</span></span>
<span class="line"><span>     cold|warm|hot Specify reset type</span></span></code></pre></div><h2 id="gz-bridge" tabindex="-1">gz_bridge <a class="header-anchor" href="#gz-bridge" aria-label="Permalink to &quot;gz_bridge&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/modules/simulation/gz_bridge" target="_blank" rel="noreferrer">modules/simulation/gz_bridge</a></p><h3 id="description-13" tabindex="-1">Description <a class="header-anchor" href="#description-13" aria-label="Permalink to &quot;Description&quot;">​</a></h3><p><a id="gz_bridge_usage"></a></p><h3 id="usage-15" tabindex="-1">Usage <a class="header-anchor" href="#usage-15" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>gz_bridge &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span>     -m &lt;val&gt;    Fuel model name</span></span>
<span class="line"><span>     -p &lt;val&gt;    Model Pose</span></span>
<span class="line"><span>     -n &lt;val&gt;    Model name</span></span>
<span class="line"><span>     -i &lt;val&gt;    PX4 instance</span></span>
<span class="line"><span>     [-w &lt;val&gt;]  World name</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="ina220" tabindex="-1">ina220 <a class="header-anchor" href="#ina220" aria-label="Permalink to &quot;ina220&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/power_monitor/ina220" target="_blank" rel="noreferrer">drivers/power_monitor/ina220</a></p><h3 id="description-14" tabindex="-1">Description <a class="header-anchor" href="#description-14" aria-label="Permalink to &quot;Description&quot;">​</a></h3><p>Driver for the INA220 power monitor.</p><p>Multiple instances of this driver can run simultaneously, if each instance has a separate bus OR I2C address.</p><p>For example, one instance can run on Bus 2, address 0x41, and one can run on Bus 2, address 0x43.</p><p>If the INA220 module is not powered, then by default, initialization of the driver will fail. To change this, use the -f flag. If this flag is set, then if initialization fails, the driver will keep trying to initialize again every 0.5 seconds. With this flag set, you can plug in a battery after the driver starts, and it will work. Without this flag set, the battery must be plugged in before starting the driver.</p><p><a id="ina220_usage"></a></p><h3 id="usage-16" tabindex="-1">Usage <a class="header-anchor" href="#usage-16" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>ina220 &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span>     [-I]        Internal I2C bus(es)</span></span>
<span class="line"><span>     [-X]        External I2C bus(es)</span></span>
<span class="line"><span>     [-b &lt;val&gt;]  board-specific bus (default=all) (external SPI: n-th bus</span></span>
<span class="line"><span>                 (default=1))</span></span>
<span class="line"><span>     [-f &lt;val&gt;]  bus frequency in kHz</span></span>
<span class="line"><span>     [-q]        quiet startup (no message if no device found)</span></span>
<span class="line"><span>     [-a &lt;val&gt;]  I2C address</span></span>
<span class="line"><span>                 default: 65</span></span>
<span class="line"><span>     [-k]        if initialization (probing) fails, keep retrying periodically</span></span>
<span class="line"><span>     [-t &lt;val&gt;]  battery index for calibration values (1 or 3)</span></span>
<span class="line"><span>                 default: 1</span></span>
<span class="line"><span>     [-T &lt;val&gt;]  Type</span></span>
<span class="line"><span>                 values: VBATT|VREG, default: VBATT</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="ina226" tabindex="-1">ina226 <a class="header-anchor" href="#ina226" aria-label="Permalink to &quot;ina226&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/power_monitor/ina226" target="_blank" rel="noreferrer">drivers/power_monitor/ina226</a></p><h3 id="description-15" tabindex="-1">Description <a class="header-anchor" href="#description-15" aria-label="Permalink to &quot;Description&quot;">​</a></h3><p>Driver for the INA226 power monitor.</p><p>Multiple instances of this driver can run simultaneously, if each instance has a separate bus OR I2C address.</p><p>For example, one instance can run on Bus 2, address 0x41, and one can run on Bus 2, address 0x43.</p><p>If the INA226 module is not powered, then by default, initialization of the driver will fail. To change this, use the -f flag. If this flag is set, then if initialization fails, the driver will keep trying to initialize again every 0.5 seconds. With this flag set, you can plug in a battery after the driver starts, and it will work. Without this flag set, the battery must be plugged in before starting the driver.</p><p><a id="ina226_usage"></a></p><h3 id="usage-17" tabindex="-1">Usage <a class="header-anchor" href="#usage-17" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>ina226 &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span>     [-I]        Internal I2C bus(es)</span></span>
<span class="line"><span>     [-X]        External I2C bus(es)</span></span>
<span class="line"><span>     [-b &lt;val&gt;]  board-specific bus (default=all) (external SPI: n-th bus</span></span>
<span class="line"><span>                 (default=1))</span></span>
<span class="line"><span>     [-f &lt;val&gt;]  bus frequency in kHz</span></span>
<span class="line"><span>     [-q]        quiet startup (no message if no device found)</span></span>
<span class="line"><span>     [-a &lt;val&gt;]  I2C address</span></span>
<span class="line"><span>                 default: 65</span></span>
<span class="line"><span>     [-k]        if initialization (probing) fails, keep retrying periodically</span></span>
<span class="line"><span>     [-t &lt;val&gt;]  battery index for calibration values (1 or 3)</span></span>
<span class="line"><span>                 default: 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="ina228" tabindex="-1">ina228 <a class="header-anchor" href="#ina228" aria-label="Permalink to &quot;ina228&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/power_monitor/ina228" target="_blank" rel="noreferrer">drivers/power_monitor/ina228</a></p><h3 id="description-16" tabindex="-1">Description <a class="header-anchor" href="#description-16" aria-label="Permalink to &quot;Description&quot;">​</a></h3><p>Driver for the INA228 power monitor.</p><p>Multiple instances of this driver can run simultaneously, if each instance has a separate bus OR I2C address.</p><p>For example, one instance can run on Bus 2, address 0x45, and one can run on Bus 2, address 0x45.</p><p>If the INA228 module is not powered, then by default, initialization of the driver will fail. To change this, use the -f flag. If this flag is set, then if initialization fails, the driver will keep trying to initialize again every 0.5 seconds. With this flag set, you can plug in a battery after the driver starts, and it will work. Without this flag set, the battery must be plugged in before starting the driver.</p><p><a id="ina228_usage"></a></p><h3 id="usage-18" tabindex="-1">Usage <a class="header-anchor" href="#usage-18" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>ina228 &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span>     [-I]        Internal I2C bus(es)</span></span>
<span class="line"><span>     [-X]        External I2C bus(es)</span></span>
<span class="line"><span>     [-b &lt;val&gt;]  board-specific bus (default=all) (external SPI: n-th bus</span></span>
<span class="line"><span>                 (default=1))</span></span>
<span class="line"><span>     [-f &lt;val&gt;]  bus frequency in kHz</span></span>
<span class="line"><span>     [-q]        quiet startup (no message if no device found)</span></span>
<span class="line"><span>     [-a &lt;val&gt;]  I2C address</span></span>
<span class="line"><span>                 default: 69</span></span>
<span class="line"><span>     [-k]        if initialization (probing) fails, keep retrying periodically</span></span>
<span class="line"><span>     [-t &lt;val&gt;]  battery index for calibration values (1 or 3)</span></span>
<span class="line"><span>                 default: 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="ina238" tabindex="-1">ina238 <a class="header-anchor" href="#ina238" aria-label="Permalink to &quot;ina238&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/power_monitor/ina238" target="_blank" rel="noreferrer">drivers/power_monitor/ina238</a></p><h3 id="description-17" tabindex="-1">Description <a class="header-anchor" href="#description-17" aria-label="Permalink to &quot;Description&quot;">​</a></h3><p>Driver for the INA238 power monitor.</p><p>Multiple instances of this driver can run simultaneously, if each instance has a separate bus OR I2C address.</p><p>For example, one instance can run on Bus 2, address 0x45, and one can run on Bus 2, address 0x45.</p><p>If the INA238 module is not powered, then by default, initialization of the driver will fail. To change this, use the -f flag. If this flag is set, then if initialization fails, the driver will keep trying to initialize again every 0.5 seconds. With this flag set, you can plug in a battery after the driver starts, and it will work. Without this flag set, the battery must be plugged in before starting the driver.</p><p><a id="ina238_usage"></a></p><h3 id="usage-19" tabindex="-1">Usage <a class="header-anchor" href="#usage-19" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>ina238 &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span>     [-I]        Internal I2C bus(es)</span></span>
<span class="line"><span>     [-X]        External I2C bus(es)</span></span>
<span class="line"><span>     [-b &lt;val&gt;]  board-specific bus (default=all) (external SPI: n-th bus</span></span>
<span class="line"><span>                 (default=1))</span></span>
<span class="line"><span>     [-f &lt;val&gt;]  bus frequency in kHz</span></span>
<span class="line"><span>     [-q]        quiet startup (no message if no device found)</span></span>
<span class="line"><span>     [-a &lt;val&gt;]  I2C address</span></span>
<span class="line"><span>                 default: 69</span></span>
<span class="line"><span>     [-k]        if initialization (probing) fails, keep retrying periodically</span></span>
<span class="line"><span>     [-t &lt;val&gt;]  battery index for calibration values (1 or 3)</span></span>
<span class="line"><span>                 default: 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="iridiumsbd" tabindex="-1">iridiumsbd <a class="header-anchor" href="#iridiumsbd" aria-label="Permalink to &quot;iridiumsbd&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/telemetry/iridiumsbd" target="_blank" rel="noreferrer">drivers/telemetry/iridiumsbd</a></p><h3 id="description-18" tabindex="-1">Description <a class="header-anchor" href="#description-18" aria-label="Permalink to &quot;Description&quot;">​</a></h3><p>IridiumSBD driver.</p><p>Creates a virtual serial port that another module can use for communication (e.g. mavlink).</p><p><a id="iridiumsbd_usage"></a></p><h3 id="usage-20" tabindex="-1">Usage <a class="header-anchor" href="#usage-20" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>iridiumsbd &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span>     -d &lt;val&gt;    Serial device</span></span>
<span class="line"><span>                 values: &lt;file:dev&gt;</span></span>
<span class="line"><span>     [-v]        Enable verbose output</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   test</span></span>
<span class="line"><span>     [s|read|AT &lt;cmd&gt;] Test command</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="irlock" tabindex="-1">irlock <a class="header-anchor" href="#irlock" aria-label="Permalink to &quot;irlock&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/irlock" target="_blank" rel="noreferrer">drivers/irlock</a></p><p><a id="irlock_usage"></a></p><h3 id="usage-21" tabindex="-1">Usage <a class="header-anchor" href="#usage-21" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>irlock &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span>     [-I]        Internal I2C bus(es)</span></span>
<span class="line"><span>     [-X]        External I2C bus(es)</span></span>
<span class="line"><span>     [-b &lt;val&gt;]  board-specific bus (default=all) (external SPI: n-th bus</span></span>
<span class="line"><span>                 (default=1))</span></span>
<span class="line"><span>     [-f &lt;val&gt;]  bus frequency in kHz</span></span>
<span class="line"><span>     [-q]        quiet startup (no message if no device found)</span></span>
<span class="line"><span>     [-a &lt;val&gt;]  I2C address</span></span>
<span class="line"><span>                 default: 84</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="linux-pwm-out" tabindex="-1">linux_pwm_out <a class="header-anchor" href="#linux-pwm-out" aria-label="Permalink to &quot;linux_pwm_out&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/linux_pwm_out" target="_blank" rel="noreferrer">drivers/linux_pwm_out</a></p><h3 id="description-19" tabindex="-1">Description <a class="header-anchor" href="#description-19" aria-label="Permalink to &quot;Description&quot;">​</a></h3><p>Linux PWM output driver with board-specific backend implementation.</p><p><a id="linux_pwm_out_usage"></a></p><h3 id="usage-22" tabindex="-1">Usage <a class="header-anchor" href="#usage-22" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>linux_pwm_out &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="lsm303agr" tabindex="-1">lsm303agr <a class="header-anchor" href="#lsm303agr" aria-label="Permalink to &quot;lsm303agr&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/magnetometer/lsm303agr" target="_blank" rel="noreferrer">drivers/magnetometer/lsm303agr</a></p><p><a id="lsm303agr_usage"></a></p><h3 id="usage-23" tabindex="-1">Usage <a class="header-anchor" href="#usage-23" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>lsm303agr &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="msp-osd" tabindex="-1">msp_osd <a class="header-anchor" href="#msp-osd" aria-label="Permalink to &quot;msp_osd&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/osd/msp_osd" target="_blank" rel="noreferrer">drivers/osd/msp_osd</a></p><h3 id="description-20" tabindex="-1">Description <a class="header-anchor" href="#description-20" aria-label="Permalink to &quot;Description&quot;">​</a></h3><p>MSP telemetry streamer</p><h3 id="implementation-1" tabindex="-1">Implementation <a class="header-anchor" href="#implementation-1" aria-label="Permalink to &quot;Implementation&quot;">​</a></h3><p>Converts uORB messages to MSP telemetry packets</p><h3 id="examples-6" tabindex="-1">Examples <a class="header-anchor" href="#examples-6" aria-label="Permalink to &quot;Examples&quot;">​</a></h3><p>CLI usage example:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>msp_osd</span></span></code></pre></div><p><a id="msp_osd_usage"></a></p><h3 id="usage-24" tabindex="-1">Usage <a class="header-anchor" href="#usage-24" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>msp_osd &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="newpixel" tabindex="-1">newpixel <a class="header-anchor" href="#newpixel" aria-label="Permalink to &quot;newpixel&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/lights/neopixel" target="_blank" rel="noreferrer">drivers/lights/neopixel</a></p><h3 id="description-21" tabindex="-1">Description <a class="header-anchor" href="#description-21" aria-label="Permalink to &quot;Description&quot;">​</a></h3><p>This module is responsible for driving interfasing to the Neopixel Serial LED</p><h3 id="examples-7" tabindex="-1">Examples <a class="header-anchor" href="#examples-7" aria-label="Permalink to &quot;Examples&quot;">​</a></h3><p>It is typically started with:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>neopixel -n 8</span></span></code></pre></div><p>To drive all available leds.</p><p><a id="newpixel_usage"></a></p><h3 id="usage-25" tabindex="-1">Usage <a class="header-anchor" href="#usage-25" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>newpixel &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="paa3905" tabindex="-1">paa3905 <a class="header-anchor" href="#paa3905" aria-label="Permalink to &quot;paa3905&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/optical_flow/paa3905" target="_blank" rel="noreferrer">drivers/optical_flow/paa3905</a></p><p><a id="paa3905_usage"></a></p><h3 id="usage-26" tabindex="-1">Usage <a class="header-anchor" href="#usage-26" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>paa3905 &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>     [-Y &lt;val&gt;]  custom yaw rotation (degrees)</span></span>
<span class="line"><span>                 default: 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="paw3902" tabindex="-1">paw3902 <a class="header-anchor" href="#paw3902" aria-label="Permalink to &quot;paw3902&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/optical_flow/paw3902" target="_blank" rel="noreferrer">drivers/optical_flow/paw3902</a></p><p><a id="paw3902_usage"></a></p><h3 id="usage-27" tabindex="-1">Usage <a class="header-anchor" href="#usage-27" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>paw3902 &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>     [-Y &lt;val&gt;]  custom yaw rotation (degrees)</span></span>
<span class="line"><span>                 default: 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="pca9685-pwm-out" tabindex="-1">pca9685_pwm_out <a class="header-anchor" href="#pca9685-pwm-out" aria-label="Permalink to &quot;pca9685_pwm_out&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/pca9685_pwm_out" target="_blank" rel="noreferrer">drivers/pca9685_pwm_out</a></p><h3 id="description-22" tabindex="-1">Description <a class="header-anchor" href="#description-22" aria-label="Permalink to &quot;Description&quot;">​</a></h3><p>This is a PCA9685 PWM output driver.</p><p>It runs on I2C workqueue which is asynchronous with FC control loop, fetching the latest mixing result and write them to PCA9685 at its scheduling ticks.</p><p>It can do full 12bits output as duty-cycle mode, while also able to output precious pulse width that can be accepted by most ESCs and servos.</p><h3 id="examples-8" tabindex="-1">Examples <a class="header-anchor" href="#examples-8" aria-label="Permalink to &quot;Examples&quot;">​</a></h3><p>It is typically started with:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>pca9685_pwm_out start -a 0x40 -b 1</span></span></code></pre></div><p><a id="pca9685_pwm_out_usage"></a></p><h3 id="usage-28" tabindex="-1">Usage <a class="header-anchor" href="#usage-28" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>pca9685_pwm_out &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start         Start the task</span></span>
<span class="line"><span>     [-a &lt;val&gt;]  7-bits I2C address of PCA9685</span></span>
<span class="line"><span>                 values: &lt;addr&gt;, default: 0x40</span></span>
<span class="line"><span>     [-b &lt;val&gt;]  bus that pca9685 is connected to</span></span>
<span class="line"><span>                 default: 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="pm-selector-auterion" tabindex="-1">pm_selector_auterion <a class="header-anchor" href="#pm-selector-auterion" aria-label="Permalink to &quot;pm_selector_auterion&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/power_monitor/pm_selector_auterion" target="_blank" rel="noreferrer">drivers/power_monitor/pm_selector_auterion</a></p><h3 id="description-23" tabindex="-1">Description <a class="header-anchor" href="#description-23" aria-label="Permalink to &quot;Description&quot;">​</a></h3><p>Driver for starting and auto-detecting different power monitors.</p><p><a id="pm_selector_auterion_usage"></a></p><h3 id="usage-29" tabindex="-1">Usage <a class="header-anchor" href="#usage-29" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>pm_selector_auterion &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="pmw3901" tabindex="-1">pmw3901 <a class="header-anchor" href="#pmw3901" aria-label="Permalink to &quot;pmw3901&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/optical_flow/pmw3901" target="_blank" rel="noreferrer">drivers/optical_flow/pmw3901</a></p><p><a id="pmw3901_usage"></a></p><h3 id="usage-30" tabindex="-1">Usage <a class="header-anchor" href="#usage-30" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>pmw3901 &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="pps-capture" tabindex="-1">pps_capture <a class="header-anchor" href="#pps-capture" aria-label="Permalink to &quot;pps_capture&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/pps_capture" target="_blank" rel="noreferrer">drivers/pps_capture</a></p><h3 id="description-24" tabindex="-1">Description <a class="header-anchor" href="#description-24" aria-label="Permalink to &quot;Description&quot;">​</a></h3><p>This implements capturing PPS information from the GNSS module and calculates the drift between PPS and Real-time clock.</p><p><a id="pps_capture_usage"></a></p><h3 id="usage-31" tabindex="-1">Usage <a class="header-anchor" href="#usage-31" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>pps_capture &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="pwm-out" tabindex="-1">pwm_out <a class="header-anchor" href="#pwm-out" aria-label="Permalink to &quot;pwm_out&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/pwm_out" target="_blank" rel="noreferrer">drivers/pwm_out</a></p><h3 id="description-25" tabindex="-1">Description <a class="header-anchor" href="#description-25" aria-label="Permalink to &quot;Description&quot;">​</a></h3><p>This module is responsible for driving the output pins. For boards without a separate IO chip (eg. Pixracer), it uses the main channels. On boards with an IO chip (eg. Pixhawk), it uses the AUX channels, and the px4io driver is used for main ones.</p><p><a id="pwm_out_usage"></a></p><h3 id="usage-32" tabindex="-1">Usage <a class="header-anchor" href="#usage-32" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>pwm_out &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="pwm-out-sim" tabindex="-1">pwm_out_sim <a class="header-anchor" href="#pwm-out-sim" aria-label="Permalink to &quot;pwm_out_sim&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/modules/simulation/pwm_out_sim" target="_blank" rel="noreferrer">modules/simulation/pwm_out_sim</a></p><h3 id="description-26" tabindex="-1">Description <a class="header-anchor" href="#description-26" aria-label="Permalink to &quot;Description&quot;">​</a></h3><p>Driver for simulated PWM outputs.</p><p>Its only function is to take <code>actuator_control</code> uORB messages, mix them with any loaded mixer and output the result to the <code>actuator_output</code> uORB topic.</p><p>It is used in SITL and HITL.</p><p><a id="pwm_out_sim_usage"></a></p><h3 id="usage-33" tabindex="-1">Usage <a class="header-anchor" href="#usage-33" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>pwm_out_sim &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start         Start the module</span></span>
<span class="line"><span>     [-m &lt;val&gt;]  Mode</span></span>
<span class="line"><span>                 values: hil|sim, default: sim</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="px4flow" tabindex="-1">px4flow <a class="header-anchor" href="#px4flow" aria-label="Permalink to &quot;px4flow&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/optical_flow/px4flow" target="_blank" rel="noreferrer">drivers/optical_flow/px4flow</a></p><p><a id="px4flow_usage"></a></p><h3 id="usage-34" tabindex="-1">Usage <a class="header-anchor" href="#usage-34" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>px4flow &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span>     [-I]        Internal I2C bus(es)</span></span>
<span class="line"><span>     [-X]        External I2C bus(es)</span></span>
<span class="line"><span>     [-b &lt;val&gt;]  board-specific bus (default=all) (external SPI: n-th bus</span></span>
<span class="line"><span>                 (default=1))</span></span>
<span class="line"><span>     [-f &lt;val&gt;]  bus frequency in kHz</span></span>
<span class="line"><span>     [-q]        quiet startup (no message if no device found)</span></span>
<span class="line"><span>     [-a &lt;val&gt;]  I2C address</span></span>
<span class="line"><span>                 default: 66</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="px4io" tabindex="-1">px4io <a class="header-anchor" href="#px4io" aria-label="Permalink to &quot;px4io&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/px4io" target="_blank" rel="noreferrer">drivers/px4io</a></p><h3 id="description-27" tabindex="-1">Description <a class="header-anchor" href="#description-27" aria-label="Permalink to &quot;Description&quot;">​</a></h3><p>Output driver communicating with the IO co-processor.</p><p><a id="px4io_usage"></a></p><h3 id="usage-35" tabindex="-1">Usage <a class="header-anchor" href="#usage-35" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>px4io &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   checkcrc      Check CRC for a firmware file against current code on IO</span></span>
<span class="line"><span>     &lt;filename&gt;  Firmware file</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   update        Update IO firmware</span></span>
<span class="line"><span>     [&lt;filename&gt;] Firmware file</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   debug         set IO debug level</span></span>
<span class="line"><span>     &lt;debug_level&gt; 0=disabled, 9=max verbosity</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   bind          DSM bind</span></span>
<span class="line"><span>     dsm2|dsmx|dsmx8 protocol</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   sbus1_out     enable sbus1 out</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   sbus2_out     enable sbus2 out</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   supported     Returns 0 if px4io is supported</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   test_fmu_fail test: turn off IO updates</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   test_fmu_ok   re-enable IO updates</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="rc-input" tabindex="-1">rc_input <a class="header-anchor" href="#rc-input" aria-label="Permalink to &quot;rc_input&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/rc_input" target="_blank" rel="noreferrer">drivers/rc_input</a></p><h3 id="description-28" tabindex="-1">Description <a class="header-anchor" href="#description-28" aria-label="Permalink to &quot;Description&quot;">​</a></h3><p>This module does the RC input parsing and auto-selecting the method. Supported methods are:</p><ul><li>PPM</li><li>SBUS</li><li>DSM</li><li>SUMD</li><li>ST24</li><li>TBS Crossfire (CRSF)</li></ul><p><a id="rc_input_usage"></a></p><h3 id="usage-36" tabindex="-1">Usage <a class="header-anchor" href="#usage-36" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>rc_input &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span>     [-d &lt;val&gt;]  RC device</span></span>
<span class="line"><span>                 values: &lt;file:dev&gt;, default: /dev/ttyS3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   bind          Send a DSM bind command (module must be running)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="rgbled" tabindex="-1">rgbled <a class="header-anchor" href="#rgbled" aria-label="Permalink to &quot;rgbled&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/lights/rgbled_ncp5623c" target="_blank" rel="noreferrer">drivers/lights/rgbled_ncp5623c</a></p><p><a id="rgbled_usage"></a></p><h3 id="usage-37" tabindex="-1">Usage <a class="header-anchor" href="#usage-37" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>rgbled &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span>     [-I]        Internal I2C bus(es)</span></span>
<span class="line"><span>     [-X]        External I2C bus(es)</span></span>
<span class="line"><span>     [-b &lt;val&gt;]  board-specific bus (default=all) (external SPI: n-th bus</span></span>
<span class="line"><span>                 (default=1))</span></span>
<span class="line"><span>     [-f &lt;val&gt;]  bus frequency in kHz</span></span>
<span class="line"><span>     [-q]        quiet startup (no message if no device found)</span></span>
<span class="line"><span>     [-a &lt;val&gt;]  I2C address</span></span>
<span class="line"><span>                 default: 57</span></span>
<span class="line"><span>     [-o &lt;val&gt;]  RGB PWM Assignment</span></span>
<span class="line"><span>                 default: 123</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="rgbled-is31fl3195" tabindex="-1">rgbled_is31fl3195 <a class="header-anchor" href="#rgbled-is31fl3195" aria-label="Permalink to &quot;rgbled_is31fl3195&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/lights/rgbled_is31fl3195" target="_blank" rel="noreferrer">drivers/lights/rgbled_is31fl3195</a></p><p><a id="rgbled_is31fl3195_usage"></a></p><h3 id="usage-38" tabindex="-1">Usage <a class="header-anchor" href="#usage-38" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>rgbled_is31fl3195 &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span>     [-I]        Internal I2C bus(es)</span></span>
<span class="line"><span>     [-X]        External I2C bus(es)</span></span>
<span class="line"><span>     [-b &lt;val&gt;]  board-specific bus (default=all) (external SPI: n-th bus</span></span>
<span class="line"><span>                 (default=1))</span></span>
<span class="line"><span>     [-f &lt;val&gt;]  bus frequency in kHz</span></span>
<span class="line"><span>     [-q]        quiet startup (no message if no device found)</span></span>
<span class="line"><span>     [-a &lt;val&gt;]  I2C address</span></span>
<span class="line"><span>                 default: 84</span></span>
<span class="line"><span>     [-o &lt;val&gt;]  RGB PWM Assignment</span></span>
<span class="line"><span>                 default: 123</span></span>
<span class="line"><span>     [-i &lt;val&gt;]  Current Band</span></span>
<span class="line"><span>                 default: 0.5</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="rgbled-lp5562" tabindex="-1">rgbled_lp5562 <a class="header-anchor" href="#rgbled-lp5562" aria-label="Permalink to &quot;rgbled_lp5562&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/lights/rgbled_lp5562" target="_blank" rel="noreferrer">drivers/lights/rgbled_lp5562</a></p><h3 id="description-29" tabindex="-1">Description <a class="header-anchor" href="#description-29" aria-label="Permalink to &quot;Description&quot;">​</a></h3><p>Driver for <a href="https://www.ti.com/product/LP5562" target="_blank" rel="noreferrer">LP5562</a> LED driver connected via I2C.</p><p>This used in some GPS modules by Holybro for <a href="./../getting_started/led_meanings.html">PX4 status notification</a></p><p>The driver is included by default in firmware (KConfig key DRIVERS_LIGHTS_RGBLED_LP5562) and is always enabled.</p><p><a id="rgbled_lp5562_usage"></a></p><h3 id="usage-39" tabindex="-1">Usage <a class="header-anchor" href="#usage-39" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>rgbled_lp5562 &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>     [-u &lt;val&gt;]  Current in mA</span></span>
<span class="line"><span>                 default: 17.5</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="roboclaw" tabindex="-1">roboclaw <a class="header-anchor" href="#roboclaw" aria-label="Permalink to &quot;roboclaw&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/roboclaw" target="_blank" rel="noreferrer">drivers/roboclaw</a></p><h3 id="description-30" tabindex="-1">Description <a class="header-anchor" href="#description-30" aria-label="Permalink to &quot;Description&quot;">​</a></h3><p>This driver communicates over UART with the <a href="https://www.basicmicro.com/motor-controller" target="_blank" rel="noreferrer">Roboclaw motor driver</a>. It performs two tasks:</p><ul><li>Control the motors based on the OutputModuleInterface.</li><li>Read the wheel encoders and publish the raw data in the <code>wheel_encoders</code> uORB topic</li></ul><p>In order to use this driver, the Roboclaw should be put into Packet Serial mode (see the linked documentation), and your flight controller&#39;s UART port should be connected to the Roboclaw as shown in the documentation. The driver needs to be enabled using the parameter <code>RBCLW_SER_CFG</code>, the baudrate needs to be set correctly and the address <code>RBCLW_ADDRESS</code> needs to match the ESC configuration.</p><p>The command to start this driver is: <code>$ roboclaw start &lt;UART device&gt; &lt;baud rate&gt;</code></p><p><a id="roboclaw_usage"></a></p><h3 id="usage-40" tabindex="-1">Usage <a class="header-anchor" href="#usage-40" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>roboclaw &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="safety-button" tabindex="-1">safety_button <a class="header-anchor" href="#safety-button" aria-label="Permalink to &quot;safety_button&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/safety_button" target="_blank" rel="noreferrer">drivers/safety_button</a></p><h3 id="description-31" tabindex="-1">Description <a class="header-anchor" href="#description-31" aria-label="Permalink to &quot;Description&quot;">​</a></h3><p>This module is responsible for the safety button. Pressing the safety button 3 times quickly will trigger a GCS pairing request.</p><p><a id="safety_button_usage"></a></p><h3 id="usage-41" tabindex="-1">Usage <a class="header-anchor" href="#usage-41" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>safety_button &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="septentrio" tabindex="-1">septentrio <a class="header-anchor" href="#septentrio" aria-label="Permalink to &quot;septentrio&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/gnss/septentrio" target="_blank" rel="noreferrer">drivers/gnss/septentrio</a></p><h3 id="description-32" tabindex="-1">Description <a class="header-anchor" href="#description-32" aria-label="Permalink to &quot;Description&quot;">​</a></h3><p>Driver for Septentrio GNSS receivers. It can automatically configure them and make their output available for the rest of the system. A secondary receiver is supported for redundancy, logging and dual-receiver heading. Septentrio receiver baud rates from 57600 to 1500000 are supported. If others are used, the driver will use 230400 and give a warning.</p><h3 id="examples-9" tabindex="-1">Examples <a class="header-anchor" href="#examples-9" aria-label="Permalink to &quot;Examples&quot;">​</a></h3><p>Use one receiver on port <code>/dev/ttyS0</code> and automatically configure it to use baud rate 230400:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>septentrio start -d /dev/ttyS0 -b 230400</span></span></code></pre></div><p>Use two receivers, the primary on port <code>/dev/ttyS3</code> and the secondary on <code>/dev/ttyS4</code>, detect baud rate automatically and preserve them:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>septentrio start -d /dev/ttyS3 -e /dev/ttyS4</span></span></code></pre></div><p>Perform warm reset of the receivers:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>gps reset warm</span></span></code></pre></div><p><a id="septentrio_usage"></a></p><h3 id="usage-42" tabindex="-1">Usage <a class="header-anchor" href="#usage-42" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>septentrio &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span>     -d &lt;val&gt;    Primary receiver port</span></span>
<span class="line"><span>                 values: &lt;file:dev&gt;</span></span>
<span class="line"><span>     [-b &lt;val&gt;]  Primary receiver baud rate</span></span>
<span class="line"><span>                 default: 0</span></span>
<span class="line"><span>     [-e &lt;val&gt;]  Secondary receiver port</span></span>
<span class="line"><span>                 values: &lt;file:dev&gt;</span></span>
<span class="line"><span>     [-g &lt;val&gt;]  Secondary receiver baud rate</span></span>
<span class="line"><span>                 default: 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   reset         Reset connected receiver</span></span>
<span class="line"><span>     cold|warm|hot Specify reset type</span></span></code></pre></div><h2 id="sht3x" tabindex="-1">sht3x <a class="header-anchor" href="#sht3x" aria-label="Permalink to &quot;sht3x&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/hygrometer/sht3x" target="_blank" rel="noreferrer">drivers/hygrometer/sht3x</a></p><h3 id="description-33" tabindex="-1">Description <a class="header-anchor" href="#description-33" aria-label="Permalink to &quot;Description&quot;">​</a></h3><p>SHT3x Temperature and Humidity Sensor Driver by Senserion.</p><h3 id="examples-10" tabindex="-1">Examples <a class="header-anchor" href="#examples-10" aria-label="Permalink to &quot;Examples&quot;">​</a></h3><p>CLI usage example:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>sht3x start -X</span></span></code></pre></div><p>Start the sensor driver on the external bus</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>sht3x status</span></span></code></pre></div><p>Print driver status</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>sht3x values</span></span></code></pre></div><p>Print last measured values</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>sht3x reset</span></span></code></pre></div><p>Reinitialize senzor, reset flags</p><p><a id="sht3x_usage"></a></p><h3 id="usage-43" tabindex="-1">Usage <a class="header-anchor" href="#usage-43" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>sht3x &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span>     [-I]        Internal I2C bus(es)</span></span>
<span class="line"><span>     [-X]        External I2C bus(es)</span></span>
<span class="line"><span>     [-b &lt;val&gt;]  board-specific bus (default=all) (external SPI: n-th bus</span></span>
<span class="line"><span>                 (default=1))</span></span>
<span class="line"><span>     [-f &lt;val&gt;]  bus frequency in kHz</span></span>
<span class="line"><span>     [-q]        quiet startup (no message if no device found)</span></span>
<span class="line"><span>     [-a &lt;val&gt;]  I2C address</span></span>
<span class="line"><span>                 default: 68</span></span>
<span class="line"><span>     [-k]        if initialization (probing) fails, keep retrying periodically</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   values        Print actual data</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   reset         Reinitialize sensor</span></span></code></pre></div><h2 id="tap-esc" tabindex="-1">tap_esc <a class="header-anchor" href="#tap-esc" aria-label="Permalink to &quot;tap_esc&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/tap_esc" target="_blank" rel="noreferrer">drivers/tap_esc</a></p><h3 id="description-34" tabindex="-1">Description <a class="header-anchor" href="#description-34" aria-label="Permalink to &quot;Description&quot;">​</a></h3><p>This module controls the TAP_ESC hardware via UART. It listens on the actuator_controls topics, does the mixing and writes the PWM outputs.</p><h3 id="implementation-2" tabindex="-1">Implementation <a class="header-anchor" href="#implementation-2" aria-label="Permalink to &quot;Implementation&quot;">​</a></h3><p>Currently the module is implemented as a threaded version only, meaning that it runs in its own thread instead of on the work queue.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><p>The module is typically started with:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>tap_esc start -d /dev/ttyS2 -n &lt;1-8&gt;</span></span></code></pre></div><p><a id="tap_esc_usage"></a></p><h3 id="usage-44" tabindex="-1">Usage <a class="header-anchor" href="#usage-44" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>tap_esc &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start         Start the task</span></span>
<span class="line"><span>     [-d &lt;val&gt;]  Device used to talk to ESCs</span></span>
<span class="line"><span>                 values: &lt;device&gt;</span></span>
<span class="line"><span>     [-n &lt;val&gt;]  Number of ESCs</span></span>
<span class="line"><span>                 default: 4</span></span></code></pre></div><h2 id="tone-alarm" tabindex="-1">tone_alarm <a class="header-anchor" href="#tone-alarm" aria-label="Permalink to &quot;tone_alarm&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/tone_alarm" target="_blank" rel="noreferrer">drivers/tone_alarm</a></p><h3 id="description-35" tabindex="-1">Description <a class="header-anchor" href="#description-35" aria-label="Permalink to &quot;Description&quot;">​</a></h3><p>This module is responsible for the tone alarm.</p><p><a id="tone_alarm_usage"></a></p><h3 id="usage-45" tabindex="-1">Usage <a class="header-anchor" href="#usage-45" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>tone_alarm &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="uwb" tabindex="-1">uwb <a class="header-anchor" href="#uwb" aria-label="Permalink to &quot;uwb&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/uwb/uwb_sr150" target="_blank" rel="noreferrer">drivers/uwb/uwb_sr150</a></p><h3 id="description-36" tabindex="-1">Description <a class="header-anchor" href="#description-36" aria-label="Permalink to &quot;Description&quot;">​</a></h3><p>Driver for NXP UWB_SR150 UWB positioning system. This driver publishes a <code>uwb_distance</code> message whenever the UWB_SR150 has a position measurement available.</p><h3 id="example-1" tabindex="-1">Example <a class="header-anchor" href="#example-1" aria-label="Permalink to &quot;Example&quot;">​</a></h3><p>Start the driver with a given device:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>uwb start -d /dev/ttyS2</span></span></code></pre></div><p><a id="uwb_usage"></a></p><h3 id="usage-46" tabindex="-1">Usage <a class="header-anchor" href="#usage-46" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>uwb &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span>     -d &lt;val&gt;    Name of device for serial communication with UWB</span></span>
<span class="line"><span>                 values: &lt;file:dev&gt;</span></span>
<span class="line"><span>     -b &lt;val&gt;    Baudrate for serial communication</span></span>
<span class="line"><span>                 values: &lt;int&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status</span></span></code></pre></div><h2 id="voxl2-io" tabindex="-1">voxl2_io <a class="header-anchor" href="#voxl2-io" aria-label="Permalink to &quot;voxl2_io&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/voxl2_io" target="_blank" rel="noreferrer">drivers/voxl2_io</a></p><h3 id="description-37" tabindex="-1">Description <a class="header-anchor" href="#description-37" aria-label="Permalink to &quot;Description&quot;">​</a></h3><p>This module is responsible for driving the output pins. For boards without a separate IO chip (eg. Pixracer), it uses the main channels. On boards with an IO chip (eg. Pixhawk), it uses the AUX channels, and the px4io driver is used for main ones.</p><p><a id="voxl2_io_usage"></a></p><h3 id="usage-47" tabindex="-1">Usage <a class="header-anchor" href="#usage-47" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>voxl2_io &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start         Start the task</span></span>
<span class="line"><span>     -v          Verbose messages</span></span>
<span class="line"><span>     -d          Disable PWM</span></span>
<span class="line"><span>     -e          Disable RC</span></span>
<span class="line"><span>     -p &lt;val&gt;    UART port</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   calibrate_escs Calibrate ESCs min/max range</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   calibrate_escs Calibrate ESCs min/max range</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   pwm           Open-Loop PWM test control request</span></span>
<span class="line"><span>     -c &lt;val&gt;    PWM OUTPUT Channel, 0-3</span></span>
<span class="line"><span>     -r &lt;val&gt;    Duty Cycle value, 0 to 800</span></span>
<span class="line"><span>     -n &lt;val&gt;    Command repeat count, 0 to INT_MAX</span></span>
<span class="line"><span>     -t &lt;val&gt;    Delay between repeated commands (microseconds), 0 to INT_MAX</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="voxl-esc" tabindex="-1">voxl_esc <a class="header-anchor" href="#voxl-esc" aria-label="Permalink to &quot;voxl_esc&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/actuators/voxl_esc" target="_blank" rel="noreferrer">drivers/actuators/voxl_esc</a></p><h3 id="description-38" tabindex="-1">Description <a class="header-anchor" href="#description-38" aria-label="Permalink to &quot;Description&quot;">​</a></h3><p>This module is responsible for...</p><h3 id="implementation-3" tabindex="-1">Implementation <a class="header-anchor" href="#implementation-3" aria-label="Permalink to &quot;Implementation&quot;">​</a></h3><p>By default the module runs on a work queue with a callback on the uORB actuator_controls topic.</p><h3 id="examples-11" tabindex="-1">Examples <a class="header-anchor" href="#examples-11" aria-label="Permalink to &quot;Examples&quot;">​</a></h3><p>It is typically started with:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>todo</span></span></code></pre></div><p><a id="voxl_esc_usage"></a></p><h3 id="usage-48" tabindex="-1">Usage <a class="header-anchor" href="#usage-48" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>voxl_esc &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start         Start the task</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   reset         Send reset request to ESC</span></span>
<span class="line"><span>     -i &lt;val&gt;    ESC ID, 0-3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   version       Send version request to ESC</span></span>
<span class="line"><span>     -i &lt;val&gt;    ESC ID, 0-3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   version-ext   Send extended version request to ESC</span></span>
<span class="line"><span>     -i &lt;val&gt;    ESC ID, 0-3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   rpm           Closed-Loop RPM test control request</span></span>
<span class="line"><span>     -i &lt;val&gt;    ESC ID, 0-3</span></span>
<span class="line"><span>     -r &lt;val&gt;    RPM, -32,768 to 32,768</span></span>
<span class="line"><span>     -n &lt;val&gt;    Command repeat count, 0 to INT_MAX</span></span>
<span class="line"><span>     -t &lt;val&gt;    Delay between repeated commands (microseconds), 0 to INT_MAX</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   pwm           Open-Loop PWM test control request</span></span>
<span class="line"><span>     -i &lt;val&gt;    ESC ID, 0-3</span></span>
<span class="line"><span>     -r &lt;val&gt;    Duty Cycle value, 0 to 800</span></span>
<span class="line"><span>     -n &lt;val&gt;    Command repeat count, 0 to INT_MAX</span></span>
<span class="line"><span>     -t &lt;val&gt;    Delay between repeated commands (microseconds), 0 to INT_MAX</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   tone          Send tone generation request to ESC</span></span>
<span class="line"><span>     -i &lt;val&gt;    ESC ID, 0-3</span></span>
<span class="line"><span>     -p &lt;val&gt;    Period of sound, inverse frequency, 0-255</span></span>
<span class="line"><span>     -d &lt;val&gt;    Duration of the sound, 0-255, 1LSB = 13ms</span></span>
<span class="line"><span>     -v &lt;val&gt;    Power (volume) of sound, 0-100</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   led           Send LED control request</span></span>
<span class="line"><span>     -l &lt;val&gt;    Bitmask 0x0FFF (12 bits) - ESC0 (RGB) ESC1 (RGB) ESC2 (RGB)</span></span>
<span class="line"><span>                 ESC3 (RGB)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="voxlpm" tabindex="-1">voxlpm <a class="header-anchor" href="#voxlpm" aria-label="Permalink to &quot;voxlpm&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/power_monitor/voxlpm" target="_blank" rel="noreferrer">drivers/power_monitor/voxlpm</a></p><p><a id="voxlpm_usage"></a></p><h3 id="usage-49" tabindex="-1">Usage <a class="header-anchor" href="#usage-49" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>voxlpm [arguments...]</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span>     [-I]        Internal I2C bus(es)</span></span>
<span class="line"><span>     [-X]        External I2C bus(es)</span></span>
<span class="line"><span>     [-b &lt;val&gt;]  board-specific bus (default=all) (external SPI: n-th bus</span></span>
<span class="line"><span>                 (default=1))</span></span>
<span class="line"><span>     [-f &lt;val&gt;]  bus frequency in kHz</span></span>
<span class="line"><span>     [-q]        quiet startup (no message if no device found)</span></span>
<span class="line"><span>     [-a &lt;val&gt;]  I2C address</span></span>
<span class="line"><span>                 default: 68</span></span>
<span class="line"><span>     [-T &lt;val&gt;]  Type</span></span>
<span class="line"><span>                 values: VBATT|P5VDC|P12VDC, default: VBATT</span></span>
<span class="line"><span>     [-k]        if initialization (probing) fails, keep retrying periodically</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="zenoh" tabindex="-1">zenoh <a class="header-anchor" href="#zenoh" aria-label="Permalink to &quot;zenoh&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/modules/zenoh" target="_blank" rel="noreferrer">modules/zenoh</a></p><h3 id="description-39" tabindex="-1">Description <a class="header-anchor" href="#description-39" aria-label="Permalink to &quot;Description&quot;">​</a></h3><p>Zenoh demo bridge</p><p><a id="zenoh_usage"></a></p><h3 id="usage-50" tabindex="-1">Usage <a class="header-anchor" href="#usage-50" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>zenoh &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   config</span></span></code></pre></div>`,434),l=[t];function i(r,o,c,d,u,h){return n(),s("div",null,l)}const b=a(p,[["render",i]]);export{m as __pageData,b as default};
