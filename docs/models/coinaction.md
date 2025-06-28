# CoinAction

CoinActions are different state changes that a Coin can undergo. When a Coin is created, it is coin_created. When a Coin is spent, it is coin_spent. It is assumed that a single Coin cannot be created or spent more than once.

## Example Usage

```typescript
import { CoinAction } from "icpmcp-rosetta-api";

let value: CoinAction = "coin_spent";
```

## Values

```typescript
"coin_created" | "coin_spent"
```