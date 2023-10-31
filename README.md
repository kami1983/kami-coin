# KAMI-COIN
## Deploy
* npx hardhat run scripts/deploy.js --network truffle-dashboard 
```
EcoProofCard Proxy Address: 0x9fadB21f65105cf5ced816ceA796B355367283Bb
EcoProofCard Implementation Address: 0x10cf2332a1c9A9700427b8813BbCDAA56Dd6DAD5
EcoProofCard Admin Address: 0x9f70894305Da805c4A8A21b0EFc16b16ccC38bB1
EcoProofCard Implementation Version:  1.0.0
```

## Verify contract on polygonscan
* npx hardhat verify --network polygon 0x10cf2332a1c9A9700427b8813BbCDAA56Dd6DAD5 (No need --constructor-args scripts/params/kami-coin.json)

## Check contract on 2023-10-31
* npx hardhat run scripts/showContractInfos.js --network truffle-dashboard
```
proxy_address 0x9fadB21f65105cf5ced816ceA796B355367283Bb
EcoProofCard Proxy Address: 0x9fadB21f65105cf5ced816ceA796B355367283Bb
EcoProofCard Implementation Address: 0x10cf2332a1c9A9700427b8813BbCDAA56Dd6DAD5
EcoProofCard Admin Address: 0x9f70894305Da805c4A8A21b0EFc16b16ccC38bB1
EcoProofCard Implementation Version:  1.0.0
```

