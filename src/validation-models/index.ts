import joi from 'joi';

export const username = joi.string();
export const userId = joi.number().integer();
export const exerciseId = joi.number().integer();

export const duration = joi.number().integer();
export const description = joi.string();
export const date = joi.date();

export const anything = joi.object().unknown();
