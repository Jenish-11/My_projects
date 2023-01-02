from http.server import HTTPServer, BaseHTTPRequestHandler
import mysql.connector
from delete import delete
from create import create
from login import login
from products import products
from get_products import get_items
import json
from order import order
from add_kart import add_kart
from get_karts import get_karts

def db_connect():
    return mysql.connector.connect(host = "localhost", user = "root", password = "Jenish@11", database = "quickkart")

# products(db_connect())

class GetHandler(BaseHTTPRequestHandler):
    

    def do_GET(self):
        if self.path == '/get_items':
            try:
                if db_connect().is_connected():
                    self.send_response(200)
                    # self.send_header('Content-Type', 'application/json')
                    self.send_header('Access-Control-Allow-Origin', '*')
                    self.end_headers()
                    # call read function from read file
                    self.wfile.write(bytes(get_items(db_connect()), "utf-8"))
            except mysql.connector.Error as error:
                self.send_response(200)
                self.end_headers()
                self.wfile.write(bytes("DB doesn't connected: {}".format(error), "utf-8"))
        
    def do_POST(self):
        if self.path == '/get_karts':
            try:
                if db_connect().is_connected():
                    content_length = int(self.headers.get("Content-Length"))
                    body = self.rfile.read(content_length)
                    req_data = json.loads(body)
                    self.send_response(200)
                    # self.send_header('Content-Type', 'application/json')
                    self.send_header('Access-Control-Allow-Origin', '*')
                    self.end_headers()
                    # call read function from read file
                    self.wfile.write(bytes(get_karts(db_connect(),req_data), "utf-8"))
            except mysql.connector.Error as error:
                self.send_response(200)
                self.end_headers()
                self.wfile.write(bytes("DB doesn't connected: {}".format(error), "utf-8"))
        elif self.path == '/delete':
            try:
                if db_connect().is_connected():
                    content_length = int(self.headers.get("Content-Length"))
                    body = self.rfile.read(content_length)
                    req_data = json.loads(body)
                    self.send_response(200)
                    # self.send_header('Content-Type', 'application/json')
                    self.send_header('Access-Control-Allow-Origin', '*')
                    self.end_headers()
                    # call read function from read file
                    self.wfile.write(bytes(delete(db_connect(),req_data), "utf-8"))
            except mysql.connector.Error as error:
                self.send_response(200)
                self.end_headers()
                self.wfile.write(bytes("DB doesn't connected: {}".format(error), "utf-8"))
                
        elif self.path == '/order':
            try:
                if db_connect().is_connected():
                    content_length = int(self.headers.get("Content-Length"))
                    body = self.rfile.read(content_length)
                    req_data = json.loads(body)
                    self.send_response(200)
                    # self.send_header('Content-Type', 'application/json')
                    self.send_header('Access-Control-Allow-Origin', '*')
                    self.end_headers()
                    # call read function from read file
                    self.wfile.write(bytes(order(db_connect(),req_data), "utf-8"))
            except mysql.connector.Error as error:
                self.send_response(200)
                self.end_headers()
                self.wfile.write(bytes("DB doesn't connected: {}".format(error), "utf-8"))

        elif self.path == '/create_account':
            try:
                if db_connect().is_connected():
                    content_length = int(self.headers.get("Content-Length"))
                    body = self.rfile.read(content_length)
                    req_data = json.loads(body)
                    self.send_response(200)
                    self.send_header('Access-Control-Allow-Origin','*')
                    self.end_headers()
                    # call create function from create file
                    self.wfile.write(bytes(create(db_connect(), req_data), "utf-8"))

            except mysql.connector.Error as error:
                self.send_response(200)
                self.end_headers()
                self.wfile.write(bytes("DB doesn't connected: {}".format(error), "utf-8"))
        elif self.path == '/add_kart':
            try:
                if db_connect().is_connected():
                    content_length = int(self.headers.get("Content-Length"))
                    body = self.rfile.read(content_length)
                    req_data = json.loads(body)
                    self.send_response(200)
                    self.send_header('Access-Control-Allow-Origin','*')
                    self.end_headers()
                    # call create function from create file
                    self.wfile.write(bytes(add_kart(db_connect(), req_data), "utf-8"))

            except mysql.connector.Error as error:
                self.send_response(200)
                self.end_headers()
                self.wfile.write(bytes("DB doesn't connected: {}".format(error), "utf-8"))

                
        elif self.path == '/login':
            try:
                if db_connect().is_connected():
                    content_length = int(self.headers.get("Content-Length"))
                    body = self.rfile.read(content_length)
                    req_data = json.loads(body)
                    self.send_response(200)
                    self.send_header('Access-Control-Allow-Origin','*')
                    self.end_headers()
                    # call create function from create file
                    self.wfile.write(bytes(login(db_connect(), req_data), "utf-8"))

            except mysql.connector.Error as error:
                self.send_response(200)
                self.end_headers()
                self.wfile.write(bytes("DB doesn't connected: {}".format(error), "utf-8"))


        


def main():
    httpd = HTTPServer(('localhost', 5000), GetHandler)
    print("Web server has been started")
    httpd.serve_forever()


if __name__ == "__main__":
    main()
