from sqlalchemy import Column, Integer, String, Date
from database import Base


class Expense(Base):
    __tablename__ = "expenses"

    id = Column(Integer, primary_key=True, index=True)
    category = Column(String(255), index=True)
    amount = Column(Integer)
    date = Column(Date)
