import React from "react";
import Navbar from "./Navbar";

export default function Header() {
    return (
        <section className="header">
            <Navbar />
            <img src="https://startbootstrap.github.io/startbootstrap-clean-blog/assets/img/home-bg.jpg" className="header--image"/>
            <h1 className="header--title">Clean Blog</h1>
            <h3 className="header--subtitle">A Blog Theme by Start Bootstrap</h3>
        </section>
    )
}