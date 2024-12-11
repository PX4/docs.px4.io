import{_ as s,c as i,o as n,ab as a}from"./chunks/framework.CUflZczI.js";const E=JSON.parse('{"title":"LedControl (повідомлення UORB)","description":"","frontmatter":{},"headers":[],"relativePath":"uk/msg_docs/LedControl.md","filePath":"uk/msg_docs/LedControl.md"}'),t={name:"uk/msg_docs/LedControl.md"},l=a(`<h1 id="ledcontrol-повідомлення-uorb" tabindex="-1">LedControl (повідомлення UORB) <a class="header-anchor" href="#ledcontrol-повідомлення-uorb" aria-label="Permalink to &quot;LedControl (повідомлення UORB)&quot;">​</a></h1><p>Керування світлодіодами: керування одним чи кількома світлодіодами. Це зовнішні світлодіоди, а не світлодіоди плати</p><p><a href="https://github.com/PX4/PX4-Autopilot/blob/release/1.15/msg/LedControl.msg" target="_blank" rel="noreferrer">вихідний файл</a></p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"># LED control: control a single or multiple LED</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;s.</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"># These are the externally visible LED&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">s, not the board LED</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;s</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">uint64 timestamp        # time since system start (microseconds)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"># colors</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">uint8 COLOR_OFF = 0 # this is only used in the drivers</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">uint8 COLOR_RED = 1</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">uint8 COLOR_GREEN = 2</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">uint8 COLOR_BLUE = 3</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">uint8 COLOR_YELLOW = 4</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">uint8 COLOR_PURPLE = 5</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">uint8 COLOR_AMBER = 6</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">uint8 COLOR_CYAN = 7</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">uint8 COLOR_WHITE = 8</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"># LED modes definitions</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">uint8 MODE_OFF = 0 # turn LED off</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">uint8 MODE_ON = 1  # turn LED on</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">uint8 MODE_DISABLED = 2  # disable this priority (switch to lower priority setting)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">uint8 MODE_BLINK_SLOW = 3</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">uint8 MODE_BLINK_NORMAL = 4</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">uint8 MODE_BLINK_FAST = 5</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">uint8 MODE_BREATHE = 6 # continuously increase &amp; decrease brightness (solid color if driver does not support it)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">uint8 MODE_FLASH = 7 # two fast blinks (on/off) with timing as in MODE_BLINK_FAST and then off for a while</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">uint8 MAX_PRIORITY = 2 # maximum priority (minimum is 0)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">uint8 led_mask # bitmask which LED(s) to control, set to 0xff for all</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">uint8 color # see COLOR_*</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">uint8 mode # see MODE_*</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">uint8 num_blinks # how many times to blink (number of on-off cycles if mode is one of MODE_BLINK_*) . Set to 0 for infinite</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                 # in MODE_FLASH it is the number of cycles. Max number of blinks: 122 and max number of flash cycles: 20</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">uint8 priority # priority: higher priority events will override current lower priority events (see MAX_PRIORITY)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">uint8 ORB_QUEUE_LENGTH = 8      # needs to match BOARD_MAX_LEDS</span></span></code></pre></div>`,4),e=[l];function p(h,r,o,k,F,c){return n(),i("div",null,e)}const _=s(t,[["render",p]]);export{E as __pageData,_ as default};
