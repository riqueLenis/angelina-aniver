import { useState, useEffect, useRef } from "react";

const WHATSAPP_NUMBER = "5567996332057";
const WHATSAPP_MSG = encodeURIComponent(
  "Olá! Confirmo minha presença com muito carinho no aniversário de 4 anos da Angelina! Mal posso esperar para celebrar esse dia tão especial com vocês!",
);

function useMemo2(fn, deps) {
  const ref = useRef(null);
  if (!ref.current) ref.current = fn();
  return ref.current;
}

const rand = (min, max) => Math.random() * (max - min) + min;

export default function ConviteAngelina() {
  const [visible, setVisible] = useState(false);
  const [starPop, setStarPop] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setVisible(true), 200);
    const t2 = setTimeout(() => setStarPop(true), 900);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  const bubbles = useMemo2(() =>
    Array.from({ length: 22 }, (_, i) => ({
      id: i,
      left: rand(2, 96),
      size: rand(8, 22),
      dur: rand(5, 10),
      delay: rand(0, 9),
      startY: rand(30, 90),
    })),
  );

  const sparkles = useMemo2(() =>
    Array.from({ length: 18 }, (_, i) => ({
      id: i,
      left: rand(3, 97),
      top: rand(5, 88),
      size: rand(4, 11),
      dur: rand(1.2, 2.8),
      delay: rand(0, 4),
    })),
  );

  const rays = useMemo2(() =>
    Array.from({ length: 7 }, (_, i) => ({
      id: i,
      left: 5 + i * 13,
      dur: rand(3, 6),
      delay: rand(0, 3),
      height: rand(35, 65),
    })),
  );

  const stars = useMemo2(() =>
    Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: rand(5, 95),
      top: rand(2, 20),
      dur: rand(2, 4),
      delay: rand(0, 3),
      size: rand(10, 18),
    })),
  );

  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`,
      "_blank",
    );
  };

  return (
    <div style={s.page}>
      <style>{css}</style>

      {/* Light rays */}
      {rays.map((r) => (
        <div
          key={r.id}
          className="ray"
          style={{
            left: `${r.left}%`,
            height: `${r.height}%`,
            animationDuration: `${r.dur}s`,
            animationDelay: `${r.delay}s`,
          }}
        />
      ))}

      {/* Stars top */}
      {stars.map((st) => (
        <div
          key={st.id}
          className="star-bg"
          style={{
            left: `${st.left}%`,
            top: `${st.top}%`,
            width: st.size,
            height: st.size,
            animationDuration: `${st.dur}s`,
            animationDelay: `${st.delay}s`,
          }}
        >
          ✦
        </div>
      ))}

      {/* Bubbles */}
      {bubbles.map((b) => (
        <div
          key={b.id}
          className="bubble"
          style={{
            left: `${b.left}%`,
            width: b.size,
            height: b.size,
            bottom: `${b.startY}%`,
            animationDuration: `${b.dur}s`,
            animationDelay: `${b.delay}s`,
          }}
        />
      ))}

      {/* Sparkles */}
      {sparkles.map((sp) => (
        <div
          key={sp.id}
          className="sparkle-dot"
          style={{
            left: `${sp.left}%`,
            top: `${sp.top}%`,
            width: sp.size,
            height: sp.size,
            animationDuration: `${sp.dur}s`,
            animationDelay: `${sp.delay}s`,
          }}
        />
      ))}

      {/* Floating fish */}
      <div
        className="fish fish1"
        style={{ top: "18%", animationDuration: "14s", animationDelay: "1s" }}
      >
        🐠
      </div>
      <div
        className="fish fish1"
        style={{
          top: "42%",
          animationDuration: "18s",
          animationDelay: "7s",
          fontSize: 20,
        }}
      >
        🐡
      </div>
      <div
        className="fish fish2"
        style={{
          top: "30%",
          animationDuration: "16s",
          animationDelay: "4s",
          fontSize: 22,
        }}
      >
        🐟
      </div>
      <div
        className="fish fish2"
        style={{
          top: "62%",
          animationDuration: "20s",
          animationDelay: "11s",
          fontSize: 16,
        }}
      >
        🐠
      </div>
      <div
        className="fish fish1"
        style={{
          top: "75%",
          animationDuration: "12s",
          animationDelay: "2s",
          fontSize: 18,
        }}
      >
        🐟
      </div>
      <div
        className="jelly"
        style={{ left: "8%", animationDuration: "8s", animationDelay: "0s" }}
      >
        🪼
      </div>
      <div
        className="jelly"
        style={{
          left: "82%",
          animationDuration: "10s",
          animationDelay: "3s",
          fontSize: 20,
        }}
      >
        🪼
      </div>

      {/* Seaweed bottom */}
      <div style={s.seaweedRow}>
        {["🌿", "🌱", "🌿", "🌱", "🌿", "🌱", "🌿", "🌱", "🌿", "🌱", "🌿"].map(
          (e, i) => (
            <span
              key={i}
              className="seaweed"
              style={{
                fontSize: i % 3 === 0 ? 28 : 22,
                animationDuration: `${2.5 + (i % 3) * 0.7}s`,
                animationDelay: `${i * 0.3}s`,
              }}
            >
              {e}
            </span>
          ),
        )}
      </div>

      {/* Coral bottom */}
      <div style={s.coralRow}>
        <span style={{ fontSize: 32 }}>🪸</span>
        <span style={{ fontSize: 24 }}>⭐</span>
        <span style={{ fontSize: 36 }}>🪸</span>
        <span style={{ fontSize: 20 }}>🐚</span>
        <span style={{ fontSize: 34 }}>🪸</span>
        <span style={{ fontSize: 22 }}>⭐</span>
        <span style={{ fontSize: 30 }}>🪸</span>
      </div>

      {/* === INVITATION CARD === */}
      <div className={`card ${visible ? "card-in" : ""}`} style={s.card}>
        {/* Pearl border dots */}
        <div style={s.pearlTop}>
          {["🐚", "⭐", "🐚", "⭐", "🐚", "⭐", "🐚"].map((e, i) => (
            <span
              key={i}
              style={{
                fontSize: i === 3 ? 20 : 14,
                animationDelay: `${i * 0.2}s`,
              }}
              className="pearl-bounce"
            >
              {e}
            </span>
          ))}
        </div>

        {/* Ariel hero */}
        <div style={s.arielWrap}>
          <div className="ariel-glow" />
          <div className="ariel-emoji">🧜‍♀️</div>
          <div className={`star-pop ${starPop ? "star-pop-in" : ""}`}>✨</div>
        </div>

        {/* Invite label */}
        <p className="label-small">— Você está convidada! —</p>

        {/* Name */}
        <h1 className="name-title">Angelina</h1>

        {/* Age badge */}
        <div className="age-badge">
          <span>🎀</span>
          <span>4 Aninhos!</span>
          <span>🎀</span>
        </div>

        {/* Celebration text */}
        <p className="celebration-text">Venha comemorar comigo!</p>

        <div style={s.divider} />

        {/* Info grid */}
        <div style={s.infoGrid}>
          {/* Date */}
          <div style={s.infoCard} className="info-card-anim">
            <span style={s.infoIcon}>📅</span>
            <p style={s.infoLabel}>Data</p>
            <p style={s.infoValue}>
              5 de Maio
              <br />
              2026
            </p>
          </div>

          {/* Time */}
          <div style={s.infoCard} className="info-card-anim" data-delay="0.1">
            <span style={s.infoIcon}>🕖</span>
            <p style={s.infoLabel}>Horário</p>
            <p style={s.infoValue}>19:00h</p>
          </div>

          {/* Location - full width */}
          <div
            style={{ ...s.infoCard, gridColumn: "1 / -1" }}
            className="info-card-anim"
          >
            <span style={s.infoIcon}>📍</span>
            <p style={s.infoLabel}>Local</p>
            <p style={{ ...s.infoValue, fontSize: "clamp(11px, 3.2vw, 14px)" }}>
              Rua Espanha, nº 50 — Euro Garden
            </p>
            <p
              style={{
                ...s.infoValue,
                color: "#a8f4ff",
                fontWeight: 600,
                fontSize: "clamp(12px, 3.5vw, 15px)",
                marginTop: 2,
              }}
            >
              ✨ Espaço Lê Bistro ✨
            </p>
          </div>
        </div>

        <div style={s.divider} />

        {/* RSVP */}
        <p style={s.rsvpText}>Confirme sua presença pelo WhatsApp:</p>
        <button className="whatsapp-btn" onClick={handleWhatsApp}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20.4 3.6A11.9 11.9 0 0012 0C5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.6 6L0 24l6.2-1.6A12 12 0 0012 24c6.6 0 12-5.4 12-12 0-3.2-1.2-6.2-3.6-8.4zM12 22c-1.8 0-3.6-.5-5.1-1.4l-.4-.2-3.7.9 1-3.6-.2-.4A10 10 0 012 12C2 6.5 6.5 2 12 2s10 4.5 10 10-4.5 10-10 10zm5.5-7.4c-.3-.2-1.8-.9-2.1-1s-.5-.1-.7.1c-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.6-2.1-.2-.3 0-.5.1-.6l.5-.5.3-.6.1-.6c0-.2-.1-.4-.2-.6L8.3 8c-.3-.7-.6-.7-.8-.7H7c-.2 0-.6.1-.9.4C5.8 8 5 8.8 5 10.3s1.1 3 1.2 3.2c.2.2 2.1 3.2 5 4.5.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4l-.3-.3z" />
          </svg>
          Confirmar Presença 🎉
        </button>

        {/* Bottom pearls */}
        <div style={{ ...s.pearlTop, marginTop: 18, marginBottom: 0 }}>
          {["⭐", "🐚", "🌊", "🐠", "🌊", "🐚", "⭐"].map((e, i) => (
            <span
              key={i}
              style={{ fontSize: 14, animationDelay: `${i * 0.15}s` }}
              className="pearl-bounce"
            >
              {e}
            </span>
          ))}
        </div>

        <p style={s.footerText}>Com todo amor 💙 Angelina e família</p>
      </div>

      {/* Bottom wave SVG */}
      <div style={s.waveContainer}>
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          style={{ width: "200%", height: 80, display: "block" }}
          className="wave-svg"
        >
          <path
            d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,120 L0,120 Z"
            fill="rgba(6,30,80,0.4)"
          />
        </svg>
      </div>
    </div>
  );
}

const s = {
  page: {
    minHeight: "100vh",
    background:
      "linear-gradient(180deg, #020b1a 0%, #041830 8%, #062060 20%, #083b85 32%, #0b5fa0 45%, #1089bc 58%, #16bcc8 70%, #1ed8c8 80%, #2ef0c0 90%, #56ffd8 100%)",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "24px 16px 180px",
    fontFamily: "'Nunito', sans-serif",
  },
  card: {
    width: "100%",
    maxWidth: 420,
    background:
      "linear-gradient(160deg, rgba(6,30,90,0.75) 0%, rgba(10,60,130,0.65) 40%, rgba(5,20,70,0.8) 100%)",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    borderRadius: 28,
    border: "2px solid rgba(100,200,255,0.35)",
    boxShadow:
      "0 0 0 1px rgba(255,255,255,0.08), 0 0 60px rgba(30,180,220,0.25), 0 30px 80px rgba(0,0,40,0.5)",
    padding: "22px 20px 24px",
    position: "relative",
    zIndex: 10,
    marginTop: 10,
  },
  pearlTop: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
    marginBottom: 14,
  },
  arielWrap: {
    textAlign: "center",
    position: "relative",
    marginBottom: 10,
  },
  divider: {
    width: "100%",
    height: 1.5,
    background:
      "linear-gradient(90deg, transparent, rgba(100,220,255,0.5), rgba(255,120,180,0.5), rgba(100,220,255,0.5), transparent)",
    margin: "14px 0",
    borderRadius: 1,
  },
  infoGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 10,
    marginBottom: 14,
  },
  infoCard: {
    background: "rgba(255,255,255,0.07)",
    border: "1px solid rgba(100,200,255,0.2)",
    borderRadius: 16,
    padding: "12px 8px",
    textAlign: "center",
  },
  infoIcon: {
    fontSize: 22,
    display: "block",
    marginBottom: 4,
  },
  infoLabel: {
    fontSize: 10,
    color: "rgba(160,220,255,0.7)",
    textTransform: "uppercase",
    letterSpacing: 1.5,
    fontWeight: 700,
    marginBottom: 3,
  },
  infoValue: {
    fontSize: "clamp(12px,3.5vw,15px)",
    color: "#fff",
    fontWeight: 700,
    lineHeight: 1.35,
    fontFamily: "'Nunito', sans-serif",
  },
  rsvpText: {
    fontSize: 13,
    color: "rgba(180,230,255,0.75)",
    textAlign: "center",
    marginBottom: 10,
    fontFamily: "'Dancing Script', cursive",
    fontSize: 15,
  },
  footerText: {
    fontFamily: "'Dancing Script', cursive",
    fontSize: 14,
    color: "rgba(160,220,255,0.55)",
    textAlign: "center",
    marginTop: 12,
  },
  seaweedRow: {
    position: "absolute",
    bottom: 80,
    left: 0,
    right: 0,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "flex-end",
    zIndex: 2,
    pointerEvents: "none",
  },
  coralRow: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "flex-end",
    zIndex: 3,
    pointerEvents: "none",
    padding: "0 10px",
  },
  waveContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 4,
    overflow: "hidden",
    pointerEvents: "none",
  },
};

const css = `
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;600;700&family=Pacifico&family=Nunito:wght@400;600;700;900&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

