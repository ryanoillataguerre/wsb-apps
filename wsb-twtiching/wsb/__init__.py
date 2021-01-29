from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_apscheduler import APScheduler

from wsb.config import Config

app = Flask(__name__)
app.config.from_object(Config)

db = SQLAlchemy(app)

scheduler = APScheduler()
scheduler.init_app(app)
scheduler.start()

from wsb.main.routes import main

app.register_blueprint(main)