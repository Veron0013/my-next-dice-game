export type PlayData = {
  condition: PlayCondition;
  threshold: number;
};

export enum PlayCondition {
  under = 'under',
  over = 'over',
}
