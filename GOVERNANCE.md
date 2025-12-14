# Governance Model

This document outlines the conceptual framework for the decentralized governance of the CritterCraft ecosystem.

*(Note: This is a placeholder file and will be expanded with detailed specifications.)*

## Core Components

The governance model will be built using a combination of Substrate's core governance pallets:

*   **`pallet-democracy`:** The primary mechanism for community-driven decision-making. Token holders can propose and vote on referenda for runtime upgrades, treasury spending, and parameter changes.
*   **`pallet-collective`:** Establishes a "Technical Council" of elected members responsible for proposing emergency bug fixes and fast-tracking critical proposals.
*   **`pallet-treasury`:** An on-chain treasury funded by a portion of transaction fees, staking rewards, or other network activities. Funds can be allocated via community referenda.

## Governance Roles

*   **Token Holders:** The ultimate decision-makers in the network. Any token holder can participate in referenda.
*   **The Council:** An elected body that can propose referenda and veto malicious proposals.
*   **The Treasury:** An on-chain pot of funds controlled by the token holders.

## Conceptual UI Flow

The UI wallet will feature a dedicated "Governance" section where users can:
*   View active referenda and proposals.
*   Vote on referenda.
*   Delegate their voting power.
*   View the current members of the Council.
*   See the balance and recent activity of the Treasury.
