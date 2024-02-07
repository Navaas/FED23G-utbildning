/* Det är viktigt att exportera, så man får tillgång till interfacet och arrayen i andra filer. */

export interface BucketItem {
  id: string;
  title: string;
  isChecked: boolean;
}

export const mockedBucketList: BucketItem[] = [
  {
    id: "1",
    title: "Bestiga ett högt berg",
    isChecked: false,
  },
  {
    id: "2",
    title: "Dyka till 30 meter",
    isChecked: false,
  },
  {
    id: "3",
    title: "Promenera på kinesiska muren",
    isChecked: true,
  },
];
