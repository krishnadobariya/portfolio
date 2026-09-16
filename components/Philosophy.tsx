"use client";

import React, { useState } from "react";
import { PHILOSOPHY_ITEMS } from "@/data/portfolioData";
import { Compass, Sparkles, Layers, ShieldCheck, Wrench, Target, Eye, Maximize2 } from "lucide-react";

export const Philosophy = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const icons = [Layers, ShieldCheck, Wrench, Target, Eye, Maximize2];

  return (
    <section id="philosophy" className="section">
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 56px auto" }}>
          <div className="section-tag" style={{ margin: "0 auto 16px auto" }}>
            <span className="dot" />
            <span>ENGINEERING MINDSET</span>
          </div>
          <h2 className="section-title">
            I don&apos;t just build features. <span className="text-gradient">I build systems.</span>
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            High-leverage engineering principles cultivated over 5+ years of building and maintaining production web applications.
          </p>
        </div>

        {/* Philosophy Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px"
          }}
          className="philosophy-grid"
        >
          {PHILOSOPHY_ITEMS.map((item, index) => {
            const Icon = icons[index % icons.length];
            const isHovered = activeCard === index;

            return (
              <div
                key={item.id}
                className="glass-card"
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
                style={{
                  padding: "32px 28px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  position: "relative"
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "20px"
                    }}
                  >
                    <div
                      style={{
                        width: "42px",
                        height: "42px",
                        borderRadius: "12px",
                        background: "rgba(99, 102, 241, 0.12)",
                        border: "1px solid rgba(99, 102, 241, 0.25)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--indigo-400)"
                      }}
                    >
                      <Icon size={20} />
                    </div>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.85rem",
                        fontWeight: 700,
                        color: "var(--text-dim)"
                      }}
                    >
                      0{index + 1}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: 800,
                      color: "var(--text-primary)",
                      marginBottom: "8px"
                    }}
                  >
                    {item.title}.
                  </h3>

                  <div
                    style={{
                      fontSize: "0.92rem",
                      fontWeight: 600,
                      color: "var(--cyan-400)",
                      marginBottom: "12px",
                      fontFamily: "var(--font-mono)"
                    }}
                  >
                    &ldquo;{item.statement}&rdquo;
                  </div>

                  <p
                    style={{
                      fontSize: "0.88rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.6,
                      margin: 0
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 960px) {
          .philosophy-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .philosophy-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
