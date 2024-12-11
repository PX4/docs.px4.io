import{_ as s,c as a,o as i,ab as n}from"./chunks/framework.CUflZczI.js";const _=JSON.parse('{"title":"VehicleGlobalPosition (повідомлення UORB)","description":"","frontmatter":{},"headers":[],"relativePath":"uk/msg_docs/VehicleGlobalPosition.md","filePath":"uk/msg_docs/VehicleGlobalPosition.md"}'),e={name:"uk/msg_docs/VehicleGlobalPosition.md"},l=n(`<h1 id="vehicleglobalposition-повідомлення-uorb" tabindex="-1">VehicleGlobalPosition (повідомлення UORB) <a class="header-anchor" href="#vehicleglobalposition-повідомлення-uorb" aria-label="Permalink to &quot;VehicleGlobalPosition (повідомлення UORB)&quot;">​</a></h1><p>Об&#39;єднана глобальна позиція в WGS84. Ця структура містить глобальну оцінку позиції. Це не сирі GPS вимірювання (@see vehicle_gps_position). Ця тема зазвичай публікується позиціонером, який враховує більше джерел інформації, ніж просто GPS, наприклад, керування введеннями транспортного засобу в реалізації фільтра Калмана.</p><p><a href="https://github.com/PX4/PX4-Autopilot/blob/release/1.15/msg/VehicleGlobalPosition.msg" target="_blank" rel="noreferrer">вихідний файл</a></p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"># Об</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;єднана глобальна позиція в WGS84.</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"># Ця структура містить глобальну оцінку позиції. Це не сирі GPS</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"># вимірювання (@see vehicle_gps_position). Ця тема зазвичай публікується позиціонером,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"># який враховує більше джерел інформації, ніж просто GPS,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"># наприклад, керування введеннями транспортного засобу в реалізації фільтра Калмана.</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">#</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">uint64 timestamp        # time since system start (microseconds)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">uint64 timestamp_sample         # the timestamp of the raw data (microseconds)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">float64 lat         # Latitude, (degrees)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">float64 lon         # Longitude, (degrees)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">float32 alt         # Altitude AMSL, (meters)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">float32 alt_ellipsoid       # Altitude above ellipsoid, (meters)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">float32 delta_alt   # Reset delta for altitude</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">uint8 lat_lon_reset_counter # Counter for reset events on horizontal position coordinates</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">uint8 alt_reset_counter     # Counter for reset events on altitude</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">float32 eph         # Standard deviation of horizontal position error, (metres)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">float32 epv         # Standard deviation of vertical position error, (metres)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">float32 terrain_alt     # Terrain altitude WGS84, (metres)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">bool terrain_alt_valid      # Terrain altitude estimate is valid</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">bool dead_reckoning     # True if this position is estimated through dead-reckoning</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"># TOPICS vehicle_global_position vehicle_global_position_groundtruth external_ins_global_position</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"># TOPICS estimator_global_position</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"># TOPICS aux_global_position</span></span></code></pre></div>`,4),t=[l];function p(o,h,r,c,k,d){return i(),a("div",null,t)}const g=s(e,[["render",p]]);export{_ as __pageData,g as default};
