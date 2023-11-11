export function ConvertUint8ArrayToBase64(byteArray: Uint8Array) {
  return btoa(
    new Uint8Array(byteArray).reduce(
      (data, byte) => data + String.fromCharCode(byte),
      ""
    )
  );
}