/* Light rays */
.ray {
  position: absolute;
  top: 0;
  width: 80px;
  background: linear-gradient(180deg, rgba(100,200,255,0.12), transparent);
  border-radius: 0 0 40px 40px;
  transform-origin: top center;
  animation: ray-sway ease-in-out infinite;
  pointer-events: none;
  z-index: 0;
}
@keyframes ray-sway {
  0%,100%{transform:skewX(-6deg);opacity:0.4}
  50%{transform:skewX(6deg);opacity:0.75}
}

/* Stars background */
.star-bg {
  position: absolute;
  color: rgba(255,240,150,0.85);
  font-size: 14px;
  animation: twinkle-star ease-in-out infinite;
  pointer-events: none;
  z-index: 1;
  text-shadow: 0 0 6px rgba(255,240,150,0.8);
}
@keyframes twinkle-star {
  0%,100%{opacity:0;transform:scale(0.6)}
  50%{opacity:1;transform:scale(1.1)}
}

/* Bubbles */
.bubble {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 28%, rgba(255,255,255,0.55), rgba(100,200,255,0.12));
  border: 1px solid rgba(255,255,255,0.35);
  animation: bubble-rise linear infinite;
  pointer-events: none;
  z-index: 1;
}
@keyframes bubble-rise {
  0%{transform:translateY(0) translateX(0);opacity:0}
  8%{opacity:0.75}
  88%{opacity:0.5}
  100%{transform:translateY(-110vh) translateX(15px);opacity:0}
}

