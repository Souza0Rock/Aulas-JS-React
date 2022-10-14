import React from 'react';

function PlatformVideoGame() {


    const url = window.location.href;
    const splitUrl = url.split('&')
    const splitPlatform = splitUrl[0].split('platform=')[1];
    const splitFirstConsole = splitUrl[1].split('firstConsole=')[1];
    const splitLastGeneration = splitUrl[2].split('lastGeneration=')[1];

    return (
        <div>
            <div>
                <div>            
                    {splitPlatform === 'Playstation' && <img alt='Logo Playstation' src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.gratispng.com%2Fpng-6lyql9%2F&psig=AOvVaw3I_5t7IGzg6WAKQiXst7o8&ust=1665691416951000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCOCzuJm-2_oCFQAAAAAdAAAAABAQ' />}
                </div>
                <div>
                    {splitFirstConsole === 'PSOne' && 
                        (
                            <>
                                <h2>Primeiro console</h2>
                                <img alt='PSOne' src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fpt.wikipedia.org%2Fwiki%2FPlayStation_(console)&psig=AOvVaw33wzd6O66Ze7QcYmExHlZq&ust=1665691886910000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCICk7Pm_2_oCFQAAAAAdAAAAABAE' />
                            </>
                        )}
                </div>
                <div>
                    {splitLastGeneration === 'PS5' && 
                        (
                            <>
                                <h2>Última geração</h2>
                                <img alt='PS5' src='https://www.google.com/url?sa=i&url=https%3A%2F%2Ftoppng.com%2Ffree-image%2Fps5-official-console-and-controller-PNG-free-PNG-Images_475439&psig=AOvVaw12Z8tsVikksqSzueWOVSkm&ust=1665692059765000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCPjDgszA2_oCFQAAAAAdAAAAABAE' />
                            </>
                        )}
                </div>
            </div>
            <div>
                <div>            
                    {splitPlatform === 'Nintendo' && <img alt='Logo Nintendo' src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Fbr%2Ficone-gratis%2Fnintendo_871380&psig=AOvVaw0VojvUpmR3nd6f3fDgx6t0&ust=1665693039453000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCIi3oaTE2_oCFQAAAAAdAAAAABAE' />}
                </div>
                <div>
                    {splitFirstConsole === 'Nintendo Entertainment System' && 
                        (
                            <>
                                <h2>Primeiro console</h2>
                                <img alt='Nintendo Entertainment System' src='https://www.google.com/url?sa=i&url=https%3A%2F%2Ftoppng.com%2Ffree-image%2Fnes-classic-edition-PNG-free-PNG-Images_70481&psig=AOvVaw0HzR9_g7FJoW9SfMM2It6v&ust=1665693526531000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCODZw4fG2_oCFQAAAAAdAAAAABAS' />
                            </>
                        )}
                </div>
                <div>
                    {splitLastGeneration === 'Nintendo Switch' && 
                        (
                            <>
                                <h2>Última geração</h2>
                                <img alt='Nintendo Switch' src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngall.com%2Fnintendo-switch-png&psig=AOvVaw3Md3W4Tb5Szinli_qmJFXr&ust=1665693787830000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCPCYyYTH2_oCFQAAAAAdAAAAABAE' />
                            </>
                        )}
                </div>
            </div>
            <div>
                <div>            
                    {splitPlatform === 'Xbox' && <img alt='Logo Xbox' src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fpt.m.wikipedia.org%2Fwiki%2FFicheiro%3AXbox_logo_(2019).svg&psig=AOvVaw1osDoh0mjLELHusxoW1Tq5&ust=1665692965142000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCJCb3_vD2_oCFQAAAAAdAAAAABAE' />}
                </div>
                <div>
                    {splitFirstConsole === 'Xbox' && 
                        (
                            <>
                                <h2>Primeiro console</h2>
                                <img alt='Xbox first console' src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fpt.wikipedia.org%2Fwiki%2FFicheiro%3AXbox-Console-Set.png&psig=AOvVaw1h1le_uKm0RqVPupDir-Do&ust=1665693176557000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCJje9ODE2_oCFQAAAAAdAAAAABAD' />
                            </>
                        )}
                </div>
                <div>
                    {splitLastGeneration === 'Xbox Series X' && 
                        (
                            <>
                                <h2>Última geração</h2>
                                <img alt='Xbox Serie X' src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.xbox.com%2Fen-US%2Fconsoles%2Fxbox-series-x&psig=AOvVaw2CB1Fh3GkRk908rSkfvS3w&ust=1665693677983000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCLjG1M_G2_oCFQAAAAAdAAAAABAD' />
                            </>
                        )}
                </div>
            </div>
        </div>
    )
}

export default PlatformVideoGame;