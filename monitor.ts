// Node.js program to demonstrate the
// fs.watch() method

// Import the filesystem module
import fs from "fs";
import { actualizarHtmlProductos } from "./procesa";

const html = actualizarHtmlProductos();
fs.writeFileSync("productos.html", html.join(""));

fs.watch("productos.json", (eventType, filename) => {
  console.log("\nThe file", filename, "was modified!");
  const html = actualizarHtmlProductos();
  fs.writeFileSync("productos.html", html.join(""));
});
