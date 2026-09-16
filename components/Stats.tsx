"use client";

import React from "react";
import { QUICK_STATS } from "@/data/portfolioData";
import { Clock, Layers, Cpu, Compass } from "lucide-react";

export const Stats = () => {
  const icons = [Clock, Layers, Cpu, Compass];

  return (
    <section
      style={{
        position: "relative",
        paddingTop: "20px",
        paddingBottom: "60px",
        zIndex: 10
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
            background: "rgba(15, 23, 42, 0.5)",
            backdropFilter: "blur(16px)",
            border: "1px solid var(--border-card)",
            borderRadius: "24px",
            padding: "32px 28px",
            boxShadow: "var(--shadow-card)"
          }}
          className="stats-grid"
        >
          {QUICK_STATS.map((stat, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={stat.label}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  padding: "8px 12px",
                  position: "relative"
                }}
              >
                {/* Micro accent top line */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "12px"
                  }}
                >
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "8px",
                      background: "rgba(56, 189, 248, 0.1)",
                      border: "1px solid rgba(56, 189, 248, 0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--cyan-400)"
                    }}
                  >
                    <Icon size={16} />
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.72rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      color: "var(--text-muted)"
                    }}
                  >
                    Track Record
                  </span>
                </div>

                <div
                  style={{
                    fontSize: "clamp(2rem, 3.2vw, 2.8rem)",
                    fontWeight: 800,
                    fontFamily: "var(--font-mono)",
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                    marginBottom: "8px",
                    background:
                      index === 0
                        ? "linear-gradient(135deg, #38bdf8 0%, #6366f1 100%)"
                        : index === 1
                        ? "linear-gradient(135deg, #34d399 0%, #10b981 100%)"
                        : index === 2
                        ? "linear-gradient(135deg, #a855f7 0%, #ec4899 100%)"
                        : "linear-gradient(135deg, #fbbf24 0%, #f97316 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                  }}
                >
                  {stat.value}
                </div>

                <div
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: "4px"
                  }}
                >
                  {stat.label}
                </div>

                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.4
                  }}
                >
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 960px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 24px !important;
          }
        }
        @media (max-width: 540px) {
          .stats-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
      `}</style>
    </section>
  );
};
