# CurveType

CurveType is the type of cryptographic curve associated with a PublicKey. * secp256k1: SEC compressed - `33 bytes` (https://secg.org/sec1-v2.pdf#subsubsection.2.3.3) * secp256k1_bip340: x-only - `32 bytes`  (implicitly even `Y` coord. Secp256k1 compressed keys may be repurposed by dropping the first byte. (https://github.com/bitcoin/bips/blob/master/bip-0340.mediawiki#Public_Key_Generation)) * secp256r1: SEC compressed - `33 bytes` (https://secg.org/sec1-v2.pdf#subsubsection.2.3.3) * edwards25519: `y (255-bits) || x-sign-bit (1-bit)` - `32 bytes` (https://ed25519.cr.yp.to/ed25519-20110926.pdf) * tweedle: 1st pk : Fq.t (32 bytes) || 2nd pk : Fq.t (32 bytes) (https://github.com/CodaProtocol/coda/blob/develop/rfcs/0038-rosetta-construction-api.md#marshal-keys) * pallas: `x (255 bits) || y-parity-bit (1-bit) - 32 bytes` (https://github.com/zcash/pasta)

## Example Usage

```typescript
import { CurveType } from "icpmcp-rosetta-api";

let value: CurveType = "secp256r1";
```

## Values

```typescript
"secp256k1" | "secp256k1_bip340" | "secp256r1" | "edwards25519" | "tweedle" | "pallas"
```