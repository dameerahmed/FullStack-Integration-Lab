import mysql.connector


uni_db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="Admin@123",
    database="university_db",
)


cur = uni_db.cursor()


cur.execute(" update students set roll = 'student'; ")
uni_db.commit()
cur.execute(" select * from students; ")
data = cur.fetchall()
uni_db.commit()
cur.close()
uni_db.close()

for x in data:
    print(x)
    
