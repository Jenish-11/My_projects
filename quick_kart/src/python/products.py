import logging
import json

def products(mydb):
    sql = """insert into products (items) values(%s)"""
    print("first")
    fil=open("products.json","r")
    
    input_data =fil.read()
    # value=json.dumps(input_data)
    cursor = mydb.cursor()
    print(type(input_data))
    print("jhgf")
    cursor.execute(sql,(input_data,))
    mydb.commit()
    # result=cursor.fetchone()
    # # result["sta"]="sucks"
    # results = json.dumps(result)
    # # # logging.warning(results)

    # # print(result)
    # return results