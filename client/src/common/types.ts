const COLUMNS = {
  DO: "DO",
  DOING: "DOING",
  DONE: "DONE"
} as const;
export type COLUMNS = typeof COLUMNS[keyof typeof COLUMNS];
