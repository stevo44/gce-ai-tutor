import psycopg2

# YOUR CONNECTION DETAILS (replace YOUR_ACTUAL_PASSWORD)
conn_params = {
    "host": "db.mmvnhuknjtclwedwdodi.supabase.co",
    "database": "postgres",
    "user": "postgres",  # Just "postgres", not the long one
    "password": "MRC2VldhvXVWXp1G",  # ← PUT YOUR PASSWORD HERE
    "port": "5432"  # ← CHANGED FROM 6543 to 5432
}

try:
    print("🔄 Connecting to Supabase...")
    conn = psycopg2.connect(**conn_params)
    cursor = conn.cursor()
    
    print("✅ Connection successful!\n")
    
    # Test query 1: Count topics
    cursor.execute("SELECT COUNT(*) FROM topics")
    result = cursor.fetchone()
    print(f"📊 Total topics in database: {result[0]}")
    
    # Test query 2: List all topics
    cursor.execute("""
        SELECT topic_number, topic_name, level_code 
        FROM topics t
        JOIN levels l ON t.level_id = l.level_id
        ORDER BY topic_number
    """)
    topics = cursor.fetchall()
    
    print("\n📚 All Topics:")
    for topic in topics:
        print(f"  {topic[0]}. {topic[1]} ({topic[2]})")
    
    # Test query 3: Search by keyword
    cursor.execute("SELECT * FROM search_by_keyword('mole')")
    results = cursor.fetchall()
    
    print(f"\n🔍 Search results for 'mole':")
    for row in results:
        print(f"  Topic: {row[0]}")
        print(f"  Level: {row[1]}")
        print(f"  Module: {row[2]}\n")
    
    cursor.close()
    conn.close()
    print("✅ Connection closed successfully!")
    
except psycopg2.Error as e:
    print(f"❌ Database Error: {e}")
    print("\n💡 Check:")
    print("  1. Is your password correct?")
    print("  2. Did you replace YOUR_ACTUAL_PASSWORD?")
    
except Exception as e:
    print(f"❌ Error: {e}")