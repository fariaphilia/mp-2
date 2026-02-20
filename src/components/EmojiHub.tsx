import styled from "styled-components";
import type {Emoji} from "../interfaces/Emojis.ts";

const AllCharsDiv=styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    
    
`;

const SingleCharDiv=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 30%;
    padding: 2%;
    margin: 1%;
    border: 5px #c8bbe7 ridge;
    text-align: center;
    align-items: stretch;
    //background-color: lavender;
    background-color: ${(props)=>(props.category === "smileys and people" ? 'lavender' : 'white')};
    font-family: Garamond, "Times New Roman", serif;
`;

const Name=styled.div`
    padding: 3%;
    font-size: calc(3px + 2vw);
    font-weight: bold;
    
`

const Emoji=styled.div`
    font-size: 100px;
`
function emojiName(name: string): string{
    let newName = "";
    let i = 0;

    while (i < name.length && name[i] !== '≊'){
        newName += name[i];
        i++;
    }
    return newName;
}

export default function EmojiHub(props : { data:Emoji[] } ){
    return (
        <AllCharsDiv >
            {
                props.data.map((emoji: Emoji) =>
                    <SingleCharDiv key={emoji.name} category={emoji.category}>
                        <Emoji>
                            {String.fromCodePoint(
                                parseInt(emoji.unicode[0].substring(2), 16)
                                )
                            }
                        </Emoji>
                        <Name>{emojiName(emoji.name)}</Name>
                        <p>Category: {emoji.category}</p>
                        <p>Group: {emoji.group}</p>
                    </SingleCharDiv>
                )
            }
        </AllCharsDiv>
    );
}

