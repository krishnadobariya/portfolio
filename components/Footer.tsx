"use client";

import React from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Linkedin, ArrowUp } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border-subtle)",
        background: "rgba(3, 7, 18, 0.95)",
        padding: "36px 0",
        position: "relative"
      }}
    >
      <div className="container" style={{ maxWidth: "960px" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "20px"
          }}
        >
          <div>
            <span style={{ fontSize: "1.1rem", fontWeight: 700, color: "#ffffff", display: "block" }}>
              {PERSONAL_INFO.name}
            </span>
            <span style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
              {PERSONAL_INFO.role}
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <a
              href={PERSONAL_INFO.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-linkedin"
              style={{ padding: "8px 16px", fontSize: "0.82rem" }}
            >
              <Linkedin size={15} />
              <span>LinkedIn</span>
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "10px",
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid var(--border-card)",
                color: "var(--text-secondary)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        <div
          style={{
            marginTop: "20px",
            paddingTop: "16px",
            borderTop: "1px solid rgba(255, 255, 255, 0.05)",
            fontSize: "0.8rem",
            color: "var(--text-muted)",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "8px"
          }}
        >
          <span>© 2026 Krishna Dobariya. Built with modern web technologies.</span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem" }}>
            Node.js • React.js • Next.js • MongoDB • MySQL
          </span>
        </div>
      </div>
    </footer>
  );
};