/* Sparkles */
.sparkle-dot {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle, #fff 0%, #c0f0ff 40%, transparent 70%);
  animation: sparkle-pop ease-in-out infinite;
  pointer-events: none;
  z-index: 1;
}
@keyframes sparkle-pop {
  0%,100%{opacity:0;transform:scale(0)}
  50%{opacity:1;transform:scale(1)}
}

/* Fish */
.fish {
  position: absolute;
  font-size: 26px;
  pointer-events: none;
  z-index: 2;
  filter: drop-shadow(0 2px 6px rgba(0,0,0,0.3));
}
.fish1 { animation: fish-swim linear infinite; }
.fish2 { animation: fish-swim-rev linear infinite; }
@keyframes fish-swim {
  0%{transform:translateX(-80px) scaleX(1);opacity:0}
  5%{opacity:1}
  95%{opacity:1}
  100%{transform:translateX(calc(100vw + 80px)) scaleX(1);opacity:0}
}
@keyframes fish-swim-rev {
  0%{transform:translateX(calc(100vw + 80px)) scaleX(-1);opacity:0}
  5%{opacity:1}
  95%{opacity:1}
  100%{transform:translateX(-80px) scaleX(-1);opacity:0}
}

/* Jellyfish */
.jelly {
  position: absolute;
  top: 60%;
  font-size: 28px;
  pointer-events: none;
  z-index: 2;
  animation: jelly-bob ease-in-out infinite;
}
@keyframes jelly-bob {
  0%,100%{transform:translateY(0)}
  50%{transform:translateY(-18px)}
}

