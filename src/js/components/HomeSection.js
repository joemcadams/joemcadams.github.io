import React, { Component } from 'react'
import FaGithubSquare from 'react-icons/lib/fa/github-square'
import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square'
import { HOME_STYLES } from '../styles/Home'

const ICON_SIZE = '5em'

export const HomeSection = () => (
    <div style={ HOME_STYLES.CONTAINER }>
        <h1 style={ HOME_STYLES.HEADER }> Joe McAdams </h1>
        <div>
            <p style={ HOME_STYLES.SUB_HEADER }> Full Stack Developer </p>
            <p style={ HOME_STYLES.SUB_HEADER }> Amateur Van-dweller </p>
            <p style={ HOME_STYLES.SUB_HEADER }> Professional Goon  </p>
            <div style={ HOME_STYLES.ICON_CONTAINER }>
                <div style={ HOME_STYLES.ICON_WRAPPER }>
                    <a href="https://linkedin.com/in/josephwmcadams">
                        <p style={ HOME_STYLES.ICON }>
                            <FaLinkedinSquare color={ HOME_STYLES.ICON.FONT_COLOR } size={ ICON_SIZE } />
                        </p>
                    </a>
                    <a href="https://github.com/joemcadams" >
                        <p style={ HOME_STYLES.ICON }>
                            <FaGithubSquare color={ HOME_STYLES.ICON.FONT_COLOR } size={ ICON_SIZE } />
                        </p>
                    </a>
                </div>
            </div>
        </div>
    </div>
)