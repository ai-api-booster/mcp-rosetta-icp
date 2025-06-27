# AccountBalanceResponse

An AccountBalanceResponse is returned on the /account/balance endpoint. If an account has a balance for each AccountIdentifier describing it (ex: an ERC-20 token balance on a few smart contracts), an account balance request must be made with each AccountIdentifier. The `coins` field was removed and replaced by by `/account/coins` in `v1.4.7`.

## Example Usage

```typescript
import { AccountBalanceResponse } from "icpmcp";

let value: AccountBalanceResponse = {
  blockIdentifier: {
    index: 1123941,
    hash: "0x1f2cc6c5027d2f201a5453ad1119574d2aed23a392654742ac3c78783c071f85",
  },
  balances: [
    {
      value: "1238089899992",
      currency: {
        symbol: "BTC",
        decimals: 8,
        metadata: {},
      },
    },
  ],
  metadata: {},
};
```

## Fields

| Field                                                                                                                                                                                             | Type                                                                                                                                                                                              | Required                                                                                                                                                                                          | Description                                                                                                                                                                                       | Example                                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `blockIdentifier`                                                                                                                                                                                 | [models.BlockIdentifier](../models/blockidentifier.md)                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                | The block_identifier uniquely identifies a block in a particular network.                                                                                                                         |                                                                                                                                                                                                   |
| `balances`                                                                                                                                                                                        | [models.Amount](../models/amount.md)[]                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                | A single account may have a balance in multiple currencies.                                                                                                                                       |                                                                                                                                                                                                   |
| `metadata`                                                                                                                                                                                        | [models.AccountBalanceResponseMetadata](../models/accountbalanceresponsemetadata.md)                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                | Account-based blockchains that utilize a nonce or sequence number should include that number in the metadata. This number could be unique to the identifier or global across the account address. | {<br/>"sequence_number": 23<br/>}                                                                                                                                                                 |