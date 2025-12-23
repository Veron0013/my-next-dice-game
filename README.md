# 🎲 Funny Dice Game

A simple dice game built with **TypeScript**, **Next.js**, and **Material UI**.

The player chooses whether the dice roll should be **higher** or **lower** than
a given number, then rolls the dice and checks the result.

---

## 🚀 Tech Stack

- TypeScript
- Next.js (App Router)
- Material UI
- Tailwind

---

## 🎮 Game Rules

1. Enter a number between **1 and 100** (threshold).
2. Choose:
   - **Over** — the result must be higher than the number.
   - **Under** — the result must be lower than the number.
3. Click **Play** to roll the dice.
4. The dice result is a random number from **1 to 100**.
5. If the result satisfies the chosen condition — you win.
6. If the result is **equal** to the threshold — it counts as a loss.

---

## 📊 Game History

- Each game result is saved to a history list.
- The history displays the **last 10 games** only.

---

## ▶️ Run Locally

```bash
npm install
npm run dev
```
