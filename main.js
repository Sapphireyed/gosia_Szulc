import React, { useMemo } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './src/home/home';
import scss from './styles.scss'

console.log("test", scss);
//# sourceMappingURL=main.js.map

const reactRoot = createRoot(document.querySelector('#app'));
reactRoot.render(<App />);
