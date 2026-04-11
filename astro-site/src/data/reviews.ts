export const reviews = [
  {
    name: "Pearse O'Flynn",
    text: "I have worked with Alice now for 8 sessions and she has been a fantastic coach for my presentation, executive presence and vocal skills in a corporate setting. I feel more confident and better equipped to handle large public speaking events in my work. Alice is experienced, passionate and a skilled coach and I would highly recommend her!",
    date: "3 months ago",
  },
  {
    name: "Anuj Desai",
    text: "Alice is simply a brilliant teacher. She's very warm and welcoming, but crucially she really listens. Our sessions have been so interesting from a learning perspective, challenging in parts as I try to develop into a better communicator, but also fun and engaging. I leave feeling very excited about testing out my new skills on everyone I chat to! Would highly recommend for anyone who wants to improve how they interact with people.",
    date: "5 months ago",
  },
  {
    name: "Shane Buckley",
    text: "Working with Alice was a game-changer! She helped me sharpen my public speaking for both in-person and the virtual. Her methods are practical and easy to replicate in any setting. If you want to level up your delivery, Alice is the one to see!",
    date: "1 month ago",
  },
  {
    name: "Jessica Shand",
    text: "Working closely with Alice for the last few months has been nothing short of game-changing for my career and I just wish I had found her sooner. I've struggled for years and years with public speaking but Alice has given me so many 'forever skills' that has already transformed my confidence and delivery. Alice is a really special and talented soul and I'd recommend her in a heartbeat!",
    date: "5 months ago",
  },
  {
    name: "Vera Gupta",
    text: "Alice is an outstanding communication trainer. Her expertise and ability to bring out the best in her clients are truly impressive. Thanks to her guidance, I have not only improved the way I present myself to others but also gained greater self-confidence, making me a stronger and more effective speaker. I now have a toolkit of practical techniques that I can use in both my career and personal life.",
    date: "1 year ago",
  },
  {
    name: "Roxana Balan",
    text: "Alice is deeply committed and passionate about her work. Her dedication to delivering her teachings with clarity and care was evident throughout all sessions. I felt completely at ease with her - she created a supportive and safe space where I could truly connect and grow. Her guidance is transformative!",
    date: "9 months ago",
  },
  {
    name: "Flavio Jorge Lantigua Loras",
    text: "This tailored program has been extremely beneficial for advancing my client presentation skills. Alice is an extremely committed person, with great passion for what she does - this in turn makes each session priceless. I wholeheartedly recommend this program to other financial professionals like myself, who are keen to take presentation delivery to the next level.",
    date: "1 year ago",
  },
  {
    name: "Maria Luisa F",
    text: "Alice's expertise in English RP pronunciation has been invaluable. She demonstrated a keen ability to identify my weaknesses and tailor her lessons to meet my specific needs. My confidence in speaking English has soared, and I feel much more at ease in both professional and social settings. I highly recommend Alice to anyone looking to improve their English pronunciation and communication skills.",
    date: "1 year ago",
  },
  {
    name: "AS Bel",
    text: "I wholeheartedly endorse Alice's exceptional coaching abilities. Her profound knowledge, organized approach, and professional demeanor are complemented by her warm and approachable nature. I sought Alice's guidance to enhance my leadership confidence and public speaking abilities. By the conclusion of our coaching sessions, both objectives were not only achieved but surpassed. She is passionate and fantastic at what she does!",
    date: "1 year ago",
  },
  {
    name: "Anthony Boukoult",
    text: "Alice is an incredible coach who helped me a lot in developing my public speaking skills. She has a unique ability to break down concepts into simple, actionable steps, making the learning process both useful and enjoyable. She provides constructive feedback and creates a safe space for me to grow. I truly feel more confident and prepared after each session. I highly recommend her!",
    date: "1 year ago",
  },
  {
    name: "Francesca White",
    text: "I've worked with Alice for a few years now and her practical advice and encouragement has really elevated my confidence in public speaking, while enabling me to incorporate new skills and communicate in a way that feels more authentic. I recommend her to everyone that I know!",
    date: "1 year ago",
  },
  {
    name: "Neil Mandel",
    text: "Alice was a pleasure to work with. A very specific focus was required and Alice helped a lot and opened up my mind giving me many tools to work with. Tools that should help me develop over the coming months! Very grateful.",
    date: "Recently",
  },
];

export function getRandomReview() {
  return reviews[Math.floor(Math.random() * reviews.length)];
}
