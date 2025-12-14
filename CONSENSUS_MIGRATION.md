# Consensus Migration Plan (PoA to PoS/DPoS)

This document details the technical plan for transitioning the CritterChain from its initial Proof-of-Authority (PoA) consensus mechanism to a more decentralized Nominated Proof-of-Stake (NPoS) or Delegated Proof-of-Stake (DPoS) model.

*(Note: This is a placeholder file and will be expanded with detailed technical specifications.)*

## Transition Phases

1.  **Phase 1: PoA Launch**
    *   Initial network launch with a consortium of trusted validators to ensure stability and performance.

2.  **Phase 2: Introduce NPoS/DPoS Staking Pallets**
    *   Deploy and test staking and validator election pallets on a public testnet.

3.  **Phase 3: On-Chain Governance Proposal**
    *   Submit a formal proposal to the community to initiate the consensus migration.

4.  **Phase 4: Forkless Upgrade**
    *   Execute the migration via a forkless runtime upgrade, transitioning validator selection to the NPoS/DPoS mechanism.

## Key Pallet Configurations

*   `pallet-session`
*   `pallet-staking`
*   `pallet-authorship`
*   `pallet-collator-selection` (if pursuing a parachain model)
