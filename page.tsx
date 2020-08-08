import React from "https://cdn.pika.dev/@pika/react@v16.13.1";
import ReactDOMServer from "https://dev.jspm.io/react-dom@16.13.1/server.js";

const Items = () => (
  `<div>
    <ul>
      <li>Item1</li>
      <li>Item2</li>
      <li>Item3</li>
    </ul>
  </div>`
);

export const page  = (props: {}) => {
  return `
    <!DOCTYPE html>
    ${ReactDOMServer.renderToString((
      <Items />
    ))}`;
};