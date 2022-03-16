import api from "../libs/axios"

export async function getStaticProps() {
    const result = await api.get("https://api.twitch.tv/helix/games/top%22");
    console.log(result)
    const games = result.data.data;
  
    return {
      props: {
        games,
      },
    };
  }

export default function Games_store({ games }){
    return(
        <h1>SUPER J'ADORE</h1>
    );


}