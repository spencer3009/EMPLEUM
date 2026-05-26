/**
 * Health check endpoint — útil para verificar uptime y debug de deploys.
 * GET /api/health → { status, timestamp, uptime, version }
 */

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  return Response.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    node: process.version,
    env: process.env.NODE_ENV,
  });
}
