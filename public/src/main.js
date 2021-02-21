import createSiteMenuBuilder from "./siteMenuBuilder.js";
import createMoreButtonTemplate from "./createMoreButtonTemplate.js";
import createSiteFilter from "./createSiteFilter.js";
import createCardBoardTemplate from "./createCardBoardTemplate.js";
import createTaskTemplate from "./createTaskTemplate.js";
import createEditTaskTemplate from "./createEditTaskTemplate.js";
import render from "./render.js";
//@ts-check

const TASKCOUNT = 3;

/**
 * Render Elements for HTML
 * @param {object} container
 * @param {string} template
 * @param {string} place place in HTML
 */

// const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = document.querySelector(`.main__control`);
const boardElement = document.querySelector(`.board`);
const siteBoardTaskElement = document.querySelector(`.board__tasks`);
const siteFilterTaskElement = document.querySelector(`.board__filter`);

render(siteHeaderElement, createSiteMenuBuilder());
render(siteFilterTaskElement, createSiteFilter());
render(siteFilterTaskElement, createCardBoardTemplate());

render(siteBoardTaskElement, createEditTaskTemplate());
for (let i = 0; i < TASKCOUNT; i++) {
  console.log(i);
  render(siteBoardTaskElement, createTaskTemplate());
}

render(boardElement, createMoreButtonTemplate());
