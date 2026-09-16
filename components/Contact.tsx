"use client";

import React, { useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Linkedin, ArrowUpRight, Copy, Check, MessageSquare } from "lucide-react";

export const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyLinkedIn = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.linkedInUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="section" style={{ borderTop: "1px solid var(--border-subtle)" }}>
      <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
        <div className="section-tag" style={{ margin: "0 auto 16px auto" }}>
          <span className="dot" />
          <span>GET IN TOUCH</span>
        </div>

        <h2 className="section-title">
          Have a product to build or a problem to solve?
        </h2>

        <p
          style={{
            fontSize: "1.1rem",
            color: "var(--text-secondary)",
            lineHeight: 1.65,
            marginBottom: "36px",
            maxWidth: "600px",
            marginLeft: "auto",
            marginRight: "auto"
          }}
        >
          Let&apos;s discuss the architecture, the challenge, and the right way to build it.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "14px" }}>
          <a
            href={PERSONAL_INFO.linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ padding: "14px 32px" }}
          >
            <Linkedin size={18} />
            <span>Connect on LinkedIn</span>
            <ArrowUpRight size={16} />
          </a>

          <button
            onClick={copyLinkedIn}
            className="btn-secondary"
            style={{ padding: "14px 24px" }}
          >
            {copied ? <Check size={16} color="var(--emerald-400)" /> : <Copy size={16} />}
            <span>{copied ? "LinkedIn Link Copied!" : "Copy LinkedIn URL"}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
