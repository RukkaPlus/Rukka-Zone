from flask import Flask, render_template, abort
from os.path import join

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/res/license")
def license():
    return render_template(join("res", "license.html"))

@app.route("/docs/python/<filename>")
def pydocs(filename):
    try:
        return render_template(filename + ".html")
    except:
        abort(404)

@app.route("/docs/web/<filename>")
def webdocs(filename):
    try:
        return render_template(join("web", filename + ".html"))
    except:
        abort(404)

@app.route("/docs/web/lib/<filename>")
def webdocs_lib(filename):
    try:
        return render_template(join("web", "lib", filename + ".html"))
    except:
        abort(404)

if __name__ == "__main__":
    app.run(debug=True)