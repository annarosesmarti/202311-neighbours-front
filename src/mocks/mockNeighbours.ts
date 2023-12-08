import { NeighbourStructure } from "../store/features/types";

export const mockMartaNeighbour = {
  _id: "6563639cc4ddfcae99eeb07a",
  name: "Marta Ibarra Chef",
  floor: "0",
  door: "1",
  coefficient: 9,
  moneyInFavour: 246,
  ownerFirst: "Marta Ibarra Chef",
  ownerSecond: "Mela Maluenda",
  powers: "Propietario",
  activityKind: "Restaurante",
  isFirstResidence: false,
  isRented: false,
  numberOfResidents: 2,
  yearOfPurchase: 2018,
  coments: "hola",
  image: "https://i.ibb.co/N7k0Q4y/minion-chef.webp",
};

export const mockLauraNeighbour = {
  _id: "65636423c4ddfcae99f020d3",
  name: "Laura Gutiérrez Empoderada",
  floor: "0",
  door: "2",
  coefficient: 12,
  moneyInFavour: 5000,
  ownerFirst: "Laura Gutiérrez Empoderada",
  ownerSecond: "Eric Gutiérrez",
  powers: "Propietario",
  activityKind: "Local comercial",
  isFirstResidence: false,
  isRented: false,
  numberOfResidents: 2,
  yearOfPurchase: 2012,
  coments: "adeu",
  image: "https://i.ibb.co/KmdzSNJ/minion-karate.webp",
};

export const mockAnaNeighbour = {
  _id: "6570c0bab38c03592160a94e",
  name: "Ana Lambea Andorrana",
  floor: "2",
  door: "1",
  coefficient: 8,
  moneyInFavour: 20839,
  ownerFirst: "Ana Lambea Andorrana",
  ownerSecond: "",
  powers: "Propietario",
  activityKind: "Inversión",
  isFirstResidence: true,
  isRented: false,
  numberOfResidents: 2,
  yearOfPurchase: 2023,
  coments:
    "Tiene 2 gatos y se dedica a la programación. Se pasa el día concinando tofu y esas cosas.",
  image: "https://i.ibb.co/X4jtP8y/minion-rude.webp",
};

export const mockNeighbours: NeighbourStructure[] = [
  mockMartaNeighbour,
  mockLauraNeighbour,
];

export const mockAddNeighbours: NeighbourStructure[] = [
  mockMartaNeighbour,
  mockLauraNeighbour,
  mockAnaNeighbour,
];
