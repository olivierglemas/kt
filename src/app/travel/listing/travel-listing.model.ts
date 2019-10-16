export class TravelItemModel {
  iddb: string;
  index: string;
  name: string;
  overview: string;
  groupe: string;
  titre: string;
  affiche: string;
  link: string;
}

export class TravelListingModel {
  items: Array<TravelItemModel> = [
    new TravelItemModel(),
    new TravelItemModel(),
    new TravelItemModel(),
    new TravelItemModel()
  ];

  constructor(readonly isShell: boolean) { }
}
