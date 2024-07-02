import path from "path";
import sharp from "sharp";

export default async function getBlurDataURL(filePath: string) {
	const fullPath = path.join(process.cwd(), "public", filePath);
	const image = await sharp(fullPath).resize(10).toBuffer();
	const base64 = image.toString("base64");
	return `data:image/png;base64,${base64}`;
}
