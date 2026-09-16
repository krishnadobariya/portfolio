"use client";

import React from "react";
import { PROJECTS_DATA } from "@/data/portfolioData";
import { ExternalLink, CheckCircle2, Server, Database, Shield, Layers } from "lucide-react";

export const Projects = () => {
  return (
    <section id="projects" className="section" style={{ borderTop: "1px solid var(--border-subtle)", backgroundColor: "rgba(10, 15, 29, 0.4)" }}>
      <div className="container" style={{ maxWidth: "1020px" }}>
        {/* Section Header */}
        <div style={{ marginBottom: "48px" }}>
          <div className="section-tag">
            <span className="dot" />
            <span>PROJECT PORTFOLIO</span>
          </div>
          <h2 className="section-title">
            Featured Production Projects
          </h2>
          <p className="section-subtitle">
            Comprehensive descriptions of production web applications, financial platforms, SaaS systems, and AI ecosystems with verified engineering roles.
          </p>
        </div>

        {/* Project Cards List */}
        <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          {PROJECTS_DATA.map((project, index) => (
            <div
              key={project.id}
              className="glass-card"
              style={{
                padding: "36px 32px",
                borderRadius: "24px"
              }}
            >
              {/* Top Meta Bar */}
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
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      color: "var(--cyan-400)",
                      background: "rgba(56, 189, 248, 0.08)",
                      border: "1px solid rgba(56, 189, 248, 0.2)",
                      padding: "4px 12px",
                      borderRadius: "9999px"
                    }}
                  >
                    {project.category}
                  </span>

                  {project.status ? (
                    <span className="status-pill in-progress">
                      <span className="pulse-dot" />
                      {project.status}
                    </span>
                  ) : (
                    <span className="status-pill live">
                      <span className="pulse-dot" />
                      Live Production
                    </span>
                  )}
                </div>

                <a
                  href={project.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ padding: "8px 16px", fontSize: "0.85rem" }}
                >
                  <span>Visit {project.name}</span>
                  <ExternalLink size={14} />
                </a>
              </div>

              {/* Title & Tagline */}
              <h3
                style={{
                  fontSize: "1.75rem",
                  fontWeight: 800,
                  color: "#ffffff",
                  letterSpacing: "-0.02em",
                  marginBottom: "6px"
                }}
              >
                {project.name}
              </h3>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "var(--cyan-400)",
                  fontFamily: "var(--font-mono)",
                  marginBottom: "18px"
                }}
              >
                {project.tagline}
              </p>

              {/* Comprehensive Description */}
              <div style={{ marginBottom: "24px" }}>
                <h4
                  style={{
                    fontSize: "0.82rem",
                    fontFamily: "var(--font-mono)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "var(--text-muted)",
                    marginBottom: "8px"
                  }}
                >
                  Project Overview
                </h4>
                <p style={{ fontSize: "0.98rem", color: "var(--text-secondary)", lineHeight: 1.7, margin: 0 }}>
                  {project.description}
                </p>
              </div>

              {/* Business Problem & Solution Grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "16px",
                  marginBottom: "24px"
                }}
                className="problem-solution-grid"
              >
                <div
                  style={{
                    padding: "16px 18px",
                    borderRadius: "14px",
                    background: "rgba(255, 255, 255, 0.02)",
                    border: "1px solid rgba(255, 255, 255, 0.06)"
                  }}
                >
                  <strong
                    style={{
                      display: "block",
                      fontSize: "0.78rem",
                      fontFamily: "var(--font-mono)",
                      color: "var(--text-muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      marginBottom: "6px"
                    }}
                  >
                    Business Problem
                  </strong>
                  <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.55, margin: 0 }}>
                    {project.businessProblem}
                  </p>
                </div>

                <div
                  style={{
                    padding: "16px 18px",
                    borderRadius: "14px",
                    background: "rgba(56, 189, 248, 0.03)",
                    border: "1px solid rgba(56, 189, 248, 0.15)"
                  }}
                >
                  <strong
                    style={{
                      display: "block",
                      fontSize: "0.78rem",
                      fontFamily: "var(--font-mono)",
                      color: "var(--cyan-400)",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      marginBottom: "6px"
                    }}
                  >
                    Engineered Solution
                  </strong>
                  <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.55, margin: 0 }}>
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Engineering Responsibilities */}
              <div style={{ marginBottom: "24px" }}>
                <h4
                  style={{
                    fontSize: "0.82rem",
                    fontFamily: "var(--font-mono)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "var(--text-muted)",
                    marginBottom: "12px"
                  }}
                >
                  Krishna&apos;s Engineering Responsibilities
                </h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {project.myRole.map((role, rIdx) => (
                    <div
                      key={rIdx}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "10px",
                        fontSize: "0.9rem",
                        color: "var(--text-secondary)",
                        lineHeight: 1.5
                      }}
                    >
                      <CheckCircle2 size={16} color="var(--cyan-400)" style={{ flexShrink: 0, marginTop: "2px" }} />
                      <span>{role}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div style={{ paddingTop: "18px", borderTop: "1px solid var(--border-subtle)" }}>
                <span
                  style={{
                    display: "block",
                    fontSize: "0.75rem",
                    fontFamily: "var(--font-mono)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "var(--text-muted)",
                    marginBottom: "10px"
                  }}
                >
                  Technology Stack
                </span>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {project.techStack.map((tech) => (
                    <span key={tech} className="tech-pill" style={{ fontSize: "0.78rem" }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 680px) {
          .problem-solution-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
