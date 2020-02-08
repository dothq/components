import React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './components/App';

if(process.env.ENV == "dev") {

    const styleElement = document.createElement("style");

    styleElement.textContent = `
        @font-face {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 100;
            font-display: swap;
            src: url(https://edge.dothq.co/serve_file/roboto.thin.ttf) format('ttf');
        }

        @font-face {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 200;
            font-display: swap;
            src: url(https://edge.dothq.co/serve_file/roboto.light.ttf) format('ttf');
        }

        @font-face {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://edge.dothq.co/serve_file/roboto.regular.ttf) format('ttf');
        }

        @font-face {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 500;
            font-display: swap;
            src: url(https://edge.dothq.co/serve_file/roboto.medium.ttf) format('ttf');
        }

        @font-face {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 600;
            font-display: swap;
            src: url(https://edge.dothq.co/serve_file/roboto.bold.ttf) format('ttf');
        }

        @font-face {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 800;
            font-display: swap;
            src: url(https://edge.dothq.co/serve_file/roboto.black.ttf) format('ttf');
        }
    `

    document.head.appendChild(styleElement);

    ReactDOM.render(<App />, document.getElementById("app"));
}

export const Settings = App;