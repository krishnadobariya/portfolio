"use client";

import React, { useEffect, useRef, useState } from "react";
import { Server, Database, Cloud, Shield, Cpu, Layers, Globe, Zap, CheckCircle2, GitBranch } from "lucide-react";

export const ArchitectureCanvas = () => {
  const [activeNode, setActiveNode] = useState<string | null>("backend");
  const [liveLogs, setLiveLogs] = useState<string[]>([
    "AUTH_GUARD :: Token verified [JWT/HMAC-256]",
    "POST /api/v1/transfers/process -> 200 OK (14ms)",
    "DB_TX :: MongoDB session committed [Ledger_Tx_892]",
    "AWS_S3 :: Secure KYC asset encrypted & synced",
    "REDIS :: Cache hit [FX_EUR_USD_RATE]",
    "SYSTEM :: 0 errors in last 24h, 99.99% uptime"
  ]);

  useEffect(() => {
    const logs = [
      "AUTH_GUARD :: Token verified [JWT/HMAC-256]",
      "POST /api/v1/transfers/process -> 200 OK (14ms)",
      "DB_TX :: MongoDB session committed [Ledger_Tx_892]",
      "AWS_S3 :: Secure KYC asset encrypted & synced",
      "REDIS :: Cache hit [FX_EUR_USD_RATE]",
      "EVENT_QUEUE :: Processed async PayID settlement",
      "MYSQL_QUERY :: Executed batch insert for order ledger",
      "CI_CD :: Auto-deployment verified on DigitalOcean",
      "RBAC :: User permission granted [role=org_admin]"
    ];

    const interval = setInterval(() => {
      const randomLog = logs[Math.floor(Math.random() * logs.length)];
      setLiveLogs((prev) => [randomLog, ...prev.slice(0, 4)]);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  const nodes = [
    {
      id: "client",
      title: "Client Layer",
      tech: "Next.js • React • Mobile",
      icon: Globe,
      status: "Active",
      color: "#38bdf8",
      details: "SSR/SSG Frontend, Responsive Dashboards & Mobile Apps"
    },
    {
      id: "gateway",
      title: "API Gateway & Security",
      tech: "JWT • RBAC • Rate Limiter",
      icon: Shield,
      status: "Secured",
      color: "#818cf8",
      details: "Token Authentication, Director KYC Verification, Route Guards"
    },
    {
      id: "backend",
      title: "Core Backend Engine",
      tech: "Node.js • Express • REST",
      icon: Server,
      status: "Healthy",
      color: "#34d399",
      details: "Business Logic, Transfer Workflows, Webhook Listeners"
    },
    {
      id: "database",
      title: "Dual Database Tier",
      tech: "MongoDB • MySQL",
      icon: Database,
      status: "Synced",
      color: "#f59e0b",
      details: "Document Store & Normalized Relational Ledger Schemas"
    },
    {
      id: "cloud",
      title: "Cloud & Infrastructure",
      tech: "AWS • DigitalOcean • CI/CD",
      icon: Cloud,
      status: "Running",
      color: "#a855f7",
      details: "Automated Deployment Pipelines, Reverse Proxies & Storage"
    }
  ];

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        borderRadius: "24px",
        background: "radial-gradient(ellipse at 50% 20%, rgba(30, 41, 59, 0.7) 0%, rgba(10, 15, 29, 0.95) 100%)",
        border: "1px solid rgba(56, 189, 248, 0.2)",
        padding: "24px",
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
        overflow: "hidden"
      }}
    >
      {/* Background Animated Gradient Mesh */}
      <div
        style={{
          position: "absolute",
          top: "-50px",
          right: "-50px",
          width: "220px",
          height: "220px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none"
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-50px",
          left: "-50px",
          width: "220px",
          height: "220px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none"
        }}
      />

      {/* Header bar of visualizer */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "20px",
          paddingBottom: "14px",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ display: "flex", gap: "6px" }}>
            <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ef4444" }} />
            <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#f59e0b" }} />
            <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#10b981" }} />
          </div>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.8rem",
              color: "var(--text-secondary)",
              fontWeight: 600
            }}
          >
            production-system-topology.svg
          </span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            fontFamily: "var(--font-mono)",
            fontSize: "0.75rem",
            color: "#34d399",
            background: "rgba(16, 185, 129, 0.1)",
            padding: "3px 10px",
            borderRadius: "9999px",
            border: "1px solid rgba(16, 185, 129, 0.25)"
          }}
        >
          <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#10b981" }} />
          LIVE PIPELINE
        </div>
      </div>

      {/* Nodes Connection Pipeline */}
      <div style={{ display: "flex", flexDirection: "column", gap: "12px", position: "relative" }}>
        {nodes.map((node, index) => {
          const isSelected = activeNode === node.id;
          const Icon = node.icon;
          return (
            <div
              key={node.id}
              onClick={() => setActiveNode(node.id)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "12px 16px",
                borderRadius: "14px",
                background: isSelected ? "rgba(30, 41, 59, 0.9)" : "rgba(15, 23, 42, 0.6)",
                border: isSelected ? `1px solid ${node.color}` : "1px solid rgba(255, 255, 255, 0.07)",
                boxShadow: isSelected ? `0 0 20px ${node.color}30` : "none",
                cursor: "pointer",
                transition: "all 0.25s ease",
                position: "relative"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "10px",
                    background: `${node.color}18`,
                    border: `1px solid ${node.color}40`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: node.color
                  }}
                >
                  <Icon size={18} />
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ fontWeight: 700, fontSize: "0.9rem", color: "var(--text-primary)" }}>
                      {node.title}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.68rem",
                        color: node.color,
                        background: `${node.color}15`,
                        padding: "2px 6px",
                        borderRadius: "4px"
                      }}
                    >
                      {node.status}
                    </span>
                  </div>
                  <span
                    style={{
                      fontSize: "0.78rem",
                      color: "var(--text-secondary)",
                      fontFamily: "var(--font-mono)",
                      display: "block",
                      marginTop: "2px"
                    }}
                  >
                    {node.tech}
                  </span>
                </div>
              </div>

              <div
                style={{
                  fontSize: "0.75rem",
                  color: isSelected ? node.color : "var(--text-dim)",
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  gap: "4px"
                }}
              >
                {isSelected ? "● Focused" : "Inspect →"}
              </div>
            </div>
          );
        })}
      </div>

      {/* Node Detail Box */}
      {activeNode && (
        <div
          style={{
            marginTop: "16px",
            padding: "12px 14px",
            borderRadius: "10px",
            background: "rgba(56, 189, 248, 0.05)",
            border: "1px dashed rgba(56, 189, 248, 0.25)",
            display: "flex",
            alignItems: "center",
            gap: "10px"
          }}
        >
          <Zap size={16} color="var(--cyan-400)" />
          <span style={{ fontSize: "0.8rem", color: "var(--text-highlight)", lineHeight: 1.4 }}>
            {nodes.find((n) => n.id === activeNode)?.details}
          </span>
        </div>
      )}

      {/* Live System Activity Log */}
      <div
        style={{
          marginTop: "16px",
          background: "rgba(3, 7, 18, 0.75)",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.06)",
          padding: "12px 14px"
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "8px"
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.72rem",
              color: "var(--text-muted)",
              textTransform: "uppercase",
              letterSpacing: "0.08em"
            }}
          >
            System Event Bus
          </span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
              color: "var(--cyan-400)"
            }}
          >
            latency: ~12ms
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          {liveLogs.map((log, index) => (
            <div
              key={index}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                color: index === 0 ? "#38bdf8" : "var(--text-secondary)",
                opacity: 1 - index * 0.18,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "flex",
                alignItems: "center",
                gap: "6px"
              }}
            >
              <span style={{ color: index === 0 ? "#10b981" : "var(--text-dim)" }}>❯</span>
              {log}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
