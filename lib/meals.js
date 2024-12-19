import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';

const db = sql('meals.db');

export async function getMeals() {
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  return db.prepare('SELECT * FROM meals').all();
}

export async function getMeal(slug) {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  // const stmt = db.prepare(
  //   `
  //     INSERT INTO meals
  //     VALUES (
  //        null,
  //        @slug,
  //        @title,
  //        @image,
  //        @summary,
  //        @instructions,
  //        @creator,
  //        @creator_email
  //     )
  //  `
  // );

  // stmt.run(meal);

  // return getMeal(meal.slug);
}
