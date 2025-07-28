from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import openai
import os

app = FastAPI()

class IssueReport(BaseModel):
    issue: str

openai.api_key = os.environ.get('OPENAI_API_KEY')

@app.post('/api/report-issue')
async def report_issue(issue_report: IssueReport):
    try:
        if not openai.api_key:
            raise HTTPException(status_code=500, detail='OpenAI API key not configured.')
        
        response = openai.Completion.create(
            engine="text-davinci-003",
            prompt=f"Analyze the following issue and suggest a solution: {issue_report.issue}",
            max_tokens=150
        )
        
        return {"message": response.choices[0].text.strip()}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get('/api/health')
async def health_check():
    return {"status": "ok"}