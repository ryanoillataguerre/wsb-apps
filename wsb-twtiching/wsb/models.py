from wsb import db
from sqlalchemy.dialects.postgresql import UUID
from uuid import UUID as UUID_
import uuid

class Post(db.Model):
  id = db.Column(UUId(as_uuid=True), primary_key=True, default=uuid.uuid4, unique=True)
  title = db.Column(db.String(), nullable=False)
  content = db.Column(db.String(), nullable=False)