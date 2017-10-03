import React, { Component } from 'react'
import FaGithubSquare from 'react-icons/lib/fa/github-square'
import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square'

export const HomeSection = () => (
    <div id="home-page">
        <div id="home-page-content">
            <h1 id="home-title"> Joe McAdams </h1>
            <div id="home-description">
                <p> Full Stack Developer </p>
                <p> DIY Enthusiast  </p>
                <p> Critically-Acclaimed Hipster </p>
                <a href="https://linkedin.com/in/josephwmcadams">
                    <FaLinkedinSquare />
                </a>
                <a href="https://github.com/joemcadams">
                    <FaGithubSquare />
                </a>
            </div>
        </div>
    </div>
)