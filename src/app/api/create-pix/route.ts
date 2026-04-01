import { NextResponse } from "next/server";

const TINY_PNG =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const productId = body?.productId ?? "1";

    return NextResponse.json({
      copyPaste: `00020101021234567890123456789012BR.GOV.BCB.PIX0136${productId}-mock-5204000053039865802BR5925TOYPIX6009SAO PAULO62070503***6304`,
      qrCode: TINY_PNG,
      expiresAt: 1800,
    });
  } catch {
    return NextResponse.json(
      { error: "Invalid body" },
      { status: 400 }
    );
  }
}
