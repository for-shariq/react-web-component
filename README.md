# React Chat Widget

A self-contained React chat widget that can be embedded in any website, SharePoint site, or web application without requiring React to be pre-loaded.

## Features

- 🚀 **Self-contained** - No external React dependencies required
- 🌐 **Universal compatibility** - Works on any HTML page, SharePoint, or web application
- 📦 **Easy to embed** - Simple script tag integration
- 🎨 **Customizable** - Easy to style and configure
- ⚡ **Lightweight** - Optimized bundle size

## Installation

### NPM (for development)
```bash
npm install react-chat-widget
```

### CDN (for production)
```html
<script src="https://unpkg.com/react-chat-widget@1.0.0/dist/chat-widget.iife.js"></script>
```

## Usage

### Basic Usage

#### Method 1: Auto-initialization (Recommended)
1. Add a container element to your HTML:
```html
<div id="chat-widget"></div>
```

2. Include the CSS and script:
```html
<link rel="stylesheet" href="path/to/react-chat-widget.css">
<script src="path/to/chat-widget.iife.js"></script>
```

The widget will automatically initialize when the script loads.

#### Method 2: Manual initialization
```html
<div id="my-chat"></div>
<link rel="stylesheet" href="path/to/react-chat-widget.css">
<script src="path/to/chat-widget.iife.js"></script>
<script>
    ChatWidget.init('#my-chat');
</script>
```

#### Method 3: Custom Element
```html
<chat-widget></chat-widget>
<link rel="stylesheet" href="path/to/react-chat-widget.css">
<script src="path/to/chat-widget.iife.js"></script>
```

### Advanced Usage

```html
<!DOCTYPE html>
<html>
<head>
    <title>My Website</title>
    <link rel="stylesheet" href="https://unpkg.com/react-chat-widget@1.0.0/dist/react-chat-widget.css">
</head>
<body>
    <h1>Welcome to my site</h1>
    
    <!-- Chat widget container -->
    <div id="chat-widget"></div>
    
    <!-- Load the widget -->
    <script src="https://unpkg.com/react-chat-widget@1.0.0/dist/chat-widget.iife.js"></script>
</body>
</html>
```

## SharePoint Integration

The widget works seamlessly in SharePoint pages:

1. Edit your SharePoint page
2. Add a Script Editor web part
3. Insert the HTML code above
4. Save and publish

## Development

### Local Development
```bash
npm install
npm run dev
```

### Building for Production
```bash
npm run build
```

This creates the `dist/chat-widget.iife.js` file that can be used in any web application.

## Configuration

The widget is currently configured with default settings. To customize:

1. Modify the `src/App.tsx` component
2. Update styling in `src/App.css`
3. Rebuild with `npm run build`

## Browser Support

- Chrome 67+
- Firefox 60+
- Safari 11+
- Edge 79+

## License

MIT License - feel free to use in your projects!

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## Support

For issues and questions, please open an issue on GitHub.
