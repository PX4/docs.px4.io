import{_ as s,c as n,a8 as e,o as p}from"./chunks/framework.BDnHobkS.js";const u=JSON.parse('{"title":"模块参考：命令（Command）","description":"","frontmatter":{},"headers":[],"relativePath":"zh/modules/modules_command.md","filePath":"zh/modules/modules_command.md"}'),t={name:"zh/modules/modules_command.md"};function l(i,a,r,o,c,d){return p(),n("div",null,a[0]||(a[0]=[e(`<h1 id="模块参考-命令-command" tabindex="-1">模块参考：命令（Command） <a class="header-anchor" href="#模块参考-命令-command" aria-label="Permalink to &quot;模块参考：命令（Command）&quot;">​</a></h1><h2 id="actuator-test" tabindex="-1">actuator_test <a class="header-anchor" href="#actuator-test" aria-label="Permalink to &quot;actuator_test&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/systemcmds/actuator_test" target="_blank" rel="noreferrer">systemcmds/actuator_test</a></p><p>用于测试执行器的实用程序</p><p>警告：在使用此命令之前移除所有螺旋桨。</p><p><a id="actuator_test_usage"></a></p><h3 id="用法" tabindex="-1">用法 <a class="header-anchor" href="#用法" aria-label="Permalink to &quot;用法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>actuator_test &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   set           Set an actuator to a specific output value</span></span>
<span class="line"><span></span></span>
<span class="line"><span> The actuator can be specified by motor, servo or function directly:</span></span>
<span class="line"><span>     [-m &lt;val&gt;]  Motor to test (1...8)</span></span>
<span class="line"><span>     [-s &lt;val&gt;]  Servo to test (1...8)</span></span>
<span class="line"><span>     [-f &lt;val&gt;]  Specify function directly</span></span>
<span class="line"><span>     -v &lt;val&gt;    value (-1...1)</span></span>
<span class="line"><span>     [-t &lt;val&gt;]  Timeout in seconds (run interactive if not set)</span></span>
<span class="line"><span>                 default: 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   iterate-motors Iterate all motors starting and stopping one after the other</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   iterate-servos Iterate all servos deflecting one after the other</span></span></code></pre></div><h2 id="bl-update" tabindex="-1">bl_update <a class="header-anchor" href="#bl-update" aria-label="Permalink to &quot;bl_update&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/systemcmds/bl_update" target="_blank" rel="noreferrer">systemcmds/bl_update</a></p><p>Utility to flash the bootloader from a file <a id="bl_update_usage"></a></p><h3 id="用法-1" tabindex="-1">用法 <a class="header-anchor" href="#用法-1" aria-label="Permalink to &quot;用法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>bl_update [arguments...]</span></span>
<span class="line"><span>   setopt        Set option bits to unlock the FLASH (only needed if in locked</span></span>
<span class="line"><span>                 state)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   &lt;file&gt;        Bootloader bin file</span></span></code></pre></div><h2 id="bsondump" tabindex="-1">bsondump <a class="header-anchor" href="#bsondump" aria-label="Permalink to &quot;bsondump&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/systemcmds/bsondump" target="_blank" rel="noreferrer">systemcmds/bsondump</a></p><p>Utility to read BSON from a file and print or output document size. <a id="bsondump_usage"></a></p><h3 id="用法-2" tabindex="-1">用法 <a class="header-anchor" href="#用法-2" aria-label="Permalink to &quot;用法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>bsondump [arguments...]</span></span>
<span class="line"><span>     &lt;file&gt;      The BSON file to decode and print.</span></span></code></pre></div><h2 id="dumpfile" tabindex="-1">dumpfile <a class="header-anchor" href="#dumpfile" aria-label="Permalink to &quot;dumpfile&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/systemcmds/dumpfile" target="_blank" rel="noreferrer">systemcmds/dumpfile</a></p><p>转储文件实用程序。 以二进制模式（不要用 CR LF 替换 LF）将文件大小和内容打印到标准输出。 <a id="dumpfile_usage"></a></p><h3 id="用法-3" tabindex="-1">用法 <a class="header-anchor" href="#用法-3" aria-label="Permalink to &quot;用法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>dumpfile [arguments...]</span></span>
<span class="line"><span>     &lt;file&gt;      File to dump</span></span></code></pre></div><h2 id="dyn" tabindex="-1">dyn <a class="header-anchor" href="#dyn" aria-label="Permalink to &quot;dyn&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/systemcmds/dyn" target="_blank" rel="noreferrer">systemcmds/dyn</a></p><h3 id="描述" tabindex="-1">描述 <a class="header-anchor" href="#描述" aria-label="Permalink to &quot;描述&quot;">​</a></h3><p>加载并运行一个没有被编译进 PX4 的二进制文件的动态 PX4 模块</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>dyn ./hello.px4mod start</span></span></code></pre></div><p><a id="dyn_usage"></a></p><h3 id="用法-4" tabindex="-1">用法 <a class="header-anchor" href="#用法-4" aria-label="Permalink to &quot;用法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>dyn [arguments...]</span></span>
<span class="line"><span>     &lt;file&gt;      File containing the module</span></span>
<span class="line"><span>     [arguments...] Arguments to the module</span></span></code></pre></div><h2 id="failure" tabindex="-1">failure <a class="header-anchor" href="#failure" aria-label="Permalink to &quot;failure&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/systemcmds/failure" target="_blank" rel="noreferrer">systemcmds/failure</a></p><h3 id="描述-1" tabindex="-1">描述 <a class="header-anchor" href="#描述-1" aria-label="Permalink to &quot;描述&quot;">​</a></h3><p>向系统中注入故障。</p><h3 id="实现" tabindex="-1">实现 <a class="header-anchor" href="#实现" aria-label="Permalink to &quot;实现&quot;">​</a></h3><p>此系统命令通过 uORB 发送一个机体命令来出发故障。</p><h3 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h3><p>通过停止GPS来测试GPS故障保护:</p><p>failure gps off</p><p><a id="failure_usage"></a></p><h3 id="用法-5" tabindex="-1">用法 <a class="header-anchor" href="#用法-5" aria-label="Permalink to &quot;用法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>failure [arguments...]</span></span>
<span class="line"><span>   help          Show this help text</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   gps|...       Specify component</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   ok|off|...    Specify failure type</span></span>
<span class="line"><span>     [-i &lt;val&gt;]  sensor instance (0=all)</span></span>
<span class="line"><span>                 default: 0</span></span></code></pre></div><h2 id="gpio" tabindex="-1">gpio <a class="header-anchor" href="#gpio" aria-label="Permalink to &quot;gpio&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/systemcmds/gpio" target="_blank" rel="noreferrer">systemcmds/gpio</a></p><h3 id="描述-2" tabindex="-1">描述 <a class="header-anchor" href="#描述-2" aria-label="Permalink to &quot;描述&quot;">​</a></h3><p>此命令用于读写GPIO</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>gpio read &lt;PORT&gt;&lt;PIN&gt;/&lt;DEVICE&gt; [PULLDOWN|PULLUP] [--force]</span></span>
<span class="line"><span>gpio write &lt;PORT&gt;&lt;PIN&gt;/&lt;DEVICE&gt; &lt;VALUE&gt; [PUSHPULL|OPENDRAIN] [--force]</span></span></code></pre></div><h3 id="示例-1" tabindex="-1">示例 <a class="header-anchor" href="#示例-1" aria-label="Permalink to &quot;示例&quot;">​</a></h3><p>读取配置为上拉的 PH4 引脚，它的值为高</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>gpio read H4 PULLUP</span></span></code></pre></div><p>1 OK</p><p>设置 PE7 的输出值为高</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>gpio write E7 1 --force</span></span></code></pre></div><p>Set the output value on device /dev/gpio1 to high</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>gpio write /dev/gpio1 1</span></span></code></pre></div><p><a id="gpio_usage"></a></p><h3 id="用法-6" tabindex="-1">用法 <a class="header-anchor" href="#用法-6" aria-label="Permalink to &quot;用法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>gpio [arguments...]</span></span>
<span class="line"><span>   read</span></span>
<span class="line"><span>     &lt;PORT&gt;&lt;PIN&gt;/&lt;DEVICE&gt; GPIO port and pin or device</span></span>
<span class="line"><span>     [PULLDOWN|PULLUP] Pulldown/Pullup</span></span>
<span class="line"><span>     [--force]   Force (ignore board gpio list)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   write</span></span>
<span class="line"><span>     &lt;PORT&gt; &lt;PIN&gt; GPIO port and pin</span></span>
<span class="line"><span>     &lt;VALUE&gt;     Value to write</span></span>
<span class="line"><span>     [PUSHPULL|OPENDRAIN] Pushpull/Opendrain</span></span>
<span class="line"><span>     [--force]   Force (ignore board gpio list)</span></span></code></pre></div><h2 id="hardfault-log" tabindex="-1">hardfault_log <a class="header-anchor" href="#hardfault-log" aria-label="Permalink to &quot;hardfault_log&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/systemcmds/hardfault_log" target="_blank" rel="noreferrer">systemcmds/hardfault_log</a></p><p>Hardfault 实用程序</p><p>在启动脚本中用于处理 hardfaults。</p><p><a id="hardfault_log_usage"></a></p><h3 id="用法-7" tabindex="-1">用法 <a class="header-anchor" href="#用法-7" aria-label="Permalink to &quot;用法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>hardfault_log &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   check         Check if there&#39;s an uncommitted hardfault</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   rearm         Drop an uncommitted hardfault</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   fault         Generate a hardfault (this command crashes the system :)</span></span>
<span class="line"><span>     [0|1|2|3]   Hardfault type: 0=divide by 0, 1=Assertion, 2=jump to 0x0,</span></span>
<span class="line"><span>                 3=write to 0x0 (default=0)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   commit        Write uncommitted hardfault to /fs/microsd/fault_%i.txt (and</span></span>
<span class="line"><span>                 rearm, but don&#39;t reset)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   count         Read the reboot counter, counts the number of reboots of an</span></span>
<span class="line"><span>                 uncommitted hardfault (returned as the exit code of the</span></span>
<span class="line"><span>                 program)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   reset         Reset the reboot counter</span></span></code></pre></div><h2 id="hist" tabindex="-1">hist <a class="header-anchor" href="#hist" aria-label="Permalink to &quot;hist&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/systemcmds/hist" target="_blank" rel="noreferrer">systemcmds/hist</a></p><p>Command-line tool to show the px4 message history. There are no arguments. <a id="hist_usage"></a></p><h3 id="用法-8" tabindex="-1">用法 <a class="header-anchor" href="#用法-8" aria-label="Permalink to &quot;用法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>hist [arguments...]</span></span></code></pre></div><h2 id="i2cdetect" tabindex="-1">i2cdetect <a class="header-anchor" href="#i2cdetect" aria-label="Permalink to &quot;i2cdetect&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/systemcmds/i2cdetect" target="_blank" rel="noreferrer">systemcmds/i2cdetect</a></p><p>Utility to scan for I2C devices on a particular bus. <a id="i2cdetect_usage"></a></p><h3 id="用法-9" tabindex="-1">用法 <a class="header-anchor" href="#用法-9" aria-label="Permalink to &quot;用法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>i2cdetect [arguments...]</span></span>
<span class="line"><span>     [-b &lt;val&gt;]  I2C bus</span></span>
<span class="line"><span>                 default: 1</span></span></code></pre></div><h2 id="led-control" tabindex="-1">led_control <a class="header-anchor" href="#led-control" aria-label="Permalink to &quot;led_control&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/systemcmds/led_control" target="_blank" rel="noreferrer">systemcmds/led_control</a></p><h3 id="描述-3" tabindex="-1">描述 <a class="header-anchor" href="#描述-3" aria-label="Permalink to &quot;描述&quot;">​</a></h3><p>Command-line tool to control &amp; test the (external) LED&#39;s.</p><p>要使用它，请确保有一个处理 led_control 的 uorb 主题的设备正在运行。</p><p>有不同的优先级，例如一个模块可以设置低优先级的颜色，另一个模块可以高优先级闪烁 N 次，闪烁后 LED 自动返回低优先级状态。 The <code>reset</code> command can also be used to return to a lower priority.</p><h3 id="示例-2" tabindex="-1">示例 <a class="header-anchor" href="#示例-2" aria-label="Permalink to &quot;示例&quot;">​</a></h3><p>第一个 LED 闪烁蓝光 5 次：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>led_control blink -c blue -l 0 -n 5</span></span></code></pre></div><p><a id="led_control_usage"></a></p><h3 id="用法-10" tabindex="-1">用法 <a class="header-anchor" href="#用法-10" aria-label="Permalink to &quot;用法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>led_control &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   test          Run a test pattern</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   on            Turn LED on</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   off           Turn LED off</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   reset         Reset LED priority</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   blink         Blink LED N times</span></span>
<span class="line"><span>     [-n &lt;val&gt;]  Number of blinks</span></span>
<span class="line"><span>                 default: 3</span></span>
<span class="line"><span>     [-s &lt;val&gt;]  Set blinking speed</span></span>
<span class="line"><span>                 values: fast|normal|slow, default: normal</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   breathe       Continuously fade LED in &amp; out</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   flash         Two fast blinks and then off with frequency of 1Hz</span></span>
<span class="line"><span></span></span>
<span class="line"><span> The following arguments apply to all of the above commands except for &#39;test&#39;:</span></span>
<span class="line"><span>     [-c &lt;val&gt;]  color</span></span>
<span class="line"><span>                 values: red|blue|green|yellow|purple|amber|cyan|white, default:</span></span>
<span class="line"><span>                 white</span></span>
<span class="line"><span>     [-l &lt;val&gt;]  Which LED to control: 0, 1, 2, ... (default=all)</span></span>
<span class="line"><span>     [-p &lt;val&gt;]  Priority</span></span>
<span class="line"><span>                 default: 2</span></span></code></pre></div><h2 id="listener" tabindex="-1">listener <a class="header-anchor" href="#listener" aria-label="Permalink to &quot;listener&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/systemcmds/topic_listener" target="_blank" rel="noreferrer">systemcmds/topic_listener</a></p><p>监听 uORB 主题并将数据打印到控制台的实用程序。</p><p>可以通过按 Ctrl+C、Esc 或 Q 随时退出侦听器。</p><p><a id="listener_usage"></a></p><h3 id="用法-11" tabindex="-1">用法 <a class="header-anchor" href="#用法-11" aria-label="Permalink to &quot;用法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>listener &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>     &lt;topic_name&gt; uORB topic name</span></span>
<span class="line"><span>     [-i &lt;val&gt;]  Topic instance</span></span>
<span class="line"><span>                 default: 0</span></span>
<span class="line"><span>     [-n &lt;val&gt;]  Number of messages</span></span>
<span class="line"><span>                 default: 1</span></span>
<span class="line"><span>     [-r &lt;val&gt;]  Subscription rate (unlimited if 0)</span></span>
<span class="line"><span>                 default: 0</span></span></code></pre></div><h2 id="mfd" tabindex="-1">mfd <a class="header-anchor" href="#mfd" aria-label="Permalink to &quot;mfd&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/systemcmds/mft" target="_blank" rel="noreferrer">systemcmds/mft</a></p><p>Utility interact with the manifest <a id="mfd_usage"></a></p><h3 id="用法-12" tabindex="-1">用法 <a class="header-anchor" href="#用法-12" aria-label="Permalink to &quot;用法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mfd &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   query         Returns true if not existed</span></span></code></pre></div><h2 id="mtd" tabindex="-1">mtd <a class="header-anchor" href="#mtd" aria-label="Permalink to &quot;mtd&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/systemcmds/mtd" target="_blank" rel="noreferrer">systemcmds/mtd</a></p><p>Utility to mount and test partitions (based on FRAM/EEPROM storage as defined by the board) <a id="mtd_usage"></a></p><h3 id="用法-13" tabindex="-1">用法 <a class="header-anchor" href="#用法-13" aria-label="Permalink to &quot;用法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mtd &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   status        Print status information</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   readtest      Perform read test</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   rwtest        Perform read-write test</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   erase         Erase partition(s)</span></span>
<span class="line"><span></span></span>
<span class="line"><span> The commands &#39;readtest&#39; and &#39;rwtest&#39; have an optional instance index:</span></span>
<span class="line"><span>     [-i &lt;val&gt;]  storage index (if the board has multiple storages)</span></span>
<span class="line"><span>                 default: 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span> The commands &#39;readtest&#39;, &#39;rwtest&#39; and &#39;erase&#39; have an optional parameter:</span></span>
<span class="line"><span>     [&lt;partition_name1&gt; [&lt;partition_name2&gt; ...]] Partition names (eg.</span></span>
<span class="line"><span>                 /fs/mtd_params), use system default if not provided</span></span></code></pre></div><h2 id="nshterm" tabindex="-1">nshterm <a class="header-anchor" href="#nshterm" aria-label="Permalink to &quot;nshterm&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/systemcmds/nshterm" target="_blank" rel="noreferrer">systemcmds/nshterm</a></p><p>在指定端口启动一个 NSH shell。</p><p>该命令此前被用于在 USB 串口端口开启一个 shell。 现在运行mavlink，并且可以在mavlink 上使用shell。</p><p><a id="nshterm_usage"></a></p><h3 id="用法-14" tabindex="-1">用法 <a class="header-anchor" href="#用法-14" aria-label="Permalink to &quot;用法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>nshterm [arguments...]</span></span>
<span class="line"><span>     &lt;file:dev&gt;  Device on which to start the shell (eg. /dev/ttyACM0)</span></span></code></pre></div><h2 id="param" tabindex="-1">param <a class="header-anchor" href="#param" aria-label="Permalink to &quot;param&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/systemcmds/param" target="_blank" rel="noreferrer">systemcmds/param</a></p><h3 id="描述-4" tabindex="-1">描述 <a class="header-anchor" href="#描述-4" aria-label="Permalink to &quot;描述&quot;">​</a></h3><p>通过 shell 或脚本访问和操作参数的命令。</p><p>例如，这在启动脚本中用于设置特定于机身的参数。</p><p>Parameters are automatically saved when changed, eg. with <code>param set</code>. 它们通常存储在 FRAM 或 SD 卡中。 <code>param select</code> can be used to change the storage location for subsequent saves (this will need to be (re-)configured on every boot).</p><p>If the FLASH-based backend is enabled (which is done at compile time, e.g. for the Intel Aero or Omnibus), <code>param select</code> has no effect and the default is always the FLASH backend. However <code>param save/load &lt;file&gt;</code> can still be used to write to/read from files.</p><p>每个参数有一个“已使用”的标志，此标志在启动过程参数被读取后被置位。 它只是用于向地面控制站显示相关参数。</p><h3 id="示例-3" tabindex="-1">示例 <a class="header-anchor" href="#示例-3" aria-label="Permalink to &quot;示例&quot;">​</a></h3><p>更改机身并确保已加载机身的默认参数：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>param set SYS_AUTOSTART 4001</span></span>
<span class="line"><span>param set SYS_AUTOCONFIG 1</span></span>
<span class="line"><span>reboot</span></span></code></pre></div><p><a id="param_usage"></a></p><h3 id="用法-15" tabindex="-1">用法 <a class="header-anchor" href="#用法-15" aria-label="Permalink to &quot;用法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>param &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   load          Load params from a file (overwrite all)</span></span>
<span class="line"><span>     [&lt;file&gt;]    File name (use default if not given)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   import        Import params from a file</span></span>
<span class="line"><span>     [&lt;file&gt;]    File name (use default if not given)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   save          Save params to a file</span></span>
<span class="line"><span>     [&lt;file&gt;]    File name (use default if not given)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   select        Select default file</span></span>
<span class="line"><span>     [&lt;file&gt;]    File name</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   select-backup Select default file</span></span>
<span class="line"><span>     [&lt;file&gt;]    File name</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   show          Show parameter values</span></span>
<span class="line"><span>     [-a]        Show all parameters (not just used)</span></span>
<span class="line"><span>     [-c]        Show only changed params (unused too)</span></span>
<span class="line"><span>     [-q]        quiet mode, print only param value (name needs to be exact)</span></span>
<span class="line"><span>     [&lt;filter&gt;]  Filter by param name (wildcard at end allowed, eg. sys_*)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   show-for-airframe Show changed params for airframe config</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        Print status of parameter system</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   set           Set parameter to a value</span></span>
<span class="line"><span>     &lt;param_name&gt; &lt;value&gt; Parameter name and value to set</span></span>
<span class="line"><span>     [fail]      If provided, let the command fail if param is not found</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   set-default   Set parameter default to a value</span></span>
<span class="line"><span>     [-s]        If provided, silent errors if parameter doesn&#39;t exists</span></span>
<span class="line"><span>     &lt;param_name&gt; &lt;value&gt; Parameter name and value to set</span></span>
<span class="line"><span>     [fail]      If provided, let the command fail if param is not found</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   compare       Compare a param with a value. Command will succeed if equal</span></span>
<span class="line"><span>     [-s]        If provided, silent errors if parameter doesn&#39;t exists</span></span>
<span class="line"><span>     &lt;param_name&gt; &lt;value&gt; Parameter name and value to compare</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   greater       Compare a param with a value. Command will succeed if param is</span></span>
<span class="line"><span>                 greater than the value</span></span>
<span class="line"><span>     [-s]        If provided, silent errors if parameter doesn&#39;t exists</span></span>
<span class="line"><span>     &lt;param_name&gt; &lt;value&gt; Parameter name and value to compare</span></span>
<span class="line"><span>     &lt;param_name&gt; &lt;value&gt; Parameter name and value to compare</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   touch         Mark a parameter as used</span></span>
<span class="line"><span>     [&lt;param_name1&gt; [&lt;param_name2&gt;]] Parameter name (one or more)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   reset         Reset only specified params to default</span></span>
<span class="line"><span>     [&lt;param1&gt; [&lt;param2&gt;]] Parameter names to reset (wildcard at end allowed)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   reset_all     Reset all params to default</span></span>
<span class="line"><span>     [&lt;exclude1&gt; [&lt;exclude2&gt;]] Do not reset matching params (wildcard at end</span></span>
<span class="line"><span>                 allowed)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   index         Show param for a given index</span></span>
<span class="line"><span>     &lt;index&gt;     Index: an integer &gt;= 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   index_used    Show used param for a given index</span></span>
<span class="line"><span>     &lt;index&gt;     Index: an integer &gt;= 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   find          Show index of a param</span></span>
<span class="line"><span>     &lt;param&gt;     param name</span></span></code></pre></div><h2 id="payload-deliverer" tabindex="-1">payload_deliverer <a class="header-anchor" href="#payload-deliverer" aria-label="Permalink to &quot;payload_deliverer&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/modules/payload_deliverer" target="_blank" rel="noreferrer">modules/payload_deliverer</a></p><h3 id="描述-5" tabindex="-1">描述 <a class="header-anchor" href="#描述-5" aria-label="Permalink to &quot;描述&quot;">​</a></h3><p>Handles payload delivery with either Gripper or a Winch with an appropriate timeout / feedback sensor setting, and communicates back the delivery result as an acknowledgement internally</p><p><a id="payload_deliverer_usage"></a></p><h3 id="用法-16" tabindex="-1">用法 <a class="header-anchor" href="#用法-16" aria-label="Permalink to &quot;用法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>payload_deliverer &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   start</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   gripper_test  Tests the Gripper&#39;s release &amp; grabbing sequence</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   gripper_open  Opens the gripper</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   gripper_close Closes the gripper</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="perf" tabindex="-1">perf <a class="header-anchor" href="#perf" aria-label="Permalink to &quot;perf&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/systemcmds/perf" target="_blank" rel="noreferrer">systemcmds/perf</a></p><p>Tool to print performance counters <a id="perf_usage"></a></p><h3 id="用法-17" tabindex="-1">用法 <a class="header-anchor" href="#用法-17" aria-label="Permalink to &quot;用法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>perf [arguments...]</span></span>
<span class="line"><span>   reset         Reset all counters</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   latency       Print HRT timer latency histogram</span></span>
<span class="line"><span></span></span>
<span class="line"><span> Prints all performance counters if no arguments given</span></span></code></pre></div><h2 id="reboot" tabindex="-1">reboot <a class="header-anchor" href="#reboot" aria-label="Permalink to &quot;reboot&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/systemcmds/reboot" target="_blank" rel="noreferrer">systemcmds/reboot</a></p><p>Reboot the system <a id="reboot_usage"></a></p><h3 id="用法-18" tabindex="-1">用法 <a class="header-anchor" href="#用法-18" aria-label="Permalink to &quot;用法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>reboot [arguments...]</span></span>
<span class="line"><span>     [-b]        Reboot into bootloader</span></span>
<span class="line"><span>     [-i]        Reboot into ISP (1st stage bootloader)</span></span>
<span class="line"><span>     [lock|unlock] Take/release the shutdown lock (for testing)</span></span></code></pre></div><h2 id="sd-bench" tabindex="-1">sd_bench <a class="header-anchor" href="#sd-bench" aria-label="Permalink to &quot;sd_bench&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/systemcmds/sd_bench" target="_blank" rel="noreferrer">systemcmds/sd_bench</a></p><p>Test the speed of an SD Card <a id="sd_bench_usage"></a></p><h3 id="用法-19" tabindex="-1">用法 <a class="header-anchor" href="#用法-19" aria-label="Permalink to &quot;用法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sd_bench [arguments...]</span></span>
<span class="line"><span>     [-b &lt;val&gt;]  Block size for each read/write</span></span>
<span class="line"><span>                 default: 4096</span></span>
<span class="line"><span>     [-r &lt;val&gt;]  Number of runs</span></span>
<span class="line"><span>                 default: 5</span></span>
<span class="line"><span>     [-d &lt;val&gt;]  Duration of a run in ms</span></span>
<span class="line"><span>                 default: 2000</span></span>
<span class="line"><span>     [-k]        Keep the test file</span></span>
<span class="line"><span>     [-s]        Call fsync after each block (default=at end of each run)</span></span>
<span class="line"><span>     [-u]        Test performance with unaligned data</span></span>
<span class="line"><span>     [-U]        Test performance with forced byte unaligned data</span></span>
<span class="line"><span>     [-v]        Verify data and block number</span></span></code></pre></div><h2 id="sd-stress" tabindex="-1">sd_stress <a class="header-anchor" href="#sd-stress" aria-label="Permalink to &quot;sd_stress&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/systemcmds/sd_stress" target="_blank" rel="noreferrer">systemcmds/sd_stress</a></p><p>Test operations on an SD Card <a id="sd_stress_usage"></a></p><h3 id="用法-20" tabindex="-1">用法 <a class="header-anchor" href="#用法-20" aria-label="Permalink to &quot;用法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sd_stress [arguments...]</span></span>
<span class="line"><span>     [-r &lt;val&gt;]  Number of runs</span></span>
<span class="line"><span>                 default: 5</span></span>
<span class="line"><span>     [-b &lt;val&gt;]  Number of bytes</span></span>
<span class="line"><span>                 default: 100</span></span></code></pre></div><h2 id="serial-passthru" tabindex="-1">serial_passthru <a class="header-anchor" href="#serial-passthru" aria-label="Permalink to &quot;serial_passthru&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/systemcmds/serial_passthru" target="_blank" rel="noreferrer">systemcmds/serial_passthru</a></p><p>把数据从一个设备传输到另一个设备。</p><p>This can be used to use u-center connected to USB with a GPS on a serial port.</p><p><a id="serial_passthru_usage"></a></p><h3 id="用法-21" tabindex="-1">用法 <a class="header-anchor" href="#用法-21" aria-label="Permalink to &quot;用法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>serial_passthru [arguments...]</span></span>
<span class="line"><span>     -e &lt;val&gt;    External device path</span></span>
<span class="line"><span>                 values: &lt;file:dev&gt;</span></span>
<span class="line"><span>     -d &lt;val&gt;    Internal device path</span></span>
<span class="line"><span>                 values: &lt;file:dev&gt;</span></span>
<span class="line"><span>     [-b &lt;val&gt;]  Baudrate</span></span>
<span class="line"><span>                 default: 115200</span></span>
<span class="line"><span>     [-t]        Track the External devices baudrate on internal device</span></span></code></pre></div><h2 id="系统时间" tabindex="-1">系统时间 <a class="header-anchor" href="#系统时间" aria-label="Permalink to &quot;系统时间&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/systemcmds/system_time" target="_blank" rel="noreferrer">systemcmds/system_time</a></p><h3 id="描述-6" tabindex="-1">描述 <a class="header-anchor" href="#描述-6" aria-label="Permalink to &quot;描述&quot;">​</a></h3><p>Command-line tool to set and get system time.</p><h3 id="示例-4" tabindex="-1">示例 <a class="header-anchor" href="#示例-4" aria-label="Permalink to &quot;示例&quot;">​</a></h3><p>Set the system time and read it back</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>system_time set 1600775044</span></span>
<span class="line"><span>system_time get</span></span></code></pre></div><p><a id="system_time_usage"></a></p><h3 id="用法-22" tabindex="-1">用法 <a class="header-anchor" href="#用法-22" aria-label="Permalink to &quot;用法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>system_time &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   set           Set the system time, provide time in unix epoch time format</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   get           Get the system time</span></span></code></pre></div><h2 id="top" tabindex="-1">top <a class="header-anchor" href="#top" aria-label="Permalink to &quot;top&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/systemcmds/top" target="_blank" rel="noreferrer">systemcmds/top</a></p><p>Monitor running processes and their CPU, stack usage, priority and state <a id="top_usage"></a></p><h3 id="用法-23" tabindex="-1">用法 <a class="header-anchor" href="#用法-23" aria-label="Permalink to &quot;用法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>top [arguments...]</span></span>
<span class="line"><span>   once          print load only once</span></span></code></pre></div><h2 id="usb-connected" tabindex="-1">usb_connected <a class="header-anchor" href="#usb-connected" aria-label="Permalink to &quot;usb_connected&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/systemcmds/usb_connected" target="_blank" rel="noreferrer">systemcmds/usb_connected</a></p><p>Utility to check if USB is connected. Was previously used in startup scripts. A return value of 0 means USB is connected, 1 otherwise. <a id="usb_connected_usage"></a></p><h3 id="用法-24" tabindex="-1">用法 <a class="header-anchor" href="#用法-24" aria-label="Permalink to &quot;用法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>usb_connected [arguments...]</span></span></code></pre></div><h2 id="ver" tabindex="-1">ver <a class="header-anchor" href="#ver" aria-label="Permalink to &quot;ver&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/main/src/systemcmds/ver" target="_blank" rel="noreferrer">systemcmds/ver</a></p><p>Tool to print various version information <a id="ver_usage"></a></p><h3 id="用法-25" tabindex="-1">用法 <a class="header-anchor" href="#用法-25" aria-label="Permalink to &quot;用法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ver &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   hw            Hardware architecture</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   mcu           MCU info</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   git           git version information</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   bdate         Build date and time</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   gcc           Compiler info</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   bdate         Build date and time</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   px4guid       PX4 GUID</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   uri           Build URI</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   all           Print all versions</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   hwcmp         Compare hardware version (returns 0 on match)</span></span>
<span class="line"><span>     &lt;hw&gt; [&lt;hw2&gt;] Hardware to compare against (eg. PX4_FMU_V4). An OR comparison</span></span>
<span class="line"><span>                 is used if multiple are specified</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   hwtypecmp     Compare hardware type (returns 0 on match)</span></span>
<span class="line"><span>     &lt;hwtype&gt; [&lt;hwtype2&gt;] Hardware type to compare against (eg. V2). An OR</span></span>
<span class="line"><span>                 comparison is used if multiple are specified</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   hwbasecmp     Compare hardware base (returns 0 on match)</span></span>
<span class="line"><span>     &lt;hwbase&gt; [&lt;hwbase2&gt;] Hardware type to compare against (eg. V2). An OR</span></span>
<span class="line"><span>                 comparison is used if multiple are specified</span></span></code></pre></div>`,186)]))}const m=s(t,[["render",l]]);export{u as __pageData,m as default};
