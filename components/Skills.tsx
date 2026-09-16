"use client";

import React from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Code2, Server, Database, Cloud, ShieldCheck, Zap, CreditCard, Lock } from "lucide-react";

export const Skills = () => {
  const skillGroups = [
    {
      title: "Core Stack",
      icon: Server,
      skills: PERSONAL_INFO.primarySkills
    },
    {
      title: "Third-Party APIs & Financial Rails",
      icon: CreditCard,
      highlight: true,
      skills: [
        "Monnify (Virtual Accounts & Gateways)",
        "Monnova (Banking Infrastructure)",
        "Veriff (KYC & Identity Verification)",
        "Fireblocks (Crypto Custody & Security)",
        "KVB (FX Liquidity & Settlement Rails)",
        "Kora Pay (African & Global Payouts)",
        "PayID (Instant Banking Deposits)",
        "Stripe (Cards & Recurring Billing)"
      ]
    },
    {
      title: "Backend & Systems Architecture",
      icon: Code2,
      skills: [
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "Database Architecture",
        "Authentication & Authorization",
        "Role-Based Access Control (RBAC)",
        "Webhook Handlers & Idempotency"
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: [
        "AWS (EC2, S3, IAM)",
        "DigitalOcean",
        "CI/CD Automation",
        "Git",
        "Production Server Management",
        "Reverse Proxies & SSL"
      ]
    }
  ];

  return (
    <section id="skills" className="section" style={{ borderTop: "1px solid var(--border-subtle)" }}>
      <div className="container" style={{ maxWidth: "980px" }}>
        <div style={{ marginBottom: "36px" }}>
          <div className="section-tag">
            <span className="dot" />
            <span>SKILLS & INTEGRATIONS</span>
          </div>
          <h2 className="section-title">
            Technical Capabilities & Integrations
          </h2>
          <p className="section-subtitle">
            Core full-stack technologies, mission-critical third-party financial APIs, and cloud infrastructure used in production.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "20px"
          }}
          className="skills-grid"
        >
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <div
                key={group.title}
                className="glass-card"
                style={{
                  padding: "24px 22px",
                  borderColor: group.highlight ? "rgba(56, 189, 248, 0.35)" : "var(--border-card)",
                  background: group.highlight ? "rgba(15, 23, 42, 0.85)" : "var(--bg-card)"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "8px",
                        background: group.highlight ? "rgba(56, 189, 248, 0.15)" : "rgba(255, 255, 255, 0.05)",
                        border: `1px solid ${group.highlight ? "rgba(56, 189, 248, 0.3)" : "rgba(255, 255, 255, 0.1)"}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--cyan-400)"
                      }}
                    >
                      <Icon size={18} />
                    </div>
                    <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--text-primary)" }}>
                      {group.title}
                    </h3>
                  </div>

                  {group.highlight && (
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.7rem",
                        color: "var(--cyan-400)",
                        background: "rgba(56, 189, 248, 0.1)",
                        border: "1px solid rgba(56, 189, 248, 0.25)",
                        padding: "2px 8px",
                        borderRadius: "4px"
                      }}
                    >
                      Specialized
                    </span>
                  )}
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`tech-pill ${group.highlight ? "featured" : ""}`}
                      style={{ fontSize: "0.78rem", padding: "4px 10px" }}
                    >
                      {group.highlight && <span style={{ color: "var(--cyan-400)", marginRight: "4px" }}>⚡</span>}
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 680px) {
          .skills-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
