import mysql.connector

# Connect to the MySQL database
cnx = mysql.connector.connect(
    host="localhost",
    user="your_username",
    password="your_password",
    database="your_database"
)

# Create a cursor object to execute SQL statements
cursor = cnx.cursor()

# Create the table to store the adjacency matrix
table_name = "player_connections"
create_table_query = f"""
    CREATE TABLE {table_name} (
        player_id INT NOT NULL,
        connected_player_id INT NOT NULL,
        is_connected TINYINT(1) NOT NULL,
        PRIMARY KEY (player_id, connected_player_id)
    )
"""
cursor.execute(create_table_query)

# Insert data into the table using your adjacency matrix
adjacency_matrix = your_function_to_generate_adjacency_matrix()
insert_query = f"""
    INSERT INTO {table_name} (player_id, connected_player_id, is_connected) VALUES (%s, %s, %s)
"""
for i in range(len(adjacency_matrix)):
    for j in range(len(adjacency_matrix)):
        player_id = i + 1  # Assumes player IDs start at 1
        connected_player_id = j + 1  # Assumes player IDs start at 1
        is_connected = adjacency_matrix[i][j]
        cursor.execute(insert_query, (player_id, connected_player_id, is_connected))

# Commit the changes to the database
cnx.commit()

# Close the cursor and database connection
cursor.close()
cnx.close()
