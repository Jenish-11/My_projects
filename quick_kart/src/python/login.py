import logging
import json
def login(mydb, req_data):
    sql = """SELECT * FROM registers WHERE email=%s and password=%s"""
    input_data = (req_data.get('email'), req_data.get('password'))
    cursor = mydb.cursor(dictionary=True)
    cursor.execute(sql, input_data)
    result=cursor.fetchone()
    result["sta"]="sucks"
    results = json.dumps(result)
    # logging.warning(results)

    print(result)
    return results