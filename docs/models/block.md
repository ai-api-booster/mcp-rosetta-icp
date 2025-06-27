# Block

Blocks contain an array of Transactions that occurred at a particular BlockIdentifier. A hard requirement for blocks returned by Rosetta implementations is that they MUST be _inalterable_: once a client has requested and received a block identified by a specific BlockIndentifier, all future calls for that same BlockIdentifier must return the same block contents.

## Example Usage

```typescript
import { Block } from "icpmcp";

let value: Block = {
  blockIdentifier: {
    index: 1123941,
    hash: "0x1f2cc6c5027d2f201a5453ad1119574d2aed23a392654742ac3c78783c071f85",
  },
  parentBlockIdentifier: {
    index: 1123941,
    hash: "0x1f2cc6c5027d2f201a5453ad1119574d2aed23a392654742ac3c78783c071f85",
  },
  timestamp: 1582833600000,
  transactions: [
    {
      transactionIdentifier: {
        hash:
          "0x2f23fd8cca835af21f3ac375bac601f97ead75f2e79143bdf71fe2c4be043e8f",
      },
      operations: [
        {
          operationIdentifier: {
            index: 5,
            networkIndex: 0,
          },
          relatedOperations: [
            {
              index: 1,
            },
            {
              index: 2,
            },
          ],
          type: "Transfer",
          status: "Reverted",
          account: {
            address: "0x3a065000ab4183c6bf581dc1e55a605455fc6d61",
            subAccount: {
              address: "0x6b175474e89094c44da98b954eedeac495271d0f",
            },
          },
          amount: {
            value: "1238089899992",
            currency: {
              symbol: "BTC",
              decimals: 8,
              metadata: {},
            },
          },
          coinChange: {
            coinIdentifier: {
              identifier:
                "0x2f23fd8cca835af21f3ac375bac601f97ead75f2e79143bdf71fe2c4be043e8f:1",
            },
            coinAction: "coin_spent",
          },
          metadata: {},
        },
      ],
      relatedTransactions: [
        {
          networkIdentifier: {
            blockchain: "bitcoin",
            network: "mainnet",
            subNetworkIdentifier: {
              network: "shard 1",
              metadata: {},
            },
          },
          transactionIdentifier: {
            hash:
              "0x2f23fd8cca835af21f3ac375bac601f97ead75f2e79143bdf71fe2c4be043e8f",
          },
          direction: "forward",
        },
      ],
      metadata: {},
    },
  ],
  metadata: {},
};
```

## Fields

| Field                                                                                                                                                                           | Type                                                                                                                                                                            | Required                                                                                                                                                                        | Description                                                                                                                                                                     | Example                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `blockIdentifier`                                                                                                                                                               | [models.BlockIdentifier](../models/blockidentifier.md)                                                                                                                          | :heavy_check_mark:                                                                                                                                                              | The block_identifier uniquely identifies a block in a particular network.                                                                                                       |                                                                                                                                                                                 |
| `parentBlockIdentifier`                                                                                                                                                         | [models.BlockIdentifier](../models/blockidentifier.md)                                                                                                                          | :heavy_check_mark:                                                                                                                                                              | The block_identifier uniquely identifies a block in a particular network.                                                                                                       |                                                                                                                                                                                 |
| `timestamp`                                                                                                                                                                     | *number*                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                              | The timestamp of the block in milliseconds since the Unix Epoch. The timestamp is stored in milliseconds because some blockchains produce blocks more often than once a second. | 1582833600000                                                                                                                                                                   |
| `transactions`                                                                                                                                                                  | [models.Transaction](../models/transaction.md)[]                                                                                                                                | :heavy_check_mark:                                                                                                                                                              | N/A                                                                                                                                                                             |                                                                                                                                                                                 |
| `metadata`                                                                                                                                                                      | [models.BlockMetadata](../models/blockmetadata.md)                                                                                                                              | :heavy_minus_sign:                                                                                                                                                              | N/A                                                                                                                                                                             | {<br/>"transactions_root": "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",<br/>"difficulty": "123891724987128947"<br/>}                                   |