/**
 * @class
 * Email Extractor
 */
export default class EmailExtractor {
  public extract(text: string): RegExpMatchArray | null {
    return text.match(this.getPattern());
  }

  public handler(text: string) {
    let extracts: RegExpMatchArray | null = this.extract(text);
    extracts = extracts ? this.removeDuplicates(extracts) : null;

    return extracts;
  }

  private getPattern(): RegExp {
    return /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi;
  }

  private removeDuplicates(values: RegExpMatchArray): string[] {
    return values.filter((value, index) => values.indexOf(value) === index);
  }
}
