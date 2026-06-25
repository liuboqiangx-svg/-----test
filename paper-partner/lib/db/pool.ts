/**
 * PostgreSQL 连接池配置
 *
 * 使用连接池管理数据库连接，支持多用户并发
 */

import { Pool, PoolClient, QueryResult, QueryResultRow } from "pg";

/**
 * 数据库配置
 */
export interface DatabaseConfig {
  host: string;
  port: number;
  database: string;
  user: string;
  password: string;
  max?: number;       // 最大连接数
  idleTimeoutMillis?: number;
  connectionTimeoutMillis?: number;
  ssl?: boolean;
}

/**
 * 默认配置（从环境变量读取）
 */
function getConfigFromEnv(): DatabaseConfig {
  const sslMode = process.env.PG_SSLMODE;

  return {
    host: process.env.PG_HOST || "localhost",
    port: parseInt(process.env.PG_PORT || "5432", 10),
    database: process.env.PG_DATABASE || "paper_partner",
    user: process.env.PG_USER || "postgres",
    password: process.env.PG_PASSWORD || "",
    max: 10,  // Neon 免费版最大连接数有限制
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 10000,
    ssl: sslMode === "require" ? true : sslMode === "disable" ? false : undefined,
  };
}

// 全局连接池
let pool: Pool | null = null;

/**
 * 获取连接池实例（单例）
 */
export function getPool(): Pool {
  if (!pool) {
    const config = getConfigFromEnv();

    // 配置 SSL（Neon 云端需要）
    const poolConfig: DatabaseConfig = {
      ...config,
      ssl: config.ssl ? { rejectUnauthorized: false } as any : false,
    };

    pool = new Pool(poolConfig);

    // 连接池事件处理
    pool.on("error", (err) => {
      console.error("[PostgreSQL] Unexpected error on idle client:", err);
    });

    pool.on("connect", () => {
      console.log("[PostgreSQL] New client connected");
    });
  }
  return pool;
}

/**
 * 执行查询
 */
export async function query<T extends QueryResultRow = QueryResultRow>(
  text: string,
  params?: unknown[]
): Promise<QueryResult<T>> {
  const start = Date.now();
  try {
    const result = await getPool().query<T>(text, params);
    const duration = Date.now() - start;

    // 慢查询日志（超过1秒）
    if (duration > 1000) {
      console.warn(`[PostgreSQL] Slow query (${duration}ms):`, text.substring(0, 100));
    }

    return result;
  } catch (error) {
    console.error("[PostgreSQL] Query error:", {
      query: text.substring(0, 200),
      error: error instanceof Error ? error.message : String(error),
    });
    throw error;
  }
}

/**
 * 获取一个客户端（用于事务）
 */
export async function getClient(): Promise<PoolClient> {
  return getPool().connect();
}

/**
 * 执行事务
 */
export async function transaction<T>(
  callback: (client: PoolClient) => Promise<T>
): Promise<T> {
  const client = await getClient();
  try {
    await client.query("BEGIN");
    const result = await callback(client);
    await client.query("COMMIT");
    return result;
  } catch (error) {
    await client.query("ROLLBACK");
    throw error;
  } finally {
    client.release();
  }
}

/**
 * 关闭连接池
 */
export async function closePool(): Promise<void> {
  if (pool) {
    await pool.end();
    pool = null;
    console.log("[PostgreSQL] Connection pool closed");
  }
}

/**
 * 测试连接
 */
export async function testConnection(): Promise<boolean> {
  try {
    const result = await query("SELECT NOW() as now");
    console.log("[PostgreSQL] Connection test:", result.rows[0]);
    return true;
  } catch (error) {
    console.error("[PostgreSQL] Connection test failed:", error);
    return false;
  }
}
