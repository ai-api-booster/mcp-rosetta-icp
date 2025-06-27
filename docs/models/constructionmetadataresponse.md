# ConstructionMetadataResponse

The ConstructionMetadataResponse returns network-specific metadata used for transaction construction. Optionally, the implementer can return the suggested fee associated with the transaction being constructed. The caller may use this info to adjust the intent of the transaction or to create a transaction with a different account that can pay the suggested fee. Suggested fee is an array in case fee payment must occur in multiple currencies.

## Example Usage

```typescript
import { ConstructionMetadataResponse } from "icpmcp";

let value: ConstructionMetadataResponse = {
  metadata: {},
  suggestedFee: [
    {
      value: "1238089899992",
      currency: {
        symbol: "BTC",
        decimals: 8,
        metadata: {},
      },
    },
  ],
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `metadata`                                                                                       | [models.ConstructionMetadataResponseMetadata](../models/constructionmetadataresponsemetadata.md) | :heavy_check_mark:                                                                               | N/A                                                                                              | {<br/>"account_sequence": 23,<br/>"recent_block_hash": "0x52bc44d5378309ee2abf1539bf71de1b7d7be3b5"<br/>} |
| `suggestedFee`                                                                                   | [models.Amount](../models/amount.md)[]                                                           | :heavy_minus_sign:                                                                               | N/A                                                                                              |                                                                                                  |