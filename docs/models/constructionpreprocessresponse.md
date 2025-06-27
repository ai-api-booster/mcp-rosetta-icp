# ConstructionPreprocessResponse

ConstructionPreprocessResponse contains `options` that will be sent unmodified to `/construction/metadata`. If it is not necessary to make a request to `/construction/metadata`, `options` should be omitted.  Some blockchains require the PublicKey of particular AccountIdentifiers to construct a valid transaction. To fetch these PublicKeys, populate `required_public_keys` with the AccountIdentifiers associated with the desired PublicKeys. If it is not necessary to retrieve any PublicKeys for construction, `required_public_keys` should be omitted.

## Example Usage

```typescript
import { ConstructionPreprocessResponse } from "icpmcp";

let value: ConstructionPreprocessResponse = {
  requiredPublicKeys: [
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

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `options`                                                                                          | [models.ConstructionPreprocessResponseOptions](../models/constructionpreprocessresponseoptions.md) | :heavy_minus_sign:                                                                                 | The options that will be sent directly to `/construction/metadata` by the caller.                  |
| `requiredPublicKeys`                                                                               | [models.AccountIdentifier](../models/accountidentifier.md)[]                                       | :heavy_minus_sign:                                                                                 | N/A                                                                                                |