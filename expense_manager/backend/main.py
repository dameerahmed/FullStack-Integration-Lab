from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from typing import List 
import models, schemas, database
models.Base.metadata.create_all(bind=database.engine)

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/add-expense", response_model=schemas.Expense)
def create_expense(
    expense: schemas.ExpenseCreate, db: Session = Depends(database.get_db)
):
    db_expense = models.Expense(**expense.dict())
    db.add(db_expense)
    db.commit()
    db.refresh(db_expense)
    return db_expense


@app.get("/expenses", response_model=List[schemas.Expense])
def read_expenses(
    skip: int = 0, limit: int = 100, db: Session = Depends(database.get_db)
):
    expenses = db.query(models.Expense).offset(skip).limit(limit).all()
    return expenses


@app.delete("/expenses/{expense_id}")
def delete_expense(expense_id: int, db: Session = Depends(database.get_db)):
    db_expense = (
        db.query(models.Expense).filter(models.Expense.id == expense_id).first()
    )
    if db_expense is None:
        raise HTTPException(status_code=404, detail="Expense not found")
    db.delete(db_expense)
    db.commit()
    return {"message": "Expense deleted successfully"}
