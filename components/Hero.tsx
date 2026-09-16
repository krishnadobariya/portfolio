"use client";

import React from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { ArrowRight, Linkedin, ArrowUpRight, CheckCircle2 } from "lucide-react";

export const Hero = () => {
  return (
    <section
      style={{
        paddingTop: "140px",
        paddingBottom: "60px",
        position: "relative"
      }}
    >
      <div className="container" style={{ maxWidth: "900px" }}>
        {/* Label */}
        <div className="section-tag" style={{ marginBottom: "20px" }}>
          <span className="dot" />
          <span>SENIOR FULL-STACK / MERN ENGINEER</span>
        </div>

        {/* Name & Title */}
        <h1
          style={{
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.035em",
            color: "#ffffff",
            marginBottom: "16px"
          }}
        >
          Hi, I&apos;m <span className="text-gradient">Krishna Dobariya</span>.
        </h1>

        <p
          style={{
            fontSize: "clamp(1.2rem, 2vw, 1.5rem)",
            fontWeight: 600,
            color: "var(--text-highlight)",
            lineHeight: 1.4,
            marginBottom: "18px"
          }}
        >
          Senior MERN Stack Developer with 5+ years of experience building scalable, production-ready web applications.
        </p>

        <p
          style={{
            fontSize: "1.05rem",
            color: "var(--text-secondary)",
            lineHeight: 1.7,
            marginBottom: "32px",
            maxWidth: "760px"
          }}
        >
          From database architecture and backend systems to cloud deployment and third-party integrations, I design and build applications engineered for real-world production environments across fintech, SaaS, e-commerce, and AI.
        </p>

        {/* Primary Stack Pills */}
        <div style={{ marginBottom: "36px" }}>
          <span
            style={{
              display: "block",
              fontFamily: "var(--font-mono)",
              fontSize: "0.74rem",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "var(--text-muted)",
              marginBottom: "12px"
            }}
          >
            Core Technologies
          </span>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {PERSONAL_INFO.primarySkills.map((tech) => (
              <span key={tech} className="tech-pill featured" style={{ padding: "6px 14px", fontSize: "0.85rem" }}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "14px" }}>
          <a href="#projects" className="btn-primary">
            <span>View Featured Projects</span>
            <ArrowRight size={16} />
          </a>

          <a href="#about" className="btn-secondary">
            <span>About Me</span>
          </a>

          <a
            href={PERSONAL_INFO.linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-linkedin"
          >
            <Linkedin size={16} />
            <span>LinkedIn Profile</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};
