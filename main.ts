import { router } from "./api/route.ts";
import { } from "./cron/task.ts";


const PORT = Deno.env.get("PORT") || 3000;

Deno.serve({ port: PORT }, router);

export {}