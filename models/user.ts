export interface User {
  id?: number;
  name: string;
  email: string;
}

export class User {
  private sql: any;

  constructor(sql: any) {
    this.sql = sql;
  }

  // Create table if not exists
  async init() {
    await this.sql.execute(`
      CREATE TABLE IF NOT EXISTS users (
          id INT AUTO_INCREMENT PRIMARY KEY,
          name VARCHAR(100) NOT NULL,
          email VARCHAR(100) UNIQUE NOT NULL
        )`);
  }

  // Create
  async create(user: User): Promise<string> {
    const result = await this.sql.execute(
      "INSERT INTO users(name, email) VALUES(?, ?)",
      [user.name, user.email],
    );

    return result.lastInsertId as string;
  }

  // Read all
  async getAll(): Promise<User[]> {
    const result = await this.sql.query("SELECT * FROM users;");
    return result as User[];
  }
}