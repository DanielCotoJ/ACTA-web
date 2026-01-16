import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";

  // Detectar si el request viene del subdominio stats.acta.build
  if (host === "stats.acta.build" || host.startsWith("stats.acta.build:")) {
    // Redirigir a PostHog Shared con status 302 (temporal)
    return NextResponse.redirect(
      "https://us.posthog.com/shared/Hsleyk7g3zP5ny1eEoB4h0viBONr_w",
      302
    );
  }

  // Para todos los demás hosts (acta.build, etc.), continuar normalmente
  return NextResponse.next();
}

// Configurar el matcher para que el middleware se ejecute en todas las rutas
export const config = {
  matcher: "/:path*",
};
