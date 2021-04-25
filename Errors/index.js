class RecipeError extends Error {}

class InvalidBody extends RecipeError {
  constructor(fields) {
    super();
    this.fields = fields;
    this.message = 'Invalid Body. required fields: ${this.fields.join(", ")}';
    this.errorCode = 400;
  }
}
class NotValid extends RecipeError {
  constructor() {
    super();
    this.message = "Not Valid";
    this.errorCode = 403;
  }
}
class NotAuthorized extends RecipeError {
  constructor() {
    super();
    this.message = "Not Authorized";
    this.errorCode = 401;
  }
}

class TokenExpired extends RecipeError {
  constructor() {
    super();
    this.message = "Token expired, Please login again";
    this.errorCode = 401;
  }
}

class RecipeNotFound extends RecipeError {
  constructor(){
    super()
    this.message = `Post with id ${id} not found`
    this.errorCode = 404
  }
}
module.exports = {
  RecipeError,
  InvalidBody,
  NotValid,
  NotAuthorized,
  TokenExpired,
  RecipeNotFound
};
