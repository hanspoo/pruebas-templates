import fs from "fs";
import { format } from "util";
import { Producto } from "./Producto";

export function actualizarHtmlProductos(): Array<string> {
  const buffer = fs.readFileSync("template.html");
  const html = buffer.toString();

  const data = fs.readFileSync("productos.json") as any;
  const productos: Array<Producto> = JSON.parse(data);

  const lista = productos.map((p) => {
    let final = html
      .replace("__NOMBRE__", p.nombre)
      .replace("__PRECIO__", p.precio + "")
      .replace("__DESCRIPCION__", p.descripcion);
    return final;
  });
  return lista;
}
