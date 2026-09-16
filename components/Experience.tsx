"use client";

import React from "react";
import { EXPERIENCE_TIMELINE } from "@/data/portfolioData";
import { Briefcase, Calendar, CheckCircle2, Shield, Terminal, ArrowRight } from "lucide-react";

export const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: "760px", marginBottom: "56px" }}>
          <div className="section-tag">
            <span className="dot" />
            <span>CAREER TRACK RECORD</span>
          </div>
          <h2 className="section-title">
            5+ Years of Building <span className="text-gradient">Production Software</span>
          </h2>
          <p className="section-subtitle">
            A continuous track record of designing, delivering, and maintaining production-grade applications across multiple business sectors.
          </p>
        </div>

        {/* Timeline Layout */}
        <div style={{ maxWidth: "920px", position: "relative", margin: "0 auto" }}>
          {/* Vertical timeline line */}
          <div
            style={{
              position: "absolute",
              top: "24px",
              bottom: "24px",
              left: "24px",
              width: "2px",
              background: "linear-gradient(180deg, var(--cyan-400) 0%, var(--indigo-500) 50%, rgba(255,255,255,0.1) 100%)",
              display: "none"
            }}
            className="timeline-bar"
          />

          {EXPERIENCE_TIMELINE.map((exp) => (
            <div
              key={exp.id}
              className="glass-card"
              style={{
                padding: "36px",
                position: "relative",
                borderLeft: "3px solid var(--cyan-400)"
              }}
            >
              {/* Card Header */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "12px",
                  marginBottom: "16px"
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: "1.45rem",
                      fontWeight: 800,
                      color: "var(--text-primary)",
                      letterSpacing: "-0.02em"
                    }}
                  >
                    {exp.role}
                  </h3>
                  <span
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      color: "var(--cyan-400)",
                      fontFamily: "var(--font-mono)"
                    }}
                  >
                    {exp.focus}
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "rgba(56, 189, 248, 0.08)",
                    border: "1px solid rgba(56, 189, 248, 0.2)",
                    padding: "6px 14px",
                    borderRadius: "9999px",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.8rem",
                    color: "var(--text-highlight)"
                  }}
                >
                  <Calendar size={14} color="var(--cyan-400)" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Description */}
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.65,
                  marginBottom: "24px"
                }}
              >
                {exp.description}
              </p>

              {/* Responsibilities Grid */}
              <div style={{ marginBottom: "28px" }}>
                <span
                  style={{
                    display: "block",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.78rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "var(--text-muted)",
                    marginBottom: "14px"
                  }}
                >
                  Core Scope & Production Responsibilities
                </span>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {exp.responsibilities.map((resp, rIdx) => (
                    <div
                      key={rIdx}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "12px",
                        padding: "10px 14px",
                        background: "rgba(255, 255, 255, 0.02)",
                        border: "1px solid rgba(255, 255, 255, 0.05)",
                        borderRadius: "10px"
                      }}
                    >
                      <CheckCircle2 size={16} color="var(--cyan-400)" style={{ flexShrink: 0, marginTop: "2px" }} />
                      <span style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.55 }}>
                        {resp}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Used */}
              <div>
                <span
                  style={{
                    display: "block",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "var(--text-muted)",
                    marginBottom: "10px"
                  }}
                >
                  Primary Production Technologies
                </span>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="tech-pill" style={{ fontSize: "0.76rem" }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
