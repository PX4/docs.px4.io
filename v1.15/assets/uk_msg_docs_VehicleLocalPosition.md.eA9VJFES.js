import{_ as s,c as i,o as a,ab as n}from"./chunks/framework.CUflZczI.js";const f=JSON.parse('{"title":"VehicleLocalPosition (повідомлення UORB)","description":"","frontmatter":{},"headers":[],"relativePath":"uk/msg_docs/VehicleLocalPosition.md","filePath":"uk/msg_docs/VehicleLocalPosition.md"}'),e={name:"uk/msg_docs/VehicleLocalPosition.md"},t=n(`<h1 id="vehiclelocalposition-повідомлення-uorb" tabindex="-1">VehicleLocalPosition (повідомлення UORB) <a class="header-anchor" href="#vehiclelocalposition-повідомлення-uorb" aria-label="Permalink to &quot;VehicleLocalPosition (повідомлення UORB)&quot;">​</a></h1><p>Fused local position in NED. Початкова точка координатної системи - це позиція транспортного засобу в момент запуску модуля EKF2.</p><p><a href="https://github.com/PX4/PX4-Autopilot/blob/release/1.15/msg/VehicleLocalPosition.msg" target="_blank" rel="noreferrer">вихідний файл</a></p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"># Об</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;єднана локальна позиція в NED.</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"># Початкова точка координатної системи - це позиція транспортного засобу в момент запуску модуля EKF2.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">uint64 timestamp            # time since system start (microseconds)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">uint64 timestamp_sample                 # the timestamp of the raw data (microseconds)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">bool xy_valid               # true if x and y are valid</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">bool z_valid                # true if z is valid</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">bool v_xy_valid             # true if vx and vy are valid</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">bool v_z_valid              # true if vz is valid</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"># Position in local NED frame</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">float32 x               # North position in NED earth-fixed frame, (metres)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">float32 y               # East position in NED earth-fixed frame, (metres)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">float32 z               # Down position (negative altitude) in NED earth-fixed frame, (metres)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"># Position reset delta</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">float32[2] delta_xy         # Amount of lateral shift of position estimate in latest reset (in x and y) [m]</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">uint8 xy_reset_counter          # Index of latest lateral position estimate reset</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">float32 delta_z             # Amount of vertical shift of position estimate in latest reset [m]</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">uint8 z_reset_counter           # Index of latest vertical position estimate reset</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"># Velocity in NED frame</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">float32 vx              # North velocity in NED earth-fixed frame, (metres/sec)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">float32 vy              # East velocity in NED earth-fixed frame, (metres/sec)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">float32 vz              # Down velocity in NED earth-fixed frame, (metres/sec)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">float32 z_deriv             # Down position time derivative in NED earth-fixed frame, (metres/sec)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"># Velocity reset delta</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">float32[2] delta_vxy            # Amount of lateral shift of velocity estimate in latest reset (in x and y) [m/s]</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">uint8 vxy_reset_counter         # Index of latest vertical velocity estimate reset</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">float32 delta_vz            # Amount of vertical shift of velocity estimate in latest reset [m/s]</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">uint8 vz_reset_counter          # Index of latest vertical velocity estimate reset</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"># Acceleration in NED frame</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">float32 ax        # North velocity derivative in NED earth-fixed frame, (metres/sec^2)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">float32 ay        # East velocity derivative in NED earth-fixed frame, (metres/sec^2)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">float32 az        # Down velocity derivative in NED earth-fixed frame, (metres/sec^2)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">float32 heading             # Euler yaw angle transforming the tangent plane relative to NED earth-fixed frame, -PI..+PI,  (radians)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">float32 heading_var</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">float32 unaided_heading                 # Same as heading but generated by integrating corrected gyro data only</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">float32 delta_heading           # Heading delta caused by latest heading reset [rad]</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">uint8 heading_reset_counter     # Index of latest heading reset</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">bool heading_good_for_control</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">float32 tilt_var</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"># Position of reference point (local NED frame origin) in global (GPS / WGS84) frame</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">bool xy_global              # true if position (x, y) has a valid global reference (ref_lat, ref_lon)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">bool z_global               # true if z has a valid global reference (ref_alt)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">uint64 ref_timestamp            # Time when reference position was set since system start, (microseconds)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">float64 ref_lat             # Reference point latitude, (degrees)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">float64 ref_lon             # Reference point longitude, (degrees)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">float32 ref_alt             # Reference altitude AMSL, (metres)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"># Distance to surface</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">float32 dist_bottom         # Distance from from bottom surface to ground, (metres)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">bool dist_bottom_valid          # true if distance to bottom surface is valid</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">uint8 dist_bottom_sensor_bitfield   # bitfield indicating what type of sensor is used to estimate dist_bottom</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">uint8 DIST_BOTTOM_SENSOR_NONE = 0</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">uint8 DIST_BOTTOM_SENSOR_RANGE = 1  # (1 &lt;&lt; 0) a range sensor is used to estimate dist_bottom field</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">uint8 DIST_BOTTOM_SENSOR_FLOW = 2   # (1 &lt;&lt; 1) a flow sensor is used to estimate dist_bottom field (mostly fixed-wing use case)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">float32 eph             # Standard deviation of horizontal position error, (metres)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">float32 epv             # Standard deviation of vertical position error, (metres)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">float32 evh             # Standard deviation of horizontal velocity error, (metres/sec)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">float32 evv             # Standard deviation of vertical velocity error, (metres/sec)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">bool dead_reckoning                     # True if this position is estimated through dead-reckoning</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"># estimator specified vehicle limits</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">float32 vxy_max             # maximum horizontal speed - set to 0 when limiting not required (meters/sec)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">float32 vz_max              # maximum vertical speed - set to 0 when limiting not required (meters/sec)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">float32 hagl_min            # minimum height above ground level - set to 0 when limiting not required (meters)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">float32 hagl_max            # maximum height above ground level - set to 0 when limiting not required (meters)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"># TOPICS vehicle_local_position vehicle_local_position_groundtruth external_ins_local_position</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"># TOPICS estimator_local_position</span></span></code></pre></div>`,4),l=[t];function p(o,r,h,c,d,k){return a(),i("div",null,l)}const m=s(e,[["render",p]]);export{f as __pageData,m as default};