/* Seaweed */
.seaweed {
  display: inline-block;
  transform-origin: bottom center;
  animation: sway ease-in-out infinite;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));
}
@keyframes sway {
  0%,100%{transform:rotate(-10deg)}
  50%{transform:rotate(10deg)}
}

/* Wave */
.wave-svg {
  animation: wave-scroll linear infinite;
}
@keyframes wave-scroll {
  0%{transform:translateX(0)}
  100%{transform:translateX(-50%)}
}

/* Card entrance */
.card {
  opacity: 0;
  transform: translateY(40px) scale(0.97);
  transition: opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1);
}
.card-in {
  opacity: 1;
  transform: translateY(0) scale(1);
}

/* Ariel */
.ariel-emoji {
  font-size: clamp(72px,22vw,96px);
  display: block;
  line-height: 1.05;
  animation: ariel-float ease-in-out 3s infinite;
  filter: drop-shadow(0 4px 18px rgba(30,200,255,0.7));
  position: relative;
  z-index: 2;
}
@keyframes ariel-float {
  0%,100%{transform:translateY(0)}
  50%{transform:translateY(-14px)}
}
.ariel-glow {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%,-50%);
  width: clamp(90px,26vw,120px);
  height: clamp(90px,26vw,120px);
  border-radius: 50%;
  background: radial-gradient(circle, rgba(30,200,255,0.25) 0%, transparent 70%);
  animation: glow-pulse ease-in-out 3s infinite;
  z-index: 1;
}
@keyframes glow-pulse {
  0%,100%{transform:translate(-50%,-50%) scale(0.85);opacity:0.5}
  50%{transform:translate(-50%,-50%) scale(1.25);opacity:1}
}
.star-pop {
  position: absolute;
  top: 0; right: 10px;
  font-size: 28px;
  opacity: 0;
  transform: scale(0) rotate(-30deg);
  transition: opacity 0.5s ease, transform 0.5s cubic-bezier(0.34,1.56,0.64,1);
  z-index: 3;
}
.star-pop-in {
  opacity: 1;
  transform: scale(1) rotate(0deg);
  animation: star-spin 4s ease-in-out 0.5s infinite;
}
@keyframes star-spin {
  0%,100%{transform:scale(1) rotate(0deg)}
  50%{transform:scale(1.3) rotate(20deg)}
}

