import { EnumQuestionType } from "./question.constants";
import { EnumScreens } from "./game.constants";

/*
 * Prefixed SYL4_ in Chimera Hub, where this app shares an origin (and so a
 * localStorage) with Loosh Syllogimous, which grew out of this one and kept
 * the same SYL_ keys. Under the original names each would read and overwrite
 * the other's history and settings.
 */
export const LS_DONT_SHOW = "SYL4_DONT_SHOW:";
export const LS_HISTORY = "SYL4_HISTORY";
export const LS_TIMER = "SYL4_TIMER_TYPE";
export const LS_GAME_MODE = "SYL4_GAME_MODE";
export const LS_DAILY_PROGRESS = "SYL4_DAILY_PROGRESS";
export const LS_PG_SETTINGS = "SYL4_PG_SETTINGSv1";
export const LS_DAILY_GOAL = "SYL4_DAILY_GOAL";
export const LS_WEEKLY_GOAL = "SYL4_WEEKLY_GOAL";
export const LS_TRAINING_UNIT = "SYL4_TRAINING_UNIT:";
export const LS_TRAINING_UNIT_LENGTH = "SYL4_TRAINING_UNIT_LENGTH";
export const LS_PREMISES_UP_THRESHOLD = "SYL4_PREMISES_UP_THRESHOLD";
export const LS_PREMISES_DOWN_THRESHOLD = "SYL4_PREMISES_DOWN_THRESHOLD";
export const LS_SCORE = "SYL4_SCORE";
export const LS_COLOR_BLINDNESS_MODE = "SYL4_COLOR_BLINDNESS_MODE";
export const LS_SYLLOGISM_GENERATOR = "SYL4_SYLLOGISM_GENERATOR";

export const LS_PROPS = [
    LS_HISTORY,
    LS_TIMER,
    LS_GAME_MODE,
    LS_DAILY_PROGRESS,
    LS_PG_SETTINGS,
    LS_DAILY_GOAL,
    LS_WEEKLY_GOAL,
    LS_TRAINING_UNIT_LENGTH,
    LS_PREMISES_UP_THRESHOLD,
    LS_PREMISES_DOWN_THRESHOLD,
    LS_SCORE,
];

for (const screen of Object.values(EnumScreens)) {
    LS_PROPS.push(LS_DONT_SHOW + screen);
}

for (const type of Object.values(EnumQuestionType)) {
    LS_PROPS.push(LS_DONT_SHOW + type);
    LS_PROPS.push(LS_TRAINING_UNIT + type);
}