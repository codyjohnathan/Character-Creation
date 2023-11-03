from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

# Pydantic model for character creation data
class Character(BaseModel):
    name: str
    gender: str
    age: int
    backstory: str

# POST endpoint to handle character creation
@app.post("/create_character/")
async def create_character(character: Character):
    character_info = {
        "Name": character.name,
        "Gender": character.gender,
        "Age": character.age,
        "Backstory": character.backstory
    }
    print("Character Information:")
    for key, value in character_info.items():
        print(f"{key}: {value}")
    return {"message": "Character created successfully"}

# Run the FastAPI application
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
