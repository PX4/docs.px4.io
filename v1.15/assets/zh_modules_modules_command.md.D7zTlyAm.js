import{_ as a,c as s,o as n,ab as e}from"./chunks/framework.CUflZczI.js";const g=JSON.parse('{"title":"模块参考：命令（Command）","description":"","frontmatter":{},"headers":[],"relativePath":"zh/modules/modules_command.md","filePath":"zh/modules/modules_command.md"}'),p={name:"zh/modules/modules_command.md"},t=e(`<h1 id="模块参考-命令-command" tabindex="-1">模块参考：命令（Command） <a class="header-anchor" href="#模块参考-命令-command" aria-label="Permalink to &quot;模块参考：命令（Command）&quot;">​</a></h1><h2 id="actuator-test" tabindex="-1">actuator_test <a class="header-anchor" href="#actuator-test" aria-label="Permalink to &quot;actuator_test&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/systemcmds/actuator_test" target="_blank" rel="noreferrer">systemcmds/actuator_test</a></p><p>用于测试执行器的实用程序</p><p>警告：在使用此命令之前移除所有螺旋桨。</p><p><a id="actuator_test_usage"></a></p><h3 id="用法" tabindex="-1">用法 <a class="header-anchor" href="#用法" aria-label="Permalink to &quot;用法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>actuator_test &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   set           将一个执行器设置为一个指定的输出值</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 执行器可以是一个指定的电机、舵机或者 function directly:</span></span>
<span class="line"><span>     [-m &lt;val&gt;]  被测试的电机 (1...8)</span></span>
<span class="line"><span>     [-s &lt;val&gt;]  被测试的舵机 (1...8)</span></span>
<span class="line"><span>     [-f &lt;val&gt;]  Specify function directly</span></span>
<span class="line"><span>     -v &lt;val&gt;    值(-1...1)</span></span>
<span class="line"><span>     [-t &lt;val&gt;]  以秒为单位的超时时间 (如果没有设置则为交互式运行)</span></span>
<span class="line"><span>                 默认: 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   iterate-motors 使所有电机依次开始和停止</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   iterate-servos 使所有舵机依次开始和停止</span></span></code></pre></div><h2 id="bl-update" tabindex="-1">bl_update <a class="header-anchor" href="#bl-update" aria-label="Permalink to &quot;bl_update&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/systemcmds/bl_update" target="_blank" rel="noreferrer">systemcmds/bl_update</a></p><p>用于从文件刷新引导加载程序的实用程序 <a id="bl_update_usage"></a></p><h3 id="用法-1" tabindex="-1">用法 <a class="header-anchor" href="#用法-1" aria-label="Permalink to &quot;用法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>bl_update [arguments...]</span></span>
<span class="line"><span>   setopt        设置选项比特来解锁 FLASH (只有在锁定状态下需要）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   &lt;file&gt;        Bootloader bin 文件</span></span></code></pre></div><h2 id="bsondump" tabindex="-1">bsondump <a class="header-anchor" href="#bsondump" aria-label="Permalink to &quot;bsondump&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/systemcmds/bsondump" target="_blank" rel="noreferrer">systemcmds/bsondump</a></p><p>Utility to read BSON from a file and print or output document size. <a id="bsondump_usage"></a></p><h3 id="用法-2" tabindex="-1">用法 <a class="header-anchor" href="#用法-2" aria-label="Permalink to &quot;用法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>bsondump [arguments...]</span></span>
<span class="line"><span>     &lt;file&gt;      The BSON file to decode and print.</span></span></code></pre></div><h2 id="dumpfile" tabindex="-1">dumpfile <a class="header-anchor" href="#dumpfile" aria-label="Permalink to &quot;dumpfile&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/systemcmds/dumpfile" target="_blank" rel="noreferrer">systemcmds/dumpfile</a></p><p>转储文件实用程序。 以二进制模式（不要用 CR LF 替换 LF）将文件大小和内容打印到标准输出。 <a id="dumpfile_usage"></a></p><h3 id="用法-3" tabindex="-1">用法 <a class="header-anchor" href="#用法-3" aria-label="Permalink to &quot;用法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>dumpfile [arguments...]</span></span>
<span class="line"><span>     &lt;file&gt;      被转储的文件</span></span></code></pre></div><h2 id="dyn" tabindex="-1">dyn <a class="header-anchor" href="#dyn" aria-label="Permalink to &quot;dyn&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/systemcmds/dyn" target="_blank" rel="noreferrer">systemcmds/dyn</a></p><h3 id="描述" tabindex="-1">描述 <a class="header-anchor" href="#描述" aria-label="Permalink to &quot;描述&quot;">​</a></h3><p>加载并运行一个没有被编译进 PX4 的二进制文件的动态 PX4 模块</p><h3 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>dyn ./hello.px4mod start</span></span></code></pre></div><p><a id="dyn_usage"></a></p><h3 id="用法-4" tabindex="-1">用法 <a class="header-anchor" href="#用法-4" aria-label="Permalink to &quot;用法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>dyn [arguments...]</span></span>
<span class="line"><span>     &lt;file&gt;         包含模块的文件</span></span>
<span class="line"><span>     [arguments...] 输入模块的参数</span></span></code></pre></div><h2 id="failure" tabindex="-1">failure <a class="header-anchor" href="#failure" aria-label="Permalink to &quot;failure&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/systemcmds/failure" target="_blank" rel="noreferrer">systemcmds/failure</a></p><h3 id="描述-1" tabindex="-1">描述 <a class="header-anchor" href="#描述-1" aria-label="Permalink to &quot;描述&quot;">​</a></h3><p>向系统中注入故障。</p><h3 id="实现" tabindex="-1">实现 <a class="header-anchor" href="#实现" aria-label="Permalink to &quot;实现&quot;">​</a></h3><p>此系统命令通过 uORB 发送一个机体命令来出发故障。</p><h3 id="示例-1" tabindex="-1">示例 <a class="header-anchor" href="#示例-1" aria-label="Permalink to &quot;示例&quot;">​</a></h3><p>通过停止GPS来测试GPS故障保护:</p><p>failure gps off</p><p><a id="failure_usage"></a></p><h3 id="用法-5" tabindex="-1">用法 <a class="header-anchor" href="#用法-5" aria-label="Permalink to &quot;用法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>failure [arguments...]</span></span>
<span class="line"><span>   help          显示此帮助文档</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   gps|...       指定的组件</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   ok|off|...    指定的故障类型</span></span>
<span class="line"><span>     [-i &lt;val&gt;]  传感器实例 (0=all)</span></span>
<span class="line"><span>                 默认: 0</span></span></code></pre></div><h2 id="gpio" tabindex="-1">gpio <a class="header-anchor" href="#gpio" aria-label="Permalink to &quot;gpio&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/systemcmds/gpio" target="_blank" rel="noreferrer">systemcmds/gpio</a></p><h3 id="描述-2" tabindex="-1">描述 <a class="header-anchor" href="#描述-2" aria-label="Permalink to &quot;描述&quot;">​</a></h3><p>此命令用于读写GPIO</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>gpio read &lt;PORT&gt;&lt;PIN&gt;/&lt;DEVICE&gt; [PULLDOWN|PULLUP] [--force]</span></span>
<span class="line"><span>gpio write &lt;PORT&gt;&lt;PIN&gt;/&lt;DEVICE&gt; &lt;VALUE&gt; [PUSHPULL|OPENDRAIN] [--force]</span></span></code></pre></div><h3 id="示例-2" tabindex="-1">示例 <a class="header-anchor" href="#示例-2" aria-label="Permalink to &quot;示例&quot;">​</a></h3><p>读取配置为上拉的 PH4 引脚，它的值为高</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>gpio read H4 PULLUP</span></span></code></pre></div><p>1 OK</p><p>设置 PE7 的输出值为高</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>gpio write E7 1 --force</span></span></code></pre></div><p>Set the output value on device /dev/gpio1 to high</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>gpio write /dev/gpio1 1</span></span></code></pre></div><p><a id="gpio_usage"></a></p><h3 id="用法-6" tabindex="-1">用法 <a class="header-anchor" href="#用法-6" aria-label="Permalink to &quot;用法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>gpio [arguments...]</span></span>
<span class="line"><span>   read</span></span>
<span class="line"><span>     &lt;PORT&gt;&lt;PIN&gt;/&lt;DEVICE&gt; GPIO 的端口和引脚</span></span>
<span class="line"><span>     [PULLDOWN|PULLUP] 下拉/上拉</span></span>
<span class="line"><span>     [--force]   强制 (忽略板gpio列表)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   write</span></span>
<span class="line"><span>     &lt;PORT&gt; &lt;PIN&gt; GPIO 的端口和引脚</span></span>
<span class="line"><span>     &lt;VALUE&gt;     要写入的值</span></span>
<span class="line"><span>     [PUSHPULL|OPENDRAIN] 推挽/开漏</span></span>
<span class="line"><span>     [--force]  强制 (忽略板gpio列表)</span></span></code></pre></div><h2 id="hardfault-log" tabindex="-1">hardfault_log <a class="header-anchor" href="#hardfault-log" aria-label="Permalink to &quot;hardfault_log&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/systemcmds/hardfault_log" target="_blank" rel="noreferrer">systemcmds/hardfault_log</a></p><p>Hardfault 实用程序</p><p>在启动脚本中用于处理 hardfaults。</p><p><a id="hardfault_log_usage"></a></p><h3 id="用法-7" tabindex="-1">用法 <a class="header-anchor" href="#用法-7" aria-label="Permalink to &quot;用法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>hardfault_log &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>   reset         Reset the reboot counter</span></span></code></pre></div><h2 id="hist" tabindex="-1">hist <a class="header-anchor" href="#hist" aria-label="Permalink to &quot;hist&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/systemcmds/hist" target="_blank" rel="noreferrer">systemcmds/hist</a></p><p>Command-line tool to show the px4 message history. There are no arguments. <a id="hist_usage"></a></p><h3 id="用法-8" tabindex="-1">用法 <a class="header-anchor" href="#用法-8" aria-label="Permalink to &quot;用法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>hist [arguments...]</span></span></code></pre></div><h2 id="i2cdetect" tabindex="-1">i2cdetect <a class="header-anchor" href="#i2cdetect" aria-label="Permalink to &quot;i2cdetect&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/systemcmds/i2cdetect" target="_blank" rel="noreferrer">systemcmds/i2cdetect</a></p><p>用于扫描特定总线上的 I2C 设备的实用程序。 <a id="i2cdetect_usage"></a></p><h3 id="用法-9" tabindex="-1">用法 <a class="header-anchor" href="#用法-9" aria-label="Permalink to &quot;用法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>i2cdetect [arguments...]</span></span>
<span class="line"><span>     [-b &lt;val&gt;]  I2C 总线</span></span>
<span class="line"><span>                 default: 1</span></span></code></pre></div><h2 id="led-control" tabindex="-1">led_control <a class="header-anchor" href="#led-control" aria-label="Permalink to &quot;led_control&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/systemcmds/led_control" target="_blank" rel="noreferrer">systemcmds/led_control</a></p><h3 id="描述-3" tabindex="-1">描述 <a class="header-anchor" href="#描述-3" aria-label="Permalink to &quot;描述&quot;">​</a></h3><p>用于控制和测试（外部）LED 的命令行工具</p><p>要使用它，请确保有一个处理 led_control 的 uorb 主题的设备正在运行。</p><p>有不同的优先级，例如一个模块可以设置低优先级的颜色，另一个模块可以高优先级闪烁 N 次，闪烁后 LED 自动返回低优先级状态。 该 <code>rese</code> t命令还可用于返回较低的优先级。</p><h3 id="示例-3" tabindex="-1">示例 <a class="header-anchor" href="#示例-3" aria-label="Permalink to &quot;示例&quot;">​</a></h3><p>第一个 LED 闪烁蓝光 5 次：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>led_control blink -c blue -l 0 -n 5</span></span></code></pre></div><p><a id="led_control_usage"></a></p><h3 id="用法-10" tabindex="-1">用法 <a class="header-anchor" href="#用法-10" aria-label="Permalink to &quot;用法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>led_control &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   test          运行一个测试示例</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   on            打开 LED</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   off           关闭 LED</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   reset         复位 LED 优先级</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   blink         使LED闪烁 N 次</span></span>
<span class="line"><span>     [-n &lt;val&gt;]  闪烁的次数</span></span>
<span class="line"><span>                 默认: 3</span></span>
<span class="line"><span>     [-s &lt;val&gt;]  设置闪烁速度</span></span>
<span class="line"><span>                 值: fast|normal|slow, 默认: normal</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   breathe       渐变 LED 亮 &amp; 暗</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   flash         以 1Hz 的频率 先快闪两次再熄灭</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 以下参数适用于所有除 ‘test’ 的命令:</span></span>
<span class="line"><span>     [-c &lt;val&gt;]  color</span></span>
<span class="line"><span>                 值: red|blue|green|yellow|purple|amber|cyan|white, 默认:</span></span>
<span class="line"><span>                 white</span></span>
<span class="line"><span>     [-l &lt;val&gt;]  被控制的 LED : 0, 1, 2, ... (默认=all)</span></span>
<span class="line"><span>     [-p &lt;val&gt;]  优先级</span></span>
<span class="line"><span>                 默认: 2</span></span></code></pre></div><h2 id="listener" tabindex="-1">listener <a class="header-anchor" href="#listener" aria-label="Permalink to &quot;listener&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/systemcmds/topic_listener" target="_blank" rel="noreferrer">systemcmds/topic_listener</a></p><p>监听 uORB 主题并将数据打印到控制台的实用程序。</p><p>可以通过按 Ctrl+C、Esc 或 Q 随时退出侦听器。</p><p><a id="listener_usage"></a></p><h3 id="用法-11" tabindex="-1">用法 <a class="header-anchor" href="#用法-11" aria-label="Permalink to &quot;用法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>listener &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>     &lt;topic_name&gt; uORB 主题名</span></span>
<span class="line"><span>     [-i &lt;val&gt;]   主题实例序号</span></span>
<span class="line"><span>                  默认: 0</span></span>
<span class="line"><span>     [-n &lt;val&gt;]   消息数量</span></span>
<span class="line"><span>                  默认: 1</span></span>
<span class="line"><span>     [-r &lt;val&gt;]   订阅频率 (0为无限制)</span></span>
<span class="line"><span>                  默认: 0</span></span></code></pre></div><h2 id="mfd" tabindex="-1">mfd <a class="header-anchor" href="#mfd" aria-label="Permalink to &quot;mfd&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/systemcmds/mft" target="_blank" rel="noreferrer">systemcmds/mft</a></p><p>交互显示的实用程序 <a id="mfd_usage"></a></p><h3 id="用法-12" tabindex="-1">用法 <a class="header-anchor" href="#用法-12" aria-label="Permalink to &quot;用法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>mfd &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   query         如果不存在返回 ture</span></span></code></pre></div><h2 id="mtd" tabindex="-1">mtd <a class="header-anchor" href="#mtd" aria-label="Permalink to &quot;mtd&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/systemcmds/mtd" target="_blank" rel="noreferrer">systemcmds/mtd</a></p><p>挂载和测试分区的实用程序（基于板定义的 FRAM/EEPROM 存储） <a id="mtd_usage"></a></p><h3 id="用法-13" tabindex="-1">用法 <a class="header-anchor" href="#用法-13" aria-label="Permalink to &quot;用法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>mtd &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   status        打印状态信息</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   readtest      执行读取测试</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   rwtest        执行读写测试</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   erase        擦除分区</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 命令‘readtest’和‘rwtest&#39;有一个可选的实例索引:</span></span>
<span class="line"><span>     [-i &lt;val&gt;]  存储索引 (如果板拥有多个存储)</span></span>
<span class="line"><span>                 默认: 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 命令 &#39;readtest&#39;, &#39;rwtest&#39; and &#39;erase&#39; 有一个可选的参数:</span></span>
<span class="line"><span>     [&lt;partition_name1&gt; [&lt;partition_name2&gt; ...]] 分区名 (eg.</span></span>
<span class="line"><span>                 /fs/mtd_params), 未提供时使用系统默认值</span></span></code></pre></div><h2 id="nshterm" tabindex="-1">nshterm <a class="header-anchor" href="#nshterm" aria-label="Permalink to &quot;nshterm&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/systemcmds/nshterm" target="_blank" rel="noreferrer">systemcmds/nshterm</a></p><p>在指定端口启动一个 NSH shell。</p><p>该命令此前被用于在 USB 串口端口开启一个 shell。 现在运行mavlink，并且可以在mavlink 上使用shell。</p><p><a id="nshterm_usage"></a></p><h3 id="用法-14" tabindex="-1">用法 <a class="header-anchor" href="#用法-14" aria-label="Permalink to &quot;用法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>nshterm [arguments...]</span></span>
<span class="line"><span>     &lt;file:dev&gt;  启动 shell 的设备 (eg. /dev/ttyACM0)</span></span></code></pre></div><h2 id="param" tabindex="-1">param <a class="header-anchor" href="#param" aria-label="Permalink to &quot;param&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/systemcmds/param" target="_blank" rel="noreferrer">systemcmds/param</a></p><h3 id="描述-4" tabindex="-1">描述 <a class="header-anchor" href="#描述-4" aria-label="Permalink to &quot;描述&quot;">​</a></h3><p>通过 shell 或脚本访问和操作参数的命令。</p><p>例如，这在启动脚本中用于设置特定于机身的参数。</p><p>更改时会自动保存参数，例如 使用 <code>param set</code>。 它们通常存储在 FRAM 或 SD 卡中。 <code>param select</code> 可用于更改后续保存的存储位置（需要在每次启动时（重新）配置）。</p><p>如果启用了基于 FLASH 的后端（这是在编译时完成的，例如对于 Intel Aero 或 Omnibus）， <code>param select</code> 则没有任何效果，并且默认始终是 FLASH 后端。 但是 <code>param save/load &lt;file&gt;</code> 仍可用于写入/读取文件。</p><p>每个参数有一个“已使用”的标志，此标志在启动过程参数被读取后被置位。 它只是用于向地面控制站显示相关参数。</p><h3 id="示例-4" tabindex="-1">示例 <a class="header-anchor" href="#示例-4" aria-label="Permalink to &quot;示例&quot;">​</a></h3><p>更改机身并确保已加载机身的默认参数：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>param set SYS_AUTOSTART 4001</span></span>
<span class="line"><span>param set SYS_AUTOCONFIG 1</span></span>
<span class="line"><span>reboot</span></span></code></pre></div><p><a id="param_usage"></a></p><h3 id="用法-15" tabindex="-1">用法 <a class="header-anchor" href="#用法-15" aria-label="Permalink to &quot;用法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>param &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>   compare       Compare a param with a value. 如果相等命令会执行成功</span></span>
<span class="line"><span>     [-s]        如果提供，参数不存在时引起无声错误</span></span>
<span class="line"><span>     &lt;param_name&gt; &lt;value&gt; 参数名和被比较的值</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   greater       将参数同某个值比较。 如果参数值比该值大</span></span>
<span class="line"><span>                 则命令执行成功</span></span>
<span class="line"><span>     [-s]        将参数同某个值比较。</span></span>
<span class="line"><span>     &lt;param_name&gt; &lt;value&gt; 参数名和被比较的值</span></span>
<span class="line"><span>     &lt;param_name&gt; &lt;value&gt; 参数名和被比较的值</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   touch         标记已使用的参数</span></span>
<span class="line"><span>     [&lt;param_name1&gt; [&lt;param_name2&gt;]] 参数名 (一个或多个)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   reset         复位指定的参数为默认值</span></span>
<span class="line"><span>     [&lt;param1&gt; [&lt;param2&gt;]] 复位的参数名 (结尾的通配符是被允许的)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   reset_all     复位所有的参数为默认值</span></span>
<span class="line"><span>     [&lt;exclude1&gt; [&lt;exclude2&gt;]] 不复位匹配参数 (结尾的通配符是被允许的)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   index         显示给定索引的参数</span></span>
<span class="line"><span>     &lt;index&gt;     索引: 一个 &gt;= 0 的整数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   index_used    显示给定索引的已用参数</span></span>
<span class="line"><span>     &lt;index&gt;     索引: 一个 &gt;= 0 的整数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   find          显示参数的索引</span></span>
<span class="line"><span>     &lt;param&gt;     参数名</span></span></code></pre></div><h2 id="payload-deliverer" tabindex="-1">payload_deliverer <a class="header-anchor" href="#payload-deliverer" aria-label="Permalink to &quot;payload_deliverer&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/modules/payload_deliverer" target="_blank" rel="noreferrer">modules/payload_deliverer</a></p><h3 id="描述-5" tabindex="-1">描述 <a class="header-anchor" href="#描述-5" aria-label="Permalink to &quot;描述&quot;">​</a></h3><p>Handles payload delivery with either Gripper or a Winch with an appropriate timeout / feedback sensor setting, and communicates back the delivery result as an acknowledgement internally</p><p><a id="payload_deliverer_usage"></a></p><h3 id="用法-16" tabindex="-1">用法 <a class="header-anchor" href="#用法-16" aria-label="Permalink to &quot;用法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>payload_deliverer &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>   status        print status info</span></span></code></pre></div><h2 id="perf" tabindex="-1">perf <a class="header-anchor" href="#perf" aria-label="Permalink to &quot;perf&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/systemcmds/perf" target="_blank" rel="noreferrer">systemcmds/perf</a></p><p>性能计数器打印工具 <a id="perf_usage"></a></p><h3 id="用法-17" tabindex="-1">用法 <a class="header-anchor" href="#用法-17" aria-label="Permalink to &quot;用法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>perf [arguments...]</span></span>
<span class="line"><span>   reset         复位所有计数器</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   latency       打印 HRT 定时器延迟柱状图</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 如果未给出参数则打印所有性能计数器</span></span></code></pre></div><h2 id="reboot" tabindex="-1">reboot <a class="header-anchor" href="#reboot" aria-label="Permalink to &quot;reboot&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/systemcmds/reboot" target="_blank" rel="noreferrer">systemcmds/reboot</a></p><p>重启系统 <a id="reboot_usage"></a></p><h3 id="用法-18" tabindex="-1">用法 <a class="header-anchor" href="#用法-18" aria-label="Permalink to &quot;用法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>reboot [arguments...]</span></span>
<span class="line"><span>     [-b]        重启进入bootloader</span></span>
<span class="line"><span>     [lock|unlock] 使用/释放关机锁 (用于测试)</span></span></code></pre></div><h2 id="sd-bench" tabindex="-1">sd_bench <a class="header-anchor" href="#sd-bench" aria-label="Permalink to &quot;sd_bench&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/systemcmds/sd_bench" target="_blank" rel="noreferrer">systemcmds/sd_bench</a></p><p>测试SD卡速度 <a id="sd_bench_usage"></a></p><h3 id="用法-19" tabindex="-1">用法 <a class="header-anchor" href="#用法-19" aria-label="Permalink to &quot;用法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>sd_bench [arguments...]</span></span>
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
<span class="line"><span>     [-v]        Verify data and block number</span></span></code></pre></div><h2 id="sd-stress" tabindex="-1">sd_stress <a class="header-anchor" href="#sd-stress" aria-label="Permalink to &quot;sd_stress&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/systemcmds/sd_stress" target="_blank" rel="noreferrer">systemcmds/sd_stress</a></p><p>在 SD 卡上测试操作 <a id="sd_stress_usage"></a></p><h3 id="用法-20" tabindex="-1">用法 <a class="header-anchor" href="#用法-20" aria-label="Permalink to &quot;用法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>sd_stress [arguments...]</span></span>
<span class="line"><span>     [-r &lt;val&gt;]  运行次数</span></span>
<span class="line"><span>                 默认: 5</span></span>
<span class="line"><span>     [-b &lt;val&gt;]  字节数量</span></span>
<span class="line"><span>                 默认100: 100</span></span></code></pre></div><h2 id="serial-passthru" tabindex="-1">serial_passthru <a class="header-anchor" href="#serial-passthru" aria-label="Permalink to &quot;serial_passthru&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/systemcmds/serial_passthru" target="_blank" rel="noreferrer">systemcmds/serial_passthru</a></p><p>把数据从一个设备传输到另一个设备。</p><p>This can be used to use u-center connected to USB with a GPS on a serial port.</p><p><a id="serial_passthru_usage"></a></p><h3 id="用法-21" tabindex="-1">用法 <a class="header-anchor" href="#用法-21" aria-label="Permalink to &quot;用法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>serial_passthru [arguments...]</span></span>
<span class="line"><span>     -e &lt;val&gt;    External device path</span></span>
<span class="line"><span>                 values: &lt;file:dev&gt;</span></span>
<span class="line"><span>     -d &lt;val&gt;    Internal device path</span></span>
<span class="line"><span>                 values: &lt;file:dev&gt;</span></span>
<span class="line"><span>     [-b &lt;val&gt;]  Baudrate</span></span>
<span class="line"><span>                 default: 115200</span></span>
<span class="line"><span>     [-t]        Track the External devices baudrate on internal device</span></span></code></pre></div><h2 id="系统时间" tabindex="-1">系统时间 <a class="header-anchor" href="#系统时间" aria-label="Permalink to &quot;系统时间&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/systemcmds/system_time" target="_blank" rel="noreferrer">systemcmds/system_time</a></p><h3 id="描述-6" tabindex="-1">描述 <a class="header-anchor" href="#描述-6" aria-label="Permalink to &quot;描述&quot;">​</a></h3><p>Command-line tool to set and get system time.</p><h3 id="示例-5" tabindex="-1">示例 <a class="header-anchor" href="#示例-5" aria-label="Permalink to &quot;示例&quot;">​</a></h3><p>Set the system time and read it back</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>system_time set 1600775044</span></span>
<span class="line"><span>system_time get</span></span></code></pre></div><p><a id="system_time_usage"></a></p><h3 id="用法-22" tabindex="-1">用法 <a class="header-anchor" href="#用法-22" aria-label="Permalink to &quot;用法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>system_time &lt;command&gt; [arguments...]</span></span>
<span class="line"><span> Commands:</span></span>
<span class="line"><span>   set           Set the system time, provide time in unix epoch time format</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   get           Get the system time</span></span></code></pre></div><h2 id="top" tabindex="-1">top <a class="header-anchor" href="#top" aria-label="Permalink to &quot;top&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/systemcmds/top" target="_blank" rel="noreferrer">systemcmds/top</a></p><p>Monitor running processes and their CPU, stack usage, priority and state <a id="top_usage"></a></p><h3 id="用法-23" tabindex="-1">用法 <a class="header-anchor" href="#用法-23" aria-label="Permalink to &quot;用法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>top [arguments...]</span></span>
<span class="line"><span>   once          print load only once</span></span></code></pre></div><h2 id="usb-connected" tabindex="-1">usb_connected <a class="header-anchor" href="#usb-connected" aria-label="Permalink to &quot;usb_connected&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/systemcmds/usb_connected" target="_blank" rel="noreferrer">systemcmds/usb_connected</a></p><p>Utility to check if USB is connected. Was previously used in startup scripts. A return value of 0 means USB is connected, 1 otherwise. <a id="usb_connected_usage"></a></p><h3 id="用法-24" tabindex="-1">用法 <a class="header-anchor" href="#用法-24" aria-label="Permalink to &quot;用法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>usb_connected [arguments...]</span></span></code></pre></div><h2 id="ver" tabindex="-1">ver <a class="header-anchor" href="#ver" aria-label="Permalink to &quot;ver&quot;">​</a></h2><p>Source: <a href="https://github.com/PX4/PX4-Autopilot/tree/release/1.15/src/systemcmds/ver" target="_blank" rel="noreferrer">systemcmds/ver</a></p><p>Tool to print various version information <a id="ver_usage"></a></p><h3 id="用法-25" tabindex="-1">用法 <a class="header-anchor" href="#用法-25" aria-label="Permalink to &quot;用法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>ver &lt;command&gt; [arguments...]</span></span>
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
<span class="line"><span>                 comparison is used if multiple are specified</span></span></code></pre></div>`,186),l=[t];function i(r,o,c,d,h,u){return n(),s("div",null,l)}const b=a(p,[["render",i]]);export{g as __pageData,b as default};
