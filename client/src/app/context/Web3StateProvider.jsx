
'use client'
import { useState, useEffect } from 'react';
import {getWeb3State} from '../utils/web3State';
import { handleAccountChange } from '../utils/handleAccountChange';
import { handleChainChange } from '../utils/handleChainChange';
import {Web3Context} from '../context/Web3Context';
import PropTypes from 'prop-types';

const Web3StateProvider = ({children}) => {
    const [web3State, setWeb3State] = useState({
        contractInstance: null,
        chainId: null,
        selectedAccount: null,
        electionCommisionStatus: false
    })
 
  const handleWallet = async() =>{
    try {
      const  { contractInstance, chainId, selectedAccount, electionCommisionStatus } = await getWeb3State();
      setWeb3State({contractInstance,chainId,selectedAccount, electionCommisionStatus});
    } catch (error) {
      console.error("Wallet connection failed", error.message);
    }
  }

  useEffect(()=>{
    window.ethereum.on('accountsChanged',()=>handleAccountChange(setWeb3State))
    window.ethereum.on('chainChanged',()=>handleChainChange(setWeb3State))
    
    return()=>{
        window.ethereum.removeListener('accountsChanged',()=>handleAccountChange(setWeb3State))
        window.ethereum.removeListener('accountsChanged',()=>handleAccountChange(setWeb3State))
    }
  },[])

  return (
    <div>
        <Web3Context.Provider  value={{web3State, handleWallet}}>
          {children}
        </Web3Context.Provider>
    </div>
  )
}
Web3StateProvider.propTypes = {
  children: PropTypes.node.isRequired
};
export default Web3StateProvider