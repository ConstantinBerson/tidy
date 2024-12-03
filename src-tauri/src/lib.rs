use tauri_plugin_sql::{Migration, MigrationKind};

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    let migration=vec![
        Migration {
            version: 1,
            description: "create_initial_task_project",
            sql: "CREATE TABLE project (id INTEGER PRIMARY KEY, name TEXT,createdAt DATE, updatedAt DATE);",
            kind: MigrationKind::Up,
        },
        Migration {
            version: 1,
            description: "create_initial_task_project",
            sql: "CREATE TABLE task (id INTEGER PRIMARY KEY, label TEXT);",
            kind: MigrationKind::Up,
        },
        Migration {
            version: 1,
            description: "create_initial_task_project",
            sql: "CREATE TABLE task (id INTEGER PRIMARY KEY, name TEXT);",
            kind: MigrationKind::Up,
        },
        Migration {
            version: 1,
            description: "create_initial_task_project",
            sql: "CREATE TABLE task (id INTEGER PRIMARY KEY, name TEXT);",
            kind: MigrationKind::Up,
        }
    ];
    tauri::Builder::default()
        .plugin(tauri_plugin_sql::Builder::new().build())
        .plugin(tauri_plugin_store::Builder::new().build())
        .plugin(tauri_plugin_notification::init())
        .setup(|app| {
            if cfg!(debug_assertions) {
                app.handle().plugin(
                    tauri_plugin_log::Builder::default()
                        .level(log::LevelFilter::Info)
                        .build(),
                )?;
            }
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