/* Pearl bounce */
.pearl-bounce {
  display: inline-block;
  animation: pearl-b ease-in-out 2s infinite;
}
@keyframes pearl-b {
  0%,100%{transform:translateY(0)}
  50%{transform:translateY(-4px)}
}

/* Label small */
.label-small {
  font-family: 'Dancing Script', cursive;
  font-size: clamp(12px,3.5vw,15px);
  color: rgba(180,230,255,0.8);
  text-align: center;
  letter-spacing: 2px;
  margin-bottom: 4px;
}

/* Name */
.name-title {
  font-family: 'Pacifico', cursive;
  font-size: clamp(42px,13vw,62px);
  color: #fff;
  text-align: center;
  line-height: 1.05;
  margin-bottom: 10px;
  animation: name-glow 4s ease-in-out infinite;
}
@keyframes name-glow {
  0%,100%{text-shadow:0 0 20px rgba(80,200,255,0.7),0 0 40px rgba(80,200,255,0.4),0 4px 10px rgba(0,0,50,0.5)}
  50%{text-shadow:0 0 30px rgba(255,120,190,0.8),0 0 60px rgba(255,120,190,0.5),0 4px 10px rgba(0,0,50,0.5)}
}

/* Age badge */
.age-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, #e040a0, #9b22d4);
  color: #fff;
  font-family: 'Pacifico', cursive;
  font-size: clamp(14px,4vw,18px);
  padding: 7px 20px;
  border-radius: 30px;
  box-shadow: 0 4px 18px rgba(200,60,180,0.5), 0 1px 0 rgba(255,255,255,0.2) inset;
  margin-bottom: 14px;
  animation: badge-bob 2.5s ease-in-out infinite;
}
@keyframes badge-bob {
  0%,100%{transform:scale(1)}
  50%{transform:scale(1.05)}
}

/* Celebration text */
.celebration-text {
  font-family: 'Dancing Script', cursive;
  font-size: clamp(18px,5.5vw,26px);
  color: #e0f8ff;
  text-align: center;
  font-weight: 700;
  text-shadow: 0 2px 10px rgba(0,0,50,0.4);
  margin-bottom: 2px;
}

/* WhatsApp button */
.whatsapp-btn {
  width: 100%;
  background: linear-gradient(135deg, #22c55e, #16a34a);
  color: white;
  font-family: 'Nunito', sans-serif;
  font-size: clamp(15px,4.5vw,18px);
  font-weight: 900;
  padding: 16px 20px;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  box-shadow: 0 6px 24px rgba(34,197,94,0.5), 0 2px 8px rgba(0,0,0,0.3);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  letter-spacing: 0.3px;
  animation: btn-pulse 2.5s ease-in-out infinite;
}
@keyframes btn-pulse {
  0%,100%{box-shadow:0 6px 24px rgba(34,197,94,0.5),0 2px 8px rgba(0,0,0,0.3)}
  50%{box-shadow:0 8px 32px rgba(34,197,94,0.75),0 4px 14px rgba(0,0,0,0.35)}
}
.whatsapp-btn:active { transform: scale(0.96); }

/* Info card anim */
.info-card-anim {
  animation: card-shimmer 5s ease-in-out infinite;
}
@keyframes card-shimmer {
  0%,100%{border-color:rgba(100,200,255,0.2)}
  50%{border-color:rgba(255,150,200,0.35)}
}

/* Mobile safe */
@media (max-width: 360px) {
  .card { padding: 18px 14px 20px !important; border-radius: 20px !important; }
  .name-title { font-size: 38px !important; }
}
@media (min-width: 768px) {
  .card { padding: 30px 28px 32px !important; }
}
`;
