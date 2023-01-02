import logging

def create(mydb, req_data):
    sql = """INSERT INTO registers (name, email, password, number, country, state, district, city, pincode) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)"""
    input_data = (req_data.get('name'), req_data.get('email'), req_data.get('password'), req_data.get('number'), req_data.get('country'), req_data.get('state'), req_data.get('district'), req_data.get('city'), req_data.get('pincode'))
    cursor = mydb.cursor()
    cursor.execute(sql, input_data)
    mydb.commit()
    cursor.close()
    logging.warning("Record inserted successfully")
    return "Record inserted successfully"