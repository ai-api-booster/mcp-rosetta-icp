# CoinIdentifier

CoinIdentifier uniquely identifies a Coin.

## Example Usage

```typescript
import { CoinIdentifier } from "icpmcp-rosetta-api";

let value: CoinIdentifier = {
  identifier:
    "0x2f23fd8cca835af21f3ac375bac601f97ead75f2e79143bdf71fe2c4be043e8f:1",
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              | Example                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `identifier`                                                                                                                             | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | Identifier should be populated with a globally unique identifier of a Coin. In Bitcoin, this identifier would be transaction_hash:index. | 0x2f23fd8cca835af21f3ac375bac601f97ead75f2e79143bdf71fe2c4be043e8f:1                                                                     |