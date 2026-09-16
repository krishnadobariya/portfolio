"use client";

import React, { useState } from "react";
import { CAPABILITIES, CapabilityItem } from "@/data/portfolioData";
import { Server, Database, ShieldCheck, CreditCard, Workflow, Cloud, Zap, Cpu, Check, ChevronDown, ChevronUp } from "lucide-react";

export const Capabilities = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const iconMap: Record<string, any> = {
    Server,
    Database,
    ShieldCheck,
    CreditCard,
    Workflow,
    Cloud,
    Zap,
    Cpu
  };

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="capabilities" className="section" style={{ backgroundColor: "rgba(10, 15, 29, 0.4)" }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto 56px auto" }}>
          <div className="section-tag" style={{ margin: "0 auto 16px auto" }}>
            <span className="dot" />
            <span>ENGINEERING CAPABILITIES</span>
          </div>
          <h2 className="section-title">
            What I Bring to a <span className="text-gradient">Production Team</span>
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            5+ years of delivering high-impact engineering across backend systems, database schemas, financial integrations, and scalable cloud deployments.
          </p>
        </div>

        {/* Capabilities 8-Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px"
          }}
          className="capabilities-grid"
        >
          {CAPABILITIES.map((item, index) => {
            const Icon = iconMap[item.iconName] || Server;
            const isExpanded = expandedId === item.id;

            return (
              <div
                key={item.id}
                className="glass-card"
                onClick={() => toggleExpand(item.id)}
                style={{
                  padding: "26px 22px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  cursor: "pointer",
                  borderColor: isExpanded ? "var(--cyan-400)" : "var(--border-card)",
                  boxShadow: isExpanded ? "0 0 25px rgba(56, 189, 248, 0.2)" : "var(--shadow-card)",
                  transition: "all 0.25s ease"
                }}
              >
                <div>
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      background: "rgba(56, 189, 248, 0.1)",
                      border: "1px solid rgba(56, 189, 248, 0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--cyan-400)",
                      marginBottom: "18px"
                    }}
                  >
                    <Icon size={22} />
                  </div>

                  <h3
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      marginBottom: "8px"
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "0.86rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.55,
                      marginBottom: isExpanded ? "16px" : "0"
                    }}
                  >
                    {item.shortDesc}
                  </p>

                  {/* Expanded Detailed Points */}
                  {isExpanded && (
                    <div
                      style={{
                        paddingTop: "14px",
                        borderTop: "1px solid var(--border-subtle)",
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px"
                      }}
                    >
                      {item.detailedPoints.map((pt, pIdx) => (
                        <div
                          key={pIdx}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "8px",
                            fontSize: "0.8rem",
                            color: "var(--text-highlight)",
                            lineHeight: 1.45
                          }}
                        >
                          <span style={{ color: "var(--emerald-400)", fontWeight: 700 }}>✓</span>
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "16px",
                    paddingTop: "12px",
                    borderTop: "1px solid rgba(255, 255, 255, 0.05)",
                    fontSize: "0.76rem",
                    fontFamily: "var(--font-mono)",
                    color: isExpanded ? "var(--cyan-400)" : "var(--text-muted)"
                  }}
                >
                  <span>{isExpanded ? "Hide details" : "Deep dive"}</span>
                  {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1100px) {
          .capabilities-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .capabilities-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
