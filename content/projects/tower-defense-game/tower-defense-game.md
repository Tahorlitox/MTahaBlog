---
title: "Building a Tower Defense Game"
date: "2025-07-25"
description: "How we created a custom tower defense game in Java — from game mechanics to shop logic and special towers."
tech: [Java, Json, OOP]
---

As part of our programming coursework, we built a fully functional **Tower Defense Game** in Java.  
The goal? To apply Object-Oriented Programming concepts in a real-time strategy setting — and have fun doing it.

This post summarizes how we built the game, the features we implemented, and how we worked together as a team.

---

## How the Game Works

Like any classic Tower Defense game, the player must **defend a base** against waves of enemies by strategically placing towers on a map.

The towers attack automatically, each with different range, speed, and power.

### Game Features

- Real-time enemy movement along a path
- Click-to-place towers on allowed tiles
- Health points for each enemy
- Visual feedback for attacks and enemy defeats
- Basic in-game economy (gold earned per enemy defeated)

---

## The Tower System

Each tower is an object with custom attributes:

| Tower Type     | PV  | ATK | ATK Speed | Range | Element | Cost |
|----------------|-----|-----|------------|--------|----------|------|
| Archer         | 30  | 5   | 1.0        | 2.0    | NONE     | 20   |
| Wind Caster    | 30  | 5   | 1.5        | 6.0    | WIND     | 50   |
| Water Caster   | 30  | 3   | 1.0        | 4.0    | WATER    | 50   |
| Earth Caster   | 50  | 7   | 0.5        | 2.5    | EARTH    | 100  |
| Fire Caster    | 30  | 10  | 0.5        | 2.5    | FIRE     | 100  |

We designed the towers with a strong **OOP approach** using inheritance and polymorphism to keep code clean and extensible.

---

## Shop System

One of my teammates handled the **shop system** — allowing players to buy towers using in-game gold.  
The shop checks the available balance, updates tower slots, and prevents over-purchasing.

This modularity helped us **separate concerns** between:
- Combat logic
- UI interaction
- Shop & upgrades

---

## What I Worked On

I was responsible for the **towers and their behavior**:

- Implemented all tower classes with unique stats
- Built the attack mechanism (cooldowns, hit range)
- Managed tower selection & placement on the map
- Ensured damage logic was consistent across types

This helped me practice class design, method abstraction, and real-time updates in a 2D grid.

---

## What We Learned

This project taught us a lot, including:

- Handling real-time game loops in Java
- Using object-oriented principles for clean game architecture
- Dealing with performance issues and collision detection
- Working collaboratively using Git (GitHub/GitLab)

We also learned to **scope our ambition**, focusing on solid mechanics instead of trying to build a huge game.

---

## Final Thoughts

Tower Defense might seem like a small project, but building one from scratch teaches you **so much** — from logic to UX to architecture.

It was fun, challenging, and a huge level-up in our programming journey.

Thanks for reading!
