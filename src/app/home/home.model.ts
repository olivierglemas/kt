export class HomeItemModel {
  iddb: string;
  index: string;
  name: string;
  overview: string;
  groupe: string;
  titre: string;
  affiche: string;
  link: string;
}

export class HomeModel {
  items: Array<HomeItemModel> = [
    new HomeItemModel(),
    new HomeItemModel(),
    new HomeItemModel(),
    new HomeItemModel()
  ];

  constructor(readonly isShell: boolean) { }
}
