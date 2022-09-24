export interface programmodal {
  subTitle: string;
  time: string;
  place: string;
  number: string;
}

export interface program {
  title: string;
  info: string;
  img: string;
  modal: programmodal;
}
