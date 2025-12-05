from pydantic import BaseModel
from datetime import date



class ExpenseBase(BaseModel):
    category: str
    amount: int
    date: date


class ExpenseCreate(ExpenseBase):
    pass


class Expense(ExpenseBase):
    id: int

    class Config:
        orm_mode = True
