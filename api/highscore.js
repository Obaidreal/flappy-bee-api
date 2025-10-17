let highscore = { name: 'Anonymous', score: 0 }; // In-memory store (replace with database for persistence)

export default function handler(req, res) {
  if (req.method === 'GET') {
    // Check high score
    res.status(200).json(highscore);
  } else if (req.method === 'POST') {
    // Update high score
    const { name, score } = req.body;
    if (name && score && score > highscore.score) {
      highscore = { name, score };
      res.status(200).json({ message: 'New high score saved!', ...highscore });
    } else if (score <= highscore.score) {
      res.status(200).json({ message: 'Score not high enough', ...highscore });
    } else {
      res.status(400).json({ message: 'Invalid name or score' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
