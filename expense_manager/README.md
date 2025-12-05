# Expense Manager

## Prerequisites
- Python 3.8+
- Node.js 14+
- MySQL Server

## Setup Instructions

### 1. Navigate to Project Directory
   ```bash
   cd expense_manager
   ```

### 2. Database Setup
1. Make sure your MySQL server is running.
2. Create the database and table using the provided script:
   **Windows (PowerShell):**
   ```powershell
   cmd /c "mysql -u root -p < database/init_db.sql"
   ```
   **Mac/Linux (Bash):**
   ```bash
   mysql -u root -p < database/init_db.sql
   ```
   (Enter your password when prompted. If you don't have a password, remove `-p`).

### 3. Backend Setup
1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Install Python dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Start the server:
   ```bash
   uvicorn main:app --reload
   ```
   The backend runs at `http://localhost:8000`.

### 4. Frontend Setup
1. Open a new terminal and navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React app:
   ```bash
   npm run dev
   ```
   The frontend runs at `http://localhost:5173`.
