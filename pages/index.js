import Head from 'next/head';
import styles from '../styles/Home.module.css';
import MuiNextLink from '@components/core-components/MuiNextLink';
import { Button, Container, Stack } from '@mui/material';
import MintNFT from '@components/web3/mint-nft';

export default function Home() {
  return (
    <Container >
      <Head >
        <title>Board Game Yawn Club - Mint</title>
        <meta name="Board Game Yawn Club" content="Board Game Yawn Club" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <MuiNextLink
        sx={{ textDecoration: "none", color: 'white' }}
        href="https://boardgameyawnclub.xyz"
        target="_blank"
        rel="noopener noreferrer"
        >
      <img src='logo.png' width={"40%"}/>
      </MuiNextLink>
      <br/>
      <img src='MINTING DAPP.png' width={"30%"}/>
        <Button>
        <MuiNextLink
        sx={{ textDecoration: "none", color: 'white' }}
        href="https://etherscan.io/address/0x29e26a5efabede6e85f832abdb6a7b5d05bb19e8"
        target="_blank"
        rel="noopener noreferrer"
        >
          0x29e26a5efabede6e...
        </MuiNextLink>
        </Button>
        <MintNFT />
      </main>
    </Container>
  )
}
