import React, {useState, useEffect} from 'react';

function PlatformVideoGame() {


    const url = window.location.href;
    const splitGlobal = url.split('&');
    const splitPlatform = splitGlobal[0].split('platform=')[1];
    const splitFirstConsole = splitGlobal[0].split('firstConsole=')[1];
    const splitLastGeneration = splitGlobal[0].split('lastGeneration=')[1];

    const [platform, setPlatform] = useState();
    const [firstConsole, setFirstConsole] = useState();
    const [lastGeneration, setLastGeneration] = useState();

    useEffect (() => {
        if (splitPlatform === 'Playstation') {
            setPlatform (
                <div className='card1'>
                    <img alt='lsala' src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.gratispng.com%2Fpng-6lyql9%2F&psig=AOvVaw3I_5t7IGzg6WAKQiXst7o8&ust=1665691416951000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCOCzuJm-2_oCFQAAAAAdAAAAABAQ' />
                </div>                
            )
        }

        else if (splitPlatform === 'Xbox') {
            setPlatform (
                <div className='card2'>
                    <img alt='teste' src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fpt.m.wikipedia.org%2Fwiki%2FFicheiro%3AXbox_logo_(2019).svg&psig=AOvVaw1osDoh0mjLELHusxoW1Tq5&ust=1665692965142000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCJCb3_vD2_oCFQAAAAAdAAAAABAE' />
                </div>
            )
        }

        else if (splitPlatform === 'Nintendo') {
            setPlatform(
                <div className='card3'>
                    <img alt='teste' src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Fbr%2Ficone-gratis%2Fnintendo_871380&psig=AOvVaw0VojvUpmR3nd6f3fDgx6t0&ust=1665693039453000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCIi3oaTE2_oCFQAAAAAdAAAAABAE' />
                </div>
            )
        }

        else {
            setPlatform(<p>Valor desconhecido</p>)
        }

    }, [])

    useEffect (() => {
        if (splitFirstConsole === 'PSOne') {
            setFirstConsole (
                <div className='card'>
                    <img alt='teste' src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fpt.wikipedia.org%2Fwiki%2FPlayStation_(console)&psig=AOvVaw33wzd6O66Ze7QcYmExHlZq&ust=1665691886910000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCICk7Pm_2_oCFQAAAAAdAAAAABAE' />
                </div>
            )
        }

        else if (splitFirstConsole === 'Xbox') {
            setFirstConsole (
                <div className='card'>
                    <img alt='teste' src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fpt.wikipedia.org%2Fwiki%2FFicheiro%3AXbox-Console-Set.png&psig=AOvVaw1h1le_uKm0RqVPupDir-Do&ust=1665693176557000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCJje9ODE2_oCFQAAAAAdAAAAABAD' />
                </div>
            )
        }

        else if (splitFirstConsole === 'NintendoEntertainmentSystem') {
            setFirstConsole (
                <div className='card'>
                    <img alt='teste' src='https://www.google.com/url?sa=i&url=https%3A%2F%2Ftoppng.com%2Ffree-image%2Fnes-classic-edition-PNG-free-PNG-Images_70481&psig=AOvVaw0HzR9_g7FJoW9SfMM2It6v&ust=1665693526531000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCODZw4fG2_oCFQAAAAAdAAAAABAS' />
                </div>
            )
        }

        else {
            setFirstConsole(<p>Valor desconhecido</p>)
        }

    }, [])

    

    useEffect (() => {
        if (splitLastGeneration === 'PS5') {
            setLastGeneration (
                <div className='card'>
                    <img alt='teste' src='https://www.google.com/url?sa=i&url=https%3A%2F%2Ftoppng.com%2Ffree-image%2Fps5-official-console-and-controller-PNG-free-PNG-Images_475439&psig=AOvVaw12Z8tsVikksqSzueWOVSkm&ust=1665692059765000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCPjDgszA2_oCFQAAAAAdAAAAABAE' />
                </div>
            )
        }

        else if (splitLastGeneration === 'Xbox Series X') {
            setLastGeneration (
                <div className='card'>
                    <img alt='teste' src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.xbox.com%2Fen-US%2Fconsoles%2Fxbox-series-x&psig=AOvVaw2CB1Fh3GkRk908rSkfvS3w&ust=1665693677983000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCLjG1M_G2_oCFQAAAAAdAAAAABAD' />
                </div>
            )
        }

        else if (splitLastGeneration === 'Nintendo Switch') {
            setLastGeneration (
                <div className='card'>
                    <img alt='teste' src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngall.com%2Fnintendo-switch-png&psig=AOvVaw3Md3W4Tb5Szinli_qmJFXr&ust=1665693787830000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCPCYyYTH2_oCFQAAAAAdAAAAABAE' />
                </div>
            )
        }

        else {
            setLastGeneration(<p>Valor desconhecido</p>)
        }

    }, [])

    return (
        <>
            <ul>
                <li>{platform}</li>
                <li>{firstConsole}</li>
                <li>{lastGeneration}</li>
            </ul>
        </>
    )

}

export default PlatformVideoGame;