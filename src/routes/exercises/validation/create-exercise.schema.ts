import coreJoi from 'joi';
import joiDate from '@joi/date';

const joi = coreJoi.extend(joiDate) as typeof coreJoi;

// import joi from 'joi';
import { date, description, duration } from '../../../validation-models';

// const UserCreateInputSchemaObject = {
//   oid: joi.string(),
//   id: joi.number().required(),
//   username: joi.string().required(),
//   exercisess: joi.object().keys(ExerciseCreateNestedManyWithoutUserInputSchemaObject),
// };

// const CreateExerciseObject = {
//   description: description.required(),
//   duration: duration.required(),
//   // date: date.optional(),
//   date: joi.date().format('YYYY-MM-DD').options({ convert: false }).messages({
//     'date.base': 'Parameter "date" should be in format "YYYY-MM-DD" and should be a real date',
//   }),
// };

const CreateExerciseObject = {
  description: description.required(),
  duration: duration.required(),
  // date: date.optional(),
  date: joi.string().custom((value, helpers) => {
    if (!value.match(/(19|20)\d\d-((0[1-9]|1[012])-(0[1-9]|[12]\d)|(0[13-9]|1[012])-30|(0[13578]|1[02])-31)/)) {
      return helpers.message(
        'Parameter "date" should be in format "YYYY-MM-DD" and should be a real date' as unknown as coreJoi.LanguageMessages,
      );
    }
    return value;
  }),
};

export const CreateExerciseSchema = joi.object({
  description: description.required(),
  duration: duration.required(),
  date: date.optional(),
});

export const ExerciseCreateSchema = joi
  .object()
  .keys({ data: joi.object().keys(CreateExerciseObject) })
  .required();
