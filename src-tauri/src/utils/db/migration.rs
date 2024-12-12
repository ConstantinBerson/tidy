use tauri_plugin_sql::{Migration, MigrationKind};

pub fn migrate() -> Vec<Migration> {
    let migrations: Vec<Migration> = vec![
        Migration { 
            version: 1,
            description: "Create project table", 
            sql: 
            "CREATE TABLE IF NOT EXISTS projects (
                project_id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                created_at DATETIME NOT NULL DEFAULT (CURRENT_TIMESTAMP),
                updated_at DATETIME NOT NULL DEFAULT (CURRENT_TIMESTAMP)
            )", 
            kind: MigrationKind::Up 
        },
        Migration { 
            version: 2,
            description: "Create section table", 
            sql: 
            "CREATE TABLE IF NOT EXISTS sections (
                section_id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                created_at DATETIME NOT NULL DEFAULT (CURRENT_TIMESTAMP),
                updated_at DATETIME NOT NULL DEFAULT (CURRENT_TIMESTAMP),
                project_id INTEGER NOT NULL,
                FOREIGN KEY (project_id) REFERENCES projects(project_id)
            )", 
            kind: MigrationKind::Up 
        },
        Migration { 
            version: 3,
            description: "Create priorities table", 
            sql: 
            "CREATE TABLE IF NOT EXISTS priorities (
                priority_id INTEGER PRIMARY KEY AUTOINCREMENT,
                label TEXT NOT NULL
            )", 
            kind: MigrationKind::Up 
        },
        Migration { 
            version: 4,
            description: "Create group table", 
            sql: 
            "CREATE TABLE IF NOT EXISTS groups (
                group_id INTEGER PRIMARY KEY AUTOINCREMENT,
                label TEXT NOT NULL
            )", 
            kind: MigrationKind::Up 
        },
        Migration { 
            version: 5,
            description: "Create tag table", 
            sql: 
            "CREATE TABLE IF NOT EXISTS tags (
                tag_id INTEGER PRIMARY KEY AUTOINCREMENT,
                label TEXT NOT NULL,
                color TEXT NOT NULL
            )", 
            kind: MigrationKind::Up 
        },
        Migration { 
            version: 6,
            description: "Create task table", 
            sql: 
            "CREATE TABLE IF NOT EXISTS tasks (
                task_id INTEGER PRIMARY KEY AUTOINCREMENT,
                label TEXT NOT NULL,
                description TEXT,
                start_date DATETIME,
                due_date DATETIME,
                created_at DATETIME NOT NULL DEFAULT (CURRENT_TIMESTAMP),
                updated_at DATETIME NOT NULL DEFAULT (CURRENT_TIMESTAMP),
                status INTEGER NOT NULL DEFAULT 0,
                priority_id INTEGER,
                group_id INTEGER,
                tag_id INTEGER,
                depend_on INTEGER,
                section_id INTEGER,
                FOREIGN KEY (priority_id) REFERENCES priorities(priority_id),
                FOREIGN KEY (group_id) REFERENCES groups(group_id),
                FOREIGN KEY (tag_id) REFERENCES tags(tag_id),
                FOREIGN KEY (depend_on) REFERENCES tasks(task_id),
                FOREIGN KEY (section_id) REFERENCES sections(section_id)
            )", 
            kind: MigrationKind::Up 
        },
        Migration { 
            version: 7,
            description: "Create subtask table", 
            sql: 
            "CREATE TABLE IF NOT EXISTS subtasks (
                subtask_id INTEGER PRIMARY KEY AUTOINCREMENT,
                label TEXT NOT NULL,
                created_at DATETIME NOT NULL DEFAULT (CURRENT_TIMESTAMP),
                updated_at DATETIME NOT NULL DEFAULT (CURRENT_TIMESTAMP),
                status INTEGER NOT NULL DEFAULT 0,
                priority_id INTEGER,
                group_id INTEGER,
                tag_id INTEGER,
                task_id INTEGER,
                FOREIGN KEY (priority_id) REFERENCES priorities(priority_id),
                FOREIGN KEY (group_id) REFERENCES groups(group_id),
                FOREIGN KEY (tag_id) REFERENCES tags(tag_id),
                FOREIGN KEY (task_id) REFERENCES tasks(task_id)
            )", 
            kind: MigrationKind::Up 
        }
    ];
    migrations
}
