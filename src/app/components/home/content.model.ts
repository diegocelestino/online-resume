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
  side: string;
  changeView: boolean
  actualContent: number;
  contentLength: number;

  constructor(
    side: string,
    changeView: boolean,
    actualContent: number,
    contentLength: number
  ) {
    this.side = side;
    this.changeView = changeView;
    this.actualContent = actualContent;
    this.contentLength = contentLength
  }

}

