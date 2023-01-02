import logging
import json
def order(mydb, req_data):
    sql = """INSERT INTO orders(myorders, email, ph_number, address) VALUES (%s,%s,%s,%s) WHERE EXISTS (SELECT * FROM orders  
WHERE customer.cust_id = Orders.cust_id); """
    input_data = (json.dumps(req_data.get('karts')),req_data.get('email'),req_data.get('number'),json.dumps(req_data.get('address')))
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