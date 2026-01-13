# ExplainMyLog

**ExplainMyLog** helps developers understand noisy application logs by summarizing what happened, identifying where things likely went wrong, and suggesting the first thing to check.

It is designed to **reduce cognitive overload**, not to debug or fix issues automatically.

---

##  Problem

Application logs are often:
- Extremely noisy
- Hard to scan under pressure
- Filled with irrelevant information
- Difficult to summarize quickly

Developers frequently paste logs into Slack, Jira, or GitHub issues just to ask:

> “What actually went wrong here?”

ExplainMyLog exists to answer that question clearly.

---

##  What ExplainMyLog Does

- Accepts raw application logs (any format)
- Optionally accepts a high-level context (Backend, Frontend, CI, etc.)
- Produces a **structured explanation**:
  - What happened
  - Key events
  - Likely failure point
  - First thing to investigate
- Admits uncertainty when logs are insufficient
- Never generates code or guesses missing information

---

##  What ExplainMyLog Does NOT Do

This is intentional.

ExplainMyLog does **not**:
- Parse logs structurally
- Identify exact root causes
- Highlight specific line numbers
- Fix bugs or generate code
- Store or persist logs
- Accept file uploads
- Handle multiple inputs
- Guarantee correctness

It focuses on **clarity**, not authority.

---

##  How It Works

1. Developer pastes logs into the UI
2. Optional context is selected
3. Logs are sent to the backend API
4. An AI model summarizes the logs using strict rules
5. The frontend renders the explanation clearly

The AI is constrained to return predictable, structured JSON.

---

##  Output Format

ExplainMyLog always returns the following fields:

- **Summary** – High-level explanation of what happened
- **Timeline** – Key events in order
- **Failure Point** – Where the issue likely occurred
- **Next Step** – First thing the developer should check

Empty values are returned if information is insufficient.

---

##  Context Options

The context dropdown biases interpretation but does not enforce assumptions.

Available contexts:
- Backend / API
- Frontend
- Database
- Infrastructure / Server
- CI / Build
- Other / Not sure

Default: **Backend / API**

---

##  Tech Stack

### Frontend
- Angular (standalone components)
- Tailwind CSS
- Single-page layout

### Backend
- Node.js
- Express
- OpenAI API
- Environment-based configuration

---

##  Local Setup

### Backend
- cd Backend
- npm install
- npm run dev

### Frontend
- cd Frontend/explain-my-error-ui
- npm install
- ng serve


---

## Testing

Manual testing scenarios:
- Small, clear logs
- Large, noisy logs
- Garbage or insufficient input
- Backend unavailable
- Repeated submissions

Expected behavior:
- No crashes
- Calm error messages
- Honest uncertainty
- Predictable output structure

---

## Success Criteria

ExplainMyLog is successful if:
- Developers feel less overwhelmed
- Logs become understandable faster
- Output feels helpful even when imperfect
- Trust is maintained through honesty and guardrails

---

## Philosophy

ExplainMyLog is designed to help developers understand, not to automate decisions.

- Clarity beats confidence.
- Honesty beats cleverness.


---

### 📄 License

- This project is intended for learning, experimentation, and portfolio use.
