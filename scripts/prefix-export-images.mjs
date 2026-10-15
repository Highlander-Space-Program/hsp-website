import { readdir, readFile, writeFile } from "node:fs/promises";
import { extname, join } from "node:path";

// Next's basePath does not prefix public image URLs or CSS backgrounds.
export async function prefixExportImages(directory, basePath) {
  const prefix = basePath.replace(/\/$/, "");
  if (!prefix) return;
  if (!prefix.startsWith("/") || prefix.startsWith("//")) {
    throw new Error("The Pages base path must be a root-relative path.");
  }

  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      await prefixExportImages(path, prefix);
    } else if (
      [".html", ".css", ".js", ".json", ".txt"].includes(extname(path))
    ) {
      const original = await readFile(path, "utf8");
      const updated = original.replace(
        /(?<=["'`(])\/images\//g,
        `${prefix}/images/`,
      );
      if (updated !== original) await writeFile(path, updated);
    }
  }
}

if (process.env.PAGES_BASE_PATH !== undefined) {
  await prefixExportImages("out", process.env.PAGES_BASE_PATH);
}
