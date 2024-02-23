import "/src/styles/global.css";
import startApp from './app';
import { initEngine } from './render/init';

(async () => {
    await initEngine()
    startApp()
})()
