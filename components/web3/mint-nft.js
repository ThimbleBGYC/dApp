import { Grid, Stack } from '@mui/material';
import { useWeb3React } from '@web3-react/core';
import { useState } from 'react';
import { mint } from '@pages/utils/_web3';
import MintNFTCard from './mint-nft-card';



const MintNFT = () => {

  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { active, account } = useWeb3React();

  const [publicMintStatus, setPublicMintStatus] = useState();

  const [numToMint, setNumToMint] = useState(1);

  const onPublicMint = async () => {
    const { success, status } = await mint(account, numToMint);
    console.log(status);
    setPublicMintStatus(success);
  };

  return (
    <>
      <Stack id="mint">
        <Grid container spacing={3}>
          <Grid item>
            <MintNFTCard
              sx={{alignContent: "right", alignText: "center"}}
              title={'Public Mint'}
              canMint={active}
              mintStatus={publicMintStatus}
              showNumToMint={true}
              setNumToMint={setNumToMint}
              action={onPublicMint}
            />
          </Grid>
        </Grid>
      </Stack>
    </>
  );
}

export default MintNFT;