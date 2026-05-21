import { writeFileSync, mkdirSync } from "node:fs";
import { resolve } from "node:path";
import { renderCitySkylineGrid } from "./city-skyline.mjs";

// grid fake por enquanto
const username = "OseiasBarreto";

const response = await fetch(
  `https://github-contributions-api.jogruber.de/v4/${username}`
);

const data = await response.json();

const weeks = data.contributions;

const grid = Array.from({ length: 7 }, () => []);

weeks.forEach((week) => {
  week.forEach((day, row) => {
    grid[row].push(Math.min(4, Math.floor(day.count / 2)));
  });
});