# from wsb import app

import logging
import requests

logging.basicConfig(format="%(asctime)s: %(message)s", level=logging.INFO, datefmt="%H:%M:%S")
logger = logging.getLogger("eventLogger")

def getNew():
  r = requests.get("https://www.reddit.com/r/wallstreetbets/new.json?sort=new&limit=100")

  try:
    posts = r.json()["data"]
  except:
    logger.info(r.json()["message"])

  posts = posts["children"]

  logger.info("Posts updated.")