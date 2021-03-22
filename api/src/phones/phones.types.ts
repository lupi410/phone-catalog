export interface BaseItem {
  name: string;
  manufacturer: string;
  description: string;
  color: string;
  price: number;
  imageURL: string;
  screen: string;
  processor: string;
  ram: number;
}
export interface Phone extends BaseItem {
  id: number;
}
