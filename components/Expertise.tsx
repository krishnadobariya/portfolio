"use client";

import React, { useState } from "react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";
import { Server, Layout, Database, Cloud, Workflow, Layers, Check, Sparkles } from "lucide-react";

export const Expertise = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categoryIcons: Record<string, any> = {
    backend: Server,
    frontend: Layout,
    databases: Database,
    "cloud-devops": Cloud,
    integrations: Workflow,
    architecture: Layers
  };

  const filteredCategories =
    selectedCategory === "all"
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.id === selectedCategory);

  return (
    <section id="expertise" className="section" style={{ backgroundColor: "rgba(10, 15, 29, 0.4)" }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto 48px auto" }}>
          <div className="section-tag" style={{ margin: "0 auto 16px auto" }}>
            <span className="dot" />
            <span>TECHNICAL EXPERTISE</span>
          </div>
          <h2 className="section-title">
            Engineered for <span className="text-gradient">Production Stability</span>
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            A structured breakdown of core engineering capabilities across modern web systems, resilient backend architectures, and multi-tenant databases.
          </p>
        </div>

        {/* Filter Tabs */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "8px",
            marginBottom: "40px"
          }}
        >
          <button
            onClick={() => setSelectedCategory("all")}
            style={{
              padding: "8px 18px",
              borderRadius: "9999px",
              fontSize: "0.85rem",
              fontWeight: 600,
              fontFamily: "var(--font-mono)",
              background: selectedCategory === "all" ? "var(--cyan-400)" : "rgba(255, 255, 255, 0.04)",
              color: selectedCategory === "all" ? "#030712" : "var(--text-secondary)",
              border: selectedCategory === "all" ? "1px solid var(--cyan-400)" : "1px solid var(--border-subtle)",
              transition: "all 0.2s ease"
            }}
          >
            All Disciplines
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              style={{
                padding: "8px 18px",
                borderRadius: "9999px",
                fontSize: "0.85rem",
                fontWeight: 600,
                fontFamily: "var(--font-mono)",
                background: selectedCategory === cat.id ? "var(--cyan-400)" : "rgba(255, 255, 255, 0.04)",
                color: selectedCategory === cat.id ? "#030712" : "var(--text-secondary)",
                border: selectedCategory === cat.id ? "1px solid var(--cyan-400)" : "1px solid var(--border-subtle)",
                transition: "all 0.2s ease"
              }}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px"
          }}
          className="expertise-grid"
        >
          {filteredCategories.map((category) => {
            const Icon = categoryIcons[category.id] || Layers;
            return (
              <div
                key={category.id}
                className="glass-card"
                style={{
                  padding: "28px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between"
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "16px"
                    }}
                  >
                    <div
                      style={{
                        width: "42px",
                        height: "42px",
                        borderRadius: "12px",
                        background: "rgba(56, 189, 248, 0.1)",
                        border: "1px solid rgba(56, 189, 248, 0.25)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--cyan-400)"
                      }}
                    >
                      <Icon size={22} />
                    </div>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.72rem",
                        color: "var(--text-muted)",
                        background: "rgba(255, 255, 255, 0.04)",
                        padding: "3px 8px",
                        borderRadius: "4px"
                      }}
                    >
                      {category.skills.length} competencies
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      marginBottom: "8px"
                    }}
                  >
                    {category.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.55,
                      marginBottom: "20px"
                    }}
                  >
                    {category.description}
                  </p>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "6px",
                    paddingTop: "16px",
                    borderTop: "1px solid var(--border-subtle)"
                  }}
                >
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`tech-pill ${skill.featured ? "featured" : ""}`}
                      style={{ fontSize: "0.75rem", padding: "4px 10px" }}
                    >
                      {skill.featured && <span style={{ color: "var(--cyan-400)", marginRight: "2px" }}>⚡</span>}
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .expertise-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 680px) {
          .expertise-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
