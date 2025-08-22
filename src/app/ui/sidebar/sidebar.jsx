"use client"

import React, { useState } from "react";
import "./sidebar.scss";
import logoImage from "../../assets/getpaisa.png";
import Image from "next/image";

export default function Sidebar() {
  const [dashboardsOpen, setDashboardsOpen] = useState(true);
  const [appsOpen, setAppsOpen] = useState(true);
  const [usersOpen, setUsersOpen] = useState(true);
  const [cardOpen, setCardOpen] = useState(true);
  const [othersOpen, setOthersOpen] = useState(true);

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <Image 
            src={logoImage} 
            alt="GetPaisa Logo" 
            width={160}   // required
            height={50}   // required
            priority      // optional, for faster load
        />
      </div>

      <nav className="sidebar-nav" aria-label="Sidebar">
        {/* DASHBOARDS */}
        <section className="menu-section">
          <button
            className={`section-toggle ${dashboardsOpen ? "open-toggle" : ""}`}
            type="button"
            aria-expanded={dashboardsOpen}
            onClick={() => setDashboardsOpen((v) => !v)}
          >
            <span>DASHBOARDS</span>
            <span className="caret" aria-hidden="true" />
          </button>

          <ul className={`section-body ${dashboardsOpen ? "open" : ""}`}>
            <li><a href="#">Modern</a></li>
            <li><a href="#">Analytical</a></li>
            <li><a href="#">eCommerce</a></li>
          </ul>
        </section>

        {/* APPLICATIONS */}
        <section className="menu-section">
          <button
            className={`section-toggle ${appsOpen ? "open-toggle" : ""}`}
            type="button"
            aria-expanded={appsOpen}
            onClick={() => setAppsOpen((v) => !v)}
          >
            <span>APPLICATIONS</span>
            <span className="caret" aria-hidden="true" />
          </button>

          <ul className={`section-body ${appsOpen ? "open" : ""}`}>
            <li><a href="#">Chat</a></li>

            {/* Users dropdown */}
            <li className="has-children">
              <button
                className={`item-toggle ${usersOpen ? "open-toggle" : ""}`}
                type="button"
                aria-expanded={usersOpen}
                onClick={() => setUsersOpen((v) => !v)}
              >
                <span>Users</span>
                <span className="caret" aria-hidden="true" />
              </button>

              <ul className={`submenu ${usersOpen ? "open" : ""}`}>
                <li><a href="#">Social Profile</a></li>
                <li><a href="#">Profile</a></li>

                {/* Card nested dropdown */}
                <li className="has-children">
                  <button
                    className={`item-toggle ${cardOpen ? "open-toggle" : ""}`}
                    type="button"
                    aria-expanded={cardOpen}
                    onClick={() => setCardOpen((v) => !v)}
                  >
                    <span>Card</span>
                    <span className="caret" aria-hidden="true" />
                  </button>

                  <ul className={`submenu ${cardOpen ? "open" : ""}`}>
                    <li><a href="#">Style 01</a></li>
                    <li><a href="#">Style 02</a></li>
                    <li><a href="#">Style 03</a></li>
                  </ul>
                </li>
              </ul>
            </li>

            <li><a href="#">Analytical</a></li>
            <li><a href="#">eCommerce</a></li>
            <li><a className="is-disabled" href="#" aria-disabled="true">Disable</a></li>
          </ul>
        </section>

        {/* OTHERS */}
        <section className="menu-section">
          <button
            className={`section-toggle ${othersOpen ? "open-toggle" : ""}`}
            type="button"
            aria-expanded={othersOpen}
            onClick={() => setOthersOpen((v) => !v)}
          >
            <span>OTHERS</span>
            <span className="caret" aria-hidden="true" />
          </button>

          <ul className={`section-body ${othersOpen ? "open" : ""}`}>
            <li><a href="#">Avatar</a></li>
            <li><a href="#">Outline</a></li>
            <li><a href="#">Basic + Basic Components</a></li>
          </ul>
        </section>
      </nav>

      <div className="sidebar-footer">
        <div className="unlimited-access">
          <p>Unlimited Access</p>
          <button className="signup-btn" type="button">Signup</button>
        </div>
      </div>
    </aside>
  );
}
