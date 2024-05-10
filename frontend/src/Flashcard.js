import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Flashcard() {
    const [flashcards, setFlashcards] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/flashcards/')
            .then(response => {
                setFlashcards(response.data);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            {flashcards.map(flashcard => (
                <div key={flashcard.id}>
                    <h2>{flashcard.term}</h2>
                    <p>{flashcard.definition}</p>
                </div>
            ))}
        </div>
    );
}

export default Flashcard;
