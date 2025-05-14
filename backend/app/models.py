from sqlalchemy import Column, Integer, String, UUID, TIMESTAMP, ForeignKey
from sqlalchemy.ext.declarative import declarative_base
import uuid

Base = declarative_base()

class Guest(Base):
    __tablename__ = "guests"
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    email = Column(String, unique=True, nullable=False)
    password_hash = Column(String, nullable=False)
    # Add other tables as needed...