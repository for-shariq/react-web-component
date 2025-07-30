
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';
import './index.css';


// Custom element approach
class ChatWidgetElement extends HTMLElement {
    connectedCallback() {
        const root = document.createElement('div');
        this.appendChild(root);
        ReactDOM.createRoot(root).render(<App />);
    }
}

// Global function approach for easier integration
function initChatWidget(selector: string = '#chat-widget') {
    const container = document.querySelector(selector);
    if (container) {
        ReactDOM.createRoot(container).render(<App />);
    } else {
        console.warn(`Chat widget container not found: ${selector}`);
    }
}

// Auto-initialize if container exists
if (typeof document !== 'undefined') {
    const container = document.querySelector('#chat-widget');
    if (container) {
        initChatWidget();
    }
}

// Register custom element
customElements.define('chat-widget', ChatWidgetElement);

// Export for manual initialization
(window as typeof window & { ChatWidget: { init: typeof initChatWidget } }).ChatWidget = {
    init: initChatWidget
};