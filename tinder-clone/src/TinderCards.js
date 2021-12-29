import  React, { useState } from 'react'
import TinderCard from "react-tinder-card"
import "./TinderCards.css"

export default function TinderCards() {
     const [people, setPeople] = useState([
         {
             name:'Elon Musk',
             url:"images/elon.jpg"
         },
         {
            name:'Jeff Bezos',
            url:"images/jeff.jpg"
        }
     ]);
     const swiped = (direction, nameToDelete) => {
         console.log("removing:" + nameToDelete);
     }
     
     const outOfFrame = (name) => {
         console.log(name + " left the screen!")
     }
    return (
     <div className="tinderCards">
         <div className="tinderCards__cardContainer">
         {people.map((person) => (
                <TinderCard
                className="swipe"
                key={person.name}
                preventSwipe={["up", "down"]}
                onSwipe={(dir) => swiped(dir, person.name)}
                onCardLeftScreen={() => outOfFrame(person.name)}
                >
                <div 
                style={{ backgroundImage: `url( ${ person.url })` }}
                className="card"
                >
                    <h3>{person.name}</h3>
                </div>
                </TinderCard>
            ))}
         </div>
      </div>
    )
}

