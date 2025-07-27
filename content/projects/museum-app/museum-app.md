---
title: "Museum App"
date: "2025-07-25"
description: "How our student team built a Java app to explore museums in France — using clean architecture, visual stats, and a little help from ChatGPT."
tech: ["Java", "Swing", "SVG", "CSV, JSON"]
---


In our software engineering project, we built a **Java application** that helps users explore, filter, and analyze data about museums in France — using real data from the French Ministry of Culture.

Here’s how we designed it, what tools we used (including AI), and how we made it work.

---

## Project Goal

We wanted to create a user-friendly app where anyone could:

- Search museums by region, theme, accessibility, etc.
- Generate visual stats (diagrams, HTML or PDF reports)
- View everything through a custom GUI

We built the entire app from scratch, including a visual statistics engine.

---

## How to Run the App

To launch the app locally:

1. Open `src/projetMusee/ui/MainWindow.java` in your Java IDE
2. Find the `main` method
3. Right-click → **Run 'Main'**

You’ll get a full GUI with working filters, diagrams, and reports.

---

## How We Used AI (ChatGPT / Copilot)

At the beginning, our teacher encouraged us to use AI tools like ChatGPT **to speed things up** — as long as we understood what the code was doing.

So we used AI in specific, controlled ways:
- For example, when building the `Musee` class, we gave GPT-4 a sample JSON museum object and asked it to generate:
  - A matching Java class
  - With all its fields and getters/setters

This saved time on repetitive work.  
**We still reviewed everything manually** to make sure it fit our architecture.

> AI helped, but it didn’t decide. We did.

We also used ChatGPT for:
- Generating helper methods
- Refactoring boilerplate code
- Speeding up test creation

---

## What We Designed Ourselves

Everything else — the architecture, logic, features — was fully designed by our team:

- Folder/package structure
- GUI design & interactions
- VisuStat engine integration
- Filtering logic & CSV/SVG generation
- Testing strategy

We **never used AI to generate core logic**, only small helpers.

---

## Testing

- **Back-end**: Tested using JUnit (file loading, filtering, stats)
- **GUI**: Manually tested (buttons, color changes, panel display, etc.)
- We used `System.out.println()` & `toString()` methods to trace behavior during interaction

---

## Libraries Used

- `vizustat-v2.jar` — our own visual stats engine
- Apache Batik — to convert SVG to PNG
- JUnit 4.13.2 + Hamcrest — for unit testing

---

## Final Thoughts

This project helped us connect theory to real software development — from data parsing to GUI interaction, with a bit of AI along the way.

We didn’t just build an app.  
We built a process.

Thanks for reading!