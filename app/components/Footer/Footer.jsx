import React from 'react';
import { IndexRoute, Router, Route, Link } from 'react-router'

let Footer = () => {
    return (
        <footer className="Footer">
            <p className="Footer-attribution">A work in progress by <a href="http://ericskram.com/">Eric Skram</a>.</p>
            <p className="Footer-tools">Built with <a href="http://parse.com/" target="_blank">Parse</a>, <a href="https://facebook.github.io/react/" target="_blank">React</a> and <a href="https://github.com/postcss/postcss" target="_blank">PostCSS</a>. Source code <a href="https://github.com/Vpr99/recipes-app" target="_blank">on Github</a>.</p>
        </footer>
    )
}

module.exports = Footer;
