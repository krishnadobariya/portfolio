"use client";

import React, { useState, useEffect } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Menu, X, ArrowUpRight, Linkedin } from "lucide-react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: isScrolled ? "14px 0" : "22px 0",
        backgroundColor: isScrolled ? "rgba(6, 9, 19, 0.85)" : "transparent",
        backdropFilter: isScrolled ? "blur(16px)" : "none",
        borderBottom: isScrolled ? "1px solid rgba(255, 255, 255, 0.08)" : "1px solid transparent",
        transition: "all 0.25s ease"
      }}
    >
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Brand */}
        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none"
          }}
        >
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "10px",
              background: "linear-gradient(135deg, rgba(56, 189, 248, 0.15), rgba(99, 102, 241, 0.25))",
              border: "1px solid rgba(56, 189, 248, 0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--cyan-400)",
              fontWeight: 800,
              fontSize: "1rem"
            }}
          >
            KD
          </div>
          <div>
            <span style={{ fontWeight: 700, fontSize: "1.05rem", color: "#f8fafc", display: "block" }}>
              {PERSONAL_INFO.name}
            </span>
            <span style={{ fontSize: "0.72rem", fontFamily: "var(--font-mono)", color: "var(--cyan-400)" }}>
              Senior MERN Engineer • 5+ YOE
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: "none", alignItems: "center", gap: "28px" }} className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontSize: "0.9rem",
                fontWeight: 500,
                color: "var(--text-secondary)",
                transition: "color 0.2s"
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--cyan-400)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              {link.label}
            </a>
          ))}
          <a
            href={PERSONAL_INFO.linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-linkedin"
            style={{ padding: "8px 16px", fontSize: "0.85rem" }}
          >
            <Linkedin size={15} />
            <span>LinkedIn</span>
            <ArrowUpRight size={13} />
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "38px",
            height: "38px",
            borderRadius: "10px",
            background: "rgba(255, 255, 255, 0.05)",
            border: "1px solid var(--border-card)",
            color: "var(--text-primary)"
          }}
          className="mobile-burger"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: "70px",
            left: "16px",
            right: "16px",
            background: "rgba(10, 15, 29, 0.98)",
            border: "1px solid rgba(56, 189, 248, 0.25)",
            borderRadius: "18px",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            boxShadow: "0 20px 40px rgba(0,0,0,0.8)"
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                padding: "10px 14px",
                color: "var(--text-primary)",
                fontWeight: 600,
                fontSize: "0.95rem"
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={PERSONAL_INFO.linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-linkedin"
            style={{ justifyContent: "center", marginTop: "8px" }}
          >
            <Linkedin size={16} />
            <span>Connect on LinkedIn</span>
          </a>
        </div>
      )}

      <style jsx>{`
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-burger {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};
