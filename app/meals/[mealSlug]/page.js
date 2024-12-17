export default function MealDetailsPage({ params }) {
  return (
    <main>
      <h1>Meal Detail</h1>
      <p>{params.mealSlug}</p>
    </main>
  );
}
