export class Content {
  title: string;
  subtitle: string;
  text: string;
  imgSource: string;

  constructor(
    title: string,
    subtitle: string,
    text: string,
    imgSource: string
  ) {
    this.title = title;
    this.subtitle = subtitle;
    this.text = text;
    this.imgSource = imgSource;
  }
}

export class ContentChange {
  state: boolean;
  side: string;

  constructor(
    state: boolean,
    side: string,
  ) {
    this.state = state;
    this.side = side;
  }

}

