import logging
import json
def delete(mydb, req_data):
    sql = """UPDATE registers SET karts = JSON_REMOVE(karts, '$[%s]') where email=%s;"""
    input_data = (req_data.get('index'),req_data.get('email'))
    cursor = mydb.cursor(dictionary=True)
    cursor.execute(sql ,(input_data))
    result=cursor.fetchone()
    mydb.commit()
    # result=json.loads(result)
    # strre=json.dumps(result)
    # logging.warning(strre)
    # # result.pop(req_data.get('index'))
    # # sql2 = """ update registers  set karts=%s  where email=%s """
    # logging.warning(result)

    print(result)
    return "success"