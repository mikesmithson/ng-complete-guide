import { RecipeModel } from '../../recipes/recipe.model';

describe('Recipe', () => {
  it('should create an instance', () => {
    expect(new RecipeModel()).toBeTruthy();
  });
});
