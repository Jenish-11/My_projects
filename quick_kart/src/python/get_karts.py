import logging
import json
def get_karts(mydb, req_data):
    sql = """SELECT karts FROM registers WHERE email=%s"""
    input_data = (req_data.get('email'))
    cursor = mydb.cursor(dictionary=True)
    cursor.execute(sql ,(input_data,))
    result=cursor.fetchone()
    cursor.close()
    results = json.dumps(result)
    
    # logging.warning(results)
    print(result)
    return results