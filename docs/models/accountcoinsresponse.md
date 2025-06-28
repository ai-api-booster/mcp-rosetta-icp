# AccountCoinsResponse

AccountCoinsResponse is returned on the /account/coins endpoint and includes all unspent Coins owned by an AccountIdentifier.

## Example Usage

```typescript
import { AccountCoinsResponse } from "icpmcp-rosetta-api";

let value: AccountCoinsResponse = {
  blockIdentifier: {
    index: 1123941,
    hash: "0x1f2cc6c5027d2f201a5453ad1119574d2aed23a392654742ac3c78783c071f85",
  },
  coins: [
    {
      coinIdentifier: {
        identifier:
          "0x2f23fd8cca835af21f3ac375bac601f97ead75f2e79143bdf71fe2c4be043e8f:1",
      },
      amount: {
        value: "1238089899992",
        currency: {
          symbol: "BTC",
          decimals: 8,
          metadata: {},
        },
      },
    },
  ],
  metadata: {},
};
```

## Fields

| Field                                                                                                                                                                                                                                                                                    | Type                                                                                                                                                                                                                                                                                     | Required                                                                                                                                                                                                                                                                                 | Description                                                                                                                                                                                                                                                                              | Example                                                                                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `blockIdentifier`                                                                                                                                                                                                                                                                        | [models.BlockIdentifier](../models/blockidentifier.md)                                                                                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                                                                                                       | The block_identifier uniquely identifies a block in a particular network.                                                                                                                                                                                                                |                                                                                                                                                                                                                                                                                          |
| `coins`                                                                                                                                                                                                                                                                                  | [models.Coin](../models/coin.md)[]                                                                                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                                                                                                       | If a blockchain is UTXO-based, all unspent Coins owned by an account_identifier should be returned alongside the balance. It is highly recommended to populate this field so that users of the Rosetta API implementation don't need to maintain their own indexer to track their UTXOs. |                                                                                                                                                                                                                                                                                          |
| `metadata`                                                                                                                                                                                                                                                                               | [models.AccountCoinsResponseMetadata](../models/accountcoinsresponsemetadata.md)                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                                                                       | Account-based blockchains that utilize a nonce or sequence number should include that number in the metadata. This number could be unique to the identifier or global across the account address.                                                                                        | {<br/>"sequence_number": 23<br/>}                                                                                                                                                                                                                                                        |