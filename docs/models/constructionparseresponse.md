# ConstructionParseResponse

ConstructionParseResponse contains an array of operations that occur in a transaction blob. This should match the array of operations provided to `/construction/preprocess` and `/construction/payloads`.

## Example Usage

```typescript
import { ConstructionParseResponse } from "icpmcp-rosetta-api";

let value: ConstructionParseResponse = {
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
  accountIdentifierSigners: [
    {
      address: "0x3a065000ab4183c6bf581dc1e55a605455fc6d61",
      subAccount: {
        address: "0x6b175474e89094c44da98b954eedeac495271d0f",
      },
    },
  ],
};
```

## Fields

| Field                                                                                                                                                             | Type                                                                                                                                                              | Required                                                                                                                                                          | Description                                                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `operations`                                                                                                                                                      | [models.Operation](../models/operation.md)[]                                                                                                                      | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `signers`                                                                                                                                                         | *string*[]                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                | [DEPRECATED by `account_identifier_signers` in `v1.4.4`] All signers (addresses) of a particular transaction. If the transaction is unsigned, it should be empty. |
| `accountIdentifierSigners`                                                                                                                                        | [models.AccountIdentifier](../models/accountidentifier.md)[]                                                                                                      | :heavy_minus_sign:                                                                                                                                                | N/A                                                                                                                                                               |
| `metadata`                                                                                                                                                        | [models.ConstructionParseResponseMetadata](../models/constructionparseresponsemetadata.md)                                                                        | :heavy_minus_sign:                                                                                                                                                | N/A                                                                                                                                                               |