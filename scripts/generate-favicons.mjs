import { writeFile } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";

const projectRoot = process.cwd();
const source = join(projectRoot, "public", "images", "logo-enterprise.png");
const publicDirectory = join(projectRoot, "public");

async function createSquareIcon(size) {
  const horizontalPadding = Math.round(size * 0.07);
  const verticalPadding = Math.round(size * 0.08);
  const logo = await sharp(source)
    .resize({
      width: size - horizontalPadding * 2,
      height: size - verticalPadding * 2,
      fit: "contain",
    })
    .png()
    .toBuffer();

  return sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: "#000000",
    },
  })
    .composite([{ input: logo, gravity: "center" }])
    .png({ compressionLevel: 9 })
    .toBuffer();
}

function wrapPngAsIco(png) {
  const header = Buffer.alloc(22);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(1, 4);
  header.writeUInt8(0, 6);
  header.writeUInt8(0, 7);
  header.writeUInt8(0, 8);
  header.writeUInt8(0, 9);
  header.writeUInt16LE(1, 10);
  header.writeUInt16LE(32, 12);
  header.writeUInt32LE(png.length, 14);
  header.writeUInt32LE(header.length, 18);
  return Buffer.concat([header, png]);
}

const [favicon, appleTouchIcon, faviconIcoPng] = await Promise.all([
  createSquareIcon(512),
  createSquareIcon(180),
  createSquareIcon(256),
]);

await Promise.all([
  writeFile(join(publicDirectory, "favicon.png"), favicon),
  writeFile(join(publicDirectory, "apple-touch-icon.png"), appleTouchIcon),
  writeFile(join(publicDirectory, "favicon.ico"), wrapPngAsIco(faviconIcoPng)),
]);

console.log("Favicons de MAXIDRONE generados correctamente.");
