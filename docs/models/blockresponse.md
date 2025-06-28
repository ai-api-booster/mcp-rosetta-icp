# BlockResponse

A BlockResponse includes a fully-populated block or a partially-populated block with a list of other transactions to fetch (other_transactions). As a result of the consensus algorithm of some blockchains, blocks can be omitted (i.e. certain block indices can be skipped). If a query for one of these omitted indices is made, the response should not include a `Block` object. It is VERY important to note that blocks MUST still form a canonical, connected chain of blocks where each block has a unique index. In other words, the `PartialBlockIdentifier` of a block after an omitted block should reference the last non-omitted block.

## Example Usage

```typescript
import { BlockResponse } from "icpmcp-rosetta-api";

let value: BlockResponse = {
  block: {
    blockIdentifier: {
      index: 1123941,
      hash:
        "0x1f2cc6c5027d2f201a5453ad1119574d2aed23a392654742ac3c78783c071f85",
    },
    parentBlockIdentifier: {
      index: 1123941,
      hash:
        "0x1f2cc6c5027d2f201a5453ad1119574d2aed23a392654742ac3c78783c071f85",
    },
    timestamp: 1582833600000,
    transactions: [],
    metadata: {},
  },
  otherTransactions: [
    {
      hash:
        "0x2f23fd8cca835af21f3ac375bac601f97ead75f2e79143bdf71fe2c4be043e8f",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `block`                                                                                                                                                                                                                                                                                                                                                                      | [models.Block](../models/block.md)                                                                                                                                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                           | Blocks contain an array of Transactions that occurred at a particular BlockIdentifier. A hard requirement for blocks returned by Rosetta implementations is that they MUST be _inalterable_: once a client has requested and received a block identified by a specific BlockIndentifier, all future calls for that same BlockIdentifier must return the same block contents. |
| `otherTransactions`                                                                                                                                                                                                                                                                                                                                                          | [models.TransactionIdentifier](../models/transactionidentifier.md)[]                                                                                                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                           | Some blockchains may require additional transactions to be fetched that weren't returned in the block response (ex: block only returns transaction hashes). For blockchains with a lot of transactions in each block, this can be very useful as consumers can concurrently fetch all transactions returned.                                                                 |