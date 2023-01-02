import logging
import json
def get_items(mydb):
    sql = """SELECT * FROM products"""
    
    cursor = mydb.cursor(dictionary=True)
    cursor.execute(sql)
    result=cursor.fetchone()
    results = json.dumps(result)
    print(result)
    return results