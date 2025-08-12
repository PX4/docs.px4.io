import{_ as s,c as i,o as e,ab as a}from"./chunks/framework.CUflZczI.js";const E=JSON.parse('{"title":"VehicleTrajectoryBezier (Повідомлення UORB)","description":"","frontmatter":{},"headers":[],"relativePath":"uk/msg_docs/VehicleTrajectoryBezier.md","filePath":"uk/msg_docs/VehicleTrajectoryBezier.md"}'),n={name:"uk/msg_docs/VehicleTrajectoryBezier.md"},t=a(`<h1 id="vehicletrajectorybezier-повідомлення-uorb" tabindex="-1">VehicleTrajectoryBezier (Повідомлення UORB) <a class="header-anchor" href="#vehicletrajectorybezier-повідомлення-uorb" aria-label="Permalink to &quot;VehicleTrajectoryBezier (Повідомлення UORB)&quot;">​</a></h1><p>Опис Vehicle Waypoints Trajectory. Дивіться також MAVLink MAV_TRAJECTORY_REPRESENTATION msg Тема vehicle_trajectory_bezier використовується для надсилання плавної траєкторії польоту від комп&#39;ютера-супутника/модуля уникання перешкод до контролера положення.</p><p><a href="https://github.com/PX4/PX4-Autopilot/blob/release/1.15/msg/VehicleTrajectoryBezier.msg" target="_blank" rel="noreferrer">вихідний файл</a></p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"># Опис траєкторії транспортних точок. Дивіться також MAVLink MAV_TRAJECTORY_REPRESENTATION msg</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"># Тема vehicle_trajectory_bezier використовується для надсилання гладкого шляху польоту від</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"># компаньйона</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">комп</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;ютера/модуля уникання перешкод до контролера положення.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">uint64 timestamp        # time since system start (microseconds)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">uint8 POINT_0 = 0</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">uint8 POINT_1 = 1</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">uint8 POINT_2 = 2</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">uint8 POINT_3 = 3</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">uint8 POINT_4 = 4</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">uint8 NUMBER_POINTS = 5</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">TrajectoryBezier[5] control_points</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">uint8 bezier_order</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"># TOPICS vehicle_trajectory_bezier</span></span></code></pre></div>`,4),l=[t];function r(p,c,h,o,k,_){return e(),i("div",null,l)}const y=s(n,[["render",r]]);export{E as __pageData,y as default};
