import React from "react";
import Links from "../../components/Links";

function Home() {

    return (
        <div className='App'>
            <menu>
                <ul>
                    <li>
                        <Links
                            texto={"Clique para Splitar"}
                            link={"/platform-video-game?platform=Playstation&firstConsole=PSOne&lastGeneration=PS5"}
                        />
                    </li>
                    <li>
                        <Links 
                            texto={"Clique para Querry"}
                            link={"/guitars?urlParams=grestch"}
                        />
                    </li>
                </ul>
            </menu>
        </div>
    );
}

export default Home;