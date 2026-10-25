type tokenType = "VAR" | "AND" | "OR" | "NOT";

export interface Token {
  type: tokenType;
  value: string;
}
