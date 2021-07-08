import React from 'react'
import {App} from './App'
import ReactDOM from 'react-dom'

declare global {
    interface Window { MicroFE: any; SomniumStudios: any }
}

window.MicroFE = window.MicroFE || {};

window.MicroFE.Dashboard = {
    render: (container: HTMLElement) => ReactDOM.render(<App></App>, container)
}

const SomniumStudios = {
    MicroFE: {
        render: {}
    }
}

window.SomniumStudios = window.SomniumStudios || SomniumStudios;

window.SomniumStudios.MicroFE.render.Dashboard = (container: HTMLElement) => ReactDOM.render(<App></App>, container)
