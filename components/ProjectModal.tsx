"use client";

import React, { useEffect, useState } from "react";
import { ProjectItem } from "@/data/portfolioData";
import { X, ExternalLink, ShieldCheck, Database, Server, Layers, AlertCircle, CheckCircle2, ArrowRight, Code } from "lucide-react";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<"overview" | "architecture" | "challenges">("overview");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(3, 7, 18, 0.85)",
        backdropFilter: "blur(16px)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px"
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "880px",
          maxHeight: "90vh",
          backgroundColor: "#0a0f1d",
          border: "1px solid rgba(56, 189, 248, 0.3)",
          borderRadius: "24px",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.9), 0 0 35px rgba(56, 189, 248, 0.15)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          position: "relative"
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div
          style={{
            padding: "24px 32px",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            background: "linear-gradient(180deg, rgba(30, 41, 59, 0.4) 0%, transparent 100%)"
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  color: "var(--cyan-400)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em"
                }}
              >
                {project.category}
              </span>
              {project.status && (
                <span className="status-pill in-progress">
                  <span className="pulse-dot" />
                  {project.status}
                </span>
              )}
            </div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800, color: "#ffffff" }}>{project.name}</h2>
            <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", marginTop: "4px" }}>
              {project.tagline}
            </p>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <a
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ padding: "8px 16px", fontSize: "0.85rem" }}
            >
              <span>Live Site</span>
              <ExternalLink size={14} />
            </a>
            <button
              onClick={onClose}
              aria-label="Close modal"
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "10px",
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid var(--border-card)",
                color: "var(--text-secondary)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.2s ease"
              }}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div
          style={{
            display: "flex",
            gap: "24px",
            padding: "0 32px",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
            backgroundColor: "rgba(15, 23, 42, 0.3)"
          }}
        >
          {[
            { id: "overview", label: "Overview & Architecture" },
            { id: "architecture", label: "Technical Breakdown" },
            { id: "challenges", label: "Challenges & Solutions" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              style={{
                padding: "14px 0",
                fontSize: "0.9rem",
                fontWeight: 600,
                color: activeTab === tab.id ? "var(--cyan-400)" : "var(--text-muted)",
                borderBottom: activeTab === tab.id ? "2px solid var(--cyan-400)" : "2px solid transparent",
                transition: "all 0.2s ease"
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Modal Content Body */}
        <div
          style={{
            padding: "32px",
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "28px"
          }}
        >
          {activeTab === "overview" && (
            <>
              {/* Product Overview */}
              <div>
                <h3
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: "8px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px"
                  }}
                >
                  <Server size={18} color="var(--cyan-400)" />
                  Product Overview
                </h3>
                <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.65 }}>
                  {project.description}
                </p>
              </div>

              {/* Problem & Solution Grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "20px"
                }}
                className="modal-split-grid"
              >
                <div
                  style={{
                    padding: "20px",
                    borderRadius: "16px",
                    background: "rgba(239, 68, 68, 0.05)",
                    border: "1px solid rgba(239, 68, 68, 0.2)"
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: "#f87171",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      display: "block",
                      marginBottom: "8px"
                    }}
                  >
                    Business Problem
                  </span>
                  <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                    {project.businessProblem}
                  </p>
                </div>

                <div
                  style={{
                    padding: "20px",
                    borderRadius: "16px",
                    background: "rgba(16, 185, 129, 0.05)",
                    border: "1px solid rgba(16, 185, 129, 0.2)"
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: "#34d399",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      display: "block",
                      marginBottom: "8px"
                    }}
                  >
                    Architectural Solution
                  </span>
                  <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Krishna's Core Engineering Responsibilities */}
              <div>
                <h3
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: "12px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px"
                  }}
                >
                  <CheckCircle2 size={18} color="var(--emerald-400)" />
                  Krishna&apos;s Engineering Responsibilities
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {project.myRole.map((role, idx) => (
                    <div
                      key={idx}
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
                      <span style={{ color: "var(--cyan-400)", fontWeight: 700, fontSize: "0.9rem" }}>❯</span>
                      <span style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.55 }}>
                        {role}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {activeTab === "architecture" && (
            <>
              {/* Technical Areas Breakdown */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "16px"
                }}
                className="modal-split-grid"
              >
                {project.technicalAreas.map((area, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: "18px",
                      borderRadius: "14px",
                      background: "rgba(15, 23, 42, 0.6)",
                      border: "1px solid rgba(255, 255, 255, 0.08)"
                    }}
                  >
                    <h4
                      style={{
                        fontSize: "0.95rem",
                        fontWeight: 700,
                        color: "var(--text-highlight)",
                        marginBottom: "10px",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px"
                      }}
                    >
                      <Layers size={15} color="var(--cyan-400)" />
                      {area.title}
                    </h4>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                      {area.items.map((item, itemIdx) => (
                        <span
                          key={itemIdx}
                          className="tech-pill"
                          style={{ fontSize: "0.78rem", padding: "3px 8px" }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Full Tech Stack */}
              <div>
                <h3
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: "10px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px"
                  }}
                >
                  <Code size={18} color="var(--indigo-400)" />
                  Confirmed Technology Stack
                </h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {project.techStack.map((tech) => (
                    <span key={tech} className="tech-pill featured" style={{ padding: "6px 14px" }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </>
          )}

          {activeTab === "challenges" && (
            <>
              {/* Technical Challenges Solved */}
              <div>
                <h3
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: "12px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px"
                  }}
                >
                  <AlertCircle size={18} color="var(--amber-400)" />
                  Engineering Challenges & Solutions
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {project.challenges.map((ch, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: "14px 16px",
                        borderRadius: "12px",
                        background: "rgba(245, 158, 11, 0.04)",
                        border: "1px solid rgba(245, 158, 11, 0.2)",
                        fontSize: "0.88rem",
                        color: "var(--text-secondary)",
                        lineHeight: 1.6
                      }}
                    >
                      <strong style={{ color: "var(--amber-400)", display: "block", marginBottom: "4px" }}>
                        Challenge #{idx + 1}
                      </strong>
                      {ch}
                    </div>
                  ))}
                </div>
              </div>

              {/* Factual Production Outcomes */}
              <div>
                <h3
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: "12px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px"
                  }}
                >
                  <CheckCircle2 size={18} color="var(--emerald-400)" />
                  Verified Production Outcomes
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {project.outcomes.map((out, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "10px",
                        fontSize: "0.88rem",
                        color: "var(--text-secondary)",
                        lineHeight: 1.55
                      }}
                    >
                      <span style={{ color: "var(--emerald-400)", fontWeight: 700 }}>✓</span>
                      <span>{out}</span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>

        {/* Modal Footer */}
        <div
          style={{
            padding: "18px 32px",
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "rgba(10, 15, 29, 0.95)"
          }}
        >
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--text-muted)" }}>
            Verified Production Application Showcase
          </span>
          <a
            href={project.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ padding: "8px 20px", fontSize: "0.85rem" }}
          >
            <span>Visit {project.name}</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 680px) {
          .modal-split-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};
