'use client';

import { useFormState, useFormStatus } from 'react-dom';

import { shareMeals } from '@/lib/actions';
import ImagePicker from './image-picker';
import classes from './meals-form-submit.module.css';

export default function MealsFormSubmit() {
  const { pending } = useFormStatus();
  const [state, formAction] = useFormState(shareMeals, { message: null });

  return (
    <form className={classes.form} action={formAction}>
      <div className={classes.row}>
        <p>
          <label htmlFor='name'>Your name</label>
          <input type='text' id='name' name='name' required />
        </p>
        <p>
          <label htmlFor='email'>Your email</label>
          <input type='email' id='email' name='email' required />
        </p>
      </div>

      <p>
        <label htmlFor='title'>Title</label>
        <input type='text' id='title' name='title' required />
      </p>
      <p>
        <label htmlFor='summary'>Short Summary</label>
        <input type='text' id='summary' name='summary' required />
      </p>
      <p>
        <label htmlFor='instructions'>Instructions</label>
        <textarea
          id='instructions'
          name='instructions'
          rows='10'
          required
        ></textarea>
      </p>

      <ImagePicker label='Pick an image' name='image' />
      {state.message && <p>{state.message}</p>}

      <p className={classes.actions}>
        <button type='submit' disabled={pending}>
          {pending ? 'Submitting...' : 'Share Meal'}
        </button>
      </p>
    </form>
  );
}
