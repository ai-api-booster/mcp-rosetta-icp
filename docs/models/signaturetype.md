# SignatureType

SignatureType is the type of a cryptographic signature. * ecdsa: `r (32-bytes) || s (32-bytes)` - `64 bytes` * ecdsa_recovery: `r (32-bytes) || s (32-bytes) || v (1-byte)` - `65 bytes` * ed25519: `R (32-byte) || s (32-bytes)` - `64 bytes` * schnorr_1: `r (32-bytes) || s (32-bytes)` - `64 bytes`  (schnorr signature implemented by Zilliqa where both `r` and `s` are scalars encoded as `32-bytes` values, most significant byte first.) * schnorr_bip340: `r (32-bytes) || s (32-bytes)` - `64 bytes`  (sig = (bytes(R) || bytes((k + ed) mod n) where `r` is the `X` coordinate of a point `R` whose `Y` coordinate is even, most significant bytes first.) * schnorr_poseidon: `r (32-bytes) || s (32-bytes)` where s = Hash(1st pk || 2nd pk || r) - `64 bytes`  (schnorr signature w/ Poseidon hash function implemented by O(1) Labs where both `r` and `s` are scalars encoded as `32-bytes` values, least significant byte first. https://github.com/CodaProtocol/signer-reference/blob/master/schnorr.ml )

## Example Usage

```typescript
import { SignatureType } from "icpmcp-rosetta-api";

let value: SignatureType = "ed25519";
```

## Values

```typescript
"ecdsa" | "ecdsa_recovery" | "ed25519" | "schnorr_1" | "schnorr_bip340" | "schnorr_poseidon"
```