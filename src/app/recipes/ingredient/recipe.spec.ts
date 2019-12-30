import { RecipeModel } from '../recipe.model';

describe('Recipe', () => {
  it('should create an instance', () => {
    expect(new RecipeModel()).toBeTruthy();
  });
});
