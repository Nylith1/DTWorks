export class ImageFileService {
  static ConvertUint8ArrayToBase64(byteArray: Uint8Array) {
    return btoa(
      new Uint8Array(byteArray).reduce(
        (data, byte) => data + String.fromCharCode(byte),
        ""
      )
    );
  }

  static ToDataUrl(img: Uint8Array) {
    const image = btoa(
      new Uint8Array(img).reduce((data, byte) => {
        return data + String.fromCharCode(byte);
      }, "")
    );

    return `data:image/jpg;base64,${image}`;
  }

  static Base64ToUint8Array(base64: string) {
    var binaryString = atob(base64);
    var bytes = new Uint8Array(binaryString.length);
    for (var i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
  }
}
