# CoinChange

CoinChange is used to represent a change in state of a some coin identified by a coin_identifier. This object is part of the Operation model and must be populated for UTXO-based blockchains. Coincidentally, this abstraction of UTXOs allows for supporting both account-based transfers and UTXO-based transfers on the same blockchain (when a transfer is account-based, don't populate this model).

## Example Usage

```typescript
import { CoinChange } from "icpmcp";

let value: CoinChange = {
  coinIdentifier: {
    identifier:
      "0x2f23fd8cca835af21f3ac375bac601f97ead75f2e79143bdf71fe2c4be043e8f:1",
  },
  coinAction: "coin_created",
};
```

## Fields

| Field                                                                                                                                                                                                                            | Type                                                                                                                                                                                                                             | Required                                                                                                                                                                                                                         | Description                                                                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `coinIdentifier`                                                                                                                                                                                                                 | [models.CoinIdentifier](../models/coinidentifier.md)                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                               | CoinIdentifier uniquely identifies a Coin.                                                                                                                                                                                       |
| `coinAction`                                                                                                                                                                                                                     | [models.CoinAction](../models/coinaction.md)                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                               | CoinActions are different state changes that a Coin can undergo. When a Coin is created, it is coin_created. When a Coin is spent, it is coin_spent. It is assumed that a single Coin cannot be created or spent more than once. |