import os
import traceback
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from pathlib import Path


HOST = "127.0.0.1"
PORT = 8767


if __name__ == "__main__":
    try:
        os.chdir(Path(__file__).resolve().parent)
        server = ThreadingHTTPServer((HOST, PORT), SimpleHTTPRequestHandler)
        server.serve_forever()
    except Exception:
        Path("server_error.log").write_text(traceback.format_exc(), encoding="utf-8")
        raise
