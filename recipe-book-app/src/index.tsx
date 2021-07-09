import React from 'react'
import {App} from './App'
import ReactDOM from 'react-dom'

declare global {
    interface Window { SomniumStudios: any }
}

const SomniumStudios = {
    MicroFE: {
        render: {}
    }
}

window.SomniumStudios = window.SomniumStudios || SomniumStudios;

window.SomniumStudios.MicroFE.render.RecipeBook = (container: HTMLElement) => ReactDOM.render(<App></App>, container)