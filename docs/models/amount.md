# Amount

Amount is some Value of a Currency. It is considered invalid to specify a Value without a Currency.

## Example Usage

```typescript
import { Amount } from "icpmcp-rosetta-api";

let value: Amount = {
  value: "1238089899992",
  currency: {
    symbol: "BTC",
    decimals: 8,
    metadata: {},
  },
};
```

## Fields

| Field                                                                                                                                                                      | Type                                                                                                                                                                       | Required                                                                                                                                                                   | Description                                                                                                                                                                | Example                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `value`                                                                                                                                                                    | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | Value of the transaction in atomic units represented as an arbitrary-sized signed integer. For example, 1 BTC would be represented by a value of 100000000.                | 1238089899992                                                                                                                                                              |
| `currency`                                                                                                                                                                 | [models.Currency](../models/currency.md)                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | Currency is composed of a canonical Symbol and Decimals. This Decimals value is used to convert an Amount.Value from atomic units (Satoshis) to standard units (Bitcoins). |                                                                                                                                                                            |
| `metadata`                                                                                                                                                                 | [models.AmountMetadata](../models/amountmetadata.md)                                                                                                                       | :heavy_minus_sign:                                                                                                                                                         | N/A                                                                                                                                                                        |                                                                                                                                                                            |