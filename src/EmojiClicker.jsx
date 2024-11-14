import {v4 as uuid } from "uuid";
import {useState} from "react";

function randomEmoji() {
    const choices = ["😍", "😁", "😢", "😒", "😎", "😘"];
    return choices [Math.floor(Math.random()*choices.length)];
}

export default function EmojiClicker() {
    const [emojis, setEmojis] = useState([{id: uuid(), emoji: randomEmoji()}]);
    const addEmoji = () => {
        setEmojis(oldEmojis => [...oldEmojis, {id: uuid(), emoji:randomEmoji()}]);
    }

    const deleteEmoji = (id) => {
        setEmojis(prevEmojis => {
            return prevEmojis.filter(e => e.id !== id)
        })
    }

    //update all elements and make them all into hearts
    const turnIntoHearts = () => {
        setEmojis(emojis.map(item => {
            return {
                ...item,
                emoji: "❤️"  // Set emoji to heart
            };
        }));
    }
    
    return (
        <div>
            {emojis.map((e) => (
                <span onClick={() => deleteEmoji(e.id)} key={e.id} style={{fontSize: "4rem"}}>{e.emoji}</span>
            ))}
            <button style={{display: "block", textAlign: "center", margin: "20px auto"}} onClick={addEmoji}>Add Emoji</button>
            <button style={{display: "block", textAlign: "center", margin: "20px auto"}} onClick={turnIntoHearts}>Make them all hearts</button>
        </div>
    )
}