import EmojiHub from "./components/EmojiHub.tsx";
import styled from "styled-components";
import {useEffect, useState} from "react";
import type {Emoji} from "./interfaces/Emojis.ts";

const ParentDiv=styled.div`
    width: 80vw;
    margin: auto;
    border: 10px #c8bbe7 groove;
    background-color: #d6cde6;
`;

export default function App(){

    // useState Hook to store Data.
    const [data, setData] = useState<Emoji[]>([]);

    // useEffect Hook for error handling and re-rendering.
    useEffect(() => {
        async function fetchData(): Promise<void> {
            const rawData = await fetch("https://emojihub.yurace.pro/api/all");
            const jsonRes = await rawData.json();
            setData(jsonRes);
        }
        fetchData()
            .then(() => console.log("Data fetched successfully"))
            .catch((e: Error) => console.log("There was the error: " + e));
    }, []);

    return(
        <ParentDiv>
            <EmojiHub data={data}/>
        </ParentDiv>
    )
}

