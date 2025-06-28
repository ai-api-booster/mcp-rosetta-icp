# ExemptionType

ExemptionType is used to indicate if the live balance for an account subject to a BalanceExemption could increase above, decrease below, or equal the computed balance. * greater_or_equal: The live balance may increase above or equal the computed balance. This typically   occurs with staking rewards that accrue on each block. * less_or_equal: The live balance may decrease below or equal the computed balance. This typically   occurs as balance moves from locked to spendable on a vesting account. * dynamic: The live balance may increase above, decrease below, or equal the computed balance. This   typically occurs with tokens that have a dynamic supply.

## Example Usage

```typescript
import { ExemptionType } from "icpmcp-rosetta-api";

let value: ExemptionType = "dynamic";
```

## Values

```typescript
"greater_or_equal" | "less_or_equal" | "dynamic"
```