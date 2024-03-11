import "/styles/global.css";
import startApp from './app';
import { initEngine } from './render/init';

(async () => {
    const containerElement = document.getElementById('canvasContainer');
    await initEngine(containerElement)
    startApp()
})()
