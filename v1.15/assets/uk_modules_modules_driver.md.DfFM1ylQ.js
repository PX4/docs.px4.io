import{_ as a,c as s,o as n,ab as e}from"./chunks/framework.CUflZczI.js";const m=JSON.parse('{"title":"Modules Reference: Driver","description":"","frontmatter":{},"headers":[],"relativePath":"uk/modules/modules_driver.md","filePath":"uk/modules/modules_driver.md"}'),p={name:"uk/modules/modules_driver.md"},l=e(`<h1 id="modules-reference-driver" tabindex="-1">Modules Reference: Driver <a class="header-anchor" href="#modules-reference-driver" aria-label="Permalink to &quot;Modules Reference: Driver&quot;">​</a></h1><p>Підкатегорії:</p><ul><li><a href="./modules_driver_imu.html">Imu</a></li><li><a href="./modules_driver_distance_sensor.html">Датчик відстані</a></li><li><a href="./modules_driver_ins.html">Ins</a></li><li><a href="./modules_driver_airspeed_sensor.html">Датчик швидкості</a></li><li><a href="./modules_driver_baro.html">Барометер</a></li><li><a href="./modules_driver_transponder.html">Transponder</a></li><li><a href="./modules_driver_rpm_sensor.html">Rpm датчик</a></li><li><a href="./modules_driver_optical_flow.html">Optical Flow</a></li><li><a href="./modules_driver_camera.html">Camera</a></li><li><a href="./modules_driver_magnetometer.html">Магнітометр</a></li></ul><h2 id="mcp23009" tabindex="-1">MCP23009 <a class="header-anchor" href="#mcp23009" aria-label="Permalink to &quot;MCP23009&quot;">​</a></h2><p>Джерело: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/gpio/mcp23009" target="_blank" rel="noreferrer">drivers/gpio/mcp23009</a></p><p><a id="MCP23009_usage"></a></p><h3 id="використання" tabindex="-1">Використання <a class="header-anchor" href="#використання" aria-label="Permalink to &quot;Використання&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>MCP23009 &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="adc" tabindex="-1">adc <a class="header-anchor" href="#adc" aria-label="Permalink to &quot;adc&quot;">​</a></h2><p>Джерело: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/adc/board_adc" target="_blank" rel="noreferrer">drivers/adc/board_adc</a></p><h3 id="опис" tabindex="-1">Опис <a class="header-anchor" href="#опис" aria-label="Permalink to &quot;Опис&quot;">​</a></h3><p>ADC драйвер.</p><p><a id="adc_usage"></a></p><h3 id="використання-1" tabindex="-1">Використання <a class="header-anchor" href="#використання-1" aria-label="Permalink to &quot;Використання&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>adc &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   test</span></span>
<span class="line"><span>     [-n]        Do not publish ADC report, only system power</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="ads1115" tabindex="-1">ads1115 <a class="header-anchor" href="#ads1115" aria-label="Permalink to &quot;ads1115&quot;">​</a></h2><p>Джерело: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/adc/ads1115" target="_blank" rel="noreferrer">drivers/adc/ads1115</a></p><h3 id="опис-1" tabindex="-1">Опис <a class="header-anchor" href="#опис-1" aria-label="Permalink to &quot;Опис&quot;">​</a></h3><p>Драйвер для активації зовнішнього <a href="https://www.adafruit.com/product/1085" target="_blank" rel="noreferrer">ADS1115</a> ADC підключеного через I2C.</p><p>Драйвер за замовчуванням включено у прошивку для плат, які не мають внутрішнього аналого-цифрового перетворювача, таких як <a href="./../flight_controller/raspberry_pi_pilotpi.html">PilotPi</a> або <a href="./../flight_controller/cuav_nora.html">CUAV Nora</a>. (шукайте <code>CONFIG_DRIVERS_ADC_ADS1115</code> у файлах конфігурації плати).</p><p>Вмикається/вимикається за допомогою <a href="./../advanced_config/parameter_reference.html#ADC_ADS1115_EN">ADC_ADS1115_EN</a> і за замовчуванням вимкнено. Якщо увімкнено, внутрішні ADC не використовуються.</p><p><a id="ads1115_usage"></a></p><h3 id="використання-2" tabindex="-1">Використання <a class="header-anchor" href="#використання-2" aria-label="Permalink to &quot;Використання&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>ads1115 &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="atxxxx" tabindex="-1">atxxxx <a class="header-anchor" href="#atxxxx" aria-label="Permalink to &quot;atxxxx&quot;">​</a></h2><p>Джерело: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/osd/atxxxx" target="_blank" rel="noreferrer">drivers/osd/atxxxx</a></p><h3 id="опис-2" tabindex="-1">Опис <a class="header-anchor" href="#опис-2" aria-label="Permalink to &quot;Опис&quot;">​</a></h3><p>Наприклад, OSD драйвер для мікросхеми ATXXXX, яка встановлена на платі OmnibusF4SD.</p><p>Його можна увімкнути за допомогою параметра OSD_ATXXXX_CFG.</p><p><a id="atxxxx_usage"></a></p><h3 id="використання-3" tabindex="-1">Використання <a class="header-anchor" href="#використання-3" aria-label="Permalink to &quot;Використання&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>atxxxx &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="batmon" tabindex="-1">batmon <a class="header-anchor" href="#batmon" aria-label="Permalink to &quot;batmon&quot;">​</a></h2><p>Джерело: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/smart_battery/batmon" target="_blank" rel="noreferrer">drivers/smart_battery/batmon</a></p><h3 id="опис-3" tabindex="-1">Опис <a class="header-anchor" href="#опис-3" aria-label="Permalink to &quot;Опис&quot;">​</a></h3><p>Драйвер для зв&#39;язку SMBUS зі смарт-батареєю з підтримкою BatMon Інформація про налаштування/використання: <a href="https://rotoye.com/batmon-tutorial/" target="_blank" rel="noreferrer">https://rotoye.com/batmon-tutorial/</a></p><h3 id="приклади" tabindex="-1">Приклади <a class="header-anchor" href="#приклади" aria-label="Permalink to &quot;Приклади&quot;">​</a></h3><p>Почати з адреси 0x0B, на шині 4</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>batmon start -X -a 11 -b 4</span></span></code></pre></div><p><a id="batmon_usage"></a></p><h3 id="використання-4" tabindex="-1">Використання <a class="header-anchor" href="#використання-4" aria-label="Permalink to &quot;Використання&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>batmon &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="batt-smbus" tabindex="-1">batt_smbus <a class="header-anchor" href="#batt-smbus" aria-label="Permalink to &quot;batt_smbus&quot;">​</a></h2><p>Джерело: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/batt_smbus" target="_blank" rel="noreferrer">drivers/batt_smbus</a></p><h3 id="опис-4" tabindex="-1">Опис <a class="header-anchor" href="#опис-4" aria-label="Permalink to &quot;Опис&quot;">​</a></h3><p>Розумний драйвер акумулятора для BQ40Z50 палива IC.</p><h3 id="приклади-1" tabindex="-1">Приклади <a class="header-anchor" href="#приклади-1" aria-label="Permalink to &quot;Приклади&quot;">​</a></h3><p>Записати у прошивку для встановлення параметрів. address, number_of_bytes, byte0, ... , byteN</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>batt_smbus -X write_flash 19069 2 27 0</span></span></code></pre></div><p><a id="batt_smbus_usage"></a></p><h3 id="використання-5" tabindex="-1">Використання <a class="header-anchor" href="#використання-5" aria-label="Permalink to &quot;Використання&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>batt_smbus &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="bst" tabindex="-1">bst <a class="header-anchor" href="#bst" aria-label="Permalink to &quot;bst&quot;">​</a></h2><p>Джерело: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/telemetry/bst" target="_blank" rel="noreferrer">drivers/telemetry/bst</a></p><p><a id="bst_usage"></a></p><h3 id="використання-6" tabindex="-1">Використання <a class="header-anchor" href="#використання-6" aria-label="Permalink to &quot;Використання&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>bst &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="crsf-rc" tabindex="-1">crsf_rc <a class="header-anchor" href="#crsf-rc" aria-label="Permalink to &quot;crsf_rc&quot;">​</a></h2><p>Джерело: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/rc/crsf_rc" target="_blank" rel="noreferrer">drivers/rc/crsf_rc</a></p><h3 id="опис-5" tabindex="-1">Опис <a class="header-anchor" href="#опис-5" aria-label="Permalink to &quot;Опис&quot;">​</a></h3><p>Цей модуль парсить uplink протокол CRSF RC і генерує дані CRSF downlink телеметрії</p><p><a id="crsf_rc_usage"></a></p><h3 id="використання-7" tabindex="-1">Використання <a class="header-anchor" href="#використання-7" aria-label="Permalink to &quot;Використання&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>crsf_rc &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span>     [-d &lt;val&gt;]  RC device</span></span>
<span class="line"><span>                 values: &lt;file:dev&gt;, default: /dev/ttyS3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="dshot" tabindex="-1">dshot <a class="header-anchor" href="#dshot" aria-label="Permalink to &quot;dshot&quot;">​</a></h2><p>Джерело: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/dshot" target="_blank" rel="noreferrer">drivers/dshot</a></p><h3 id="опис-6" tabindex="-1">Опис <a class="header-anchor" href="#опис-6" aria-label="Permalink to &quot;Опис&quot;">​</a></h3><p>Це драйвер виводу DShot. Він схожий на драйвер fmu і може бути використаний як заміна використовувати DShot як протокол зв&#39;язку ESC замість PWM.</p><p>Під час запуску модуль намагається зайняти всі доступні піни для виходу DShot. Він пропускає всі піни, які вже використовуються (наприклад, модулем запуску камери).</p><p>Він підтримує:</p><ul><li>DShot150, DShot300, DShot600, DShot1200</li><li>телеметрія через окремий UART та публікація у вигляді повідомлення esc_status</li><li>надсилання команд DShot через CLI</li></ul><h3 id="приклади-2" tabindex="-1">Приклади <a class="header-anchor" href="#приклади-2" aria-label="Permalink to &quot;Приклади&quot;">​</a></h3><p>Постійно реверсує двигун 1:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>dshot reverse -m 1</span></span>
<span class="line"><span>dshot save -m 1</span></span></code></pre></div><p>Після збереження змінений напрямок буде вважатися нормальним. Щоб розвернути назад, повторіть ті ж самі команди.</p><p><a id="dshot_usage"></a></p><h3 id="використання-8" tabindex="-1">Використання <a class="header-anchor" href="#використання-8" aria-label="Permalink to &quot;Використання&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>dshot &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="fake-gps" tabindex="-1">fake_gps <a class="header-anchor" href="#fake-gps" aria-label="Permalink to &quot;fake_gps&quot;">​</a></h2><p>Джерело: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/examples/fake_gps" target="_blank" rel="noreferrer">examples/fake_gps</a></p><h3 id="опис-7" tabindex="-1">Опис <a class="header-anchor" href="#опис-7" aria-label="Permalink to &quot;Опис&quot;">​</a></h3><p><a id="fake_gps_usage"></a></p><h3 id="використання-9" tabindex="-1">Використання <a class="header-anchor" href="#використання-9" aria-label="Permalink to &quot;Використання&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>fake_gps &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="fake-imu" tabindex="-1">fake_imu <a class="header-anchor" href="#fake-imu" aria-label="Permalink to &quot;fake_imu&quot;">​</a></h2><p>Джерело: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/examples/fake_imu" target="_blank" rel="noreferrer">examples/fake_imu</a></p><h3 id="опис-8" tabindex="-1">Опис <a class="header-anchor" href="#опис-8" aria-label="Permalink to &quot;Опис&quot;">​</a></h3><p><a id="fake_imu_usage"></a></p><h3 id="використання-10" tabindex="-1">Використання <a class="header-anchor" href="#використання-10" aria-label="Permalink to &quot;Використання&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>fake_imu &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="fake-magnetometer" tabindex="-1">fake_magnetometer <a class="header-anchor" href="#fake-magnetometer" aria-label="Permalink to &quot;fake_magnetometer&quot;">​</a></h2><p>Джерело: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/examples/fake_magnetometer" target="_blank" rel="noreferrer">examples/fake_magnetometer</a></p><h3 id="опис-9" tabindex="-1">Опис <a class="header-anchor" href="#опис-9" aria-label="Permalink to &quot;Опис&quot;">​</a></h3><p>Publish the earth magnetic field as a fake magnetometer (sensor_mag). Потребує vehicle_attitude та vehicle_gps_position.</p><p><a id="fake_magnetometer_usage"></a></p><h3 id="використання-11" tabindex="-1">Використання <a class="header-anchor" href="#використання-11" aria-label="Permalink to &quot;Використання&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>fake_magnetometer &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="ft-technologies-serial" tabindex="-1">ft_technologies_serial <a class="header-anchor" href="#ft-technologies-serial" aria-label="Permalink to &quot;ft_technologies_serial&quot;">​</a></h2><p>Джерело: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/wind_sensor/ft_technologies" target="_blank" rel="noreferrer">drivers/wind_sensor/ft_technologies</a></p><h3 id="опис-10" tabindex="-1">Опис <a class="header-anchor" href="#опис-10" aria-label="Permalink to &quot;Опис&quot;">​</a></h3><p>Драйвер послідовної шини для цифрового датчика вітру FT Technologies FT742. Цей драйвер потрібен для роботи разом з з модулем передачі сигналу RS485 на UART.</p><p>Більшість плат налаштовано на увімкнення/запуск драйвера на вказаному UART за допомогою параметра SENS_FTX_CFG.</p><h3 id="приклади-3" tabindex="-1">Приклади <a class="header-anchor" href="#приклади-3" aria-label="Permalink to &quot;Приклади&quot;">​</a></h3><p>Спроба запустити драйвер на вказаному послідовному пристрої.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>ft_technologies_serial start -d /dev/ttyS1</span></span></code></pre></div><p>Зупинити драйвер</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>ft_technologies_serial stop</span></span></code></pre></div><p><a id="ft_technologies_serial_usage"></a></p><h3 id="використання-12" tabindex="-1">Використання <a class="header-anchor" href="#використання-12" aria-label="Permalink to &quot;Використання&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>ft_technologies_serial &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start         Start driver</span></span>
<span class="line"><span>     -d &lt;val&gt;    Serial device</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop          Stop driver</span></span></code></pre></div><h2 id="gimbal" tabindex="-1">gimbal <a class="header-anchor" href="#gimbal" aria-label="Permalink to &quot;gimbal&quot;">​</a></h2><p>Джерело: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/modules/gimbal" target="_blank" rel="noreferrer">modules/gimbal</a></p><h3 id="опис-11" tabindex="-1">Опис <a class="header-anchor" href="#опис-11" aria-label="Permalink to &quot;Опис&quot;">​</a></h3><p>Водій керування монтажем / гімбалю. Він відображає кілька різних методів введення (наприклад, RC або MAVLink) на налаштований вивід (наприклад, AUX канали або MAVLink).</p><p>Документація з тим, як його використовувати, знаходиться на сторінці управління гімбалем <a href="https://docs.px4.io/v1.15/en/advanced/gimbal_control.html" target="_blank" rel="noreferrer">gimbal_control</a>.</p><h3 id="приклади-4" tabindex="-1">Приклади <a class="header-anchor" href="#приклади-4" aria-label="Permalink to &quot;Приклади&quot;">​</a></h3><p>Перевірте вихідні дані, встановивши кути (всі пропущені вісі установлені на 0):</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>gimbal test pitch -45 yaw 30</span></span></code></pre></div><p><a id="gimbal_usage"></a></p><h3 id="використання-13" tabindex="-1">Використання <a class="header-anchor" href="#використання-13" aria-label="Permalink to &quot;Використання&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>gimbal &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="gps" tabindex="-1">gps <a class="header-anchor" href="#gps" aria-label="Permalink to &quot;gps&quot;">​</a></h2><p>Джерело: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/gps" target="_blank" rel="noreferrer">drivers/gps</a></p><h3 id="опис-12" tabindex="-1">Опис <a class="header-anchor" href="#опис-12" aria-label="Permalink to &quot;Опис&quot;">​</a></h3><p>Модуль GPS-драйвера, який здійснює зв&#39;язок з пристроєм і публікує позицію через uORB. Він підтримує кілька протоколів (постачальників пристроїв) і за замовчуванням автоматично вибирає правильний.</p><p>Модуль підтримує додатковий GPS пристрій, який задається параметром <code>-e</code>. Позиція буде опублікована на другому екземплярі теми uORB, але наразі вона не використовується рештою системи (однак дані будуть зареєстровані, щоб їх можна було використовувати для порівняння).</p><h3 id="імплементація" tabindex="-1">Імплементація <a class="header-anchor" href="#імплементація" aria-label="Permalink to &quot;Імплементація&quot;">​</a></h3><p>Для кожного пристрою існує потік, який опитує дані. Класи протоколу GPS реалізовано з функцією зворотного виклику щоб їх можна було використовувати і в інших проектах (наприклад, QGroundControl також використовує їх).</p><h3 id="приклади-5" tabindex="-1">Приклади <a class="header-anchor" href="#приклади-5" aria-label="Permalink to &quot;Приклади&quot;">​</a></h3><p>Запуск 2 GPS-пристроїв (основний GPS на /dev/ttyS3 і додатковий на /dev/ttyS4):</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>gps start -d /dev/ttyS3 -e /dev/ttyS4</span></span></code></pre></div><p>Ініціюйте гарячий перезапуск GPS-пристрою</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>gps reset warm</span></span></code></pre></div><p><a id="gps_usage"></a></p><h3 id="використання-14" tabindex="-1">Використання <a class="header-anchor" href="#використання-14" aria-label="Permalink to &quot;Використання&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>gps &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>     cold|warm|hot Specify reset type</span></span></code></pre></div><h2 id="gz-bridge" tabindex="-1">gz_bridge <a class="header-anchor" href="#gz-bridge" aria-label="Permalink to &quot;gz_bridge&quot;">​</a></h2><p>Джерело: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/modules/simulation/gz_bridge" target="_blank" rel="noreferrer">modules/simulation/gz_bridge</a></p><h3 id="опис-13" tabindex="-1">Опис <a class="header-anchor" href="#опис-13" aria-label="Permalink to &quot;Опис&quot;">​</a></h3><p><a id="gz_bridge_usage"></a></p><h3 id="використання-15" tabindex="-1">Використання <a class="header-anchor" href="#використання-15" aria-label="Permalink to &quot;Використання&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>gz_bridge &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="ina220" tabindex="-1">ina220 <a class="header-anchor" href="#ina220" aria-label="Permalink to &quot;ina220&quot;">​</a></h2><p>Джерело: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/power_monitor/ina220" target="_blank" rel="noreferrer">drivers/power_monitor/ina220</a></p><h3 id="опис-14" tabindex="-1">Опис <a class="header-anchor" href="#опис-14" aria-label="Permalink to &quot;Опис&quot;">​</a></h3><p>Драйвер для монітора живлення INA220.</p><p>Кілька екземплярів цього драйвера можуть працювати одночасно, якщо кожен екземпляр має окрему адресу шини АБО I2C.</p><p>Наприклад, один екземпляр може працювати на шині 2, адреса 0x41, а інший - на шині 2, адреса 0x43.</p><p>Якщо модуль INA220 не має живлення, то за замовчуванням ініціалізація драйвера не відбудеться. Щоб змінити це, використовуйте прапор -f. Якщо цей прапорець встановлено, то у разі невдалої ініціалізації драйвер буде повторювати спроби ініціалізації кожні 0.5 секунди. Якщо цей прапорець встановлено, ви можете підключити батарею після запуску драйвера, і він буде працювати. Якщо цей прапорець не встановлено, перед запуском драйвера необхідно підключити батарею.</p><p><a id="ina220_usage"></a></p><h3 id="використання-16" tabindex="-1">Використання <a class="header-anchor" href="#використання-16" aria-label="Permalink to &quot;Використання&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>ina220 &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="ina226" tabindex="-1">ina226 <a class="header-anchor" href="#ina226" aria-label="Permalink to &quot;ina226&quot;">​</a></h2><p>Джерело: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/power_monitor/ina226" target="_blank" rel="noreferrer">drivers/power_monitor/ina226</a></p><h3 id="опис-15" tabindex="-1">Опис <a class="header-anchor" href="#опис-15" aria-label="Permalink to &quot;Опис&quot;">​</a></h3><p>Драйвер для монітора живлення INA226.</p><p>Кілька екземплярів цього драйвера можуть працювати одночасно, якщо кожен екземпляр має окрему адресу шини АБО I2C.</p><p>Наприклад, один екземпляр може працювати на шині 2, адреса 0x41, а інший - на шині 2, адреса 0x43.</p><p>Якщо модуль INA226 не живиться, то за замовчуванням ініціалізація драйвера не відбудеться. Щоб змінити це, використовуйте прапор -f. Якщо цей прапорець встановлено, то у разі невдалої ініціалізації драйвер буде повторювати спроби ініціалізації кожні 0.5 секунди. Якщо цей прапорець встановлено, ви можете підключити батарею після запуску драйвера, і він буде працювати. Якщо цей прапорець не встановлено, перед запуском драйвера необхідно підключити батарею.</p><p><a id="ina226_usage"></a></p><h3 id="використання-17" tabindex="-1">Використання <a class="header-anchor" href="#використання-17" aria-label="Permalink to &quot;Використання&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>ina226 &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="ina228" tabindex="-1">ina228 <a class="header-anchor" href="#ina228" aria-label="Permalink to &quot;ina228&quot;">​</a></h2><p>Джерело: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/power_monitor/ina228" target="_blank" rel="noreferrer">drivers/power_monitor/ina228</a></p><h3 id="опис-16" tabindex="-1">Опис <a class="header-anchor" href="#опис-16" aria-label="Permalink to &quot;Опис&quot;">​</a></h3><p>Драйвер для монітора живлення INA228.</p><p>Кілька екземплярів цього драйвера можуть працювати одночасно, якщо кожен екземпляр має окрему адресу шини АБО I2C.</p><p>Наприклад, один екземпляр може працювати на шині 2, адреса 0x41, а інший - на шині 2, адреса 0x43.</p><p>Якщо модуль INA228 не має живлення, то за замовчуванням ініціалізація драйвера не відбудеться. Щоб змінити це, використовуйте прапор -f. Якщо цей прапорець встановлено, то у разі невдалої ініціалізації драйвер буде повторювати спроби ініціалізації кожні 0.5 секунди. Якщо цей прапорець встановлено, ви можете підключити батарею після запуску драйвера, і він буде працювати. Якщо цей прапорець не встановлено, перед запуском драйвера необхідно підключити батарею.</p><p><a id="ina228_usage"></a></p><h3 id="використання-18" tabindex="-1">Використання <a class="header-anchor" href="#використання-18" aria-label="Permalink to &quot;Використання&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>ina228 &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="ina238" tabindex="-1">ina238 <a class="header-anchor" href="#ina238" aria-label="Permalink to &quot;ina238&quot;">​</a></h2><p>Джерело: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/power_monitor/ina238" target="_blank" rel="noreferrer">drivers/power_monitor/ina238</a></p><h3 id="опис-17" tabindex="-1">Опис <a class="header-anchor" href="#опис-17" aria-label="Permalink to &quot;Опис&quot;">​</a></h3><p>Драйвер для монітора потужності INA238.</p><p>Декілька екземплярів цього драйвера можуть працювати одночасно, якщо кожний екземпляр має окрему шину або адресу I2C.</p><p>Наприклад, один екземпляр може працювати на автобусі 2, адреса 0x45, а інший - на автобусі 2, адреса 0x45.</p><p>Якщо модуль INA238 не заснується, то за замовчуванням ініціалізація драйвера не вдасться. Щоб змінити це, використовуйте прапорець -f. Якщо цей прапорець встановлено, то якщо ініціалізація не вдасться, драйвер спробує ініціалізувати знову кожні 0,5 секунди. З цим прапорцем встановленим, ви можете підключити батарею після запуску драйвера, і вона буде працювати. Без цього прапорця ,батарея повинна бути вставлена до запуску драйвера.</p><p><a id="ina238_usage"></a></p><h3 id="використання-19" tabindex="-1">Використання <a class="header-anchor" href="#використання-19" aria-label="Permalink to &quot;Використання&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>ina238 &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="iridiumsbd" tabindex="-1">iridiumsbd <a class="header-anchor" href="#iridiumsbd" aria-label="Permalink to &quot;iridiumsbd&quot;">​</a></h2><p>Джерело: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/telemetry/iridiumsbd" target="_blank" rel="noreferrer">drivers/telemetry/iridiumsbd</a></p><h3 id="опис-18" tabindex="-1">Опис <a class="header-anchor" href="#опис-18" aria-label="Permalink to &quot;Опис&quot;">​</a></h3><p>Драйвер IridiumSBD.</p><p>Створює віртуальний послідовний порт, який інший модуль може використовувати для зв&#39;язку (наприклад, mavlink).</p><p><a id="iridiumsbd_usage"></a></p><h3 id="використання-20" tabindex="-1">Використання <a class="header-anchor" href="#використання-20" aria-label="Permalink to &quot;Використання&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>iridiumsbd &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="irlock" tabindex="-1">irlock <a class="header-anchor" href="#irlock" aria-label="Permalink to &quot;irlock&quot;">​</a></h2><p>Джерело: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/irlock" target="_blank" rel="noreferrer">drivers/irlock</a></p><p><a id="irlock_usage"></a></p><h3 id="використання-21" tabindex="-1">Використання <a class="header-anchor" href="#використання-21" aria-label="Permalink to &quot;Використання&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>irlock &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="linux-pwm-out" tabindex="-1">linux_pwm_out <a class="header-anchor" href="#linux-pwm-out" aria-label="Permalink to &quot;linux_pwm_out&quot;">​</a></h2><p>Джерело: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/linux_pwm_out" target="_blank" rel="noreferrer">drivers/linux_pwm_out</a></p><h3 id="опис-19" tabindex="-1">Опис <a class="header-anchor" href="#опис-19" aria-label="Permalink to &quot;Опис&quot;">​</a></h3><p>Драйвер виведення Linux PWM з реалізацією бекенду специфічного для плати.</p><p><a id="linux_pwm_out_usage"></a></p><h3 id="використання-22" tabindex="-1">Використання <a class="header-anchor" href="#використання-22" aria-label="Permalink to &quot;Використання&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>linux_pwm_out &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="lsm303agr" tabindex="-1">lsm303agr <a class="header-anchor" href="#lsm303agr" aria-label="Permalink to &quot;lsm303agr&quot;">​</a></h2><p>Джерело: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/magnetometer/lsm303agr" target="_blank" rel="noreferrer">drivers/magnetometer/lsm303agr</a></p><p><a id="lsm303agr_usage"></a></p><h3 id="використання-23" tabindex="-1">Використання <a class="header-anchor" href="#використання-23" aria-label="Permalink to &quot;Використання&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>lsm303agr &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="msp-osd" tabindex="-1">msp_osd <a class="header-anchor" href="#msp-osd" aria-label="Permalink to &quot;msp_osd&quot;">​</a></h2><p>Джерело: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/osd/msp_osd" target="_blank" rel="noreferrer">drivers/osd/msp_osd</a></p><h3 id="опис-20" tabindex="-1">Опис <a class="header-anchor" href="#опис-20" aria-label="Permalink to &quot;Опис&quot;">​</a></h3><p>Потік телеметрії MSP</p><h3 id="реалізація" tabindex="-1">Реалізація <a class="header-anchor" href="#реалізація" aria-label="Permalink to &quot;Реалізація&quot;">​</a></h3><p>Перетворює повідомлення uORB на пакети телеметрії MSP</p><h3 id="приклади-6" tabindex="-1">Приклади <a class="header-anchor" href="#приклади-6" aria-label="Permalink to &quot;Приклади&quot;">​</a></h3><p>Приклад використання CLI:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>msp_osd</span></span></code></pre></div><p><a id="msp_osd_usage"></a></p><h3 id="використання-24" tabindex="-1">Використання <a class="header-anchor" href="#використання-24" aria-label="Permalink to &quot;Використання&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>msp_osd &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="newpixel" tabindex="-1">newpixel <a class="header-anchor" href="#newpixel" aria-label="Permalink to &quot;newpixel&quot;">​</a></h2><p>Джерело: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/lights/neopixel" target="_blank" rel="noreferrer">drivers/lights/neopixel</a></p><h3 id="опис-21" tabindex="-1">Опис <a class="header-anchor" href="#опис-21" aria-label="Permalink to &quot;Опис&quot;">​</a></h3><p>Цей модуль відповідає за взаємодію з Neopixel Serial LED</p><h3 id="приклади-7" tabindex="-1">Приклади <a class="header-anchor" href="#приклади-7" aria-label="Permalink to &quot;Приклади&quot;">​</a></h3><p>Модуль зазвичай починається з:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>neopixel -n 8</span></span></code></pre></div><p>Привести всі доступні світлодіоди в дію.</p><p><a id="newpixel_usage"></a></p><h3 id="використання-25" tabindex="-1">Використання <a class="header-anchor" href="#використання-25" aria-label="Permalink to &quot;Використання&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>newpixel &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="paa3905" tabindex="-1">paa3905 <a class="header-anchor" href="#paa3905" aria-label="Permalink to &quot;paa3905&quot;">​</a></h2><p>Джерело: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/optical_flow/paa3905" target="_blank" rel="noreferrer">drivers/optical_flow/paa3905</a></p><p><a id="paa3905_usage"></a></p><h3 id="використання-26" tabindex="-1">Використання <a class="header-anchor" href="#використання-26" aria-label="Permalink to &quot;Використання&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>paa3905 &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="paw3902" tabindex="-1">paw3902 <a class="header-anchor" href="#paw3902" aria-label="Permalink to &quot;paw3902&quot;">​</a></h2><p>Джерело: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/optical_flow/paw3902" target="_blank" rel="noreferrer">drivers/optical_flow/paw3902</a></p><p><a id="paw3902_usage"></a></p><h3 id="застосування" tabindex="-1">Застосування <a class="header-anchor" href="#застосування" aria-label="Permalink to &quot;Застосування&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>paw3902 &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="pca9685-pwm-out" tabindex="-1">pca9685_pwm_out <a class="header-anchor" href="#pca9685-pwm-out" aria-label="Permalink to &quot;pca9685_pwm_out&quot;">​</a></h2><p>Джерело: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/pca9685_pwm_out" target="_blank" rel="noreferrer">drivers/pca9685_pwm_out</a></p><h3 id="опис-22" tabindex="-1">Опис <a class="header-anchor" href="#опис-22" aria-label="Permalink to &quot;Опис&quot;">​</a></h3><p>Це пристрій виводу керування PWM PCA9685.</p><p>Він працює на робочій черзі I2C, яка є асинхронною з контрольною петлею FC, витягує останній результат змішування та записує їх в PCA9685 у відповідних мітках планування.</p><p>Воно може виконувати повний вихід 12 біт у режимі циклу керування, а також може виводити цінний ширину імпульсу що може бути прийнято більшістю ESCs та серводвигунами.</p><h3 id="приклади-8" tabindex="-1">Приклади <a class="header-anchor" href="#приклади-8" aria-label="Permalink to &quot;Приклади&quot;">​</a></h3><p>Зазвичай починається з:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>pca9685_pwm_out start -a 0x40 -b 1</span></span></code></pre></div><p><a id="pca9685_pwm_out_usage"></a></p><h3 id="використання-27" tabindex="-1">Використання <a class="header-anchor" href="#використання-27" aria-label="Permalink to &quot;Використання&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>pca9685_pwm_out &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start         Start the task</span></span>
<span class="line"><span>     [-a &lt;val&gt;]  7-bits I2C address of PCA9685</span></span>
<span class="line"><span>                 values: &lt;addr&gt;, default: 0x40</span></span>
<span class="line"><span>     [-b &lt;val&gt;]  bus that pca9685 is connected to</span></span>
<span class="line"><span>                 default: 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="pm-selector-auterion" tabindex="-1">pm_selector_auterion <a class="header-anchor" href="#pm-selector-auterion" aria-label="Permalink to &quot;pm_selector_auterion&quot;">​</a></h2><p>Джерело: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/power_monitor/pm_selector_auterion" target="_blank" rel="noreferrer">drivers/power_monitor/pm_selector_auterion</a></p><h3 id="опис-23" tabindex="-1">Опис <a class="header-anchor" href="#опис-23" aria-label="Permalink to &quot;Опис&quot;">​</a></h3><p>Драйвер для запуску та автоматичного виявлення різних датчиків потужності.</p><p><a id="pm_selector_auterion_usage"></a></p><h3 id="використання-28" tabindex="-1">Використання <a class="header-anchor" href="#використання-28" aria-label="Permalink to &quot;Використання&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>pm_selector_auterion &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="pmw3901" tabindex="-1">pmw3901 <a class="header-anchor" href="#pmw3901" aria-label="Permalink to &quot;pmw3901&quot;">​</a></h2><p>Джерело: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/optical_flow/pmw3901" target="_blank" rel="noreferrer">drivers/optical_flow/pmw3901</a></p><p><a id="pmw3901_usage"></a></p><h3 id="використання-29" tabindex="-1">Використання <a class="header-anchor" href="#використання-29" aria-label="Permalink to &quot;Використання&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>pmw3901 &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="pps-capture" tabindex="-1">pps_capture <a class="header-anchor" href="#pps-capture" aria-label="Permalink to &quot;pps_capture&quot;">​</a></h2><p>Джерело: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/pps_capture" target="_blank" rel="noreferrer">drivers/pps_capture</a></p><h3 id="опис-24" tabindex="-1">Опис <a class="header-anchor" href="#опис-24" aria-label="Permalink to &quot;Опис&quot;">​</a></h3><p>Це реалізує захоплення інформації PPS з модуля GNSS та розраховує відхилення між PPS та годинником реального часу.</p><p><a id="pps_capture_usage"></a></p><h3 id="використання-30" tabindex="-1">Використання <a class="header-anchor" href="#використання-30" aria-label="Permalink to &quot;Використання&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>pps_capture &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="pwm-out" tabindex="-1">pwm_out <a class="header-anchor" href="#pwm-out" aria-label="Permalink to &quot;pwm_out&quot;">​</a></h2><p>Джерело: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/pwm_out" target="_blank" rel="noreferrer">drivers/pwm_out</a></p><h3 id="опис-25" tabindex="-1">Опис <a class="header-anchor" href="#опис-25" aria-label="Permalink to &quot;Опис&quot;">​</a></h3><p>Цей модуль відповідає за виведення пінів. Для плат без окремого IO-чіпа (наприклад, Pixracer), використовуються головні канали. На платах з IO-чіпом (наприклад, Pixhawk) використовуються AUX-канали, а для основних використовується драйвер px4io.</p><p><a id="pwm_out_usage"></a></p><h3 id="використання-31" tabindex="-1">Використання <a class="header-anchor" href="#використання-31" aria-label="Permalink to &quot;Використання&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>pwm_out &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="pwm-out-sim" tabindex="-1">pwm_out_sim <a class="header-anchor" href="#pwm-out-sim" aria-label="Permalink to &quot;pwm_out_sim&quot;">​</a></h2><p>Джерело: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/modules/simulation/pwm_out_sim" target="_blank" rel="noreferrer">modules/simulation/pwm_out_sim</a></p><h3 id="опис-26" tabindex="-1">Опис <a class="header-anchor" href="#опис-26" aria-label="Permalink to &quot;Опис&quot;">​</a></h3><p>Драйвер для імітованих вихідних сигналів ШІМ.</p><p>Його єдина функція - приймати повідомлення uORB <code>actuator_control</code>, змішувати їх з будь-яким завантаженим міксером і виводити результат на тему uORB <code>actuator_output</code>.</p><p>Воно використовується в SITL та HITL.</p><p><a id="pwm_out_sim_usage"></a></p><h3 id="використання-32" tabindex="-1">Використання <a class="header-anchor" href="#використання-32" aria-label="Permalink to &quot;Використання&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>pwm_out_sim &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start         Start the module</span></span>
<span class="line"><span>     [-m &lt;val&gt;]  Mode</span></span>
<span class="line"><span>                 values: hil|sim, default: sim</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="px4flow" tabindex="-1">px4flow <a class="header-anchor" href="#px4flow" aria-label="Permalink to &quot;px4flow&quot;">​</a></h2><p>Джерело: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/optical_flow/px4flow" target="_blank" rel="noreferrer">drivers/optical_flow/px4flow</a></p><p><a id="px4flow_usage"></a></p><h3 id="використання-33" tabindex="-1">Використання <a class="header-anchor" href="#використання-33" aria-label="Permalink to &quot;Використання&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>px4flow &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="px4io" tabindex="-1">px4io <a class="header-anchor" href="#px4io" aria-label="Permalink to &quot;px4io&quot;">​</a></h2><p>Джерело: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/px4io" target="_blank" rel="noreferrer">drivers/px4io</a></p><h3 id="опис-27" tabindex="-1">Опис <a class="header-anchor" href="#опис-27" aria-label="Permalink to &quot;Опис&quot;">​</a></h3><p>Драйвер виводу, що зв&#39;язується з вводовим ко-процесором.</p><p><a id="px4io_usage"></a></p><h3 id="використання-34" tabindex="-1">Використання <a class="header-anchor" href="#використання-34" aria-label="Permalink to &quot;Використання&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>px4io &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="rc-input" tabindex="-1">rc_input <a class="header-anchor" href="#rc-input" aria-label="Permalink to &quot;rc_input&quot;">​</a></h2><p>Джерело: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/rc_input" target="_blank" rel="noreferrer">drivers/rc_input</a></p><h3 id="опис-28" tabindex="-1">Опис <a class="header-anchor" href="#опис-28" aria-label="Permalink to &quot;Опис&quot;">​</a></h3><p>Цей модуль робить аналіз введення RC та автоматичний вибір методу. Підтримувані методи:</p><ul><li>PPM</li><li>SBUS</li><li>DSM</li><li>SUMD</li><li>ST24</li><li>TBS Crossfire (CRSF)</li></ul><p><a id="rc_input_usage"></a></p><h3 id="використання-35" tabindex="-1">Використання <a class="header-anchor" href="#використання-35" aria-label="Permalink to &quot;Використання&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>rc_input &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span>     [-d &lt;val&gt;]  RC device</span></span>
<span class="line"><span>                 values: &lt;file:dev&gt;, default: /dev/ttyS3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   bind          Send a DSM bind command (module must be running)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="rgbled" tabindex="-1">rgbled <a class="header-anchor" href="#rgbled" aria-label="Permalink to &quot;rgbled&quot;">​</a></h2><p>Джерело: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/lights/rgbled_ncp5623c" target="_blank" rel="noreferrer">drivers/lights/rgbled_ncp5623c</a></p><p><a id="rgbled_usage"></a></p><h3 id="використання-36" tabindex="-1">Використання <a class="header-anchor" href="#використання-36" aria-label="Permalink to &quot;Використання&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>rgbled &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="rgbled-is31fl3195" tabindex="-1">rgbled_is31fl3195 <a class="header-anchor" href="#rgbled-is31fl3195" aria-label="Permalink to &quot;rgbled_is31fl3195&quot;">​</a></h2><p>Джерело: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/lights/rgbled_is31fl3195" target="_blank" rel="noreferrer">drivers/lights/rgbled_is31fl3195</a></p><p><a id="rgbled_is31fl3195_usage"></a></p><h3 id="використання-37" tabindex="-1">Використання <a class="header-anchor" href="#використання-37" aria-label="Permalink to &quot;Використання&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>rgbled_is31fl3195 &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="rgbled-lp5562" tabindex="-1">rgbled_lp5562 <a class="header-anchor" href="#rgbled-lp5562" aria-label="Permalink to &quot;rgbled_lp5562&quot;">​</a></h2><p>Джерело: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/lights/rgbled_lp5562" target="_blank" rel="noreferrer">drivers/lights/rgbled_lp5562</a></p><h3 id="опис-29" tabindex="-1">Опис <a class="header-anchor" href="#опис-29" aria-label="Permalink to &quot;Опис&quot;">​</a></h3><p>Водій для <a href="https://www.ti.com/product/LP5562" target="_blank" rel="noreferrer">LP5562</a> світлодіодного драйвера, підключеного через I2C.</p><p>Це використовується в деяких модулях GPS від Holybro для <a href="./../getting_started/led_meanings.html">повідомлень про статус PX4</a></p><p>Водій включений за замовчуванням у вбудованому програмному забезпеченні (ключ KConfig DRIVERS_LIGHTS_RGBLED_LP5562) і завжди увімкнено.</p><p><a id="rgbled_lp5562_usage"></a></p><h3 id="застосування-1" tabindex="-1">Застосування <a class="header-anchor" href="#застосування-1" aria-label="Permalink to &quot;Застосування&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>rgbled_lp5562 &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="roboclaw" tabindex="-1">roboclaw <a class="header-anchor" href="#roboclaw" aria-label="Permalink to &quot;roboclaw&quot;">​</a></h2><p>Джерело: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/roboclaw" target="_blank" rel="noreferrer">drivers/roboclaw</a></p><h3 id="опис-30" tabindex="-1">Опис <a class="header-anchor" href="#опис-30" aria-label="Permalink to &quot;Опис&quot;">​</a></h3><p>Цей драйвер здійснює зв&#39;язок через UART з <a href="https://www.basicmicro.com/motor-controller" target="_blank" rel="noreferrer">драйвером двигуна Roboclaw</a>. Вона виконує дві задачі:</p><ul><li>Контролюйте двигуни на основі інтерфейсу виведення.</li><li>Прочитати датчики обертання коліс та опублікувати сирі дані в темі uORB <code>wheel_encoders</code></li></ul><p>Для використання цього драйвера Roboclaw повинен бути переведений у режим Packet Serial (див. документацію за посиланням), а UART-порт вашого контролера польоту повинен бути підключений до Roboclaw, як показано в документації. Водію потрібно увімкнути за допомогою параметра <code>RBCLW_SER_CFG</code>, швидкість передачі даних потрібно встановити правильно і адреса <code>RBCLW_ADDRESS</code> повинна відповідати конфігурації ESC.</p><p>Команда для запуску цього драйвера: <code>$ roboclaw start &lt;UART device&gt;&lt;baud rate&gt;</code></p><p><a id="roboclaw_usage"></a></p><h3 id="використання-38" tabindex="-1">Використання <a class="header-anchor" href="#використання-38" aria-label="Permalink to &quot;Використання&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>roboclaw &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="safety-button" tabindex="-1">safety_button <a class="header-anchor" href="#safety-button" aria-label="Permalink to &quot;safety_button&quot;">​</a></h2><p>Джерело: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/safety_button" target="_blank" rel="noreferrer">drivers/safety_button</a></p><h3 id="опис-31" tabindex="-1">Опис <a class="header-anchor" href="#опис-31" aria-label="Permalink to &quot;Опис&quot;">​</a></h3><p>Цей модуль відповідає за кнопку безпеки. Натискання кнопки безпеки 3 рази швидко спричинить запит на синхронізацію GCS.</p><p><a id="safety_button_usage"></a></p><h3 id="використання-39" tabindex="-1">Використання <a class="header-anchor" href="#використання-39" aria-label="Permalink to &quot;Використання&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>safety_button &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="septentrio" tabindex="-1">septentrio <a class="header-anchor" href="#septentrio" aria-label="Permalink to &quot;septentrio&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/gnss/septentrio" target="_blank" rel="noreferrer">drivers/gnss/septentrio</a></p><h3 id="опис-32" tabindex="-1">Опис <a class="header-anchor" href="#опис-32" aria-label="Permalink to &quot;Опис&quot;">​</a></h3><p>GPS driver module that handles the communication with Septentrio devices and publishes the position via uORB.</p><p>The module supports a secondary GPS device, specified via <code>-e</code> parameter. The position will be published on the second uORB topic instance. It can be used for logging and heading computation.</p><h3 id="приклади-9" tabindex="-1">Приклади <a class="header-anchor" href="#приклади-9" aria-label="Permalink to &quot;Приклади&quot;">​</a></h3><p>Starting 2 GPS devices (main one on /dev/ttyS3, secondary on /dev/ttyS4)</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>septentrio start -d /dev/ttyS3 -e /dev/ttyS4</span></span></code></pre></div><p>Initiate warm restart of GPS device</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>gps reset warm</span></span></code></pre></div><p><a id="septentrio_usage"></a></p><h3 id="використання-40" tabindex="-1">Використання <a class="header-anchor" href="#використання-40" aria-label="Permalink to &quot;Використання&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>septentrio &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span>     -d &lt;val&gt;    Primary Septentrio receiver</span></span>
<span class="line"><span>                 values: &lt;file:dev&gt;</span></span>
<span class="line"><span>     [-b &lt;val&gt;]  Primary baud rate</span></span>
<span class="line"><span>                 default: 0</span></span>
<span class="line"><span>     [-e &lt;val&gt;]  Secondary Septentrio receiver</span></span>
<span class="line"><span>                 values: &lt;file:dev&gt;</span></span>
<span class="line"><span>     [-g &lt;val&gt;]  Secondary baud rate</span></span>
<span class="line"><span>                 default: 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   reset         Reset connected receiver</span></span>
<span class="line"><span>     cold|warm|hot Specify reset type</span></span></code></pre></div><h2 id="sht3x" tabindex="-1">sht3x <a class="header-anchor" href="#sht3x" aria-label="Permalink to &quot;sht3x&quot;">​</a></h2><p>Джерело: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/hygrometer/sht3x" target="_blank" rel="noreferrer">drivers/hygrometer/sht3x</a></p><h3 id="опис-33" tabindex="-1">Опис <a class="header-anchor" href="#опис-33" aria-label="Permalink to &quot;Опис&quot;">​</a></h3><p>Драйвер датчика температури і вологості SHT3x від Senserion.</p><h3 id="приклади-10" tabindex="-1">Приклади <a class="header-anchor" href="#приклади-10" aria-label="Permalink to &quot;Приклади&quot;">​</a></h3><p>Приклад використання CLI:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>sht3x start -X</span></span></code></pre></div><p>Запустіть драйвер датчика на зовнішньому шині</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>sht3x status</span></span></code></pre></div><p>Статус драйвера друку</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>sht3x values</span></span></code></pre></div><p>Друкувати останні виміряні значення</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>sht3x reset</span></span></code></pre></div><p>Ініціалізувати датчик, скинути прапорці</p><p><a id="sht3x_usage"></a></p><h3 id="використання-41" tabindex="-1">Використання <a class="header-anchor" href="#використання-41" aria-label="Permalink to &quot;Використання&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>sht3x &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>   reset         Reinitialize sensor</span></span></code></pre></div><h2 id="tap-esc" tabindex="-1">tap_esc <a class="header-anchor" href="#tap-esc" aria-label="Permalink to &quot;tap_esc&quot;">​</a></h2><p>Джерело: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/tap_esc" target="_blank" rel="noreferrer">drivers/tap_esc</a></p><h3 id="опис-34" tabindex="-1">Опис <a class="header-anchor" href="#опис-34" aria-label="Permalink to &quot;Опис&quot;">​</a></h3><p>Цей модуль керує апаратним забезпеченням TAP_ESC через UART. Він слухає теми управління дією, робить змішування та записує вихідні ШІМ сигнали.</p><h3 id="реалізація-1" tabindex="-1">Реалізація <a class="header-anchor" href="#реалізація-1" aria-label="Permalink to &quot;Реалізація&quot;">​</a></h3><p>На даний момент модуль реалізований лише у вигляді версії з потоками, що означає, що він працює у власному потоці, а не в черзі завдань.</p><h3 id="приклади-11" tabindex="-1">Приклади <a class="header-anchor" href="#приклади-11" aria-label="Permalink to &quot;Приклади&quot;">​</a></h3><p>Модуль зазвичай починається з:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>tap_esc start -d /dev/ttyS2 -n &lt;1-8&gt;</span></span></code></pre></div><p><a id="tap_esc_usage"></a></p><h3 id="використання-42" tabindex="-1">Використання <a class="header-anchor" href="#використання-42" aria-label="Permalink to &quot;Використання&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>tap_esc &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start         Start the task</span></span>
<span class="line"><span>     [-d &lt;val&gt;]  Device used to talk to ESCs</span></span>
<span class="line"><span>                 values: &lt;device&gt;</span></span>
<span class="line"><span>     [-n &lt;val&gt;]  Number of ESCs</span></span>
<span class="line"><span>                 default: 4</span></span></code></pre></div><h2 id="tone-alarm" tabindex="-1">tone_alarm <a class="header-anchor" href="#tone-alarm" aria-label="Permalink to &quot;tone_alarm&quot;">​</a></h2><p>Джерело: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/tone_alarm" target="_blank" rel="noreferrer">drivers/tone_alarm</a></p><h3 id="опис-35" tabindex="-1">Опис <a class="header-anchor" href="#опис-35" aria-label="Permalink to &quot;Опис&quot;">​</a></h3><p>Цей модуль відповідає за сигнал тривоги.</p><p><a id="tone_alarm_usage"></a></p><h3 id="використання-43" tabindex="-1">Використання <a class="header-anchor" href="#використання-43" aria-label="Permalink to &quot;Використання&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>tone_alarm &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="uwb" tabindex="-1">uwb <a class="header-anchor" href="#uwb" aria-label="Permalink to &quot;uwb&quot;">​</a></h2><p>Джерело: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/uwb/uwb_sr150" target="_blank" rel="noreferrer">drivers/uwb/uwb_sr150</a></p><h3 id="опис-36" tabindex="-1">Опис <a class="header-anchor" href="#опис-36" aria-label="Permalink to &quot;Опис&quot;">​</a></h3><p>Драйвер для системи позиціонування NXP UWB_SR150 UWB. Цей драйвер публікує повідомлення <code>uwb_distance</code> кожного разу, коли UWB_SR150 має наявне вимірювання позиції.</p><h3 id="приклади-12" tabindex="-1">Приклади <a class="header-anchor" href="#приклади-12" aria-label="Permalink to &quot;Приклади&quot;">​</a></h3><p>Запустіть драйвер з вказаним пристроєм:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>uwb start -d /dev/ttyS2</span></span></code></pre></div><p><a id="uwb_usage"></a></p><h3 id="використання-44" tabindex="-1">Використання <a class="header-anchor" href="#використання-44" aria-label="Permalink to &quot;Використання&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>uwb &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span>     -d &lt;val&gt;    Name of device for serial communication with UWB</span></span>
<span class="line"><span>                 values: &lt;file:dev&gt;</span></span>
<span class="line"><span>     -b &lt;val&gt;    Baudrate for serial communication</span></span>
<span class="line"><span>                 values: &lt;int&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status</span></span></code></pre></div><h2 id="voxl2-io" tabindex="-1">voxl2_io <a class="header-anchor" href="#voxl2-io" aria-label="Permalink to &quot;voxl2_io&quot;">​</a></h2><p>Джерело: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/voxl2_io" target="_blank" rel="noreferrer">drivers/voxl2_io</a></p><h3 id="опис-37" tabindex="-1">Опис <a class="header-anchor" href="#опис-37" aria-label="Permalink to &quot;Опис&quot;">​</a></h3><p>Цей модуль відповідає за виведення вихідних контактів. Для плат без окремого IO-чіпа (наприклад, Pixracer), використовуються головні канали. На платах з IO-чіпом (наприклад, Pixhawk) використовуються AUX-канали, а для основних використовується драйвер px4io.</p><p><a id="voxl2_io_usage"></a></p><h3 id="використання-45" tabindex="-1">Використання <a class="header-anchor" href="#використання-45" aria-label="Permalink to &quot;Використання&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>voxl2_io &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="voxl-esc" tabindex="-1">voxl_esc <a class="header-anchor" href="#voxl-esc" aria-label="Permalink to &quot;voxl_esc&quot;">​</a></h2><p>Джерело: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/actuators/voxl_esc" target="_blank" rel="noreferrer">drivers/actuators/voxl_esc</a></p><h3 id="опис-38" tabindex="-1">Опис <a class="header-anchor" href="#опис-38" aria-label="Permalink to &quot;Опис&quot;">​</a></h3><p>Цей модуль відповідає за кнопку безпеки...</p><h3 id="реалізація-2" tabindex="-1">Реалізація <a class="header-anchor" href="#реалізація-2" aria-label="Permalink to &quot;Реалізація&quot;">​</a></h3><p>За замовчуванням модуль працює в черзі роботи з зворотнім викликом за темою управління актуаторами uORB.</p><h3 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h3><p>Зазвичай починається з:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>todo</span></span></code></pre></div><p><a id="voxl_esc_usage"></a></p><h3 id="використання-46" tabindex="-1">Використання <a class="header-anchor" href="#використання-46" aria-label="Permalink to &quot;Використання&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>voxl_esc &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="voxlpm" tabindex="-1">voxlpm <a class="header-anchor" href="#voxlpm" aria-label="Permalink to &quot;voxlpm&quot;">​</a></h2><p>Джерело: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/drivers/power_monitor/voxlpm" target="_blank" rel="noreferrer">drivers/power_monitor/voxlpm</a></p><p><a id="voxlpm_usage"></a></p><h3 id="використання-47" tabindex="-1">Використання <a class="header-anchor" href="#використання-47" aria-label="Permalink to &quot;Використання&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>voxlpm [arguments...]</span></span>
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
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="zenoh" tabindex="-1">zenoh <a class="header-anchor" href="#zenoh" aria-label="Permalink to &quot;zenoh&quot;">​</a></h2><p>Джерело: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/modules/zenoh" target="_blank" rel="noreferrer">modules/zenoh</a></p><h3 id="description" tabindex="-1">Description <a class="header-anchor" href="#description" aria-label="Permalink to &quot;Description&quot;">​</a></h3><p>Zenoh demo bridge</p><p><a id="zenoh_usage"></a></p><h3 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>zenoh &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   config</span></span></code></pre></div>`,433),t=[l];function i(r,o,c,d,h,u){return n(),s("div",null,t)}const g=a(p,[["render",i]]);export{m as __pageData,g as default};
