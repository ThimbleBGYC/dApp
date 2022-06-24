import { Button, Card, CardActions, CardContent } from '@mui/material';
import Image from 'next/image';
import Connect from "@components/web3/connect";


const MintNFTCard = ({ description, action, canMint, showNumToMint, setNumToMint, mintStatus}) => {
  const handleChange = (event) => {
    const numToMint = parseInt(event.target.value);
    setNumToMint(numToMint);
  };

  return (
    <Card sx={{ maxWidth: 400, backgroundColor: "rgba(0, 0, 0, 0.6)"}} >
      <CardContent sx={{color: "#ffffff", textAlign: "center"}}>
        <Image alt="sample NFT" src='/example.jpg' width={400} height={400}/>
        {mintStatus ? <p>Success! Check your wallet in a few minutes.</p> : <p>{description}</p>}

      </CardContent>
      <Connect></Connect>
      <CardActions sx={{justifyContent: "space-evenly", alignItems: "center", flexDirection: "column-reverse"}}>
      <img src="/lead pipe with blood.png" width={"80%"} alignSelf={"center"}/>
        {showNumToMint &&
           <select defaultValue={0} 
           onChange={handleChange} 
           sx={{mx: 5, width: 500 }}
           >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
            </select> }
        <Button disabled={!canMint} onClick={action} sx={{ alignItems: "center", color: "#ffffff", marginBottom: "10px"}}><img src="/mintbutton.png" width={"200px"}/></Button>
      </CardActions>
    </Card>
  );
}

export default MintNFTCard;
