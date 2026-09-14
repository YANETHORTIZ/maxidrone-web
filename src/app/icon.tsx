import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = {
  width: 512,
  height: 512,
};

export const contentType = "image/png";
export const dynamic = "force-static";

const logo = await readFile(
  join(process.cwd(), "public", "images", "logo-enterprise.png"),
  "base64",
);

const logoSource = `data:image/png;base64,${logo}`;

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#000000",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          padding: "72px 44px",
          width: "100%",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="MAXIDRONE"
          height={166}
          src={logoSource}
          style={{ objectFit: "contain" }}
          width={424}
        />
      </div>
    ),
    size,
  );
}
