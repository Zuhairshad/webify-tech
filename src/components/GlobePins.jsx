// src/components/GlobePins.jsx
import React, { useEffect, useRef, useState } from "react";
import Globe from "react-globe.gl";

const LAHORE = {
  country: "Pakistan",
  city: "Lahore",
  address: "Firdous Market, Block C",
  phone: "+92 314 1147714",
  lat: 31.5204,
  lng: 74.3587,
  color: "#ffffff ",
};

export default function GlobePins({
  width = 320,
  height = 260,
  point = LAHORE,
  spinMs = 1800,  // spin before zoom
  zoomMs = 1800,  // zoom duration
  startAlt = 2.2, // initial altitude
  endAlt = 1.1,   // ~50% of initial (closer)
}) {
  const globeRef = useRef(null);
  const wrapRef  = useRef(null);

  // JS-only: no TS generics
  const timers = useRef([]);
  const didAnimate = useRef(false);

  const [hovered, setHovered] = useState(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  // cleanup timers
  useEffect(() => {
    return () => {
      timers.current.forEach((t) => clearTimeout(t));
      timers.current = [];
    };
  }, []);

  // sequence to run when visible
  const runSequence = () => {
    const g = globeRef.current;
    if (!g) return;

    // 1) initial POV
    g.pointOfView({ lat: point.lat, lng: point.lng, altitude: startAlt }, 600);

    // 2) brief spin
    const controls = g.controls?.();
    if (controls) {
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.9;
    }

    // 3) zoom & stop
    timers.current.push(
      setTimeout(() => {
        g.pointOfView(
          { lat: point.lat, lng: point.lng, altitude: endAlt },
          zoomMs
        );
        if (controls) {
          timers.current.push(
            setTimeout(() => {
              controls.autoRotate = false;
            }, Math.min(zoomMs, 2000))
          );
        }
      }, spinMs)
    );
  };

  // start only when the globe scrolls into view
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      if (!didAnimate.current) {
        didAnimate.current = true;
        runSequence();
      }
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && entry.intersectionRatio >= 0.4 && !didAnimate.current) {
          didAnimate.current = true;
          runSequence();
          observer.disconnect();
        }
      },
      { root: null, threshold: [0, 0.25, 0.4, 0.75, 1] }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [point, spinMs, zoomMs, startAlt, endAlt]);

  // mouse tracking for tooltip
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      setMouse({ x: e.clientX - r.left, y: e.clientY - r.top });
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div ref={wrapRef} className="relative" style={{ width, height }}>
      <Globe
        ref={globeRef}
        width={width}
        height={height}
        backgroundColor="rgba(0,0,0,0)"
        rendererConfig={{ antialias: true, alpha: true }}
        globeImageUrl="https://unpkg.com/three-globe/example/img/earth-dark.jpg"
        bumpImageUrl="https://unpkg.com/three-globe/example/img/earth-topology.png"
        atmosphereColor="#5AB6FF"
        atmosphereAltitude={0.18}
        labelsData={[point]}
        labelLat={(d) => d.lat}
        labelLng={(d) => d.lng}
        labelText={(d) => d.city}
        labelColor={(d) => d.color}
        labelSize={() => 1.25}
        labelDotRadius={() => 0.95}
        labelAltitude={() => 0.015}
        onLabelHover={setHovered}
      />

      {hovered && (
        <div
          className="pointer-events-none absolute z-20 rounded-xl bg-white/10 backdrop-blur-md ring-1 ring-white/20 text-white shadow-lg px-3 py-2"
          style={{
            transform: "translate(-50%, calc(-100% - 10px))",
            left: mouse.x,
            top: mouse.y,
          }}
        >
          <div className="text-xs font-semibold">{hovered.country}</div>
          <div className="text-[11px] opacity-90">
            {hovered.city}
            {hovered.city ? ", " : ""}
            {hovered.address}
          </div>
          {hovered.phone && (
            <div className="text-[11px] opacity-80">{hovered.phone}</div>
          )}
        </div>
      )}
    </div>
  );
}
