import { getOpenAIClient } from "./openai.client.js";
import { SYSTEM_PROMPT } from "./explain-log.prompt.js";

export async function explainLog(logs, context) {
  const client = getOpenAIClient();

  const userPrompt = `
    Logs:
    ${logs}
    
    Context:
    ${context || "Not Specified"}`;

  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    temperature: 0,
    messages: [
      { role: "system", content: SYSTEM_PROMPT },
      { role: "user", content: userPrompt },
    ],
  });

  const content = response.choices[0].message.content;

  try {
    return JSON.parse(content);
  } catch {
    throw new Error("Invalid AI response");
  }
}
