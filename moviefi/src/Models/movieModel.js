import mongoose from "mongoose";

const movieSchems = new mongoose.Schema({
  title: {
    type: String,
    require: [true, "please provide a title"],
  },

  publishingYear: {
    type: Number,
    require: [true, "please provide a publishing year"],
  },

  poster: {
    type: String,
    require: [true, "please provide a poster"],
  },
});

const Movie = mongoose.models.users || mongoose.model("movies", movieSchems);

export default Movie;
