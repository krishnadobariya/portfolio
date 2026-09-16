"use client";

import React, { useState } from "react";
import { TECH_ECOSYSTEM_NODES } from "@/data/portfolioData";
import { Code2, Globe, Server, Layers, Database, Table2, Cloud, HardDrive, GitBranch, Smartphone, Zap } from "lucide-react";

export const ArchitectureVisualizer = () => {
  const [selectedNode, setSelectedNode] = useState<string>("node");

  const iconMap: Record<string, any> = {
    Code2,
    Globe,
    Server,
    Layers,
    Database,
    Table2,
    Cloud,
    HardDrive,
    GitBranch,
    Smartphone
  };

  const layers = [
    {
      title: "1. Presentation Layer",
      desc: "Client interfaces, state management & SSR",
      nodeIds: ["react", "next", "reactnative"]
    },
    {
      title: "2. Application & API Layer",
      desc: "Business logic, auth pipelines & REST services",
      nodeIds: ["node", "express"]
    },
    {
      title: "3. Data Persistence Tier",
      desc: "Document collections & relational database schemas",
      nodeIds: ["mongo", "mysql"]
    },
    {
      title: "4. Cloud & DevOps Delivery",
      desc: "Infrastructure hosting, automated CI/CD & servers",
      nodeIds: ["aws", "do", "git"]
    }
  ];

  return (
    <section className="section" style={{ backgroundColor: "rgba(10, 15, 29, 0.4)", position: "relative" }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto 56px auto" }}>
          <div className="section-tag" style={{ margin: "0 auto 16px auto" }}>
            <span className="dot" />
            <span>SYSTEM TOPOLOGY</span>
          </div>
          <h2 className="section-title">
            The <span className="text-gradient">Technology Ecosystem</span>
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            An interconnected architectural stack powering high-availability production web applications from client viewports to cloud compute.
          </p>
        </div>

        {/* Ecosystem Interactive Graph */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "24px",
            position: "relative"
          }}
          className="layers-grid"
        >
          {layers.map((layer, lIdx) => (
            <div
              key={layer.title}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                padding: "24px 20px",
                background: "rgba(15, 23, 42, 0.5)",
                backdropFilter: "blur(12px)",
                border: "1px solid var(--border-card)",
                borderRadius: "20px",
                position: "relative"
              }}
            >
              {/* Layer Title & Badge */}
              <div style={{ borderBottom: "1px solid var(--border-subtle)", paddingBottom: "12px" }}>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.74rem",
                    color: "var(--cyan-400)",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em"
                  }}
                >
                  {layer.title}
                </span>
                <p style={{ fontSize: "0.78rem", color: "var(--text-secondary)", marginTop: "4px", lineHeight: 1.4 }}>
                  {layer.desc}
                </p>
              </div>

              {/* Layer Nodes */}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {layer.nodeIds.map((nodeId) => {
                  const node = TECH_ECOSYSTEM_NODES.find((n) => n.id === nodeId);
                  if (!node) return null;
                  const Icon = iconMap[node.icon] || Server;
                  const isSelected = selectedNode === node.id;

                  return (
                    <div
                      key={node.id}
                      onClick={() => setSelectedNode(node.id)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "12px 14px",
                        borderRadius: "12px",
                        background: isSelected ? "rgba(56, 189, 248, 0.12)" : "rgba(255, 255, 255, 0.03)",
                        border: isSelected ? "1px solid var(--cyan-400)" : "1px solid rgba(255, 255, 255, 0.06)",
                        boxShadow: isSelected ? "0 0 16px rgba(56, 189, 248, 0.25)" : "none",
                        cursor: "pointer",
                        transition: "all 0.2s ease"
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <div
                          style={{
                            width: "30px",
                            height: "30px",
                            borderRadius: "8px",
                            background: isSelected ? "var(--cyan-400)" : "rgba(255, 255, 255, 0.06)",
                            color: isSelected ? "#030712" : "var(--cyan-400)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                          }}
                        >
                          <Icon size={16} />
                        </div>
                        <span
                          style={{
                            fontWeight: 600,
                            fontSize: "0.85rem",
                            color: isSelected ? "#ffffff" : "var(--text-primary)"
                          }}
                        >
                          {node.label}
                        </span>
                      </div>

                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.7rem",
                          color: isSelected ? "var(--cyan-400)" : "var(--text-dim)"
                        }}
                      >
                        {isSelected ? "●" : "→"}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Selected Tech Pipeline Insight Box */}
        <div
          style={{
            marginTop: "32px",
            background: "rgba(15, 23, 42, 0.65)",
            backdropFilter: "blur(16px)",
            border: "1px solid rgba(56, 189, 248, 0.25)",
            borderRadius: "16px",
            padding: "20px 28px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "10px",
                background: "rgba(56, 189, 248, 0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--cyan-400)"
              }}
            >
              <Zap size={20} />
            </div>
            <div>
              <span style={{ fontSize: "0.92rem", fontWeight: 700, color: "var(--text-primary)", display: "block" }}>
                Production Integration Highlight
              </span>
              <span style={{ fontSize: "0.82rem", color: "var(--text-secondary)" }}>
                Active component: <strong style={{ color: "var(--cyan-400)" }}>{TECH_ECOSYSTEM_NODES.find((n) => n.id === selectedNode)?.label}</strong> — interconnected with REST API endpoints, JWT security guards, and automated cloud CI/CD.
              </span>
            </div>
          </div>

          <a href="#projects" className="btn-secondary" style={{ padding: "8px 18px", fontSize: "0.82rem" }}>
            <span>See in Production Projects</span>
            <span>→</span>
          </a>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .layers-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .layers-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
