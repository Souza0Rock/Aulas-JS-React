import React from "react";

const gretschLink = ('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pridemusicshop.com.br%2Fproduto%2Fgretsch%2Fguitarras%2F10220295%2Fgretsch-g6228tg-players-edition-jet-bt-bigsby&psig=AOvVaw2B59oUtTBPDfHrPw_b536u&ust=1665773196787000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCKDpx-3u3foCFQAAAAAdAAAAABAE')
const aslanLink = ('https://www.google.com/imgres?imgurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D1411728695998127&imgrefurl=https%3A%2F%2Fwww.facebook.com%2Fpeople%2FAslan-Guitars%2F100036868402290%2F&tbnid=wSMZq4Ci4ra7nM&vet=12ahUKEwjK7YiB7936AhX1rpUCHZC4CNcQMygfegUIARD7AQ..i&docid=FCyxB79P_mHlBM&w=1440&h=1440&q=Aslan%20guitars&ved=2ahUKEwjK7YiB7936AhX1rpUCHZC4CNcQMygfegUIARD7AQ')
const fenderLink = ('https://www.google.com/url?sa=i&url=https%3A%2F%2Fmobile.twitter.com%2Fdeleogt&psig=AOvVaw23IYkwhkJ2QzJ6iJKSm4FG&ust=1665773338946000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCNjZiLDv3foCFQAAAAAdAAAAABAL')
const gibsonLink = ('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tangomusic.com.br%2Fguitarra-gibson-les-paul-modern-graphite-top-141518-p11322&psig=AOvVaw3waLNG_S6uNeCE4RWP1m9V&ust=1665773841552000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCPjXsaDx3foCFQAAAAAdAAAAABAD')
const duesenbergLink = ('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.themusiczoo.com%2Fblogs%2Fnews%2Fduesenberg-guitars-lineup-for-2015&psig=AOvVaw0rFWM9aaZXSAPljGgyhDFr&ust=1665773924652000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCIiLsc3x3foCFQAAAAAdAAAAABAE')

const params = new URLSearchParams(window.location.search);
let urlParams = undefined;
params.forEach((value, key) => {
    urlParams = Object.assign({}, urlParams, {
        [key]: value.toString(),
    });
});

function Guitars() {
    return (
        <div>
            <div>
                {urlParams.gretsch === "gretsch" && <img alt="Gretsch" href={gretschLink} />}
                {urlParams.aslan === "aslan" && <img alt="Aslan" href={aslanLink} />}
                {urlParams.fender === "fender" && <img alt="Fender" href={fenderLink} />}
                {urlParams.gibson === "gibson" && <img alt="Gibson" href={gibsonLink} />}
                {urlParams.duesenberg === "duesenberg" && <img alt="Duesenberg" href={duesenbergLink} />}
            </div>
        </div>
    );
}

export default Guitars;