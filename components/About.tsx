"use client";

import React from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Database, Shield, CreditCard, Cloud, CheckCircle2, Zap } from "lucide-react";

export const About = () => {
  const pillars = [
    {
      title: "Backend & Systems Architecture",
      desc: "Structuring high-throughput REST APIs, asynchronous task queues, and clean domain services with Node.js and Express."
    },
    {
      title: "Database Design & Optimization",
      desc: "Designing document schemas in MongoDB and normalized transactional databases in MySQL with optimized query indexes."
    },
    {
      title: "Security, Auth & Verification",
      desc: "Building JWT/session authentication, role-based access control (RBAC), and multi-step KYC / director verification flows."
    },
    {
      title: "Payment Rails & Integrations",
      desc: "Integrating payment gateways, localized banking rails (PayID), and webhook handlers with idempotent transaction processing."
    },
    {
      title: "Cloud Infrastructure & CI/CD",
      desc: "Deploying and managing production applications across AWS and DigitalOcean with automated continuous integration pipelines."
    },
    {
      title: "Business Problem Solving",
      desc: "Translating complex operational workflows and business requirements into reliable, maintainable software architectures."
    }
  ];

  return (
    <section id="about" className="section" style={{ borderTop: "1px solid var(--border-subtle)" }}>
      <div className="container" style={{ maxWidth: "960px" }}>
        {/* Section Header */}
        <div style={{ marginBottom: "32px" }}>
          <div className="section-tag">
            <span className="dot" />
            <span>ABOUT ME</span>
          </div>
          <h2 className="section-title">
            Engineering solutions beyond just writing code.
          </h2>
        </div>

        {/* Narrative Paragraphs */}
        <div style={{ display: "flex", flexDirection: "column", gap: "18px", marginBottom: "40px" }}>
          <p style={{ fontSize: "1.08rem", color: "var(--text-primary)", lineHeight: 1.75, fontWeight: 500 }}>
            {PERSONAL_INFO.secondaryBio}
          </p>
          <p style={{ fontSize: "1.02rem", color: "var(--text-secondary)", lineHeight: 1.75 }}>
            {PERSONAL_INFO.thirdBio}
          </p>
        </div>

        {/* Highlight Callout */}
        <div
          style={{
            background: "rgba(56, 189, 248, 0.05)",
            border: "1px solid rgba(56, 189, 248, 0.2)",
            borderRadius: "16px",
            padding: "20px 24px",
            display: "flex",
            alignItems: "center",
            gap: "14px",
            marginBottom: "48px"
          }}
        >
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              background: "rgba(56, 189, 248, 0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--cyan-400)",
              flexShrink: 0
            }}
          >
            <CheckCircle2 size={20} />
          </div>
          <p
            style={{
              margin: 0,
              fontSize: "0.95rem",
              color: "var(--text-highlight)",
              fontWeight: 600,
              lineHeight: 1.5
            }}
          >
            &ldquo;5+ years of experience turning complex business requirements into reliable software designed for real-world production environments.&rdquo;
          </p>
        </div>

        {/* Engineering Scope Grid */}
        <div>
          <h3
            style={{
              fontSize: "1.2rem",
              fontWeight: 700,
              color: "var(--text-primary)",
              marginBottom: "20px"
            }}
          >
            Production Engineering Scope
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "18px"
            }}
            className="pillars-grid"
          >
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="glass-card"
                style={{
                  padding: "20px 22px"
                }}
              >
                <h4
                  style={{
                    fontSize: "0.98rem",
                    fontWeight: 700,
                    color: "var(--text-highlight)",
                    marginBottom: "6px"
                  }}
                >
                  {pillar.title}
                </h4>
                <p
                  style={{
                    fontSize: "0.86rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.55,
                    margin: 0
                  }}
                >
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 680px) {
          .pillars-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
