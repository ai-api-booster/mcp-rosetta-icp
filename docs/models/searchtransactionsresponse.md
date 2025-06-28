# SearchTransactionsResponse

SearchTransactionsResponse contains an ordered collection of BlockTransactions that match the query in SearchTransactionsRequest. These BlockTransactions are sorted from most recent block to oldest block.

## Example Usage

```typescript
import { SearchTransactionsResponse } from "icpmcp-rosetta-api";

let value: SearchTransactionsResponse = {
  transactions: [
    {
      blockIdentifier: {
        index: 1123941,
        hash:
          "0x1f2cc6c5027d2f201a5453ad1119574d2aed23a392654742ac3c78783c071f85",
      },
      transaction: {
        transactionIdentifier: {
          hash:
            "0x2f23fd8cca835af21f3ac375bac601f97ead75f2e79143bdf71fe2c4be043e8f",
        },
        operations: [],
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
    },
  ],
  totalCount: 5,
  nextOffset: 5,
};
```

## Fields

| Field                                                                                                                                                                                                                                                                                                                                           | Type                                                                                                                                                                                                                                                                                                                                            | Required                                                                                                                                                                                                                                                                                                                                        | Description                                                                                                                                                                                                                                                                                                                                     | Example                                                                                                                                                                                                                                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `transactions`                                                                                                                                                                                                                                                                                                                                  | [models.BlockTransaction](../models/blocktransaction.md)[]                                                                                                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                              | transactions is an array of BlockTransactions sorted by most recent BlockIdentifier (meaning that transactions in recent blocks appear first). If there are many transactions for a particular search, transactions may not contain all matching transactions. It is up to the caller to paginate these transactions using the max_block field. |                                                                                                                                                                                                                                                                                                                                                 |
| `totalCount`                                                                                                                                                                                                                                                                                                                                    | *number*                                                                                                                                                                                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                              | total_count is the number of results for a given search. Callers typically use this value to concurrently fetch results by offset or to display a virtual page number associated with results.                                                                                                                                                  | 5                                                                                                                                                                                                                                                                                                                                               |
| `nextOffset`                                                                                                                                                                                                                                                                                                                                    | *number*                                                                                                                                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                              | next_offset is the next offset to use when paginating through transaction results. If this field is not populated, there are no more transactions to query.                                                                                                                                                                                     | 5                                                                                                                                                                                                                                                                                                                                               |