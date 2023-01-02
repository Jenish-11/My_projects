import logging
import json
def add_kart(mydb, req_data):
    sql = """ update registers  set karts=%s  where email=%s """
    input_data = (json.dumps(req_data.get('karts')),req_data.get('email'))
    cursor = mydb.cursor()
    cursor.execute(sql, input_data)
    # result=cursor.execute("""select *from registers where email=%s""",(req_data.get('email')))
    # result["sta"]="sucks"
    mydb.commit()
    cursor.close()
    # results = json.dumps(result)
    # logging.warning(results)

    # print(result)
    return "success"