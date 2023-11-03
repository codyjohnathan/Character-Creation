import React, { useState } from 'react';
import { TextInput, Button } from '@mantine/core';

interface Character {
  name: string;
  gender: string;
  age: number;
  backstory: string;
}

const CharacterForm: React.FC = () => {
  const [formData, setFormData] = useState<Character>({
    name: '',
    gender: '',
    age: 0,
    backstory: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/create_character/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        console.log('Character created successfully!');
      } else {
        console.log('Error creating character');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div style={{ width: '100vw', display: 'flex', justifyContent: 'center' }}>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: '600px', 
          width: '100%', 
          border: '1px solid #ccc',
          borderRadius: 4,
          padding: '20px', 
          boxSizing: 'border-box' 
        }}
      >
        <TextInput
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={{ marginBottom: 15 }}
        />
        <TextInput
          placeholder="Gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          style={{ marginBottom: 15 }}
        />
        <TextInput
          placeholder="Age"
          name="age"
          type="number"
          value={formData.age.toString()}
          onChange={handleChange}
          style={{ marginBottom: 15 }}
        />
        <TextInput
          placeholder="Backstory"
          name="backstory"
          value={formData.backstory}
          onChange={handleChange}
          style={{ marginBottom: 15 }}
        />
        <Button type="submit">Create Character</Button>
      </form>
    </div>
  );
};

export default CharacterForm;
