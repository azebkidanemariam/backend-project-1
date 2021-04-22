class RecipeError extends Error {}

class InvalidBody extends RecipeError {
  constructor(fields) {
      super()
    this.fields = fields;
    this.message = 'Invalid Body. required fields: ${this.fields.join(", ")}';
    this.errorCode = 400;
  }
}
module.exports={
    InvalidBody
}