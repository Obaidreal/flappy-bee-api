# 🐝 Flappy Bee API

A serverless API with web interface for tracking Flappy Bee high scores, built with Vercel and integrated with Vercel Web Analytics.

## Features

- 🎮 High score tracking API
- 🌐 Beautiful web interface
- 📊 Vercel Web Analytics integration
- ⚡ Serverless deployment on Vercel
- 🎯 Custom event tracking for game interactions

## Project Structure

```
flappy-bee-api/
├── api/
│   └── highscore.js       # High score API endpoint
├── public/
│   └── index.html         # Web interface with analytics
├── package.json           # Dependencies and scripts
├── vercel.json            # Vercel configuration
└── README.md              # This file
```

## Getting Started

### Prerequisites

- A Vercel account ([sign up for free](https://vercel.com/signup))
- Node.js installed (v18 or later recommended)
- npm, pnpm, yarn, or bun package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Obaidreal/flappy-bee-api.git
cd flappy-bee-api
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
# or
yarn install
# or
bun install
```

### Local Development

Run the development server:
```bash
npm run dev
# or
vercel dev
```

The application will be available at `http://localhost:3000`

## API Endpoints

### GET /api/highscore
Get the current high score.

**Response:**
```json
{
  "name": "Player Name",
  "score": 100
}
```

### POST /api/highscore
Submit a new score.

**Request Body:**
```json
{
  "name": "Player Name",
  "score": 150
}
```

**Response (New High Score):**
```json
{
  "message": "New high score saved!",
  "name": "Player Name",
  "score": 150
}
```

**Response (Score Not High Enough):**
```json
{
  "message": "Score not high enough",
  "name": "Previous Player",
  "score": 200
}
```

## Vercel Web Analytics Setup

This project comes pre-configured with Vercel Web Analytics. To enable it:

### 1. Enable Web Analytics in Vercel Dashboard

1. Go to your [Vercel dashboard](https://vercel.com/dashboard)
2. Select your project
3. Click the **Analytics** tab
4. Click **Enable** to activate Web Analytics

### 2. Deploy to Vercel

Deploy your app using the Vercel CLI:
```bash
vercel deploy
```

Or connect your Git repository for automatic deployments:
1. Go to [Vercel](https://vercel.com/new)
2. Import your GitHub repository
3. Vercel will automatically detect the configuration and deploy

### 3. View Analytics Data

Once deployed and users visit your site:
1. Go to your [Vercel dashboard](https://vercel.com/dashboard)
2. Select your project
3. Click the **Analytics** tab
4. View real-time visitor data and page views

### Custom Events Tracked

The application tracks the following custom events:
- `score_submitted` - When a user submits a score
- `new_high_score` - When a new high score is achieved

These events help you understand user engagement and gameplay patterns.

## Deployment

### Deploy to Vercel

The easiest way to deploy is using the Vercel CLI:

```bash
vercel
```

Or deploy via Git by connecting your repository to Vercel:
1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will automatically deploy on every push to main

### Verify Analytics Integration

After deployment:
1. Visit your deployed site
2. Open browser DevTools (Network tab)
3. Look for requests to `/_vercel/insights/view`
4. If you see these requests, analytics is working correctly!

## Technical Details

### Web Analytics Implementation

The project uses the HTML implementation of Vercel Web Analytics:

```html
<script>
  window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
</script>
<script defer src="/_vercel/insights/script.js"></script>
```

This implementation:
- ✅ Requires no build step
- ✅ Works with pure HTML/JavaScript
- ✅ Automatically tracks page views
- ✅ Supports custom event tracking
- ✅ Privacy-focused (GDPR compliant)

### Custom Event Tracking

Custom events are tracked using the Web Analytics API:

```javascript
window.va('event', {
  name: 'event_name',
  data: {
    key: 'value'
  }
});
```

## Privacy & Compliance

Vercel Web Analytics is privacy-focused and GDPR compliant:
- No cookies used
- No personal data collected
- Respects Do Not Track
- GDPR, CCPA, and PECR compliant

Learn more: [Vercel Analytics Privacy Policy](https://vercel.com/docs/analytics/privacy-policy)

## Next Steps

- 📚 [Learn about Vercel Analytics filtering](https://vercel.com/docs/analytics/filtering)
- 🎯 [Set up more custom events](https://vercel.com/docs/analytics/custom-events)
- 💰 [Explore pricing](https://vercel.com/docs/analytics/limits-and-pricing)
- 🔧 [Troubleshooting guide](https://vercel.com/docs/analytics/troubleshooting)

## License

ISC

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
