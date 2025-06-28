# TransactionMetadata

Transactions that are related to other transactions (like a cross-shard transaction) should include the tranaction_identifier of these transactions in the metadata.

## Example Usage

```typescript
import { TransactionMetadata } from "icpmcp-rosetta-api";

let value: TransactionMetadata = {};
```

## Fields

| Field       | Type        | Required    | Description |
| ----------- | ----------- | ----------- | ----------- |