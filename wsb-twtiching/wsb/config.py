import os

basedir = os.path.abspath(os.path.dirname(__file__))

class Config(object):
  SECRET_KEY = "W4dNaPqRXjW1eZG2d9vXW4dNaPqRXjW1eZG2d9vX"
  SQLALCHEMY_DATABASE_URI = "sqlite:///" + os.path.join(basedir, "posts.db")

  JOBS = [
    {
      "id": "sched_getNew",
      "func": "wsb.scripts.fetchPosts:getNew",
      "trigger": "interval",
      "minutes": 5
    }
  ]