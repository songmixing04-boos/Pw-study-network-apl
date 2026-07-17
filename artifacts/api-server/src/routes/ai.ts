import { Router } from "express";
import OpenAI from "openai";

const router = Router();

const getClient = () => {
  const key = process.env.OPENAI_API_KEY;
  if (!key) throw new Error("OPENAI_API_KEY not configured");
  return new OpenAI({ apiKey: key });
};

router.post("/ai/chat", async (req, res) => {
  try {
    const { message, history = [] } = req.body as {
      message: string;
      history: { role: "user" | "assistant"; content: string }[];
    };

    if (!message?.trim()) {
      res.status(400).json({ error: "Message required" });
      return;
    }

    const openai = getClient();

    const systemPrompt = `Tu PW Study Network ka AI Doubt Assistant hai. Tu Indian students ki help karta hai — Physics, Chemistry, Maths, Biology, aur sabhi competitive exam subjects mein. 
Tu Hinglish mein baat karta hai (Hindi + English mix), friendly aur encouraging hai. 
Concepts clearly explain karta hai with examples. Agar koi exam related sawaal ho (JEE, NEET, Board) toh woh bhi help karta hai.
Short, clear aur helpful answers de. Unnecessarily lamba mat likh.`;

    const chatMessages: OpenAI.Chat.ChatCompletionMessageParam[] = [
      { role: "system", content: systemPrompt },
      ...history.slice(-10).map((m) => ({ role: m.role, content: m.content })),
      { role: "user", content: message },
    ];

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: chatMessages,
      max_tokens: 800,
    });

    const reply = completion.choices[0]?.message?.content ?? "Kuch samajh nahi aaya, dobara pucho.";
    res.json({ reply });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Unknown error";
    req.log.error({ err }, "AI chat error");
    if (msg.includes("OPENAI_API_KEY")) {
      res.status(503).json({ error: "AI service not configured" });
    } else {
      res.status(500).json({ error: "AI error" });
    }
  }
});

export default router;
