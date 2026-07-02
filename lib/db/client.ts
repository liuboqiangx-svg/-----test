import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema-drizzle";

// 构建连接 URL
const connectionUrl = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT || "5432"}/${process.env.PG_DATABASE}${process.env.PG_SSLMODE === "require" ? "?sslmode=require" : ""}`;

// 迁移客户端（低连接数，用于 drizzle-kit）
const migrationClient = postgres(connectionUrl, { max: 1 });

// 查询客户端（正常连接数）
const queryClient = postgres(connectionUrl);

// Drizzle 实例
export const db = drizzle(queryClient, { schema });

// 导出 migration client 用于 drizzle-kit
export { migrationClient };
