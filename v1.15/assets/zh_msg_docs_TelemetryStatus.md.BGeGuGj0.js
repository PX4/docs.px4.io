import{_ as s,c as a,o as i,ab as n}from"./chunks/framework.CUflZczI.js";const g=JSON.parse('{"title":"TelemetryStatus (UORB message)","description":"","frontmatter":{},"headers":[],"relativePath":"zh/msg_docs/TelemetryStatus.md","filePath":"zh/msg_docs/TelemetryStatus.md"}'),t={name:"zh/msg_docs/TelemetryStatus.md"},l=n(`<h1 id="telemetrystatus-uorb-message" tabindex="-1">TelemetryStatus (UORB message) <a class="header-anchor" href="#telemetrystatus-uorb-message" aria-label="Permalink to &quot;TelemetryStatus (UORB message)&quot;">​</a></h1><p><a href="https://github.com/PX4/PX4-Autopilot/blob/release/1.15/msg/TelemetryStatus.msg" target="_blank" rel="noreferrer">source file</a></p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uint8 LINK_TYPE_GENERIC </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uint8 LINK_TYPE_UBIQUITY_BULLET </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uint8 LINK_TYPE_WIRE </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uint8 LINK_TYPE_USB </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uint8 LINK_TYPE_IRIDIUM </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 4</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uint64 timestamp            # time since system </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (microseconds)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uint8 type              #  type of the radio </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hardware</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (LINK_TYPE_</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uint8 mode</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">bool</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> flow_control</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">bool</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> forwarding</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">bool</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> mavlink_v2</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">bool</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ftp</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uint8 streams</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">float32 data_rate                       # configured maximum data </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (Bytes</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">s)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">float32 rate_multiplier</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">float32 tx_rate_avg                     # transmit rate </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">average</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (Bytes</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">s)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">float32 tx_error_rate_avg               # transmit error rate </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">average</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (Bytes</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">s)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uint32 tx_message_count                 # total message sent count</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uint32 tx_buffer_overruns               # number of TX buffer overruns</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">float32 rx_rate_avg                     # transmit rate </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">average</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (Bytes</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">s)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uint32 rx_message_count                 # count of total messages received</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uint32 rx_message_lost_count</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uint32 rx_buffer_overruns               # number of RX buffer overruns</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uint32 rx_parse_errors                  # number of parse errors</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uint32 rx_packet_drop_count             # number of packet drops</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">float32 rx_message_lost_rate</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">uint64 HEARTBEAT_TIMEOUT_US </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2500000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">       # Heartbeat </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">timeout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (tolerate missing </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> jitter)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"># Heartbeats per type</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">bool</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> heartbeat_type_antenna_tracker         # MAV_TYPE_ANTENNA_TRACKER</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">bool</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> heartbeat_type_gcs                     # MAV_TYPE_GCS</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">bool</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> heartbeat_type_onboard_controller      # MAV_TYPE_ONBOARD_CONTROLLER</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">bool</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> heartbeat_type_gimbal                  # MAV_TYPE_GIMBAL</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">bool</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> heartbeat_type_adsb                    # MAV_TYPE_ADSB</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">bool</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> heartbeat_type_camera                  # MAV_TYPE_CAMERA</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">bool</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> heartbeat_type_parachute               # MAV_TYPE_PARACHUTE</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">bool</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> heartbeat_type_open_drone_id           # MAV_TYPE_ODID</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"># Heartbeats per component</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">bool</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> heartbeat_component_telemetry_radio    # MAV_COMP_ID_TELEMETRY_RADIO</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">bool</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> heartbeat_component_log                # MAV_COMP_ID_LOG</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">bool</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> heartbeat_component_osd                # MAV_COMP_ID_OSD</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">bool</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> heartbeat_component_obstacle_avoidance # MAV_COMP_ID_OBSTACLE_AVOIDANCE</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">bool</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> heartbeat_component_vio                # MAV_COMP_ID_VISUAL_INERTIAL_ODOMETRY</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">bool</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> heartbeat_component_pairing_manager    # MAV_COMP_ID_PAIRING_MANAGER</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">bool</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> heartbeat_component_udp_bridge         # MAV_COMP_ID_UDP_BRIDGE</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">bool</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> heartbeat_component_uart_bridge        # MAV_COMP_ID_UART_BRIDGE</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"># Misc component health</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">bool</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> avoidance_system_healthy</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">bool</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> open_drone_id_system_healthy</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">bool</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> parachute_system_healthy</span></span></code></pre></div>`,3),e=[l];function p(h,k,E,r,_,o){return i(),a("div",null,e)}const y=s(t,[["render",p]]);export{g as __pageData,y as default};
