# Coin

Coin contains its unique identifier and the amount it represents.

## Example Usage

```typescript
import { Coin } from "icpmcp";

let value: Coin = {
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
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `coinIdentifier`                                                                                    | [models.CoinIdentifier](../models/coinidentifier.md)                                                | :heavy_check_mark:                                                                                  | CoinIdentifier uniquely identifies a Coin.                                                          |
| `amount`                                                                                            | [models.Amount](../models/amount.md)                                                                | :heavy_check_mark:                                                                                  | Amount is some Value of a Currency. It is considered invalid to specify a Value without a Currency. |