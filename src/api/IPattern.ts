/**
 * Describes an pattern, which is
 * represented by an RegExp.
 */
export interface IPattern {
  /**
   * Returns the RegExp of this pattern.
   */
  getPattern(): RegExp
}
