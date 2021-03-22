import { BaseItem, Phone } from "./phones.types";
/**
 * In-Memory Store
 */
let items: Phone[] = [
  {
    id: 0,
    name: "iPhone 7",
    manufacturer: "Apple",
    description:
      "4.7-Inch Retina HD display; A10 Fusion; Accelerometer; Compass; Gyroscope 12MP iSight Camera with live Photos and 4K Video; 32GB of internal memory to store your apps, music, photos, and videos.",
    color: "Black",
    price: 198,
    imageURL: "https://assets.swappie.com/iPhone7plus32GBmattamusta-2-1.jpg",
    screen: "4,7 inch IPS",
    processor: "A10 Fusion",
    ram: 2,
  },
  {
    id: 1,
    name: "iPhone 12 Pro Max",
    manufacturer: "Apple",
    description: `Apple iPhone 12 Pro Max was officially released on October 13, 2020.
      The phone is powered by the new Apple A14 Bionic processor. The smartphone comes with a 6.7 inches Super Retina XDR OLED capacitive touchscreen, 2778 x 1284 pixels resolution and HDR display, True Tone and Wide color (P3) gamut.
      Additionally, the screen of the device is protected by a unique ceramic shield.  Along with this, the screen features 1200 nits max brightness (advertised), Dolby Vision, HDR10+, Wide color gamut, True-tone, and 120Hz refresh rate.
      The rear camera consists of a 12 MP (wide) + 12 MP (telephoto) 5x optical zoom + 12 MP (ultrawide) and also a LiDAR scanner for night mode.
      The front camera has a 12 MP (wide) + SL 3D (depth/biometrics sensor) camera sensor. The phone’s sensors include Lidar, Face ID, accelerometer, gyro, proximity, compass, barometer + Siri natural language commands, and dictation.`,
    color: "Pacific blue",
    price: 740,
    imageURL: "https://m.media-amazon.com/images/I/71MHTD3uL4L._FMwebp__.jpg",
    screen: "6.7 inch IPS",
    processor: "A14 Bionic",
    ram: 4,
  },
  {
    id: 2,
    name: "Galaxy S21 5G",
    manufacturer: "Samsung",
    description: `Pro Grade Camera: Zoom in close, take photos and videos like a pro, and capture incredible share-ready moments with our easy-to-use, multi-lens camera
    Sharp 8K Video: Capture your life’s best moments in head-turning, super-smooth 8K video that gives your movies that cinema-style quality
    Multiple Ways to Record: Create share-ready videos and GIFs on the spot with multi-cam recording and automatic professional-style effects
    30 Space Zoom: Get amazing power and clarity, zoom in from afar or magnify details of nearby objects; Zoom Lock keeps focus and stability
    Higher Resolution: 64 MP camera system captures and shares detailed portraits, stunning landscapes and crisp close-ups`,
    color: "Phantom pink",
    price: 699,
    imageURL:
      "https://cdn.movertix.com/media/catalog/product/cache/image/1200x/s/a/samsung-galaxy-s21-5g-phantom-pink-128gb-and-8gb-ram-sm-g991b.jpg",
    screen: "6.2 inch",
    processor: "A14 Bionic",
    ram: 4,
  },
  {
    id: 3,
    name: "Redmi 9",
    manufacturer: "Xiaomi",
    description: `6.53” FHD+ Dot Drop display, 2340x1080 FHD+, 394 PPI, 19.5:9, 5020mAh Battery, Bluetooth 5.0
    64GB ROM, 4GB RAM, Media Tek Helio G80, Octa-core CPU, GPU: Mali-G52 MC2, 950 MHz
    Rear Camera: 13MP+8MP+5MP+2MP, Front Camera: 8MP, AI Face Unlock, USB Type-C, FM radio
    2G bands: GSM 850 / 900 / 1800 / 1900, 3G bands: HSDPA 850 / 900 / 1700(AWS) / 1900 / 2100, 4G bands: 1, 2, 3, 4, 5, 7, 8, 20, 28, 38, 40, 41
    International Model - No Warranty in the US. Compatible with Most GSM Carriers like T-Mobile, AT&amp;amp;T, MetroPCS, etc. Will NOT work with CDMA Carriers Such as Verizon, Sprint, Boost. - FCC ID: 2AFZZJ19G`,
    color: "Ocean Green",
    price: 899,
    imageURL:
      "https://images-na.ssl-images-amazon.com/images/I/6147ZT4PeFL._AC_SL1000_.jpg",
    screen: "6.5 inch Full HD",
    processor: "A14 Bionic",
    ram: 4,
  },
  {
    id: 4,
    name: "P40 Lite 5G",
    manufacturer: "Huawei",
    description: `6.5" Inch, LTPS IPS LCD, HDR10, 1080 X 2400 Pixels
    128GB Storage, 6GB RAM, NM (Nano Memory), Up To 256GB (Uses Shared SIM Slot)
    Android 10, EMUI 10.1, No Google Play Services, Kirin 820 5G (7nm), Octa-Core (1x2.36 GHz Cortex-A76 & 3x2.22 GHz Cortex-A76 & 4x1.84 GHz Cortex-A55)
    64 MP, F/1.8, 26mm (Wide), PDAF 8 MP, F/2.4, 17mm (Ultrawide) 2 MP, F/2.4, (Macro) 2 MP, F/2.4, (Depth), Front: 16 MP, F/2.0, (Wide), Video rec: 4K@30fps, 1080p@30fps`,
    color: "Black",
    price: 430,
    imageURL:
      "https://images-na.ssl-images-amazon.com/images/I/51huSRD8MaL._AC_SL1000_.jpg",
    screen: "6.5 inch LCD",
    processor: "A14 Bionic",
    ram: 2,
  },
];

export const findAll = async (): Promise<Phone[]> => items;

export const find = async (id: number): Promise<Phone | undefined> =>
  items.find((x) => x.id === id);

export const create = async (newItem: BaseItem): Promise<Phone> => {
  const id = new Date().valueOf();

  items.push({ id, ...newItem });

  return { id, ...newItem };
};
export const update = async (
  id: number,
  itemUpdate: BaseItem
): Promise<Phone | null> => {
  const item = await find(id);

  if (!item) {
    return null;
  }
  const index = items.findIndex((x) => x.id === id);
  items[index] = { id, ...itemUpdate };

  return items[index];
};
export const remove = async (id: number): Promise<null | void> => {
  const item = await find(id);

  if (!item) {
    return null;
  }

  items = items.filter((x) => x.id !== id);
};
