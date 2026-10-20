/* Generates the favicon set from the Trigarty mark (traced from brand/trigarty-logo-light.jpg).
   Run with: npm run icons */
import fs from "node:fs/promises";
import sharp from "sharp";

const PATH = "M104 0L208 178H167L104 70L41 178H0Z";
const GRAD = `<linearGradient id="g" x1="0" y1="0" x2="208" y2="0" gradientUnits="userSpaceOnUse">
  <stop offset="0" stop-color="#4BC5C7"/><stop offset="0.55" stop-color="#A4BE4B"/><stop offset="1" stop-color="#E9A400"/></linearGradient>`;

// Square SVG with the mark centred. scale = share of the canvas the mark's width takes.
const svg = (size, scale, bg) => {
  const k = (size * scale) / 208;
  const x = (size - size * scale) / 2, y = (size - 178 * k) / 2;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <defs>${GRAD}</defs>${bg ? `<rect width="${size}" height="${size}" fill="${bg}"/>` : ""}
  <g transform="translate(${x} ${y}) scale(${k})"><path d="${PATH}" fill="url(#g)"/></g></svg>`;
};

const png = (size, scale, bg) => sharp(Buffer.from(svg(size, scale, bg))).png({ compressionLevel: 9 }).toBuffer();

// ICO container holding PNG frames (supported by every current browser).
function ico(frames) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); header.writeUInt16LE(1, 2); header.writeUInt16LE(frames.length, 4);
  let offset = 6 + 16 * frames.length;
  const dir = frames.map(({ size, data }) => {
    const e = Buffer.alloc(16);
    e.writeUInt8(size >= 256 ? 0 : size, 0); e.writeUInt8(size >= 256 ? 0 : size, 1);
    e.writeUInt16LE(1, 4); e.writeUInt16LE(32, 6);
    e.writeUInt32LE(data.length, 8); e.writeUInt32LE(offset, 12);
    offset += data.length;
    return e;
  });
  return Buffer.concat([header, ...dir, ...frames.map((f) => f.data)]);
}

const frames = await Promise.all([16, 32, 48].map(async (size) => ({ size, data: await png(size, 0.94) })));
await fs.writeFile("src/app/favicon.ico", ico(frames));
await fs.writeFile("src/app/icon.svg", svg(64, 0.9).replace(/\n\s*/g, ""));
await fs.writeFile("src/app/apple-icon.png", await png(180, 0.62, "#F3F3F3"));
await fs.writeFile("public/icons/icon-192.png", await png(192, 0.62, "#F3F3F3"));
await fs.writeFile("public/icons/icon-512.png", await png(512, 0.62, "#F3F3F3"));
await fs.writeFile("public/icons/icon-maskable-512.png", await png(512, 0.5, "#F3F3F3"));
console.log("icons written");
